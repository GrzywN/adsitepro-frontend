import { isProtectedPath, routes } from './routes';
import { useAuthStore } from '@/shared/stores/use-auth-store';
import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: Object.values(routes),
});

router.beforeEach(async (to) => {
  const auth = useAuthStore();

  if (!auth.isLoggedIn && isProtectedPath(to.path)) {
    auth.returnUrl = to.fullPath;
    return routes.login.path;
  }
});
