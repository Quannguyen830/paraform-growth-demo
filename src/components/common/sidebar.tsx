'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, Database, PieChart, Terminal, Search, Mail, Archive, Menu } from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from '~/components/ui/sidebar'
import { cn } from '~/lib/utils'
import { PrimaryIcon } from "../../app/_components/images/primary-icon"

const routes = [
  {
    icon: Menu,
    href: '/',
  },
  {
    icon: LayoutDashboard,
    href: '/manage',
  },
  {
    icon: Archive,
    href: '/archive',
  },
  {
    icon: LayoutDashboard,
    href: '/layout',
  },
  {
    icon: PieChart,
    href: '/analytics',
  },
  {
    icon: Mail,
    href: '/messages',
  },
  {
    icon: Database,
    href: '/database',
  },
  {
    icon: Search,
    href: '/search',
  },
  {
    icon: Terminal,
    href: '/terminal',
  },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar>
      <div className="w-full border-b">
        <SidebarHeader className='flex justify-center items-center'>
          <div className="flex h-14 items-center">
            <PrimaryIcon />
          </div>
        </SidebarHeader>
      </div>
      <SidebarContent>
        <SidebarMenu>
          {routes.map((route) => (
            <SidebarMenuItem key={route.href}>
              <Link href={route.href} passHref legacyBehavior>
                <SidebarMenuButton
                  isActive={pathname === route.href}
                  className={cn(
                    'justify-center p-2',
                    'hover:bg-gray-100 dark:hover:bg-gray-800',
                    pathname === route.href && 'bg-gray-200 dark:bg-gray-800'
                  )}
                >
                  <route.icon className="h-5 w-5" />
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  )
}

