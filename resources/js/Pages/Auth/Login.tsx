import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function Login({
  status,
  canResetPassword,
}: {
  status?: string;
  canResetPassword: boolean;
}) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    password: '',
    remember: false as boolean,
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    post(route('login'), {
      onFinish: () => reset('password'),
    });
  };

  return (
    <GuestLayout>
      <Head title="Log in" />

      {status && (
        <div className="mb-4 text-sm font-medium text-green-600">
          {status}
        </div>
      )}

      <form onSubmit={submit}>
        <div>
          <Label htmlFor="email">Email</Label>

          <Input
            id="email"
            type="email"
            name="email"
            value={data.email}
            className="mt-1"
            autoComplete="username"
            autoFocus
            onChange={(e) => setData('email', e.target.value)}
            error={errors.email}
          />
        </div>

        <div className="mt-4">
          <Label htmlFor="password">Password</Label>

          <Input
            id="password"
            type="password"
            name="password"
            value={data.password}
            className="mt-1"
            autoComplete="current-password"
            onChange={(e) => setData('password', e.target.value)}
            error={errors.password}
          />
        </div>

        <div className="mt-4 flex items-center">
          <Checkbox
            id="remember"
            name="remember"
            checked={data.remember}
            onCheckedChange={(checked) =>
              setData('remember', !!checked)
            }
          />
          <Label className="ms-2" htmlFor="remember">	
            Remember me
          </Label>
        </div>

        <div className="mt-4 flex items-center justify-end">
          {canResetPassword && (
            <Link
              href={route('password.request')}
              className="text-sm underline-offset-4 underline"
            >
              Forgot your password?
            </Link>
          )}

          <Button className="ms-4" disabled={processing}>
            Log in
          </Button>
        </div>
      </form>
    </GuestLayout>
  );
}
