-- Cria o banco de dados se não existir
CREATE DATABASE IF NOT EXISTS FinancasSaida;

-- Seleciona o banco de dados
USE FinancasSaida;

-- Tabela de Beneficiários
CREATE TABLE IF NOT EXISTS Beneficiario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    numero_identificacao VARCHAR(20) NOT NULL, -- CNPJ ou CPF
    nome VARCHAR(100) NOT NULL
);

-- Tabela de Categorias de Saída
CREATE TABLE IF NOT EXISTS CategoriaSaida (
    id INT AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(100) NOT NULL
);

-- Tabela de Tipos de Comprovantes
CREATE TABLE IF NOT EXISTS TipoComprovante (
    id INT AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(100) NOT NULL
);

-- Tabela de Comprovantes
CREATE TABLE IF NOT EXISTS Comprovante (
    id INT AUTO_INCREMENT PRIMARY KEY,
    imagem LONGBLOB, -- armazenar imagem do comprovante
    tipo_id INT,
    numero_acesso VARCHAR(50) NOT NULL, -- chave de acesso ou id do banco
    FOREIGN KEY (tipo_id) REFERENCES TipoComprovante(id)
);

-- Tabela de Saídas
CREATE TABLE IF NOT EXISTS Saida (
    id INT AUTO_INCREMENT PRIMARY KEY,
    numero_referencia INT NOT NULL UNIQUE, -- número de referência gerado programaticamente, deve ser único
    beneficiario_id INT,
    descricao TEXT NOT NULL,
    valor_total DECIMAL(10, 2) NOT NULL,
    categoria_id INT,
    comprovante_id INT NULL, -- Relacionamento opcional com Comprovante
    FOREIGN KEY (beneficiario_id) REFERENCES Beneficiario(id),
    FOREIGN KEY (categoria_id) REFERENCES CategoriaSaida(id),
    FOREIGN KEY (comprovante_id) REFERENCES Comprovante(id)
);

-- Tabela de Categorias de Itens
CREATE TABLE IF NOT EXISTS CategoriaItem (
    id INT AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(100) NOT NULL
);

-- Tabela de Emoções
CREATE TABLE IF NOT EXISTS Emocao ( -- Renomeado para evitar problemas com acentuação
    id INT AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(100) NOT NULL
);

-- Tabela de Itens do Comprovante
CREATE TABLE IF NOT EXISTS ItemComprovante (
    id INT AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(255) NOT NULL,
    codigo_produto VARCHAR(50) NOT NULL,
    quantidade DECIMAL(10, 2) NOT NULL,
    unidade_referencia VARCHAR(20) NOT NULL,
    valor_unitario DECIMAL(10, 2) NOT NULL,
    valor_total DECIMAL(10, 2) NOT NULL,
    categoria_item_id INT,
    emocao_id INT,
    comprovante_id INT,
    FOREIGN KEY (categoria_item_id) REFERENCES CategoriaItem(id),
    FOREIGN KEY (emocao_id) REFERENCES Emocao(id),
    FOREIGN KEY (comprovante_id) REFERENCES Comprovante(id)
);
