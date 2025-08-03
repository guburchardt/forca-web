"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { 
  TrendingUp, 
  Calendar, 
  Target, 
  Award,
  Activity,
  Clock
} from "lucide-react"

export function StudentHistoryContent() {
  const studentHistory = [
    {
      id: 1,
      name: "João Silva",
      avatar: "/avatars/joao.jpg",
      progress: 85,
      lastVisit: "2024-01-15",
      totalWorkouts: 45,
      currentStreak: 12,
      achievements: ["Primeira Semana", "Mês Completo", "Meta Atingida"]
    },
    {
      id: 2,
      name: "Maria Santos",
      avatar: "/avatars/maria.jpg",
      progress: 92,
      lastVisit: "2024-01-14",
      totalWorkouts: 67,
      currentStreak: 8,
      achievements: ["Primeira Semana", "Mês Completo", "Meta Atingida", "Consistência"]
    }
  ]

  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Histórico dos Alunos</h1>
          <p className="text-muted-foreground">
            Acompanhe o progresso e histórico dos alunos
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Alunos</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{studentHistory.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Média de Progresso</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.round(studentHistory.reduce((acc, s) => acc + s.progress, 0) / studentHistory.length)}%
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Treinos Totais</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {studentHistory.reduce((acc, s) => acc + s.totalWorkouts, 0)}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conquistas</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {studentHistory.reduce((acc, s) => acc + s.achievements.length, 0)}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Student History Tabs */}
      <Card>
        <CardHeader>
          <CardTitle>Histórico Detalhado</CardTitle>
          <CardDescription>
            Visualize o progresso individual de cada aluno
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="progress" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="progress">Progresso</TabsTrigger>
              <TabsTrigger value="workouts">Treinos</TabsTrigger>
              <TabsTrigger value="achievements">Conquistas</TabsTrigger>
            </TabsList>
            
            <TabsContent value="progress" className="space-y-4">
              {studentHistory.map((student) => (
                <div key={student.id} className="flex items-center gap-4 p-4 border rounded-lg">
                  <Avatar>
                    <AvatarImage src={student.avatar} />
                    <AvatarFallback>
                      {student.name.split(" ").map(n => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">{student.name}</h4>
                      <Badge variant="outline">{student.progress}%</Badge>
                    </div>
                    <Progress value={student.progress} className="w-full" />
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        Última visita: {new Date(student.lastVisit).toLocaleDateString("pt-BR")}
                      </span>
                      <span className="flex items-center gap-1">
                        <Activity className="h-3 w-3" />
                        Sequência: {student.currentStreak} dias
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </TabsContent>
            
            <TabsContent value="workouts" className="space-y-4">
              {studentHistory.map((student) => (
                <div key={student.id} className="p-4 border rounded-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar>
                      <AvatarImage src={student.avatar} />
                      <AvatarFallback>
                        {student.name.split(" ").map(n => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium">{student.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {student.totalWorkouts} treinos realizados
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium">Sequência Atual</p>
                      <p className="text-muted-foreground">{student.currentStreak} dias</p>
                    </div>
                    <div>
                      <p className="font-medium">Última Visita</p>
                      <p className="text-muted-foreground">
                        {new Date(student.lastVisit).toLocaleDateString("pt-BR")}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </TabsContent>
            
            <TabsContent value="achievements" className="space-y-4">
              {studentHistory.map((student) => (
                <div key={student.id} className="p-4 border rounded-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar>
                      <AvatarImage src={student.avatar} />
                      <AvatarFallback>
                        {student.name.split(" ").map(n => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium">{student.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {student.achievements.length} conquistas
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {student.achievements.map((achievement, index) => (
                      <Badge key={index} variant="secondary">
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
} 