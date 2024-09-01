import { z, ZodSchema } from 'zod';

export type Collection<T> = {
  data: T[];
};

export type Item<T> = T;

export type Create<T> = {
  message?: string;
  data: T;
};

export type Update<T> = {
  message?: string;
  data: T;
};

export type Delete<_> = {
  message?: string;
  success: boolean;
};

export const toCollectionSchema = <T>(schema: ZodSchema<T>): ZodSchema<Collection<T>> => {
  return z.object({
    data: z.array(schema),
  });
};

export const toItemSchema = <T>(schema: ZodSchema<T>): ZodSchema<Item<T>> => {
  return schema;
};

export const toCreateSchema = <T>(schema: ZodSchema<T>) => {
  return z.object({
    message: z.string().optional(),
    data: schema,
  });
};

export const toUpdateSchema = <T>(schema: ZodSchema<T>) => {
  return z.object({
    message: z.string().optional(),
    data: schema,
  });
};

export const toDeleteSchema = <T>(_: ZodSchema<T>): ZodSchema<Delete<T>> => {
  return z.object({
    message: z.string().optional(),
    success: z.boolean(),
  });
};
