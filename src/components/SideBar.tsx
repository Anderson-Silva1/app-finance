"use client";
import {
  ArrowDownCircle,
  ArrowUpCircle,
  Banknote,
  Layout,
  Wallet,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  // SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useUser } from "@clerk/nextjs";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback, AvatarImage } from "./ui/avatar";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: Layout,
  },
  {
    title: "Transações",
    url: "/transactions",
    icon: Banknote,
  },
  {
    title: "Receitas",
    url: "/income",
    icon: ArrowUpCircle,
  },
  {
    title: "Despesas",
    url: "/expenses",
    icon: ArrowDownCircle,
  },
  {
    title: "Investimentos",
    url: "/investments",
    icon: Wallet,
  },
];

export function SideBar() {
  const { user } = useUser();

  return (
    <Sidebar>
      <SidebarHeader className="flex flex-row items-center justify-between px-[4%] py-6">
        <div>
          <p className="text-center indent-0 text-base">{`Seja bem vindo, ${user?.firstName}!`}</p>
        </div>
        <div className="h-8 w-8">
          <Avatar>
            <AvatarImage src={user?.imageUrl} className="rounded-full" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Finance AI</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* <SidebarFooter className="flex flex-row p-4 justify-between items-center">
        <div>
          <p>{`Olá ${user?.firstName}`}</p>
        </div>
        <UserButton />
      </SidebarFooter> */}
    </Sidebar>
  );
}
