'use client'

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";

export const UserButton = () => {
    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger className="outline-none relative">
                <Avatar className="size-10 hover:opcaity-75 transition">
                    <AvatarImage alt={name} src={imageUrl || ""} />
                </Avatar>
            </DropdownMenuTrigger>
        </DropdownMenu>
    );
}