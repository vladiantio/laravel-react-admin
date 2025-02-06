import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from '@inertiajs/react';
import { FormEventHandler, useRef } from 'react';

export default function UpdatePasswordForm() {
  const passwordInput = useRef<HTMLInputElement>(null);
  const currentPasswordInput = useRef<HTMLInputElement>(null);

  const {
    data,
    setData,
    errors,
    put,
    reset,
    processing,
    recentlySuccessful,
  } = useForm({
    current_password: '',
    password: '',
    password_confirmation: '',
  });

  const updatePassword: FormEventHandler = (e) => {
    e.preventDefault();

    put(route('password.update'), {
      preserveScroll: true,
      onSuccess: () => reset(),
      onError: (errors) => {
        if (errors.password) {
          reset('password', 'password_confirmation');
          passwordInput.current?.focus();
        }

        if (errors.current_password) {
          reset('current_password');
          currentPasswordInput.current?.focus();
        }
      },
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Update Password
        </CardTitle>

        <CardDescription>
          Ensure your account is using a long, random password to stay
          secure.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={updatePassword} className="space-y-6">
          <div>
            <Label htmlFor="current_password">Current Password</Label>

            <Input
              id="current_password"
              ref={currentPasswordInput}
              value={data.current_password}
              onChange={(e) =>
                setData('current_password', e.target.value)
              }
              type="password"
              className="mt-1"
              autoComplete="current-password"
              error={errors.current_password}
            />
          </div>

          <div>
            <Label htmlFor="password">New Password</Label>

            <Input
              id="password"
              ref={passwordInput}
              value={data.password}
              onChange={(e) => setData('password', e.target.value)}
              type="password"
              className="mt-1"
              autoComplete="new-password"
              error={errors.password}
            />
          </div>

          <div>
            <Label htmlFor="password_confirmation">Confirm Password</Label>

            <Input
              id="password_confirmation"
              value={data.password_confirmation}
              onChange={(e) =>
                setData('password_confirmation', e.target.value)
              }
              type="password"
              className="mt-1"
              autoComplete="new-password"
              error={errors.password_confirmation}
            />
          </div>

          <div className="flex items-center gap-4">
            <Button disabled={processing}>Save</Button>

            {recentlySuccessful && (
              <p className="text-sm text-gray-600">
                Saved.
              </p>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
