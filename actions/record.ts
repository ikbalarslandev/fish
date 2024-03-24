"use server";

import * as z from "zod";
import { AuthError } from "next-auth";
import { db } from "@/lib/db";
import { RecordDataSchema } from "@/schemas";

export const record = async (values: z.infer<typeof RecordDataSchema>) => {
  const validatedFields = RecordDataSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const {
    poolId,
    boatId,
    temprature,
    ph,
    food,
    antibiotics,
    deadPieces,
    webCheck,
  } = validatedFields.data;

  try {
    await db.record.create({
      data: {
        poolId,
        boatId,
        temprature,
        ph,
        food,
        antibiotics,
        deadPieces,
        webCheck,
      },
    });
  } catch (error) {
    console.error("Error creating record:", error);
    return { error: "Error creating record!" };
  }
};
