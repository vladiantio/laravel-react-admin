import { Card, CardContent } from '@/components/ui/card';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
  return (
    <AuthenticatedLayout header="Dashboard">
      <Head title="Dashboard" />

      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <Card>
            <CardContent className="p-6">
              You're logged in!
            </CardContent>
          </Card>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
