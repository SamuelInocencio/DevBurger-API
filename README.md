# 🍔 DevBurger API

API RESTful para gerenciamento de produtos, categorias, usuários e pedidos — ideal para um sistema de pedidos online como hamburguerias ou lanchonetes.

---

## 🚀 Funcionalidades

- Cadastro e login de usuários com autenticação JWT
- Controle de acesso com permissões de administrador
- Upload de imagens para produtos e categorias
- CRUD de produtos e categorias
- Registro de pedidos com múltiplos produtos
- Atualização de status de pedidos (admin)
- Integração com banco relacional (PostgreSQL) e NoSQL (MongoDB)

---

## 🛠 Tecnologias

- Node.js
- Express
- Sequelize (PostgreSQL)
- Mongoose (MongoDB)
- Multer (upload de arquivos)
- JWT (autenticação)
- Yup (validação)
- UUID
- Docker (sugestão para produção)

---

## 📦 Como rodar localmente

### Pré-requisitos

- Node.js
- PostgreSQL
- MongoDB
- Yarn ou NPM

### Configuração

1. Clone o repositório:
   ```bash
   git clone https://github.com/SamuelInocencio/DevBurger-API.git
   cd devburger-api
   ```

2. Instale as dependências:
   ```bash
   yarn install
   ```

3. Configure o banco de dados em `config/database.js` e o JWT em `config/auth.js`.

4. Rode as migrations:
   ```bash
   npx sequelize-cli db:migrate
   ```

5. Suba o servidor:
   ```bash
   yarn dev
   ```

> A API estará disponível em `http://localhost:3001`

---

## 📂 Estrutura de pastas

```
├── app/
│   ├── controllers/       # Lógica das rotas
│   ├── models/            # Models do Sequelize
│   └── schemas/           # Model do Mongoose (pedidos)
│
├── config/
│   ├── auth.js            # JWT
│   ├── database.js        # Configuração do Sequelize
│   └── multer.js          # Configuração de upload
│
├── database/
│   └── migrations/        # Migrations do banco
│
├── uploads/               # Imagens salvas via multer
├── routes.js              # Todas as rotas da aplicação
├── server.js              # Ponto de entrada do servidor
```

---

## 🔐 Rotas da API

### Autenticação
- `POST /users` – Cadastrar usuário
- `POST /session` – Login e geração de token

### Produtos (admin)
- `POST /products` – Criar produto
- `GET /products` – Listar produtos
- `PUT /products/:id` – Atualizar produto

### Categorias (admin)
- `POST /categories` – Criar categoria
- `GET /categories` – Listar categorias
- `PUT /categories/:id` – Atualizar categoria

### Pedidos
- `POST /orders` – Criar pedido
- `GET /orders` – Listar pedidos
- `PUT /orders/:id` – Atualizar status (admin)

> ⚠️ Todas as rotas, exceto `/users` e `/session`, exigem autenticação via Bearer Token.

---

## ✅ To-do / Melhorias futuras

- [ ] Testes automatizados (Jest + Supertest)
- [ ] Upload em serviço externo (S3 ou Cloudinary)
- [ ] Painel admin com React
- [ ] Paginação e filtros nas listagens
- [ ] Internacionalização (i18n)

---

## 🧑‍💻 Autor

Feito com 💜 por Samuel Ferreira Inocêncio — SamuelInocencio (https://github.com/SamuelInocencio)

---

## 📄 Licença

Este projeto está sob a licença MIT.
