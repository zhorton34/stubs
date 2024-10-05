import { z } from "https://deno.land/x/zod@v3.21.4/mod.ts";

export const {{ name }}Schema = z.object({
  // Define your schema properties here
  // Example:
  // id: z.string().uuid(),
  // name: z.string().min(1).max(100),
  // createdAt: z.date(),
});

export type {{ name }} = z.infer < typeof {{ name }}Schema >;