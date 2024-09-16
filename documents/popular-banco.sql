-- Inserindo dados na tabela Beneficiario
INSERT INTO Beneficiario (numero_identificacao, nome)
VALUES 
('12345678901234', 'Supermercado ABC LTDA'),
('98765432100', 'João Silva');

-- Inserindo dados na tabela CategoriaSaida
INSERT INTO CategoriaSaida (descricao)
VALUES 
('Supermercado'),
('Farmácia'),
('Educação'),
('Transporte');

-- Inserindo dados na tabela TipoComprovante
INSERT INTO TipoComprovante (descricao)
VALUES 
('NFCe - Nota Fiscal do Consumidor Eletrônica'),
('Comprovante de Depósito'),
('Comprovante de Transferência');

-- Inserindo dados na tabela Comprovante
-- Note que a coluna "imagem" é NULL por ser do tipo BLOB, então não estamos preenchendo neste exemplo
INSERT INTO Comprovante (imagem, tipo_id, numero_acesso)
VALUES 
(NULL, 1, '35190876543210987654321098765432109876543210'),  -- NFCe
(NULL, 2, 'ID-TRANSF-001');  -- Comprovante de Depósito

-- Inserindo dados na tabela Saida
-- Associando a saídas aos beneficiários, categorias, e comprovantes
INSERT INTO Saida (numero_referencia, beneficiario_id, descricao, valor_total, categoria_id, comprovante_id)
VALUES 
(1, 1, 'Compra no supermercado', 350.75, 1, 1),
(2, 2, 'Pagamento de transferência', 150.00, 3, 2);

-- Inserindo dados na tabela CategoriaItem
INSERT INTO CategoriaItem (descricao)
VALUES 
('Alimento'),
('Medicamento'),
('Material Escolar');

-- Inserindo dados na tabela Emoção
INSERT INTO Emoção (descricao)
VALUES 
('Feliz'),
('Preocupado'),
('Indiferente');

-- Inserindo dados na tabela ItemComprovante
INSERT INTO ItemComprovante (descricao, codigo_produto, quantidade, unidade_referencia, valor_unitario, valor_total, categoria_item_id, emocao_id, comprovante_id)
VALUES 
('Arroz 5kg', '001234', 1, 'kg', 25.00, 25.00, 1, 1, 1),
('Aspirina', '000567', 2, 'unidade', 10.00, 20.00, 2, 2, 1),
('Caderno', '009876', 3, 'unidade', 15.00, 45.00, 3, 3, 1);
