import HomeView from '@/features/home/home-view.vue';
import LoginView from '@/features/login/login-view.vue';
import type { Component } from 'vue';

export type Routes = Record<
  string,
  { path: string; name: string; component: Component; isPublic?: boolean }
>;

export const routes: Routes = {
  home: {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  login: {
    path: '/login',
    name: 'login',
    component: LoginView,
    isPublic: true,
  },
};

const publicPaths = Object.values(routes)
  .filter((route) => route.isPublic)
  .map((route) => route.path);

export const isProtectedPath = (path: string) => !publicPaths.includes(path);
