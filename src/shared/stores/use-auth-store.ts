import { getRequest, postRequest } from '@/core/http/http-client';
import { router, routes } from '@/core/router';
import userProfileSchema, { type UserProfile } from '@/shared/schemas/user-profile.schema';
import { assert } from '@/shared/utils/assert';
import { logger } from '@/shared/utils/logger';
import { defineStore } from 'pinia';

const baseUrl = import.meta.env.VITE_API_URL;

export const useAuthStore = defineStore({
  id: 'auth',
  persist: true,

  state: (): { user: UserProfile | null; returnUrl: string | null } => ({
    user: null,
    returnUrl: null,
  }),

  actions: {
    async login(email: string, password: string) {
      assert(import.meta.env.VITE_API_URL, 'VITE_API_URL is not set');

      const csrf = await getRequest(new URL('/sanctum/csrf-cookie', baseUrl));
      assert(csrf.status === 204, 'Failed to get CSRF cookie');

      const url = new URL('/login', import.meta.env.VITE_API_URL);
      const user = await postRequest(url, { email, password });

      logger.log(`Logged in: `, { user: user.data });
      this.user = userProfileSchema.parse(user.data);

      await router.push(this.returnUrl || routes.home.path);
    },

    async logout() {
      this.user = null;

      await router.push(routes.login.path);
    },
  },

  getters: {
    isLoggedIn() {
      return !!this.user;
    },
  },
});
