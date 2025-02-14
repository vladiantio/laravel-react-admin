import { Card, CardContent } from '@/components/ui/card';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
  return (
    <AuthenticatedLayout header="Dashboard">
      <Head title="Dashboard" />

      <Card>
        <CardContent className="p-6">
          You're logged in!
        </CardContent>
      </Card>
    </AuthenticatedLayout>
  );
}
