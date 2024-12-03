import { HydrateClient } from "~/trpc/server";
import { Header } from "~/components/common/header"

export interface Lead {
  id: number;
  first_name: string | null;
}

export default async function HomePage() {
  return (
    <>
      <Header title="Home" />
      <HydrateClient>
        {/* {
          allLeads.leads.map((lead) => (
            <div key={lead.id}>
              {lead.first_name ?? "No name"}
              {" "}
              {lead.last_name ?? "No last name"}
            </div>
          ))
        } */}
        <div>test</div>
      </HydrateClient>
    </>
  );
}
