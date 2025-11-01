import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('API de Tarefas')
    .setDescription('API para gerenciar tarefas (sem banco de dados real)')
    .setVersion('1.0')
    .addTag('tasks')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
  console.log('🚀 API rodando em http://localhost:3000');
  console.log('📘 Documentação Swagger em http://localhost:3000/docs');
}
bootstrap();
