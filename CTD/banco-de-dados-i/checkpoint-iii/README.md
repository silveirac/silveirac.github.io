
![playDB Game Store Database](./images/logo-playdb-readme.svg)

<br>


# **Descrição**
Banco de dados desenvolvido para o armazenamento e gerenciamento de informações da operação diária de lojas de jogos físicas ou digitais.

Armazena informações dos clientes, produtos, fornecedores e transações, além de informações comuns como endereços e formas de pagamento.

Conta com procedures e views nativas para facilitar a consulta de informações mais relevantes e para facilitar o monitoramento do desempenho do negócio.

<br>
<br>

# **Informações Gerais** 

**Nome:** playDB v1.0

**Tipo:** Relacional

**SGBD:** MySQL Server 8.0

**Nº de Entidades:** 14 permanentes + 2 temporárias

**Nº de Procedures Nativas:** 5 (cinco) + procedures auxiliares

**Nº de Views Nativas** 4 (quatro) + views auxiliares

**Data de Lançamento:** 28/06/2022

<br>
<br>

# **Entidades**<br>

## **Permanentes**
- CLIENTES

- COMPRAS

- ENDERECOS

- FORMAS_PAGAMENTO

- FORNECEDORES

- GENEROS

- PAISES

- PLATAFORMAS

- PRODUTOS

- PRODUTOS_COMPRAS

- PRODUTOS_GENEROS

- PRODUTOS_VENDAS

- VENDAS

- VENDEDORES

<br>


## **Temporária**
- TEMP_CARRINHO

- TEMP_PEDIDO

<br>
<br>

# **Views e Procedures**
## **Views**
<br>

*VW_RESUMO_VENDA*
> Apresenta as vendas com informações do cliente, do vendedor, valor dos produtos, descontos, valor líquido e forma de pagamento.

<br>

*VW_RESUMO_COMPRA*
> Apresenta as compras com informações da data, valor dos produtos, descontos, valor líquido e forma de pagamento.

<br>

*VW_RESUMO_PRODUTOS*
> Apresenta os clientes de maneira ranqueada segundo o número de compras na loja e número de produtos comprados.

<br>

*VW_RESUMO_VENDA*
> Apresenta detalhes dos produtos como preços médios de compra e vendas e lucro total obtido por produto.

<br>
<br>

## **Procedures**
<br>

*SP_CARRINHO*
> Adiciona produtos ao carrinho criando a tabela temporária `TEMP_CARRINHO`.

<br>

*SP_ADD_VENDA*
> Insere um registro de venda na tabela `VENDAS` e os registros referentes aos produtos que estavam no carrinho na tabela `PRODUTOS_VENDAS`. Também atualiza o estoque. Remove a tabela `TEMP_CARRINHO` ao final de sua execução.

<br>

*SP_PEDIDO*
> Adiciona produtos ao carrinho criando a tabela temporária `TEMP_PEDIDO`.

<br>

*SP_ADD_COMPRA*
> Insere um registro de compra na tabela `COMPRAS` e os registros referentes aos produtos que estavam no pedido na tabela `PRODUTOS_COMPRAS`. Também atualiza o estoque. Remove a tabela `TEMP_PEDIDO` ao final de sua execução.

<br>

*SP_ANIVERSARIANTES_MES*
> Lista todos os aniversariantes de um mês específico e retorna seus nomes, telefones, e-mails e data do aniversário.

<br>
<br>

# **Links**
<br>

[Download playDB v1.0](https://github.com/silveirac/silveirac.github.io/raw/main/CTD/banco-de-dados-i/checkpoint-iii/playdb_v1.0.zip) - Baixe os scripts de criação do banco para MySQL Server 8.0.

[Ficha Técnica playDB v1.0](https://github.com/silveirac/silveirac.github.io/raw/main/CTD/banco-de-dados-i/checkpoint-iii/playdb_v1.0_spreadsheet.pdf) - Baixe a ficha técnica do projeto.

[Landing Page | playDB Game Store Database](https://silveirac.github.io/CTD/banco-de-dados-i/checkpoint-iii-lp/index.html) - Acesse a landing page do projeto!

<br>
<br>

---

<br>
<br>

## **Este projeto foi pensado e desenvolvido por:**
<br>

- [Cauê Silveira](https://www.linkedin.com/in/caueasilveira)
- [Darlei Feix](https://www.linkedin.com/in/darlei-feix-2292b7216)
- [Iccaro Oliveira](https://www.linkedin.com/in/iccarooliveira)
- [Matheus Ribeiro](https://www.linkedin.com/in/matheus-ribeiro-143510178)

<br>

Sob a orientação do professor [Jorge Coutinho](https://www.linkedin.com/in/jorge-rocha-coutinho-j%C3%BAnior-334116180) da disciplina de **Banco de Dados I** do programa [Certified Tech Developer](https://www.digitalhouse.com/br/productos/programacion/certified-tech-developer) da [DigitalHouse Brasil](https://www.digitalhouse.com/br).

<br>

---
##### Projeto desenvolvido para composição de nota da disciplina de **Banco de Dados I** do programa **Certified Tech Developer** ministrado pela **DigitalHouse Brasil**. Material gerado para fins acadêmicos, não representando produto real.

<br> 

##### Apresentado em 28/06/2022.