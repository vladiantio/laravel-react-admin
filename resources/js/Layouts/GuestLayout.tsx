import ApplicationLogo from '@/components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="flex min-h-screen flex-col items-center pt-6 sm:justify-center sm:pt-0">
            <div>
                <Link href="/">
                    <ApplicationLogo className="h-20 w-20 fill-current text-primary/60" />
                </Link>
            </div>

            <div className="mt-6 w-full sm:max-w-md">
                {children}
            </div>
        </div>
    );
}
