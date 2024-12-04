'use client'

import React, { useEffect, useState } from 'react'
import { type LeadDataTable } from '../../model/table-lead'
import { type ColumnDef, useReactTable, getCoreRowModel, type Updater, type PaginationState, getSortedRowModel, getFilteredRowModel, getPaginationRowModel } from '@tanstack/react-table'
import { getLeadsColumnsHeader } from './table-column'
import { type PaginationType } from '~/types/common'
import { DataTable } from '../common/data-table'
import { LeadService } from '../../services/service'
import { api } from '~/trpc/react'
import { da } from 'date-fns/locale'

type DataType = LeadDataTable
type CompanyTableProps = {
  data: DataType[],
  onPaginationChange: (updaterOrValue: Updater<PaginationState>) => void
  onRefetch: () => void
  pagination?: PaginationType
  isLoading: boolean
}

export function LeadTable() {
  const columns: ColumnDef<DataType>[] = getLeadsColumnsHeader()
  
  const [data, setData] = useState<DataType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const allLeads = api.lead.getAllLead.useQuery();

  useEffect(() => {
    if (allLeads.data) {
      setData(allLeads.data.leads as LeadDataTable[]);
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [allLeads.data]);

  const table = useReactTable({
    columns,
    data: data,
    debugTable: true,
    enableRowSelection: true,
    getCoreRowModel: getCoreRowModel(),
    autoResetPageIndex: false,
    state: {
      pagination: {
        pageIndex: 0,
        pageSize: 10
      }
    }
  })

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="pt-2">
        <DataTable
          table={table}
        />
      </div>
    </div>
  )
}
