import { z } from 'zod';

export const createTaskFormSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1).max(1000),
  category_id: z.number().int(),
  assigned_user_id: z.number().int(),
  estimated_minutes: z.number().int(),
});

export type CreateTaskForm = z.infer<typeof createTaskFormSchema>;

export default createTaskFormSchema;
