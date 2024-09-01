import taskCategorySchema from '@/shared/schemas/task-category.schema';
import userSchema from '@/shared/schemas/user.schema';
import { z } from 'zod';

export const taskSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  category: taskCategorySchema,
  owner: userSchema,
  assigned_user: userSchema,
  due_date: z.string(),
  completed_at: z.string().nullable(),
});

export type Task = z.infer<typeof taskSchema>;

export default taskSchema;
