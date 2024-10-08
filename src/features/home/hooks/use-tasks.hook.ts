import type { Task } from '@/features/home/schemas/task.schema';
import { TaskService } from '@/features/home/services/task.service';
import type { Collection } from '@/shared/schemas/helpers/schema-transformers';
import { useQuery, type UseQueryReturnType } from '@tanstack/vue-query';

export const TASKS_QUERY_KEY = ['tasks'];

export const useTasks = (taskService: TaskService): UseQueryReturnType<Collection<Task>, unknown> =>
  useQuery({
    queryKey: TASKS_QUERY_KEY,
    queryFn: taskService.getTasks,
  });

export default useTasks;
