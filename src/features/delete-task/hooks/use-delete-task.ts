import { TASKS_QUERY_KEY } from '@/features/home/hooks/use-tasks.hook';
import type { TaskService } from '@/features/home/services/task.service';
import { useToastMessage } from '@/shared/hooks/use-toast-message.hook';
import { useMutation, useQueryClient } from '@tanstack/vue-query';

const DELETE_TASK_MUTATION_KEY = ['delete-task'];

export const useDeleteTask = (taskService: TaskService) => {
  const queryClient = useQueryClient();

  const { success, error } = useToastMessage();

  return useMutation({
    mutationFn: taskService.deleteTask,
    mutationKey: DELETE_TASK_MUTATION_KEY,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: TASKS_QUERY_KEY,
      });

      success('Task deleted successfully', 'The task has been removed');
    },
    onError: () => {
      error('Task deletion failed', 'Please try again');
    },
  });
};
