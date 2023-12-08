import z from "zod";

export const pinSchema = z.object({
  userHash: z.string(),
  lat: z.number().int(),
  lng: z.number().int(),
});

export const pinSchemaPartial = pinSchema.partial();

export type PinObject = z.infer<typeof pinSchema>;

export const validatePin = (pin: PinObject) => {
  return pinSchema.safeParse(pin);
};

export const validatePinPartial = (pin: PinObject) => {
  return pinSchemaPartial.safeParse(pin);
};
