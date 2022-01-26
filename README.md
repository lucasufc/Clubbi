
<p widht=100% align="center">
<img width=45% src="https://user-images.githubusercontent.com/32624827/151160769-1df2cada-3c22-455e-bc06-54883abbe666.png"/>
</p>
<h1 align="center">Desafio - Processo Seletivo Software Engineer</h1> 
<p align="center">Sistema de gerenciamento de pedidos(orders). Web API usando Python3, PostgreSQL e ReactJs</p>


### Features

- [x] Criação de uma order
- [x] Adicionar/remover um item de certa order, dado o order ID
- [x] Retornar todos itens de uma order a partir de um ID
- [x] Update do preço de itens, passado o product_id
- [x] Cancelar uma order a partir de um order ID
- [x] Alterar o status de uma order a partir de seu ID
- [x] Buscar todos os produtos de uma determinada order
- [x] Deletar um produto em uma order especifica a partir do order_id


Tabela de conteúdos
=================
<!--ts-->
   * [Modelo Relacional](#modelo-relacional)
   * [Como usar](#como-usar)
      * [Pre requisitos](#pre-requisitos)
      * [Rotas](#rotas)
   * [Tecnologias](#tecnologias)
<!--te-->

## Modelo Relacional
<p widht=100% align="center">
<img width=50% src="https://user-images.githubusercontent.com/32624827/151229436-cfd5f2e5-32aa-4a77-9695-64c74e91d48f.png" description="Modelo Relacional"/>
</p>
 

## Como usar


### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Python3](https://www.python.org/downloads/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone https://github.com/lucasufc/Clubbi

# Acesse a pasta do projeto no terminal/cmd
$ cd Clubbi

# Inicie o Docker
$ docker-compose up -d

# O pgAdmin iniciará na porta :16543 - acesse <http://localhost:16543>
# Login: lucasMartins@clubbi.com   Password: meContrata

# Vá para a pasta Backend
$ cd Backend

# Instale as dependências
$ pipenv install

# Ative o Pipenv shell
$ pipenv shell

# Execute a aplicação em modo de desenvolvimento
$ flask run

# O servidor inciará na porta:5000


```

### Rotas
<h4>Objetivo: Criação de uma order</h4>
Rota: */orders* <br>
MÉTODO: **PUT** <br>
#### (/order)
##### Metodos

<h4 align="center"> 
	🚧  Fronted 🚀 Em construção...  🚧
</h4>

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Git](https://git-scm.com)
- [Docker](https://www.docker.com/)
- [Python3](https://www.python.org/downloads/)
- [Pipenv](https://pipenv.pypa.io/en/latest/)
- [React](https://pt-br.reactjs.org/)



### Autor
---

<a href="https://github.com/lucasufc">
 <img style="border-radius:50%;" src="https://avatars.githubusercontent.com/u/32624827?v=4" width="100px;" alt="Lucas Martins"/>
 <br />
 <sub><b>Lucas Martins</b></sub></a> <a href="https://github.com/lucasufc/" title="GitHub">😎👍</a>
   
[![Linkedin Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white&link=https://www.linkedin.com/in/lucas-martins-oliveira/)](https://www.linkedin.com/in/lucas-martins-oliveira/) 
[![Gmail Badge](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white&link=mailto:lucashk.eng@gmail.com)](mailto:lucashk.eng@gmail.com)

