import AppCrudExample from '@/modules/crud-example/AppCrudExample';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function CrudExample() {
  return (
    <AuthenticatedLayout header="CRUD Example">
      <Head title="CRUD Example" />

        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <AppCrudExample />
        </div>
    </AuthenticatedLayout>
  );
}
