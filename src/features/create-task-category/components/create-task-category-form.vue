<script setup lang="ts">
import { useForm } from 'vee-validate';
import FormField from '@/shared/components/form-field.vue';
import { toTypedSchema } from '@vee-validate/zod';
import createTaskCategoryFormSchema from '@/features/create-task-category/schemas/create-task-category.schema';
import CreateTaskCategoryForm from '@/features/create-task-category/components/create-task-category-form.vue';
import { useCreateTaskCategory } from '@/features/create-task-category/hooks/use-create-task-category';
import { provide } from 'vue';
import { TaskCategoryService } from '@/features/home/services/task-category.service';

const taskCategoryService = new TaskCategoryService();

provide(TaskCategoryService.name, taskCategoryService);

const emit = defineEmits<{
  success: () => void;
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
