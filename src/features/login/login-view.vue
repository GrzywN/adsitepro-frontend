<script setup lang="ts">
import AuthLayout from '@/shared/components/auth-layout.vue';
import LoginForm from './components/login-form.vue';
</script>

<template>
  <AuthLayout>
    <Card class="max-w-md">
      <template #title>
        <h1>Login</h1>
      </template>

      <template #content>
        <article class="flex flex-col gap-4">
          <p class="opacity-70">Enter your username and password to login.</p>
          <LoginForm />
        </article>
      </template>
    </Card>
  </AuthLayout>
</template>
