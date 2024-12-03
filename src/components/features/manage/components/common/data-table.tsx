import { flexRender, type Table as TableType } from "@tanstack/react-table";
import React from "react";
import { ScrollArea } from "~/components/ui/scroll-area";
import { 
  Table, 
  TableHeader, 
  TableRow, 
  TableHead, 
  TableBody, 
  TableCell 
} from "~/components/ui/table";
import { cn } from "~/lib/utils";
import { DataTableColumnHeader } from "./data-table-column-header";

interface DataTableProps<TData> extends React.HTMLAttributes<HTMLDivElement> {
  table: TableType<TData>;
  floatingBar?: React.ReactNode | null;
  onRefetch?: () => void;
  isLoading?: boolean;
}

export function DataTable<TData>({
  table,
  floatingBar,
  onRefetch,
  isLoading,
}: DataTableProps<TData>) {
  return (
    <div>
      <ScrollArea className="h-[calc(100vh-10rem)]">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  const headerContent = header.column.columnDef.header as
                    | string
                    | ((props: { column: typeof header.column }) => React.ReactNode);

                  return (
                    <TableHead key={header.id}>
                      {typeof headerContent === "function"
                        ? headerContent({ column: header.column })
                        : headerContent}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, {
                      ...cell.getContext(),
                    })}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ScrollArea>
    </div>
  );
}
