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
        email: true,
        company_name: true,
        created_at: true,
        last_contacted_at: true,
      },
      take: 25
    });
    
    const formattedLeads = leads.map(lead => ({
      ...lead,
      created_at: lead.created_at.toISOString(),
      last_contacted_at: lead.last_contacted_at?.toISOString() ?? null,
    }));

    return {
      leads: formattedLeads,
    };
  }),
});
