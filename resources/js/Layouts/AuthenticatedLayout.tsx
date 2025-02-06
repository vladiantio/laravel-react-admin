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
                <main>{children}</main>
            </SidebarInset>
        </SidebarProvider>
    );
}
