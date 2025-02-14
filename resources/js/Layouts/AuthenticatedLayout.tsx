import AppHeader from '@/components/AppHeader';
import AppSidebar from '@/components/AppSidebar';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { PropsWithChildren, ReactNode } from 'react';

export default function Authenticated({
    header,
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <AppHeader header={header} />
                <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 w-full">{children}</main>
            </SidebarInset>
        </SidebarProvider>
    );
}
