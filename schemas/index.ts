import * as z from "zod";
import { UserRole } from "@prisma/client";

export const SettingsSchema = z
  .object({
    name: z.optional(z.string()),
    email: z.optional(z.string().email()),
    password: z.optional(z.string().min(6)),
    newPassword: z.optional(z.string().min(6)),
  })
  .refine(
    (data) => {
      if (data.password && !data.newPassword) {
        return false;
      }

      return true;
    },
    {
      message: "New password is required!",
      path: ["newPassword"],
    }
  )
  .refine(
    (data) => {
      if (data.newPassword && !data.password) {
        return false;
      }

      return true;
    },
    {
      message: "Password is required!",
      path: ["password"],
    }
  );

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: "Minimum of 6 characters required",
  }),
});

export const ResetSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
});

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
  code: z.optional(z.string()),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(6, {
    message: "Minimum 6 characters required",
  }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
  role: z.enum([UserRole.ADMIN, UserRole.USER]),
});

export const RecordSchema = z.object({
  temprature: z.number().min(1, {
    message: "Tempature is required",
  }),

  ph: z.number().min(1, {
    message: "ph is required",
  }),
  food: z.number().min(1, {
    message: "food is required",
  }),
  antibiotics: z.number().min(1, {
    message: "antibiotics is required",
  }),
  deadPieces: z.number().min(1, {
    message: "deadPieces is required",
  }),
  webCheck: z.boolean(),
});

export const RecordDataSchema = z.object({
  poolId: z.number().min(1, {
    message: "PoolId is required",
  }),
  boatId: z.number().min(1, {
    message: "boatId is required",
  }),

  temprature: z.number().min(1, {
    message: "Tempature is required",
  }),

  ph: z.number().min(1, {
    message: "ph is required",
  }),
  food: z.number().min(1, {
    message: "food is required",
  }),
  antibiotics: z.number().min(1, {
    message: "antibiotics is required",
  }),
  deadPieces: z.number().min(1, {
    message: "deadPieces is required",
  }),
  webCheck: z.boolean(),
});
