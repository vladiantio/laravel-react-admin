import { z } from "zod"

import { columns } from "./components/columns"
import { DataTable } from "@/components/data-table/data-table"
import { taskSchema } from "./data/schema"
import { filters } from "./data/data"

import tasks from "./data/tasks.json";

function getTasks() {
  return z.array(taskSchema).parse(tasks);
}

export default function AppCrudExample() {
  const tasks = getTasks()

  return (
    <div>
      <DataTable
        data={tasks}
        columns={columns}
        toolbarOptions={{ filters }}
      />
    </div>
  )
}
