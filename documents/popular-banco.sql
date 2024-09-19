-- Seleciona o banco de dados
USE FinancasSaida;

-- Populando a tabela de Beneficiários
INSERT INTO Beneficiario (numero_identificacao, nome) VALUES
('12345678901', 'João da Silva'),
('98765432100', 'Maria Oliveira'),
('11122233344', 'Empresa XPTO Ltda.');

-- Populando a tabela de Categorias de Saída
INSERT INTO CategoriaSaida (descricao) VALUES
('Supermercado'),
('Farmácia'),
('Transporte'),
('Educação'),
('Lazer');

-- Populando a tabela de Tipos de Comprovantes
INSERT INTO TipoComprovante (descricao) VALUES
('NFCe'),
('Recibo de depósito'),
('Boleto bancário'),
('Fatura de cartão de crédito');

-- Populando a tabela de Comprovantes
INSERT INTO Comprovante (imagem, tipo_id, numero_acesso) VALUES
(NULL, 1, '12345678901234567890123456789012345678901234'), -- NFCe
(NULL, 2, '09876543210987654321098765432109876543210987'), -- Recibo de depósito
(NULL, 3, '45678901234567890123456789012345678901234567'); -- Boleto bancário

-- Populando a tabela de Saídas
INSERT INTO Saida (beneficiario_id, descricao, valor_total, categoria_id, comprovante_id) VALUES
(1, 'Compra de supermercado no valor de R$ 200,00', 200.00, 1, 1),
(2, 'Compra de remédios no valor de R$ 50,00', 50.00, 2, 2),
(3, 'Pagamento de fatura no valor de R$ 300,00', 300.00, 3, 3);

-- Populando a tabela de Categorias de Itens
INSERT INTO CategoriaItem (descricao) VALUES
('Alimentos'),
('Bebidas'),
('Medicamentos'),
('Higiene pessoal'),
('Eletrônicos');

-- Populando a tabela de Emoções
INSERT INTO Emocao (descricao) VALUES
('Feliz'),
('Triste'),
('Indiferente'),
('Preocupado'),
('Satisfeito');

-- Populando a tabela de Itens do Comprovante
INSERT INTO ItemComprovante (descricao, codigo_produto, quantidade, unidade_referencia, valor_unitario, valor_total, categoria_item_id, emocao_id, comprovante_id) VALUES
('Arroz 5kg', '111111', 1.00, 'kg', 20.00, 20.00, 1, 1, 1),
('Sabonete', '222222', 2.00, 'unidade', 2.50, 5.00, 4, 2, 1),
('Aspirina', '333333', 1.00, 'caixa', 10.00, 10.00, 3, 3, 2),
('Notebook', '444444', 1.00, 'unidade', 2500.00, 2500.00, 5, 4, 3);
