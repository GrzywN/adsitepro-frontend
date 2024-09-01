import { z } from 'zod';

export const userProfileSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
});

export type UserProfile = z.infer<typeof userProfileSchema>;

export default userProfileSchema;
