<script setup lang="ts">
import { useForm } from 'vee-validate';
import FormField from '@/shared/components/form-field.vue';
import { toTypedSchema } from '@vee-validate/zod';
import createTaskCategoryFormSchema, {
  type CreateTaskCategoryForm,
} from '@/shared/schemas/create-task-category.schema';
import { useCreateTaskCategory } from '@/features/create-task-category/hooks/use-create-task-category';
import { provide } from 'vue';
import { TaskCategoryService } from '@/shared/services/task-category.service';

const taskCategoryService = new TaskCategoryService();

provide(TaskCategoryService.name, taskCategoryService);

const emit = defineEmits<{
  success: [];
}>();

const { handleSubmit } = useForm<CreateTaskCategoryForm>({
  initialValues: {
    name: '',
  },
  validationSchema: toTypedSchema(createTaskCategoryFormSchema),
});

const { mutateAsync } = useCreateTaskCategory(taskCategoryService);

const onSubmit = handleSubmit(async (values: CreateTaskCategoryForm) => {
  await mutateAsync(values, {
    onSuccess: () => {
      emit('success');
    },
  });
});
</script>

<template>
  <form class="flex flex-col gap-2">
    <FormField id="name" type="text" name="name" label="Name" max="255" />

    <Button class="mt-4" type="submit" @click="onSubmit">Create</Button>
  </form>
</template>
