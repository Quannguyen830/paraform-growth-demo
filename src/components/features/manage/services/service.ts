import { api } from "~/trpc/react";
import { type LeadDataTable } from "~/components/features/manage/model/table-lead";

export class LeadService {
  async getAllLeads(): Promise<LeadDataTable[]> {
    const data = api.lead.getAllLead.useQuery();
    return data.data?.leads as LeadDataTable[];
  }
}
