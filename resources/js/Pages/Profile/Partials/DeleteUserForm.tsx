import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog';
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
import { useForm } from '@inertiajs/react';
import {
  FormEventHandler,
  useRef,
  useState
} from 'react';

export default function DeleteUserForm() {
  const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
  const passwordInput = useRef<HTMLInputElement>(null);

  const {
    data,
    setData,
    delete: destroy,
    processing,
    reset,
    errors,
    clearErrors,
  } = useForm({
    password: '',
  });

  const deleteUser: FormEventHandler = (e) => {
    e.preventDefault();

    destroy(route('profile.destroy'), {
      preserveScroll: true,
      onSuccess: () => closeModal(),
      onError: () => passwordInput.current?.focus(),
      onFinish: () => reset(),
    });
  };

  const closeModal = () => {
    setConfirmingUserDeletion(false);

    clearErrors();
    reset();
  };

  return (
    <Card className="border-destructive-light shadow-destructive-light/20">
      <CardHeader>
        <CardTitle>
          Delete Account
        </CardTitle>

        <CardDescription>
          Once your account is deleted, all of its resources and data
          will be permanently deleted. Before deleting your account,
          please download any data or information that you wish to
          retain.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <AlertDialog open={confirmingUserDeletion} onOpenChange={setConfirmingUserDeletion}>
          <AlertDialogTrigger asChild>
            <Button variant="destructive">
              Delete Account
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent className="sm:max-w-[425px]">
            <AlertDialogHeader>
              <AlertDialogTitle>
                Are you sure you want to delete your account?
              </AlertDialogTitle>
              <AlertDialogDescription>
                Once your account is deleted, all of its resources and
                data will be permanently deleted. Please enter your
                password to confirm you would like to permanently delete
                your account.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <form id="deleteAccount" onSubmit={deleteUser}>
              <Label
                htmlFor="password"
                className="sr-only"
              >
                Password
              </Label>

              <Input
                id="password"
                type="password"
                name="password"
                ref={passwordInput}
                value={data.password}
                onChange={(e) =>
                  setData('password', e.target.value)
                }
                autoFocus
                placeholder="Password"
                error={errors.password}
              />
            </form>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <Button
                form="deleteAccount"
                disabled={processing}
                variant="destructive"
                type="submit"
              >
                Delete Account
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </CardContent>
    </Card>
  );
}
