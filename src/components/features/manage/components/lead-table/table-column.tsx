import React from "react";
import { type Table, type ColumnDef } from "@tanstack/react-table";
import { type LeadDataTable } from "../../model/table-lead";
import { DataTableColumnHeader } from "../common/data-table-column-header";
import { Checkbox } from "~/components/ui/checkbox";
import { api } from "~/trpc/server";
import { LeadService } from "../../services/service";

export function getLeadsColumnsHeader(): ColumnDef<LeadDataTable>[] {
  return [
    {
      id: "select",
      enablePinning: true,
      size: 10,
      header: ({ table }: { table: Table<LeadDataTable> }) => (
        <div className="pl-2">
          <Checkbox
            // checked={
            //   table.getIsAllRowsSelected() ||
            //   (table.getIsSomeRowsSelected() && "indeterminate")
            // }
            // onCheckedChange={(checked) =>
            //   table.toggleAllRowsSelected(!!checked)
            // }
            aria-label="Select all"
            className="translate-y-0.5"
          />
        </div>
      ),
      cell: ({ row }) => (
        <div className="pl-2">
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(checked) => row.toggleSelected(!!checked)}
            aria-label="Select row"
            className="translate-y-0.5"
          />
        </div>
      ),
    },
    {
      size: 150,
      accessorKey: "email",
      enableSorting: true,
      header: ({ column }) => {
        return <DataTableColumnHeader 
          column={column} 
          title="Email"
          suffix={<span className="">({column.getSize()})</span>}
        />;
      },
      cell: ({ row }) => <div>{row.getValue("email")}</div>,
    },
    {
      size: 150,
      accessorKey: "name",
      enableSorting: true,
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Name" />;
      },
      cell: ({ row }) => {
        const first_name = row.original.first_name ?? "";
        const last_name = row.original.last_name ?? "";
        return <div>{`${first_name} ${last_name}`}</div>;
      },
    },
    {
      size: 150,
      accessorKey: "company",
      enableSorting: true,
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Company" />;
      },
      cell: ({ row }) => <div>{row.getValue("company") ?? "-"}</div>,
    },
    {
      accessorKey: "last_contacted_at",
      enableSorting: true,
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Last Contacted" />;
      },
      cell: ({ row }) => <div>{row.getValue("last_contacted_at") ?? "-"}</div>,
    },
    {
      accessorKey: "created_at",
      enableSorting: true,
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Created At" />;
      },
      cell: ({ row }) => <div>{row.getValue("created_at") ?? "-"}</div>,
    },
  ];
}
