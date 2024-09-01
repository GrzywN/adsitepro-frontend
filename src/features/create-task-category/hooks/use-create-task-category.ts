import { useToastMessage } from '@/shared/hooks/use-toast-message.hook';
import type { TaskCategoryService } from '@/shared/services/task-category.service';
import { useMutation } from '@tanstack/vue-query';

const CREATE_TASK_CATEGORY_MUTATION_KEY = ['create-task-category'];

export const useCreateTaskCategory = (taskCategoryService: TaskCategoryService) => {
  const { success, error } = useToastMessage();

  return useMutation({
    mutationFn: taskCategoryService.createTaskCategory,
    mutationKey: CREATE_TASK_CATEGORY_MUTATION_KEY,
    onSuccess: async () => {
      success('Task category created', 'The task category has been created');
    },
    onError: () => {
      error('Task category creation failed', 'Please try again');
    },
  });
};
