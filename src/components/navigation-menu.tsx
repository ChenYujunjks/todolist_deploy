"use client";

import * as React from "react";
import Link from "next/link";
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function NavigationMenuDemo() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        {/* Hello 页面菜单：支持锚点跳转 */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Hello</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 w-[300px]">
              <ListItem href="/hello" title="Full Page">
                View full Hello page with multiple sections.
              </ListItem>
              <ListItem href="/hello#coinbase-price" title="Section 1">
                Jump to first section on Hello page.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Coinbase 页面 */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Coinbase</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 w-[300px]">
              <ListItem href="/coinbase" title="Coinbase Integration">
                Example integration with Coinbase API or interface.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Todo List 页面 */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Todo List</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 w-[300px]">
              <ListItem href="/todolist" title="Track Tasks">
                View and manage your todos and task states.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* 图标菜单项（例如任务状态） */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>With Icon</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-4 w-[240px]">
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/todolist#backlog"
                    className="flex items-center gap-2"
                  >
                    <CircleHelpIcon className="w-4 h-4" />
                    Backlog
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    href="/todolist#todo"
                    className="flex items-center gap-2"
                  >
                    <CircleIcon className="w-4 h-4" />
                    To Do
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    href="/todolist#done"
                    className="flex items-center gap-2"
                  >
                    <CircleCheckIcon className="w-4 h-4" />
                    Done
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Docs（跳转链接菜单项） */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/tailwind">Tailwind</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href} className="block p-2 hover:bg-muted rounded-sm">
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-sm text-muted-foreground leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
