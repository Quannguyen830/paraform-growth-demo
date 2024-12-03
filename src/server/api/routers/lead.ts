import { PrismaClient } from "@prisma/client";
import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";

const prisma = new PrismaClient();

export const leadRouter = createTRPCRouter({
  getAllLead: publicProcedure.query(async () => {
    const leads = await prisma.lead.findMany({
      select: {
        id: true,
        first_name: true,
        last_name: true,
      },
    });

    return {
      leads,
    };
  }),
});
