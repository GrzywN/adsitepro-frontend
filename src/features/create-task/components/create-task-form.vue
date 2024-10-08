<script setup lang="ts">
import { useForm } from 'vee-validate';
import FormField from '@/shared/components/form-field.vue';
import { toTypedSchema } from '@vee-validate/zod';
import { createTaskFormSchema, type CreateTaskForm } from '@/shared/schemas/create-task.schema';
import Textarea from 'primevue/textarea';
import TaskCategoryAutocomplete from '@/shared/components/task-category-autocomplete.vue';
import { TaskCategoryService } from '@/shared/services/task-category.service';
import { provide } from 'vue';
import { TaskService } from '@/features/home/services/task.service';
import UserAutocomplete from '@/shared/components/user-autocomplete.vue';
import { UserService } from '@/shared/services/user.service';
import { useCreateTask } from '@/features/create-task/hooks/use-create-task';
import InputNumber from 'primevue/inputnumber';

const emit = defineEmits<{
  success: [];
}>();

const userService = new UserService();
const taskService = new TaskService();
const taskCategoryService = new TaskCategoryService();

provide(UserService.name, userService);
provide(TaskService.name, taskService);
provide(TaskCategoryService.name, taskCategoryService);

const { handleSubmit } = useForm<CreateTaskForm>({
  initialValues: {
    title: '',
    description: '',
    category_id: undefined,
    assigned_user_id: undefined,
    estimated_minutes: undefined,
  },
  validationSchema: toTypedSchema(createTaskFormSchema),
});

const { mutateAsync } = useCreateTask(taskService);

const onSubmit = handleSubmit(async (values: CreateTaskForm) => {
  await mutateAsync(values, {
    onSuccess: () => {
      emit('success');
    },
  });
});
</script>

<template>
  <form class="flex flex-col gap-2">
    <FormField id="title" type="text" name="title" label="Title" max="255" />
    <FormField :component="Textarea" name="description" label="Description" max="1000" />
    <FormField :component="TaskCategoryAutocomplete" name="category_id" label="Category" />
    <FormField :component="UserAutocomplete" name="assigned_user_id" label="Assigned user" />
    <FormField :component="InputNumber" name="estimated_minutes" label="Estimated minutes" />

    <Button class="mt-4" type="submit" @click="onSubmit">Create</Button>
  </form>
</template>
