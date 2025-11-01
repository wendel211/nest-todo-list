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
# Todo API — NestJS 

API simples para gerenciamento de tarefas (todo list) construída com NestJS e TypeScript. Projeto exemplo com foco em boas práticas: módulos, DTOs, validação e testes.

Resumo rápido
- Framework: NestJS (TypeScript)
- Testes: Jest (unit + e2e)
- Arquitetura modular: módulos `tasks` e `stats`
- Utilitários: middleware de log, pipe customizado e guard mock para autenticação

Requisitos
- Node.js 18+
- npm (ou pnpm/yarn)

Instalação
```powershell
npm install
```

Execução
- Desenvolvimento (watch):
```powershell
npm run start:dev
```
- Produção:
```powershell
npm run build
npm run start:prod
```

Scripts principais (package.json)
- start, start:dev, build, start:prod
- test (unit), test:e2e (end-to-end)
- lint, format

Endpoints principais
- GET / -> informações da API
- Tasks (CRUD) — /tasks
  - GET /tasks
  - GET /tasks/:id
  - POST /tasks
  - PUT /tasks/:id
  - PATCH /tasks/:id
  - DELETE /tasks/:id
- Stats — /stats
  - GET /stats
- (Se configurado) Swagger UI: /docs

Exemplos (curl)
- Criar task:
```bash
curl -X POST http://localhost:3000/tasks -H "Content-Type: application/json" -d '{"title":"Comprar leite","description":"Ir ao mercado"}'
```
- Listar tasks:
```bash
curl http://localhost:3000/tasks
```

Principais features implementadas
- DTOs com validação (`class-validator`) em `src/tasks/dto/`
- Lógica de negócio centralizada em `TasksService` (`src/tasks/tasks.service.ts`
- Controllers limpos — delegam para services (`src/tasks/tasks.controller.ts`)
- Middleware de logging: `src/common/logger.middleware.ts`
- Pipe customizado: `src/common/uppercase.pipe.ts`
- Guard de autenticação mock: `src/auth/mock-auth.guard.ts`
- Módulo de estatísticas: `src/stats/`

Persistência
- Implementação atual mantém dados em memória / arquivo como simulação. Para produção, substitua por banco de dados (ex.: TypeORM, Prisma, MongoDB).

Estrutura importante
- src/
  - app.module.ts, main.ts
  - tasks/ (controller, service, dto, model)
  - stats/ (controller, service)
  - common/ (middleware, pipes)
  - auth/ (mock guard)

Testes
- Unitários:
```powershell
npm run test
```
- E2E:
```powershell
npm run test:e2e
```

Contribuição
- Abra issues ou PRs. Siga lint/format e escreva testes para novas funcionalidades.

Licença
- Projeto exemplo / template — adapte conforme necessário.

Referências rápidas
- src/app.module.ts
- src/main.ts
- src/tasks/*
- src/stats/*
- src/common/*
- src/auth/mock-auth.guard.ts

