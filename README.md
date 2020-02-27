# API Rest
CRUD-MVC-PHP
Crud em MVC e PHP

Objetivo:
Desenvolver um sistema CRUD simples em PHP 5 ou 7 (sem estruturas) e MySQL para administração de livros de uma loja.

Detalhes:
Os livros devem contar com as seguintes informações:

Nome
Autor
Quantidade de Páginas
Preço (em reais, contando centavos)
Sinalizar para livro ativo / inativo (não afeta na listagem, somente um valor para referência)
Data de inclusão / edição
Regras:
As regras abaixo devem ser seguidas ao registrar / editar um livro:

Não devem haver livros com o mesmo nome
A quantidade de páginas e o preço, não podem ser zerados nem incluídos
O livro deve ter o valor inicial do inativo, podendo ser alterado posteriormente diretamente pelo meio da listagem (link ou Ajax) ou edição completa do livro
Na listagem ou preço deve ser formatado no padrão brasileiro (R $ 1.050,10).
Detalhes sobre o programa:
init.php são os arquivos de configuração do sistema de livraria
diretório "view" está onde todas as telas do sistema
diretório "controller" está onde fica como recursos do sistema que interage com o banco de dados
diretório "model" está onde os arquivos de conexão com o banco de dados
No diretório "view" existem 3 páginas principais: editar.php, cadastro.php e index.php. a página cabeçalho e menu são os escopos de HTML e Menu de sistemas respectivamente.

No diretório "controller" estão os arquivos PHP executados como recursos do sistema.

No diretório "model" estão os arquivos de conexão com o Banco de Dados

O arquivo script.sql é um script em sql que cria o banco e a tabela.
