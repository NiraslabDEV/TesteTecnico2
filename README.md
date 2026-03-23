# etic-website

Este é um projeto **frontend** desenvolvido em **Next.js** (React) e **Tailwind CSS**. 
O projeto estrutura uma landing page completa, segmentada em diversos componentes modulares, como Cabeçalho, Hero, Sobre Nós, Serviços, Projetos e Contato.

---

## Estrutura Principal

```text
app/
├── components/          # Componentes de interface (Header, Hero, AboutUs, etc.)
├── globals.css          # Estilos globais e configurações do Tailwind CSS
├── layout.tsx           # Layout base da aplicação
└── page.tsx             # Página inicial aglomerando os componentes
```

---

## Tecnologias

| Área         | Tecnologias                                     |
| ------------ | ----------------------------------------------- |
| **Core**     | Next.js 16.2.1, React 19, TypeScript            |
| **Estilos**  | Tailwind CSS v4                                 |
| **Testes**   | Jest, React Testing Library                     |
| **Linting**  | ESLint                                          |

---

## Como inicializar e visualizar localmente

Primeiro, instale as dependências na pasta do projeto:

```bash
npm install
# ou
yarn install
```

Em seguida, execute o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado. Você pode começar a editar a página modificando o arquivo `app/page.tsx`. A página será atualizada automaticamente conforme você salva as alterações.

---

## Testes

Para rodar os testes unitários configurados no projeto:

```bash
npm run test
# ou para coverage
npm run test:coverage
```
