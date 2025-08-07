"use client"

import { useUser } from "@/contexts/user-context"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, UserCheck } from "lucide-react"

export function RoleSwitcher() {
  const { role, setRole } = useUser()

  return (
    <div className="flex items-center gap-2 p-2 border rounded-lg bg-muted/50">
      <div className="flex items-center gap-2">
        <Badge variant={role === "instructor" ? "default" : "secondary"}>
          {role === "instructor" ? (
            <>
              <Users className="h-3 w-3 mr-1" />
              Instrutor
            </>
          ) : (
            <>
              <UserCheck className="h-3 w-3 mr-1" />
              Administrador
            </>
          )}
        </Badge>
      </div>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setRole(role === "instructor" ? "admin" : "instructor")}
        className="text-xs"
      >
        Alternar
      </Button>
    </div>
  )
} 