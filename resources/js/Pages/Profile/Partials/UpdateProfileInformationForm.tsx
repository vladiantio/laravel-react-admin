import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Link,
  useForm,
  usePage
} from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function UpdateProfileInformation({
  mustVerifyEmail,
  status,
}: {
  mustVerifyEmail: boolean;
  status?: string;
}) {
  const user = usePage().props.auth.user;

  const { data, setData, patch, errors, processing, recentlySuccessful } =
    useForm({
      name: user.name,
      email: user.email,
    });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    patch(route('profile.update'));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Profile Information
        </CardTitle>

        <CardDescription>
          Update your account's profile information and email address.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={submit} className="space-y-6">
          <div>
            <Label htmlFor="name">Name</Label>

            <Input
              id="name"
              className="mt-1"
              value={data.name}
              onChange={(e) => setData('name', e.target.value)}
              required
              autoFocus
              autoComplete="name"
              error={errors.name}
            />
          </div>

          <div>
            <Label htmlFor="email">Email</Label>

            <Input
              id="email"
              type="email"
              className="mt-1"
              value={data.email}
              onChange={(e) => setData('email', e.target.value)}
              required
              autoComplete="username"
              error={errors.email}
            />
          </div>

          {mustVerifyEmail && user.email_verified_at === null && (
            <div>
              <p className="mt-2 text-sm flex gap-x-1">
                Your email address is unverified.
                <Link
                  href={route('verification.send')}
                  method="post"
                  as="button"
                  className="font-semibold underline-offset-4 underline"
                >
                  Click here to re-send the verification email.
                </Link>
              </p>

              {status === 'verification-link-sent' && (
                <div className="mt-2 text-sm font-medium text-green-600">
                  A new verification link has been sent to your
                  email address.
                </div>
              )}
            </div>
          )}

          <div className="flex items-center gap-4">
            <Button disabled={processing}>Save</Button>
            {recentlySuccessful && (
              <p className="text-sm">
                Saved.
              </p>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
