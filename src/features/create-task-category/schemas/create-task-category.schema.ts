import { z } from 'zod';

export const createTaskCategoryFormSchema = z.object({
  name: z.string().min(1).max(255),
});

export type CreateTaskCategoryForm = z.infer<typeof createTaskCategoryFormSchema>;

export default createTaskCategoryFormSchema;
