
<p widht=100% align="center">
<img width=45% src="https://user-images.githubusercontent.com/32624827/151160769-1df2cada-3c22-455e-bc06-54883abbe666.png"/>
</p>
<h1 align="center">Desafio - Processo Seletivo Software Engineer</h1> 
<p align="center">Sistema de gerenciamento de pedidos(orders). Web API usando Python3, PostgreSQL e ReactJs</p>


### Features

- [ ] __OBRIGATÓRIAS__
- [x] Criação de uma order
- [x] Adicionar/remover um item de certa order, dado o order ID
- [x] Retornar todos itens de uma order a partir de um ID
- [x] Update do preço de itens, passado o product_id
- [x] Cancelar uma order a partir de um order ID
- [ ] __EXTRAS__
- [x] Alterar o status de uma order a partir de seu ID
- [x] Obter o status de uma order a partir de seu ID
- [x] Buscar todos os produtos de uma determinada order
- [x] Deletar um produto em uma order especifica a partir do order_id


# Tabela de conteúdos
=================
<!--ts-->
   * [Modelo Relacional](#modelo-relacional)
   * [Como usar](#como-usar)
      * [Pre requisitos](#pre-requisitos)
      * [Rotas](#rotas)
   * [Tecnologias](#tecnologias)
   * [Autor](#autor)
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

## Rotas

## OBRIGATÓRIAS

<h3>Objetivo: Criação de uma order</h3>

__ROTA:__ ```(/order)``` <br/>
__MÉTODO:__ ```POST```

```bash
# Exemplo com um curl command
$ curl -XPOST -H "Content-type: application/json" -d '{
    "client_id": 1,
    "order_status": "Em Progresso"
}' 'localhost:5000/orders'
```
---

<h3>Objetivo:  Adicionar um item de certa order, dado o order_id</h3>

__Rota:__ ```(/item_order)``` <br/>
__Método:__ ```POST```

```bash
# Exemplo com curl command
curl -XPOST -H "Content-type: application/json" -d '{
    "order_id": 2,
    "product_id": 3,
    "qtde": 1
}' 'localhost:5000/item_order'

```

---

<h3>Objetivo:  Remover um item de certa order, dado o order_id e o product_id</h3>

__ROTA:__ ```(/orders/order_id/product_id)``` <br/>
__MÉTODO:__ ```DELETE```

```bash
# Exemplo com curl command
curl -XDELETE 'localhost:5000/orders/1/2'

```

---

<h3>Objetivo: Retornar todos itens de uma order a partir de um order_id</h3>


__ROTA:__ ```(/order_item/order_id)``` <br/>
__MÉTODO:__ ```GET```

```bash
# Exemplo com um curl command
$ curl -XGET 'localhost:5000/order_item/1'
```
---


<h3>Objetivo: Update do preço de itens, passado o product_id</h3>


__ROTA:__ ```(/items/product_id)``` <br/>
__MÉTODO:__ ```PUT```

```bash
# Exemplo com um curl command
$ curl -XPUT -H "Content-type: application/json" -d '{
    "unit_price": 5.90
}' 'localhost:5000/items/1'
```
---


<h3>Objetivo: Cancelar uma order a partir de um order_id</h3>


__ROTA:__ ```(/orders/order_id)``` <br/>
__MÉTODO:__ ```DELETE```

```bash
# Exemplo com um curl command
$ curl -XDELETE 'localhost:5000/orders/17'
```
---

## EXTRAS


<h3>Objetivo: Alterar o status de uma order a partir de seu order_id</h3>


__ROTA:__ ```(/status/<order_id>)``` <br/>
__MÉTODO:__ ```PUT```

```bash
# Exemplo com um curl command
$ curl -XPUT -H "Content-type: application/json" -d '{
    "order_status": "finalizado"
}' 'localhost:5000/status/1'
```
---


<h3>Objetivo: Obter o status de uma order a partir de seu order_id</h3>


__ROTA:__ ```(/status/<order_id>)``` <br/>
__MÉTODO:__ ```GET```

```bash
# Exemplo com um curl command
$ curl -XGET 'localhost:5000/status/1'
```
---


<h3>Objetivo: Buscar todos os produtos de uma determinada order, dado o order_id</h3>


__ROTA:__ ```(/item_order/<order_id>)``` <br/>
__MÉTODO:__ ```GET```

```bash
# Exemplo com um curl command
$ curl -XGET 'localhost:5000/item_order/1'
```
---


<h3>Objetivo: Deletar um produto em uma order especifica a partir do order_id</h3>


__ROTA:__ ```(/orders/<order_id>/<product_id>)``` <br/>
__MÉTODO:__ ```DELETE```

```bash
# Exemplo com um curl command
$ curl -XDELETE 'localhost:5000/orders/1/3'
```
---

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

