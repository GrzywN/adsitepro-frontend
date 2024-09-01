import { baseUrl, getRequest, postRequest } from '@/core/http/http-client';
import type { CreateTaskCategoryForm } from '@/shared/schemas/create-task-category.schema';
import type { Collection, Create } from '@/shared/schemas/helpers/schema-transformers';
import { toCollectionSchema, toCreateSchema } from '@/shared/schemas/helpers/schema-transformers';
import type { TaskCategory } from '@/shared/schemas/task-category.schema';
import { taskCategorySchema } from '@/shared/schemas/task-category.schema';

export class TaskCategoryService {
  private async getTaskCategories(): Promise<Collection<TaskCategory>> {
    const url = new URL('/api/v1/task-categories', baseUrl);
    const response = await getRequest(url);

    return toCollectionSchema(taskCategorySchema).parse(response.data);
  }

  async getTaskCategoriesAutocompletion(_: string): Promise<Collection<TaskCategory>> {
    // TODO: Implement the API call to get task categories by query
    return await this.getTaskCategories();
  }

  async createTaskCategory(taskCategory: CreateTaskCategoryForm): Promise<Create<TaskCategory>> {
    const url = new URL('/api/v1/task-categories', baseUrl);
    const response = await postRequest(url, taskCategory);

    return toCreateSchema(taskCategorySchema).parse(response.data);
  }
}
