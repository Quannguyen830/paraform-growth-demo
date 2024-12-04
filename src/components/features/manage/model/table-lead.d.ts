export interface LeadDataTable {
  id: number;
  created_at: string;
  first_name: string;
  last_name: string;
  email: string;
}

export type Lead = {
  id: number;
  created_at: string;
  first_name: string | null;
  last_name: string | null;
  email: string;
  last_contacted_at: string | null;
  company_name: string | null;
};
