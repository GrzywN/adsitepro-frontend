<script setup lang="ts">
import { useForm } from 'vee-validate';
import FormField from '@/shared/components/form-field.vue';
import { toTypedSchema } from '@vee-validate/zod';
import { loginFormSchema, type LoginForm } from '@/features/login/schemas/login-form.schema';
import { useAuthStore } from '@/shared/stores/use-auth-store';
import Password from 'primevue/password';

const { login } = useAuthStore();

const { handleSubmit, values } = useForm<LoginForm>({
  initialValues: {
    email: import.meta.env.DEV ? 'admin@example.com' : '',
    password: import.meta.env.DEV ? 'zaq1@WSX' : '',
  },
  validationSchema: toTypedSchema(loginFormSchema),
});

const onSubmit = handleSubmit(async (values: LoginForm) => {
  const { email, password } = values;

  await login(email, password);
});
</script>

<template>
  <form class="flex flex-col gap-2">
    <FormField id="email" type="text" name="email" label="Email" />
    <FormField :component="Password" name="password" label="Password" toggleMask />

    <Button class="mt-4" type="submit" @click="onSubmit">Login</Button>
  </form>
</template>
