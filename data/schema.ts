import { z } from "zod";

const userSchema = z.object({
  id: z.string(),
  role: z.string(),
  name: z.string(),
  email: z.string(),
  phonenumber: z.number(),
  address: z.string(),
  birthday: z.date(),
  gender: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type User = z.infer<typeof userSchema>;
