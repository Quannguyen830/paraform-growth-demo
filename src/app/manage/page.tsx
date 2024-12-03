import { Header } from "~/components/common/header"
import { LeadTable } from "~/components/features/manage/components/lead-table/table-lead"

export default function LeadPage() {
  return (
    <>
      <Header title="Manage" />
      <div>
        <LeadTable />
      </div>
    </>
  )
}
