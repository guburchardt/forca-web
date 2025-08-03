"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  Clock, 
  Play, 
  Pause, 
  Square,
  Plus,
  Calendar,
  Target,
  TrendingUp
} from "lucide-react"

export function TimeTrackingContent() {
  const timeEntries = [
    {
      id: 1,
      project: "Treino Aluno João",
      activity: "Musculação",
      startTime: "09:00",
      endTime: "10:30",
      duration: "1h 30min",
      status: "Concluído"
    },
    {
      id: 2,
      project: "Aula de Yoga",
      activity: "Instrutor",
      startTime: "14:00",
      endTime: "15:00",
      duration: "1h",
      status: "Em Andamento"
    },
    {
      id: 3,
      project: "Avaliação Física",
      activity: "Consultoria",
      startTime: "16:00",
      endTime: "17:00",
      duration: "1h",
      status: "Pendente"
    }
  ]

  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Controle de Tempo</h1>
          <p className="text-muted-foreground">
            Gerencie o tempo dedicado às atividades da academia
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Pause className="mr-2 h-4 w-4" />
            Pausar
          </Button>
          <Button>
            <Play className="mr-2 h-4 w-4" />
            Iniciar Atividade
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Horas Hoje</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6h 30min</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Atividades</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{timeEntries.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Meta Semanal</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">85%</div>
            <Progress value={85} className="mt-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Projetos</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
          </CardContent>
        </Card>
      </div>

      {/* Current Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Atividade Atual</CardTitle>
          <CardDescription>
            Controle o tempo da atividade em andamento
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Play className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Aula de Yoga</h4>
                <p className="text-sm text-muted-foreground">Instrutor</p>
                <p className="text-xs text-muted-foreground">Iniciado às 14:00</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">01:23:45</div>
              <p className="text-sm text-muted-foreground">Tempo decorrido</p>
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <Button variant="outline" className="flex-1">
              <Pause className="mr-2 h-4 w-4" />
              Pausar
            </Button>
            <Button variant="destructive" className="flex-1">
              <Square className="mr-2 h-4 w-4" />
              Parar
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Time Entries */}
      <Card>
        <CardHeader>
          <CardTitle>Registros de Tempo</CardTitle>
          <CardDescription>
            Histórico das atividades registradas hoje
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {timeEntries.map((entry) => (
              <div key={entry.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-muted rounded-lg">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium">{entry.project}</h4>
                    <p className="text-sm text-muted-foreground">{entry.activity}</p>
                    <p className="text-xs text-muted-foreground">
                      {entry.startTime} - {entry.endTime}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium">{entry.duration}</div>
                  <Badge 
                    variant={entry.status === "Concluído" ? "default" : 
                           entry.status === "Em Andamento" ? "secondary" : "outline"}
                  >
                    {entry.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 