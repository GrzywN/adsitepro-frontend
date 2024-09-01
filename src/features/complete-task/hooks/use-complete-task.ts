import { TASKS_QUERY_KEY } from '@/features/home/hooks/use-tasks.hook';
import type { TaskService } from '@/features/home/services/task.service';
import { useToastMessage } from '@/shared/hooks/use-toast-message.hook';
import { useMutation, useQueryClient } from '@tanstack/vue-query';

const COMPLETE_TASK_MUTATION_KEY = ['complete-task'];

export const useCompleteTask = (taskService: TaskService) => {
  const queryClient = useQueryClient();

  const { success, error } = useToastMessage();

  return useMutation({
    mutationFn: taskService.completeTask,
    mutationKey: COMPLETE_TASK_MUTATION_KEY,
    onSuccess: async () => {
      await queryClient.invalidateQueries(TASKS_QUERY_KEY);

      success('Task completed successfully');
    },
    onError: () => {
      error('Task completion failed');
    },
  });
};
