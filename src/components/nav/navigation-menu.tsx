"use client";

import * as React from "react";
import Link from "next/link";

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
        <NavigationMenuItem>
          <NavigationMenuTrigger>Personal</NavigationMenuTrigger>
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

        <NavigationMenuItem>
          <NavigationMenuTrigger>Static Pages</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 w-[300px]">
              <ListItem href="/memo" title="Memo">
                Quick notes and memos.
              </ListItem>
              <ListItem href="/stipend" title="Stipend Page">
                Quick notes and memos.
              </ListItem>
              <ListItem href="/zod-lab" title="Zod Lab">
                Zod validation playground.
              </ListItem>
              <ListItem href="/zod-lab/coerce-vs-enum" title="Coerce vs Enum">
                Compare z.coerce.boolean() and z.enum().
              </ListItem>
            </ul>
          </NavigationMenuContent>
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
