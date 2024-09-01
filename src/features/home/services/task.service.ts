import {
  baseUrl,
  deleteRequest,
  getRequest,
  patchRequest,
  postRequest,
} from '@/core/http/http-client';
import { taskSchema, type Task } from '@/features/home/schemas/task.schema';
import type { CreateTaskForm } from '@/shared/schemas/create-task.schema';
import {
  toCollectionSchema,
  toCreateSchema,
  toDeleteSchema,
  toUpdateSchema,
  type Collection,
  type Create,
  type Delete,
  type Update,
} from '@/shared/schemas/helpers/schema-transformers';

export class TaskService {
  async getTasks(): Promise<Collection<Task>> {
    const url = new URL('/api/v1/tasks', baseUrl);
    const response = await getRequest(url);

    return toCollectionSchema(taskSchema).parse(response.data);
  }

  async createTask(task: CreateTaskForm): Promise<Create<Task>> {
    const url = new URL('/api/v1/tasks', baseUrl);
    const response = await postRequest(url, task);

    return toCreateSchema(taskSchema).parse(response.data);
  }

  async deleteTask(id: number): Promise<Delete<Task>> {
    const url = new URL(`/api/v1/tasks/${id}`, baseUrl);
    const response = await deleteRequest(url);

    return toDeleteSchema(taskSchema).parse(response.data);
  }

  async completeTask(id: number): Promise<Update<Task>> {
    const url = new URL(`/api/v1/tasks/${id}/complete`, baseUrl);
    const response = await patchRequest(url);

    return toUpdateSchema(taskSchema).parse(response.data);
  }
}
