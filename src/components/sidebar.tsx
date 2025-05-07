"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  PieChart,
  Settings,
  LogOut,
  Menu,
  CreditCard,
  Target,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface NavItem {
  title: string;
  href: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Transações",
    href: "/transactions",
    icon: ArrowUpDown,
  },
  {
    title: "Receitas",
    href: "/income",
    icon: ArrowUp,
  },
  {
    title: "Despesas",
    href: "/expenses",
    icon: ArrowDown,
  },
  {
    title: "Orçamento",
    href: "/budget",
    icon: PieChart,
  },
  {
    title: "Contas",
    href: "/accounts",
    icon: CreditCard,
  },
  {
    title: "Metas",
    href: "/goals",
    icon: Target,
  },
  {
    title: "Configurações",
    href: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Navigation */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild className="lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="fixed top-2 left-2 h-10 w-10"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Abrir menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[280px] p-0">
          <div className="flex h-full flex-col">
            <div className="flex h-14 items-center border-b px-4">
              <Link
                href="/"
                className="flex items-center gap-2 font-semibold"
                onClick={() => setOpen(false)}
              >
                <PieChart className="h-6 w-6 text-green-600 dark:text-green-500" />
                <span>Gestão Financeira</span>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className="ml-auto h-8 w-8"
                onClick={() => setOpen(false)}
              >
                {/* <X className="h-5 w-5" /> */}
                <span className="sr-only">Fechar menu</span>
              </Button>
            </div>
            <div className="flex-1 overflow-auto py-2">
              <nav className="grid gap-1 px-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "hover:bg-accent flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium",
                      pathname === item.href
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground",
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.title}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="mt-auto border-t p-4">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage
                    src="/placeholder.svg?height=32&width=32"
                    alt="Avatar"
                  />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">João Silva</span>
                  <span className="text-muted-foreground text-xs">
                    joao@exemplo.com
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="ml-auto h-8 w-8"
                  asChild
                >
                  <Link href="/login">
                    <LogOut className="h-5 w-5" />
                    <span className="sr-only">Sair</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Desktop Navigation */}
      <div className="bg-background hidden border-r lg:block">
        <div className="flex h-full max-h-screen flex-col">
          <div className="flex h-14 items-center border-b px-4">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <PieChart className="h-6 w-6 text-green-600 dark:text-green-500" />
              <span>Gestão Financeira</span>
            </Link>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid gap-1 px-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "hover:bg-accent flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium",
                    pathname === item.href
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground",
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
          <div className="mt-auto border-t p-4">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage
                  src="/placeholder.svg?height=32&width=32"
                  alt="Avatar"
                />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="text-sm font-medium">João Silva</span>
                <span className="text-muted-foreground text-xs">
                  joao@exemplo.com
                </span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="ml-auto h-8 w-8"
                asChild
              >
                <Link href="/login">
                  <LogOut className="h-5 w-5" />
                  <span className="sr-only">Sair</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
