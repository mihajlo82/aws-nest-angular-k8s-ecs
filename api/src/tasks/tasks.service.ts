import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
// import { PrismaClient } from '../generated';

const prisma = new PrismaClient();

@Injectable()
export class TasksService {
  async getTasks() {
    return prisma.task.findMany();
  }

  async createTask(title: string, userId?: number) {
    const data: any = { title };
    if (userId) {
      data.user = { connect: { id: userId } };
    }
    return prisma.task.create({ data });
  }
}
