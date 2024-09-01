import { baseUrl, getRequest } from '@/core/http/http-client';
import type { CollectionSchema } from '@/shared/schemas/helpers/schema-transformers';
import { toCollectionSchema } from '@/shared/schemas/helpers/schema-transformers';
import type { TaskCategory } from '@/shared/schemas/task-category.schema';
import { taskCategorySchema } from '@/shared/schemas/task-category.schema';

export class TaskCategoryService {
  private async getTaskCategories(): Promise<CollectionSchema<TaskCategory>> {
    const url = new URL('/api/v1/task-categories', baseUrl);
    const response = await getRequest(url);

    return toCollectionSchema(taskCategorySchema).parse(response.data);
  }

  async getTaskCategoriesAutocompletion(_: string): Promise<CollectionSchema<TaskCategory>> {
    // TODO: Implement the API call to get task categories by query
    return await this.getTaskCategories();
  }
}
