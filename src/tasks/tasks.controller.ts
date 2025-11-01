import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import type { Task } from './task.model';
import { UseGuards } from '@nestjs/common';
import { MockAuthGuard } from '../auth/mock-auth.guard';
import { UppercasePipe } from 'src/common/uppercase.pipe';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

@Post()
create(
  @Body('title', new UppercasePipe()) title: string,
  @Body('description') description: string,
) {
  return this.tasksService.create({ title, description });
}

  @Get()
  findAll(): Task[] {
    return this.tasksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Task {
    return this.tasksService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTaskDto: UpdateTaskDto,
  ): Task {
    return this.tasksService.update(id, updateTaskDto);
  }
@Delete(':id')
remove(@Param('id', ParseIntPipe) id: number): { message: string } {
  return this.tasksService.remove(id);
}

}
