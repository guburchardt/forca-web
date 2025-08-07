"use client"

import React, { createContext, useContext, useState, ReactNode } from "react"

export type UserRole = "instructor" | "admin"

interface UserContextType {
  role: UserRole
  setRole: (role: UserRole) => void
  user: {
    name: string
    email: string
    role: UserRole
  }
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export function UserProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<UserRole>("admin")
  
  const user = {
    name: role === "instructor" ? "João Silva" : "Admin",
    email: role === "instructor" ? "joao.silva@academia.com" : "admin@academia.com",
    role
  }

  return (
    <UserContext.Provider value={{ role, setRole, user }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider")
  }
  return context
} 