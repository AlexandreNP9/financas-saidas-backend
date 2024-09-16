-- Tabela de Beneficiários
CREATE TABLE Beneficiario (
    id SERIAL PRIMARY KEY,
    numero_identificacao VARCHAR(20) NOT NULL, -- CNPJ ou CPF
    nome VARCHAR(100) NOT NULL
);

-- Tabela de Categorias de Saída
CREATE TABLE CategoriaSaida (
    id SERIAL PRIMARY KEY,
    descricao VARCHAR(100) NOT NULL
);

-- Tabela de Saídas
CREATE TABLE Saida (
    id SERIAL PRIMARY KEY,
    numero_referencia SERIAL, -- número de referência automático
    beneficiario_id INT REFERENCES Beneficiario(id),
    descricao TEXT NOT NULL,
    valor_total DECIMAL(10, 2) NOT NULL,
    categoria_id INT REFERENCES CategoriaSaida(id),
    comprovante_id INT NULL, -- Relacionamento opcional com Comprovante
    FOREIGN KEY (comprovante_id) REFERENCES Comprovante(id)
);

-- Tabela de Tipos de Comprovantes
CREATE TABLE TipoComprovante (
    id SERIAL PRIMARY KEY,
    descricao VARCHAR(100) NOT NULL
);

-- Tabela de Comprovantes
CREATE TABLE Comprovante (
    id SERIAL PRIMARY KEY,
    imagem BYTEA, -- armazenar imagem do comprovante
    tipo_id INT REFERENCES TipoComprovante(id),
    numero_acesso VARCHAR(50) NOT NULL -- chave de acesso ou id do banco
);

-- Remover tabela de relacionamento N:N (SaidaComprovante), já que o comprovante é opcional

-- Tabela de Categorias de Itens
CREATE TABLE CategoriaItem (
    id SERIAL PRIMARY KEY,
    descricao VARCHAR(100) NOT NULL
);

-- Tabela de Emoções
CREATE TABLE Emoção (
    id SERIAL PRIMARY KEY,
    descricao VARCHAR(100) NOT NULL
);

-- Tabela de Itens do Comprovante
CREATE TABLE ItemComprovante (
    id SERIAL PRIMARY KEY,
    descricao VARCHAR(255) NOT NULL,
    codigo_produto VARCHAR(50) NOT NULL,
    quantidade DECIMAL(10, 2) NOT NULL,
    unidade_referencia VARCHAR(20) NOT NULL,
    valor_unitario DECIMAL(10, 2) NOT NULL,
    valor_total DECIMAL(10, 2) NOT NULL,
    categoria_item_id INT REFERENCES CategoriaItem(id),
    emocao_id INT REFERENCES Emoção(id),
    comprovante_id INT REFERENCES Comprovante(id)
);
