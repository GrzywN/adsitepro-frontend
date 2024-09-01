import {
  baseUrl,
  deleteRequest,
  getRequest,
  patchRequest,
  postRequest,
  putRequest,
} from '@/core/http/http-client';
import { taskSchema, type Task } from '@/features/home/schemas/task.schema';
import {
  toCollectionSchema,
  toCreateSchema,
  toDeleteSchema,
  toItemSchema,
  toUpdateSchema,
  type CollectionSchema,
  type CreateSchema,
  type DeleteSchema,
  type ItemSchema,
  type UpdateSchema,
} from '@/shared/schemas/helpers/schema-transformers';

export class TaskService {
  async getTasks(): Promise<CollectionSchema<Task>> {
    const url = new URL('/api/v1/tasks', baseUrl);
    const response = await getRequest(url);

    return toCollectionSchema(taskSchema).parse(response.data);
  }

  async getTask(id: number): Promise<ItemSchema<Task>> {
    const url = new URL(`/api/v1/tasks/${id}`, baseUrl);
    const response = await getRequest(url);

    return toItemSchema(taskSchema).parse(response.data);
  }

  async createTask(task: Task): Promise<CreateSchema<Task>> {
    const url = new URL('/api/v1/tasks', baseUrl);
    const response = await postRequest(url, task);

    return toCreateSchema(taskSchema).parse(response.data);
  }

  async updateTask(task: Task): Promise<UpdateSchema<Task>> {
    const url = new URL(`/api/v1/tasks/${task.id}`, baseUrl);
    const response = await putRequest(url, task);

    return toUpdateSchema(taskSchema).parse(response.data);
  }

  async deleteTask(id: number): Promise<DeleteSchema<Task>> {
    const url = new URL(`/api/v1/tasks/${id}`, baseUrl);
    const response = await deleteRequest(url);

    return toDeleteSchema(taskSchema).parse(response.data);
  }

  async completeTask(id: number): Promise<UpdateSchema<Task>> {
    const url = new URL(`/api/v1/tasks/${id}/complete`, baseUrl);
    const response = await patchRequest(url);

    return toUpdateSchema(taskSchema).parse(response.data);
  }
}
