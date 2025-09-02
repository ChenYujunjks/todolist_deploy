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
        {/* Tailwind 页面 */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/tailwind">Tailwind</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Zod 页面 */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/zod">Zod Example</Link>
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
