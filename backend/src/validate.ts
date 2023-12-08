import z from "zod";

export const pinSchema = z.object({
  userHash: z.string(),
  lat: z.number().int(),
  lng: z.number().int(),
});

export const pinSchemaPartial = pinSchema.partial();

export const userSchema = z.object({
  userHash: z.string(),
  name: z.string(),
});

export type PinObject = z.infer<typeof pinSchema>;

export type userObject = z.infer<typeof userSchema>;

export const validatePin = (pin: PinObject) => {
  return pinSchema.safeParse(pin);
};

export const validatePinPartial = (pin: PinObject) => {
  return pinSchemaPartial.safeParse(pin);
};

export const validateUSer = (user: userObject) => {
  return userSchema.safeParse(user);
};
