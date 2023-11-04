import { z } from "zod";

const roleSchema = z.object({
  id: z.string(),
  name: z.string(),
  // users: z.array(userSchema),
});

const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  phonenumber: z.number(),
  address: z.string(),
  birthday: z.date(),
  gender: z.enum(["MALE", "FEMALE", "OTHER"]),
  createdAt: z.date(),
  updatedAt: z.date(),
  roleId: z.string(),
  role: z.array(roleSchema),
});

export type User = z.infer<typeof userSchema>;
export type Role = z.infer<typeof roleSchema>;
