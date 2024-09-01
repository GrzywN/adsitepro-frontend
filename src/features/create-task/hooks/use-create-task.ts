import { TASKS_QUERY_KEY } from '@/features/home/hooks/use-tasks.hook';
import type { TaskService } from '@/features/home/services/task.service';
import { useToastMessage } from '@/shared/hooks/use-toast-message.hook';
import { useMutation, useQueryClient } from '@tanstack/vue-query';
import { AxiosError } from 'axios';
import { StatusCodes } from 'http-status-codes';

const CREATE_TASK_MUTATION_KEY = ['create-task'];

export const useCreateTask = (taskService: TaskService) => {
  const queryClient = useQueryClient();

  const { success, error } = useToastMessage();

  return useMutation({
    mutationFn: taskService.createTask,
    mutationKey: CREATE_TASK_MUTATION_KEY,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: TASKS_QUERY_KEY,
      });

      success('Task created', 'The task has been created');
    },
    onError: (axiosError) => {
      if (!(axiosError instanceof AxiosError)) {
        error('Task creation failed', 'An error occurred');
        return;
      }

      const errorBag = axiosError?.response?.data?.errors;

      if (!errorBag && axiosError.response?.status === StatusCodes.UNPROCESSABLE_ENTITY) {
        error('Task creation failed', 'An error occurred');
        return;
      }

      const firstErrorCategory = Object.values(errorBag).at(0) ?? {};
      const firstError = Object.values(firstErrorCategory).at(0);

      error('Task creation failed', firstError);
    },
  });
};
