import { Link, usePage } from "@inertiajs/react"
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar"
import { LayoutDashboard } from "lucide-react"
import ApplicationLogo from "./ApplicationLogo"
import { NavUser } from "./NavUser"

export default function AppSidebar() {
  const user = usePage().props.auth.user

  const items = [
    {
      icon: LayoutDashboard,
      name: 'dashboard',
      title: 'Dashboard',
    },
  ]

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="h-16 border-b border-sidebar-border items-start justify-center">
        <SidebarMenuButton
          size="lg"
          asChild
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <Link href="/" className="truncate font-semibold">
            <ApplicationLogo className="!size-8 p-1 fill-current" />
            Laravel
          </Link>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item,i) => (
                <SidebarMenuItem key={i}>
                  <SidebarMenuButton asChild isActive={route().current(item.name)} tooltip={item.title}>
                    <Link href={route(item.name)}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  )
}
