import type { TaskCategoryService } from '@/shared/services/task-category.service';
import { useQuery } from '@tanstack/vue-query';
import type { Ref } from 'vue';

export const TASK_CATEGORIES_AUTOCOMPLETE_QUERY_KEY = ['task-categories-autocomplete'];

export const useTaskCategoryAutocomplete = (
  taskCategoryService: TaskCategoryService,
  query: Ref<string>,
) =>
  useQuery({
    queryKey: TASK_CATEGORIES_AUTOCOMPLETE_QUERY_KEY.concat(query.value),
    queryFn: () => taskCategoryService.getTaskCategoriesAutocompletion(query.value),
  });
