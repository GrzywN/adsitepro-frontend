<script setup lang="ts">
import { useTaskCategoryAutocomplete } from '@/shared/hooks/use-task-category-autocomplete.hook';
import { useField } from 'vee-validate';
import { TaskCategoryService } from '@/shared/services/task-category.service';
import { inject } from 'vue';
import ErrorState from '@/shared/components/error-state.vue';

const fieldName = inject<string>('fieldName')!;
const taskCategoryService = inject<TaskCategoryService>(TaskCategoryService.name)!;

const { value: selectedCategory } = useField<string>(fieldName);
const {
  data: taskCategories,
  isPending,
  isError,
} = useTaskCategoryAutocomplete(taskCategoryService, selectedCategory);
</script>

<template>
  <ErrorState v-if="isError" />
  <Select
    v-else
    v-model="selectedCategory"
    :options="taskCategories?.data"
    option-label="name"
    option-value="id"
    :loading="isPending"
    @complete="complete"
  />
</template>
