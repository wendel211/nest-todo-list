import { Injectable } from '@nestjs/common';
import { TasksService } from '../tasks/tasks.service';

@Injectable()
export class StatsService {
  constructor(private tasksService: TasksService) {}

  getStats() {
    const all = this.tasksService.findAll();
    const done = all.filter(t => t.done).length;
    return {
      total: all.length,
      done,
      pending: all.length - done,
    };
  }
}
