import { Module } from '@nestjs/common';
import { StatsService } from './stats.service';
import { StatsController } from './stats.controller';
import { TasksModule } from '../tasks/tasks.module';

@Module({
  providers: [StatsService],
  controllers: [StatsController],
  imports: [TasksModule]
})
export class StatsModule {}
