import { Controller, Get, Post, Body } from "@nestjs/common";
import { TasksService } from "./tasks.service";

@Controller("tasks")
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getAll() {
    return this.tasksService.getTasks();
  }

  @Post()
  create(@Body("title") title: string) {
    return this.tasksService.createTask(title);
  }
}
