import { baseUrl, getRequest } from '@/core/http/http-client';
import type { Collection } from '@/shared/schemas/helpers/schema-transformers';
import { toCollectionSchema } from '@/shared/schemas/helpers/schema-transformers';
import type { User } from '@/shared/schemas/user.schema';
import { userSchema } from '@/shared/schemas/user.schema';

export class UserService {
  private async getUsers(): Promise<Collection<User>> {
    const url = new URL('/api/v1/users', baseUrl);
    const response = await getRequest(url);

    return toCollectionSchema(userSchema).parse(response.data);
  }

  async getUsersAutocompletion(_: string): Promise<Collection<User>> {
    // TODO: Implement the API call to get task categories by query
    return await this.getUsers();
  }
}
