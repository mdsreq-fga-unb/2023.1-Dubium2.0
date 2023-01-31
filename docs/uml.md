 # Casos de Uso

## Identificação dos Atores

Ator | Nome | Descrição
---- | ---- | ---------
01 | Professor-Aluno | Usuário habilitado a cadastrar usuários e gerenciar posts pelo sistema
02 | Aluno | Usuário habilitado a cadastrar-se e gerenciar posts pelo sistema
03 | Email | Sistema externo habilitado via autenticação de token a prover a recuperação de senha

## Identificação dos Casos de Uso

UC | Nome do UC |
-- | ---------- |
UC-01 |Realizar Login
UC-02 | Alterar senha
UC-03 | Cadastrar usuários
UC-04 | Gerenciar usuários cadastrados
UC-05 | Criar posts
UC-06 | Gerenciar posts
UC-07 | Gerenciar Respostas

## Diagrama de Casos de Uso

![UML completo](./img/UML.png)

## Detalhamento de Alguns Casos de Uso

### Histórico de Revisão

Data | Versão | Descrição | Autor
---- | ------ | --------- | -----
29/01 | 1.0 | Descrição dos Casos de Uso | Gian, Giulia, Helder, Júlio, Silas
30/01 | 1.1| Fluxos Básicos, Alternativos e de Exceção | Gian, Giulia, Helder, Júlio, Silas

### Caso de Uso:  UC-04 x Gerenciar Usuários Cadastrados
#### Por: Giulia Alcantara - 18/0121308

Descrição: Caso de Uso: UC-04 Gerenciar usuários cadastrados: Este caso de uso especifica a ação de controle que um usuário executa no sistema, com objetivo de gerenciar usuários cadastrados. Apenas usuários cadastrados podem gerenciar outros usuários cadastrados no sistema. O usuário pode buscar um usuário e, a partir dele, gerenciá-lo selecionando-o, visualizando seu perfil e favoritando-o; Também pode gerenciar seus próprios dados, a partir da seleção de seu próprio perfil, podendo visualizá-lo, editar seus dados, excluir sua conta ou até favoritar a si mesmo para melhorar sua posição no ranking. Após a validação no sistema, o usuário torna-se apto a realizar as operações da sua área restrita.
* Atores: Professor-Aluno
* Pré-Condições: O ator deve estar cadastrado no sistema; O ator deve estar logado com autenticação no sistema.
* Pós-Condições: O ator fica habilitado a realizar ações referentes aos usuários desejados em sua própria área do sistema.
* Requisitos Funcionais: 

Épico | Feature | US | Descrição 
----- | ------- | -- | ---------
02 | 04 | 13 | Eu como usuário gostaria de dar nota para os outros usuários para mudar suas posições no ranking
02 | 04 | 14 | Eu como usuário gostaria de visualizar a minha posição no ranking geral para fins de melhorá-la
03 | 08 | 22 | Eu como usuário gostaria de visualizar os meus dados cadastrais em uma aba de perfil para poder conferir se as informações estão corretas
03 | 08 | 23 | Eu como usuário gostaria de ter a possibilidade de buscar outros usuários para poder averiguar as perguntas que um usuário já fez
03 | 08 | 24 | Eu como usuário gostaria de editar os dados do meu perfil para caso alguma informação tenha sido preenchida incorretamente possa ser mudada

* Requisitos Não-Funcionais:

URPS+ | ID | Descrição 
----- | -- | ---------
INTERFACE | RN4 | O sistema deve ser web
IMPLEMENTAÇÃO | RN5 | O sistema deve assegurar os dados do usuário com autenticação Auth Guard e JWT.
RESTRIÇÃO DE DESIGN | RN7 | A interface do sistema deve seguir a paleta de verde, azul e branco e possuir um modo dark, com um estilo mais minimalista

##### Fluxo Básico: Visualização de um usuário desejado
1. O ator decide buscar um usuário
2. O sistema solicita o e-mail do usuário desejado
3. O ator informa o e-mail do usuário que deseja buscar
4. O sistema disponibiliza os resultados correspondentes a busca
5. O ator seleciona o usuário desejado
6. O sistema exibe o perfil do usuário desejado
7. O ator clica em retornar ao fórum
8. O sistema retorna à tela principal. 
9. O caso de uso se encerra.

##### Fluxo Alternativo A: Editar os dados de um usuário
 - No passo 6, caso o ator deseje editar os dados da própria conta:
1. O ator clica na opção de “Editar dados”
2. O sistema exibe todos os dados do usuário que podem ser alterados
3. O ator modifica os dados desejados
4. O fluxo retorna ao passo 7 do fluxo básico.

##### Fluxo Alternativo B: Deletar a conta de um usuário
 - No passo 6, caso o ator deseje deletar a própria conta:
1. O ator clica na opção “Deletar conta”.
2. O sistema informa que a conta foi deletada
3. O fluxo retorna ao passo 7 do fluxo básico.

##### Fluxo Alternativo C: Favoritar um usuário
  - No passo 6, caso o ator deseje favoritar um usuário:
1. O ator aperta na estrela de favoritar
2. O fluxo retorna ao passo 7  do fluxo básico.

##### Fluxo de Exceção:
  - No passo 3, caso o e-mail fornecido esteja incorreto:
1. O sistema exibe a ausência de resultados na busca
2. O fluxo retorna ao passo 2 do fluxo básico.

### Caso de Uso:  UC-10 x Gerenciar Respostas
#### Por: Helder Lourenço - 18/0121847
Descrição: Caso de Uso: UC-10 Gerenciar respostas: Este caso de uso especifica a ação de controle que um usuário executa no sistema, com objetivo de gerenciar respostas. Apenas usuários cadastrados podem gerenciar respostas no sistema. O usuário pode selecionar perguntas e, a partir delas, gerenciar suas respectivas respostas sendo adição, exclusão e até favoritar a resposta que mais se adequa a pergunta. Após a validação no sistema, o usuário torna-se apto a realizar as operações da sua área restrita.

* Atores: Professor-Aluno
* Pré-Condições: O ator deve estar cadastrado no sistema; O ator deve estar logado com autenticação no sistema.
* Pós-Condições: O ator fica habilitado a realizar ações de modificações nas respostas atualizadas em sua própria área de respostas do sistema.
* Requisitos Funcionais: 

Épico | Feature | US | Descrição 
----- | ------- | -- | ---------
01 | 03 | 10 | Eu como usuário gostaria de poder responder todas as perguntas disponibilizadas no fórum para fins de ajudar outros usuários
01 | 03 | 11 | Eu como usuário gostaria de ser capaz de visualizar as respostas para fins de soluções de dúvidas
01 | 03 | 12 | Eu, como usuário, gostaria de deletar minhas respostas para fim de escrita incorreta.
02 | 06 | 17 | Eu, como usuário, gostaria de avaliar as respostas fornecidas para fim de destaque das melhores respostas
02 | 06 | 18 | Eu, como usuário, gostaria de visualizar as respostas em ordem de rankeamento, para saber as melhores respostas fornecidas

* Requisitos Não-Funcionais:

URPS+ | ID | Descrição 
----- | -- | ---------
INTERFACE | RN4 | O sistema deve ser web
RESTRIÇÃO DE DESIGN | RN7 | A interface do sistema deve seguir a paleta de verde, azul e branco e possuir um modo dark, com um estilo mais minimalista

##### Fluxo Básico: Criar respostas
