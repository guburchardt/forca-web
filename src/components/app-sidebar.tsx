import * as React from "react"
import { 
  Dumbbell, 
  Users, 
  Calendar, 
  Clock, 
  BookOpen, 
  BarChart3, 
  Settings,
  User,
  LogOut,
  Search
} from "lucide-react"

import { SearchForm } from "./search-form"
import { UserSwitcher } from "./user-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

// Navigation data for Conexão Treinamento
const navigationData = {
  navMain: [
    {
      title: "Gestão de Alunos",
      url: "/dashboard/students",
      icon: Users,
      items: [
        {
          title: "Lista de Alunos",
          url: "/dashboard/students",
        },
        {
          title: "Adicionar Aluno",
          url: "/dashboard/students/add",
        },
        {
          title: "Histórico",
          url: "/dashboard/students/history",
        },
      ],
    },
    {
      title: "Gestão de Aulas",
      url: "/dashboard/classes",
      icon: Calendar,
      items: [
        {
          title: "Calendário de Aulas",
          url: "/dashboard/classes",
        },
        {
          title: "Criar Aula",
          url: "/dashboard/classes/create",
        },
        {
          title: "Instrutores",
          url: "/dashboard/classes/instructors",
        },
      ],
    },
    {
      title: "Eventos",
      url: "/dashboard/events",
      icon: BookOpen,
      items: [
        {
          title: "Calendário de Eventos",
          url: "/dashboard/events",
        },
        {
          title: "Criar Evento",
          url: "/dashboard/events/create",
        },
        {
          title: "Inscrições",
          url: "/dashboard/events/registrations",
        },
      ],
    },
    {
      title: "Controle de Tempo",
      url: "/dashboard/time-tracking",
      icon: Clock,
      items: [
        {
          title: "Time Sheet",
          url: "/dashboard/time-tracking",
        },
        {
          title: "Relatórios",
          url: "/dashboard/time-tracking/reports",
        },
        {
          title: "Projetos",
          url: "/dashboard/time-tracking/projects",
        },
      ],
    },
    {
      title: "Agenda",
      url: "/dashboard/agenda",
      icon: Calendar,
      items: [
        {
          title: "Reservas",
          url: "/dashboard/agenda",
        },
        {
          title: "Recursos",
          url: "/dashboard/agenda/resources",
        },
        {
          title: "Disponibilidade",
          url: "/dashboard/agenda/availability",
        },
      ],
    },
    {
      title: "Exercícios",
      url: "/dashboard/exercises",
      icon: Dumbbell,
      items: [
        {
          title: "Biblioteca de Exercícios",
          url: "/dashboard/exercises",
        },
        {
          title: "Adicionar Exercício",
          url: "/dashboard/exercises/add",
        },
        {
          title: "Categorias",
          url: "/dashboard/exercises/categories",
        },
      ],
    },
    {
      title: "Relatórios",
      url: "/dashboard/reports",
      icon: BarChart3,
      items: [
        {
          title: "Dashboard",
          url: "/dashboard/reports",
        },
        {
          title: "Relatórios de Alunos",
          url: "/dashboard/reports/students",
        },
        {
          title: "Relatórios Financeiros",
          url: "/dashboard/reports/financial",
        },
        {
          title: "Análises",
          url: "/dashboard/reports/analytics",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <UserSwitcher />
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        {/* Main navigation groups */}
        {navigationData.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel className="flex items-center gap-2">
              <item.icon className="h-4 w-4" />
              {item.title}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((subItem) => (
                  <SidebarMenuItem key={subItem.title}>
                    <SidebarMenuButton asChild>
                      <a href={subItem.url}>{subItem.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
        
        {/* Settings section */}
        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            Configurações
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/dashboard/settings">
                    <Settings className="mr-2 h-4 w-4" />
                    Configurações Gerais
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/dashboard/profile">
                    <User className="mr-2 h-4 w-4" />
                    Perfil
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/login">
                    <LogOut className="mr-2 h-4 w-4" />
                    Sair
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
} 