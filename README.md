Uma saída é uma movimentação onde eu pago dinheiro para alguém.

# Histórias do Usuário
- Eu gostaria de cadastrar e categorizar as saídas.  
- Eu gostaria de anexar documentos comprobatórios às saídas (tal como uma foto dos cupons fiscais, notas fiscais, recibos, ou qualquer outro documento).  
- Eu gostaria de cadastrar e categorizar os itens da saída.  
- Eu gostaria de um relatório das saídas.  

# Cadastros
==> Para cadastrar uma saída, deve haver:
- um número de referência: número automático
- um beneficiário: vou cadastrar quem vai receber meu dinheiro
- uma descrição: descrever o gasto
- o valor total
- uma categoria: vou cadastrar em qual categoria essa movimentação se encaixa

==> para cadastrar um beneficiário, deve haver
- um número de identificação (CNPJ ou CPF)
- o nome

==> para cadastrar uma categoria de saída, deve haver
- um id
- uma descrição (mercado, farmácia, lanches, etc)

Para toda saída deve haver um comprovante
==> para cadastrar um comprovante, deve haver
- um id
- a imagem: tirar foto do comprovante
- o tipo (vou cadastrar qual o tipo do comprovante)
- o número de acesso

==> para cadastrar um tipo de comprovante, deve haver
- um id
- uma descrição (NFCe, comrpovante de depósito, etc)

A partir de um comprovante, eu quero destrinchar os itens desses comprovantes

==> para cadastrar um item do comprovante, deve haver:
- o id, que o site traz
- a descrição, que o site traz
- o código, que o site traz. Esse código faz referÊncia ao número do produto no mercado
- a quantidade comprada, que o site traz
- a unidade de referÊncia, que o site traz
- o valor unitário, que o site traz
- o valor total, que o site traz
- a categoria do item (que eu vou cadastrar). Essa categoria é para registrar se o produto é uma fruta, um remédio, produto de higiêne, etc. QUero deixar flexível para considerar várias categorias
- a emoção que eu senti ao comprar aquele item (que eu vou cadastrar). Essa emoção serve para eu gerenciar como minhas emoções afetam minha responsabilidade financeira, como a depressão ao gastar dinheiro, felicidade, tristesa, etc...

==> para cadastrar uma categoria do item, deve haver
- um id
- uma descrição (fruta, legume, verdura, açougue, lanche, produto de limpeza, remédio, etc)

==> para cadastrar uma emoção, deve haver
- um id
- uma descrição (felicidade, tristeza, tédio, raiva, etc)

# Outras anotações
pronto! para que fique claro, esse módulo de cadastro de saídas serve para eu cadastrar uma saída, associando a um beneficiário (quem vai receber meu dinheiro) e em qual categoria de compra essa saída se encaixa (se é mercado, farmácia, etc)>

além disso, quero anexar um comprovante à essa saída. O comprovante pode ser do tipo "Documento Auxiliar da Nota Fiscal do Consumidor Eletrônica (NFCe)", "Comprovante de Tranferência", etc... quero deixar flexível para cadastrar outros tipos de comprovantes

minha principal intenção é armazenar o número de acesso. Se for um comprovante de depósito, por exemplo, vou armazenar o ID do comprovante do banco, que na verdade não vai ser tão útil para mim... mas se o tipo do comprovante for a NFCe, aí é interessante! nesse caso, eu quero armazenar o número da Chave de Acesso

Considerando que na NFCe tenha vários itens, eu quero usar uma API que pega a Chave de Acesso e consulta a NFCe no site da fazenda. Assim, eu quero automatizar um programinha que analise o código HTML da página, para eu cadastrar os itens do comprovante.