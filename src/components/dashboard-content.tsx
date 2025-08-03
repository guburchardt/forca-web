"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Users, 
  Calendar, 
  Clock, 
  TrendingUp, 
  Dumbbell,
  Activity,
  Target,
  Award
} from "lucide-react"

export function DashboardContent() {
  const stats = [
    {
      title: "Total de Alunos",
      value: "1,234",
      change: "+12%",
      changeType: "positive",
      icon: Users,
      description: "vs. mês passado"
    },
    {
      title: "Aulas Hoje",
      value: "24",
      change: "+3",
      changeType: "positive",
      icon: Calendar,
      description: "aulas agendadas"
    },
    {
      title: "Horas Treinadas",
      value: "156h",
      change: "+8%",
      changeType: "positive",
      icon: Clock,
      description: "este mês"
    },
    {
      title: "Taxa de Retenção",
      value: "94%",
      change: "+2%",
      changeType: "positive",
      icon: TrendingUp,
      description: "alunos ativos"
    }
  ]

  const recentActivities = [
    {
      title: "João Silva se matriculou",
      time: "2 minutos atrás",
      type: "enrollment"
    },
    {
      title: "Aula de Yoga cancelada",
      time: "15 minutos atrás",
      type: "cancellation"
    },
    {
      title: "Maria Santos completou treino",
      time: "1 hora atrás",
      type: "completion"
    },
    {
      title: "Novo instrutor contratado",
      time: "2 horas atrás",
      type: "hiring"
    }
  ]

  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                <span className={`text-${stat.changeType === 'positive' ? 'green' : 'red'}-600`}>
                  {stat.change}
                </span>
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Recent Activities */}
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Atividades Recentes</CardTitle>
            <CardDescription>
              Últimas atividades do sistema
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                    <Activity className="h-4 w-4" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {activity.title}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {activity.time}
                    </p>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {activity.type}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Ações Rápidas</CardTitle>
            <CardDescription>
              Acesse rapidamente as principais funcionalidades
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2">
              <Button variant="outline" className="justify-start">
                <Users className="mr-2 h-4 w-4" />
                Adicionar Aluno
              </Button>
              <Button variant="outline" className="justify-start">
                <Calendar className="mr-2 h-4 w-4" />
                Criar Aula
              </Button>
              <Button variant="outline" className="justify-start">
                <Dumbbell className="mr-2 h-4 w-4" />
                Adicionar Exercício
              </Button>
              <Button variant="outline" className="justify-start">
                <Target className="mr-2 h-4 w-4" />
                Criar Evento
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Row */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Performance Chart Placeholder */}
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Performance dos Alunos</CardTitle>
            <CardDescription>
              Progresso dos alunos nos últimos 30 dias
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] flex items-center justify-center bg-muted/50 rounded-lg">
              <div className="text-center">
                <TrendingUp className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
                <p className="text-sm text-muted-foreground">Gráfico de Performance</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card>
          <CardHeader>
            <CardTitle>Conquistas</CardTitle>
            <CardDescription>
              Metas alcançadas este mês
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-yellow-500" />
                <span className="text-sm">100+ alunos ativos</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-green-500" />
                <span className="text-sm">95% satisfação</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-blue-500" />
                <span className="text-sm">50+ aulas/mês</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 