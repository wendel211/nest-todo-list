import { Injectable, NotFoundException } from '@nestjs/common';
import { writeFileSync, readFileSync, existsSync } from 'fs';
import { join } from 'path';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

// Classe representando uma Tarefa real
export class Task {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public done = false,
    public createdAt = new Date(),
    public updatedAt = new Date(),
  ) {}
}

@Injectable()
export class TasksService {
  private readonly filePath = join(__dirname, '../../data/tasks.json');
  private tasks: Task[] = [];
  private idCount = 1;

  constructor() {
    // Carrega tarefas salvas no arquivo (simulação de persistência)
    if (existsSync(this.filePath)) {
      const data = readFileSync(this.filePath, 'utf-8');
      this.tasks = JSON.parse(data);
      this.idCount = this.tasks.length ? Math.max(...this.tasks.map(t => t.id)) + 1 : 1;
    }
  }

  private saveToFile() {
    writeFileSync(this.filePath, JSON.stringify(this.tasks, null, 2));
  }

  create(dto: CreateTaskDto): Task {
    const newTask = new Task(this.idCount++, dto.title, dto.description);
    this.tasks.push(newTask);
    this.saveToFile();
    return newTask;
  }

  findAll(): Task[] {
    return this.tasks;
  }

  findOne(id: number): Task {
    const task = this.tasks.find((t) => t.id === id);
    if (!task) throw new NotFoundException(`Tarefa com ID ${id} não encontrada`);
    return task;
  }

  update(id: number, dto: UpdateTaskDto): Task {
    const task = this.findOne(id);
    if (dto.title) task.title = dto.title;
    if (dto.description) task.description = dto.description;
    if (dto.done !== undefined) task.done = dto.done;
    task.updatedAt = new Date();
    this.saveToFile();
    return task;
  }

  remove(id: number): { message: string } {
    const index = this.tasks.findIndex((t) => t.id === id);
    if (index === -1) throw new NotFoundException(`Tarefa ${id} não encontrada`);
    this.tasks.splice(index, 1);
    this.saveToFile();
    return { message: `Tarefa ${id} removida com sucesso!` };
  }
}
