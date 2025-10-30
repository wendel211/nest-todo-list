<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```
# Nest Todo API (simples)

Pequena API REST criada com NestJS (TypeScript) para gerenciar uma lista de tarefas (todo list).

## Tecnologias principais

- Node.js + TypeScript
- NestJS v11
- Jest para testes

## Estrutura importante

- Código principal: `src/`
- Módulo de tarefas: `src/tasks/` (controller, service, DTOs, model)
- Modelo da Task: `src/tasks/task.model.ts`

## Como começar (desenvolvimento)

1. Instalar dependências

```powershell
npm install
```

2. Rodar em modo desenvolvimento (com watch)

```powershell
npm run start:dev
```

## Scripts úteis

- `npm run start` — inicia a aplicação
- `npm run start:dev` — inicia com *watch* (recomendado em dev)
- `npm run build` — compila para `dist/`
- `npm run start:prod` — roda a build (`node dist/main`)
- `npm run test` — executa testes unitários (Jest)
- `npm run test:e2e` — executa testes end-to-end
- `npm run lint` — executa ESLint
- `npm run format` — formata com Prettier

## Padrões do projeto

- DTOs usam `class-validator` (ver `src/tasks/dto/`): mantenha validações nos DTOs.
- Lógica de negócio deve ficar em `TasksService` (`src/tasks/tasks.service.ts`).
- Controladores (`TasksController`) apenas delegam para o service.

## Como adicionar um endpoint rapidamente

1. Criar/atualizar um DTO em `src/tasks/dto/`.
2. Implementar lógica no `TasksService`.
3. Adicionar o método no `TasksController` e expor a rota.

## Notas

- Atualmente não há integração com base de dados — os dados são mantidos em memória por padrão.

