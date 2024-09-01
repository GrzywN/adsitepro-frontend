import { baseUrl, getRequest } from '@/core/http/http-client';

export class UserService {
  getAvailableUsers() {
    return getRequest(new URL('/users', baseUrl));
  }
}
