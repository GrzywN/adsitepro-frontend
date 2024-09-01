import { TASKS_QUERY_KEY } from '@/features/home/hooks/use-tasks.hook';
import type { TaskService } from '@/features/home/services/task.service';
import { useToastMessage } from '@/shared/hooks/use-toast-message.hook';
import { useMutation, useQueryClient } from '@tanstack/vue-query';

const CREATE_TASK_MUTATION_KEY = ['create-task'];

export const useCreateTask = (taskService: TaskService) => {
  const queryClient = useQueryClient();

  const { success, error } = useToastMessage();

  return useMutation({
    mutationFn: taskService.createTask,
    mutationKey: CREATE_TASK_MUTATION_KEY,
    onSuccess: async () => {
      await queryClient.invalidateQueries(TASKS_QUERY_KEY);

      success('Task created');
    },
    onError: () => {
      error('Task creation failed');
    },
  });
};
