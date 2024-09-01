import userSchema from '@/shared/schemas/user.schema';
import { z } from 'zod';

export const taskCategorySchema = z.object({
  id: z.number(),
  name: z.string(),
  user: userSchema,
});

export type TaskCategory = z.infer<typeof taskCategorySchema>;

export default taskCategorySchema;
