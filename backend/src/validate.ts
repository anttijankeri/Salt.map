import z from "zod";

export const updateSchema = z.object({
  lng: z.number().int(),
  lat: z.number().int(),
});

export const postSchema = updateSchema.extend({
  userHash: z.string(),
  name: z.string(),
});

export type PostObject = z.infer<typeof postSchema>;

export type UpdateObject = z.infer<typeof updateSchema>;

export const validatePost = (post: PostObject) => {
  return postSchema.safeParse(post);
};

export const validateUpdate = (update: UpdateObject) => {
  return updateSchema.safeParse(update);
};