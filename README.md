<h1 align="center">
  NLW Setup - Rocketseat
</h1>

<p align="center">
Desenvolvimento de aplição de ponta a ponta, com front-end, back-end e mobile.
</p>
<p align="center"><img src="https://www.rocketseat.com.br/assets/logos/rocketseat.svg"></p>

## 💻 Projeto

Baseado nas 5 aulas do **Next Level Week** - **_NLW Setup_**, teve por objetivo desenvolver um tracker de hábitos realizados por dia, no estilo de commits do Github.

<br>

<p align="center">
  <img alt="NLW Setup" src=".github/nlw-setup.png" width="100%">
</p>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

[![Stacks and Resources](https://skillicons.dev/icons?i=vite,tailwind,react,ts,nodejs,prisma,sqlite,androidstudio,git,linux&theme=dark)](https://skillicons.dev)

Outras tecnologias também utilizadas:

- [Fastify](https://www.fastify.io/)
- [Expo](https://expo.dev/)
- [Zod](https://zod.dev/)
- [CLSX](https://www.npmjs.com/package/clsx)

<br />
<h1 align="center"> Setup </h1>
<img src="https://i.pinimg.com/originals/21/11/61/21116158daaeb1459b4ec0758505e1ad.gif" >
<br /><br />

## 🔥 Front-end

Instale as dependências do projeto:

```
cd web
npm i
```

Rode a aplicação:

```
npm run dev
```

ou

```
npm run build
```

## 🔐 Back-end

\*\* Obs: certifique-se de ter o Node.js na versão v18.3.0 LTS instalada.

Instale as dependências

```
cd server
~ npm i
```

Configure o Prisma ORM

```
touch .env
```

Adicione no arquivo acima a linha abaixo:

```
DATABASE_URL="file:./dev.db"
```

Depois, rode no terminal:

```
npx prisma generate
prisma migrate dev
```

Rode o servidor:

```
npm run dev
```

## 📱 Mobile

\*\* Obs: certifique-se de ter o Android Studio instalado e os emuladores configurados em seu computador.

Instale as dependências

```
cd mobileapp
~ npm i
```

Rode a aplicação

```
npx expo start
```

<br /><br /><br />

<h4 align="center">
 <img alt="Ubuntu Linux" src=".github/ubuntu_icon.svg" width="32px">
  <br />
  Feito com ♥ no Ubuntu 22.04 LTS
</h1>
