import type { TaskCategoryService } from '@/features/home/services/task-category.service';
import { useToastMessage } from '@/shared/hooks/use-toast-message.hook';
import { useMutation } from '@tanstack/vue-query';

const CREATE_TASK_CATEGORY_MUTATION_KEY = ['create-task-category'];

export const useCreateTaskCategory = (taskCategoryService: TaskCategoryService) => {
  // const queryClient = useQueryClient();

  const { success, error } = useToastMessage();

  return useMutation({
    mutationFn: taskCategoryService.createTaskCategory,
    mutationKey: CREATE_TASK_CATEGORY_MUTATION_KEY,
    onSuccess: async () => {
      // TODO: Invalidate task categories when implemented
      // await queryClient.invalidateQueries(TASK_CATEGORIES_QUERY_KEY);

      success('Task category created');
    },
    onError: () => {
      error('Task category creation failed');
    },
  });
};
