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
} from "@/components/ui/navigation-menu";

export function NavigationMenuDemo() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Market Structure</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 w-[340px]">
              <ListItem href="/trading/trade-notes" title="Trade Notes">
                Personal trading notes, setups, execution reviews, and lessons
                learned.
              </ListItem>

              <ListItem
                href="/trading/long-lower-shadow"
                title="Long Lower Shadow "
              >
                Sweep Reclaim 长下影线与假跌破收回模型
              </ListItem>
              <ListItem
                href="/trading/reversal-patterns"
                title="Reversal Patterns"
              >
                Double Bottom / Inverse Head and Shoulders 双底与头肩底反转模型
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Trading</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 w-[340px]">
              <ListItem href="/trading/liquidity" title="Liquidity">
                BSL / SSL, liquidity sweeps, stop hunts, and reversal logic.
              </ListItem>

              <ListItem href="/trading/oi" title="Open Interest">
                Judge whether price movement is driven by new positions or
                position release.
              </ListItem>

              <ListItem href="/trading/funding-rates" title="Funding Rate">
                Understand market crowding, long/short bias, and liquidation
                risk.
              </ListItem>

              <ListItem href="/trading/delta" title="Delta">
                Analyze aggressive buying and selling pressure behind price
                moves.
              </ListItem>

              <ListItem href="/trading/cvd" title="CVD">
                Cumulative Volume Delta, divergence, and order flow
                confirmation.
              </ListItem>

              <ListItem href="/trading/bsl" title="BSL Model">
                Learn BSL
              </ListItem>

              <ListItem href="/trading/smt" title="SMT Notes">
                Smart Money Technique notes for divergence between correlated
                markets.
              </ListItem>

              <ListItem href="/trading/fvg" title="FVG">
                Fair Value Gap, imbalance zones, and pullback entry areas.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

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

        <NavigationMenuItem>
          <NavigationMenuTrigger>Personal</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 w-[300px]">
              <ListItem href="/risk-management" title="Risk Management">
                Risk management page.
              </ListItem>
              <ListItem href="/hello" title="Full Page">
                View full Hello page with multiple sections.
              </ListItem>
              <ListItem href="/hello#coinbase-price" title="Section 1">
                Jump to first section on Hello page.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Static Pages</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 w-[300px]">
              <ListItem href="/stipend" title="Stipend Page">
                Money Calendar 2025 Cashflow Tracker
              </ListItem>
              <ListItem href="/trades" title="Trades Page">
                Trades page.
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
