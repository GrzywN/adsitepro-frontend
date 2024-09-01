import { z, type ZodTypeAny } from 'zod';

export type CollectionSchema<T> = {
  data: T[];
};

export type ItemSchema<T> = T;

export type CreateSchema<T> = {
  message?: string;
  data: T;
};

export type UpdateSchema<T> = {
  message?: string;
  data: T;
};

export type DeleteSchema<T> = {
  message?: string;
  success: boolean;
};

export const toCollectionSchema = <T>(schema: ZodTypeAny): CollectionSchema<T> => {
  return z.object({
    data: z.array(schema),
  });
};

export const toItemSchema = <T>(schema: ZodTypeAny): ItemSchema<T> => {
  return schema;
};

export const toCreateSchema = <T>(schema: ZodTypeAny): CreateSchema<T> => {
  return z.object({
    message: z.string().optional(),
    data: schema,
  });
};

export const toUpdateSchema = <T>(schema: ZodTypeAny): UpdateSchema<T> => {
  return z.object({
    message: z.string().optional(),
    data: schema,
  });
};

export const toDeleteSchema = <T>(schema: ZodTypeAny): DeleteSchema<T> => {
  return z.object({
    message: z.string().optional(),
    success: z.boolean(),
  });
};
