'use client'

import React from 'react'
import { type LeadDataTable } from '../../model/table-lead'
import { type ColumnDef, useReactTable, getCoreRowModel, type Updater, type PaginationState, getSortedRowModel } from '@tanstack/react-table'
import { getLeadsColumnsHeader } from './table-column'
import { type PaginationType } from '~/types/common'
import { DataTable } from '../common/data-table'

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

  const sampleData = [
    {
      id: 1,
      first_name: 'John',
      last_name: 'Doe',
      email: 'john.doe@company.com',
      company: 'Tech Corp',
      created_at: '2024-03-15',
      last_contacted_at: '2024-03-20',
    },
    {
      id: 2,
      first_name: 'Jane',
      last_name: 'Smith',
      email: 'jane.smith@startup.io',
      company: 'Startup IO',
      created_at: '2024-03-14',
      last_contacted_at: '2024-03-19',
    },
    {
      id: 3,
      first_name: 'Robert',
      last_name: 'Johnson',
      email: 'robert.j@bigtech.com',
      company: 'BigTech Inc',
      created_at: '2024-03-13',
      last_contacted_at: '2024-03-18',
    },
    {
      id: 4,
      first_name: 'Emily',
      last_name: 'Brown',
      email: 'emily.b@innovate.co',
      company: 'Innovate Co',
      created_at: '2024-03-12',
      last_contacted_at: '2024-03-17',
    },
    {
      id: 5,
      first_name: 'Michael',
      last_name: 'Wilson',
      email: 'michael.w@future.net',
      company: 'Future Net',
      created_at: '2024-03-11',
      last_contacted_at: '2024-03-16',
    },
    {
      id: 6,
      first_name: 'Sarah',
      last_name: 'Davis',
      email: 'sarah.d@cloudtech.dev',
      company: 'Cloud Tech',
      created_at: '2024-03-10',
      last_contacted_at: '2024-03-15',
    },
    {
      id: 7,
      first_name: 'David',
      last_name: 'Miller',
      email: 'd.miller@websoft.io',
      company: 'WebSoft',
      created_at: '2024-03-09',
      last_contacted_at: '2024-03-14',
    },
    {
      id: 8,
      first_name: 'Lisa',
      last_name: 'Anderson',
      email: 'lisa.a@digitalx.com',
      company: 'Digital X',
      created_at: '2024-03-08',
      last_contacted_at: '2024-03-13',
    },
  ]

  const table = useReactTable({
    columns,
    data: sampleData,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

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
