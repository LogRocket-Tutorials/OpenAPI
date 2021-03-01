/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddTodoDto } from '../models/AddTodoDto';
import type { EditTodoDto } from '../models/EditTodoDto';
import type { TodoDto } from '../models/TodoDto';
import { request as __request } from '../core/request';

export class TodosService {
  public static async findAll(): Promise<Array<TodoDto>> {
    const result = await __request({
      method: 'GET',
      path: `/todos`,
    });
    return result.body;
  }

  public static async add(requestBody: AddTodoDto): Promise<any> {
    const result = await __request({
      method: 'POST',
      path: `/todos`,
      body: requestBody,
    });
    return result.body;
  }

  public static async findOne(id: number): Promise<any> {
    const result = await __request({
      method: 'GET',
      path: `/todos/${id}`,
    });
    return result.body;
  }

  public static async edit(id: number, requestBody: EditTodoDto): Promise<any> {
    const result = await __request({
      method: 'PUT',
      path: `/todos/${id}`,
      body: requestBody,
    });
    return result.body;
  }

  public static async remove(id: number): Promise<any> {
    const result = await __request({
      method: 'DELETE',
      path: `/todos/${id}`,
    });
    return result.body;
  }
}
