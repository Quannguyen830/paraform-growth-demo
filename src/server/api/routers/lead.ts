import { PrismaClient } from "@prisma/client";
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

const prisma = new PrismaClient();

export const leadRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  getAllLead: publicProcedure.query(async () => {
    const leads = await prisma.lead.findMany({
      select: {
        id: true,
        first_name: true,
        last_name: true,
      },
      take: 10,
    });

    return {
      leads,
    };
  }),
});
