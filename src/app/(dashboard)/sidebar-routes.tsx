"use client";

import { CreditCard, Home, MessageCircleQuestion } from "lucide-react";
import { SidebarItem } from "./sidebar-item";
import { usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";

export const SidebarRoutes = () => {
    const pathname = usePathname();

    return (
        <div className="flex flex-col gap-y-4 flex-1">
            <ul className="flex flex-col gap-y-1 px-3">
                <SidebarItem
                    href="/"
                    icon={Home}
                    label="Home"
                    isActive={pathname === "/"}
                />
            </ul>
            <div className="px-3">
                <Separator />
            </div>
            <ul className="flex flex-col gap-y-1 px-3">
                <SidebarItem
                    href={pathname}
                    icon={CreditCard}
                    label="Billing"
                    onClick={onclick}
                />
                <SidebarItem
                    href="mailto:support@codewithantonio.com"
                    icon={MessageCircleQuestion}
                    label="Get Help"
                />

            </ul>
        </div>
    );
}