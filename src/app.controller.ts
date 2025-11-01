import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHome() {
    return {
      message: '🚀 Bem-vindo à API de Tarefas!',
      docs: '/docs',
      endpoints: ['/tasks', '/stats']
    };
  }
}
