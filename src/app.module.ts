import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { LoggerMiddleware } from './common/logger.middleware';
import { StatsModule } from './stats/stats.module';

@Module({
  imports: [TasksModule, StatsModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
