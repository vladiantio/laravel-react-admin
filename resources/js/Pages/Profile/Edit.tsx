import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PageProps } from '@/types';
import { Head } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';

export default function Edit({
  mustVerifyEmail,
  status,
}: PageProps<{ mustVerifyEmail: boolean; status?: string }>) {
  return (
    <AuthenticatedLayout header="Profile">
      <Head title="Profile" />

      <div className="py-8">
        <div className="mx-auto max-w-7xl space-y-12 sm:px-6 lg:px-8">
          <UpdateProfileInformationForm
            mustVerifyEmail={mustVerifyEmail}
            status={status}
          />

          <UpdatePasswordForm />

          <DeleteUserForm />
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
