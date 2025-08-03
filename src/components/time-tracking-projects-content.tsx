"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  FolderOpen, 
  Plus, 
  Clock,
  Users,
  Calendar,
  Target,
  TrendingUp
} from "lucide-react"

export function TimeTrackingProjectsContent() {
  const projects = [
    {
      id: 1,
      name: "Treinamento de Novos Alunos",
      description: "Programa de adaptação para novos alunos",
      status: "Em Andamento",
      progress: 75,
      totalHours: 120,
      spentHours: 90,
      team: ["João Silva", "Maria Santos"],
      deadline: "2024-02-15"
    },
    {
      id: 2,
      name: "Reformulação de Aulas",
      description: "Atualização do programa de aulas em grupo",
      status: "Concluído",
      progress: 100,
      totalHours: 80,
      spentHours: 80,
      team: ["Carlos Oliveira", "Ana Costa"],
      deadline: "2024-01-30"
    },
    {
      id: 3,
      name: "Campanha de Marketing",
      description: "Estratégia de marketing digital",
      status: "Pendente",
      progress: 25,
      totalHours: 60,
      spentHours: 15,
      team: ["Pedro Lima"],
      deadline: "2024-03-01"
    },
    {
      id: 4,
      name: "Manutenção de Equipamentos",
      description: "Revisão e manutenção dos equipamentos",
      status: "Em Andamento",
      progress: 45,
      totalHours: 40,
      spentHours: 18,
      team: ["Roberto Alves"],
      deadline: "2024-02-10"
    }
  ]

  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Projetos</h1>
          <p className="text-muted-foreground">
            Gerencie projetos e alocação de tempo
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Novo Projeto
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Projetos</CardTitle>
            <FolderOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{projects.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Em Andamento</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {projects.filter(p => p.status === "Em Andamento").length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Horas Alocadas</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {projects.reduce((acc, p) => acc + p.totalHours, 0)}h
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Progresso Médio</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.round(projects.reduce((acc, p) => acc + p.progress, 0) / projects.length)}%
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Projects List */}
      <Card>
        <CardHeader>
          <CardTitle>Projetos Ativos</CardTitle>
          <CardDescription>
            Visualize e gerencie todos os projetos
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {projects.map((project) => (
              <div key={project.id} className="p-4 border rounded-lg">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-medium text-lg">{project.name}</h3>
                      <Badge 
                        variant={project.status === "Concluído" ? "default" : 
                               project.status === "Em Andamento" ? "secondary" : "outline"}
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3 text-muted-foreground" />
                        <span>{project.spentHours}h / {project.totalHours}h</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3 text-muted-foreground" />
                        <span>{project.team.length} membros</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3 text-muted-foreground" />
                        <span>Prazo: {new Date(project.deadline).toLocaleDateString("pt-BR")}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">{project.progress}%</div>
                    <div className="text-xs text-muted-foreground">concluído</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progresso</span>
                    <span>{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} className="w-full" />
                  
                  <div className="flex gap-2 pt-3">
                    <Button variant="outline" size="sm">
                      Ver Detalhes
                    </Button>
                    <Button variant="outline" size="sm">
                      Editar
                    </Button>
                    <Button variant="outline" size="sm">
                      Registrar Tempo
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 