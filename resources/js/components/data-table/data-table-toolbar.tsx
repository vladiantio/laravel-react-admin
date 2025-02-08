import { Table } from "@tanstack/react-table"
import { X } from "lucide-react"

import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { DataTableViewOptions } from "./data-table-view-options"

import { DataTableFacetedFilter, Option } from "./data-table-faceted-filter"

export interface ToolbarOptions {
  filters?: Filter[]
}

interface Filter {
  column: string
  title: string
  options: Option[]
  multiple?: boolean
}

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

export function DataTableToolbar<TData>({
  table,
  filters,
}: DataTableToolbarProps<TData> & ToolbarOptions) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          type="search"
          placeholder="Search..."
          onChange={(event) =>
            table.setGlobalFilter(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {filters && filters.map((filter) => table.getColumn(filter.column) && (
          <DataTableFacetedFilter
            key={filter.column}
            column={table.getColumn(filter.column)}
            title={filter.title}
            options={filter.options}
            multiple={filter.multiple}
          />
        ))}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <X />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  )
}
