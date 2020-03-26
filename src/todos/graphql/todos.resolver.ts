import { Resolver, Args, Query } from '@nestjs/graphql';
import { TodosService } from '../todos.service';
import { Todo } from '../todo.entity';

@Resolver('Todo')
export class TodosResolver {
  constructor(private todosService: TodosService) {}

  @Query()
  async todo(@Args('id') id: number) {
    return this.todosService.findOne(id);
  }

  @Query()
  async todos(): Promise<Todo[]> {
    return this.todosService.findAll();
  }
}
