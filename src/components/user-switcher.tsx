"use client"

import * as React from "react"
import { Check, ChevronsUpDown, Dumbbell, User } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function UserSwitcher() {
  const [selectedUser, setSelectedUser] = React.useState("Admin")

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="bg-brand text-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                <Dumbbell className="size-4" />
              </div>
              <div className="flex flex-col gap-0.5 leading-none">
                <span className="font-medium">Conexão Treinamento</span>
                <span className="text-xs">{selectedUser}</span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width)"
            align="start"
          >
            <DropdownMenuItem
              onSelect={() => setSelectedUser("Admin")}
            >
              <User className="mr-2 h-4 w-4" />
              Admin
              {selectedUser === "Admin" && <Check className="ml-auto" />}
            </DropdownMenuItem>
            <DropdownMenuItem
              onSelect={() => setSelectedUser("Instrutor")}
            >
              <User className="mr-2 h-4 w-4" />
              Instrutor
              {selectedUser === "Instrutor" && <Check className="ml-auto" />}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
} 