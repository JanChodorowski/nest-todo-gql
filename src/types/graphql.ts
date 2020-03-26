/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateTodoInput {
  title: string;
  description: string;
}

export abstract class IMutation {
  abstract createTodo(createTodoInput?: CreateTodoInput): Todo | Promise<Todo>;
}

export abstract class IQuery {
  abstract todo(id: number): Todo | Promise<Todo>;

  abstract todos(): Todo[] | Promise<Todo[]>;
}

export class Todo {
  id: number;
  title: string;
  description: string;
}
