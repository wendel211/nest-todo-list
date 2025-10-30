import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];
  private idCount = 1;

  create(createTaskDto: CreateTaskDto): Task {
    const newTask: Task = {
      id: this.idCount++,
      done: false,
      ...createTaskDto,
    };
    this.tasks.push(newTask);
    return newTask;
  }

  findAll(): Task[] {
    return this.tasks;
  }

  findOne(id: number): Task {
    const task = this.tasks.find((t) => t.id === id);
    if (!task) throw new NotFoundException('Task not found');
    return task;
  }

  update(id: number, updateTaskDto: UpdateTaskDto): Task {
    const task = this.findOne(id);
    Object.assign(task, updateTaskDto);
    return task;
  }

  remove(id: number): void {
    const index = this.tasks.findIndex((t) => t.id === id);
    if (index === -1) throw new NotFoundException('Task not found');
    this.tasks.splice(index, 1);
  }
}
