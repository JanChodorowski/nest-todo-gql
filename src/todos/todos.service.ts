import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo) private todoRepository: Repository<Todo>,
  ) {}

  findOne(id: number): Promise<Todo> {
    return this.todoRepository.findOne(id);
  }

  async findAll(): Promise<Todo[]> {
    return this.todoRepository.find();
  }
}
