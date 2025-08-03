"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { Calendar as CalendarIcon, Plus, Users, Clock, MapPin } from "lucide-react"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

export function ClassesContent() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  const classes = [
    {
      id: 1,
      name: "Yoga Matinal",
      instructor: "Ana Silva",
      time: "07:00 - 08:00",
      room: "Sala 1",
      capacity: 15,
      enrolled: 12,
      status: "Agendada"
    },
    {
      id: 2,
      name: "Musculação",
      instructor: "Carlos Santos",
      time: "09:00 - 10:30",
      room: "Academia",
      capacity: 20,
      enrolled: 18,
      status: "Agendada"
    },
    {
      id: 3,
      name: "Pilates",
      instructor: "Maria Costa",
      time: "14:00 - 15:00",
      room: "Sala 2",
      capacity: 10,
      enrolled: 8,
      status: "Agendada"
    },
    {
      id: 4,
      name: "Spinning",
      instructor: "João Oliveira",
      time: "18:00 - 19:00",
      room: "Sala de Spinning",
      capacity: 12,
      enrolled: 12,
      status: "Lotada"
    }
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Agendada":
        return <Badge className="bg-blue-100 text-blue-800">Agendada</Badge>
      case "Lotada":
        return <Badge className="bg-red-100 text-red-800">Lotada</Badge>
      case "Cancelada":
        return <Badge variant="secondary">Cancelada</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Gestão de Aulas</h1>
          <p className="text-muted-foreground">
            Gerencie o calendário de aulas e instrutores
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Criar Aula
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Aulas Hoje</CardTitle>
            <CalendarIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{classes.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Instrutores</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Salas Disponíveis</CardTitle>
            <MapPin className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Horas de Aula</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156h</div>
          </CardContent>
        </Card>
      </div>

      {/* Calendar and Classes */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Calendar */}
        <Card>
          <CardHeader>
            <CardTitle>Calendário de Aulas</CardTitle>
            <CardDescription>
              Visualize as aulas agendadas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
              locale={ptBR}
            />
          </CardContent>
        </Card>

        {/* Today's Classes */}
        <Card>
          <CardHeader>
            <CardTitle>Aulas de Hoje</CardTitle>
            <CardDescription>
              {date && format(date, "EEEE, d 'de' MMMM", { locale: ptBR })}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {classes.map((classItem) => (
                <div key={classItem.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium">{classItem.name}</h4>
                      {getStatusBadge(classItem.status)}
                    </div>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {classItem.instructor}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {classItem.time}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {classItem.room}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">
                      {classItem.enrolled}/{classItem.capacity}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      inscritos
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Classes */}
      <Card>
        <CardHeader>
          <CardTitle>Próximas Aulas</CardTitle>
          <CardDescription>
            Aulas agendadas para os próximos dias
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {classes.map((classItem) => (
              <div key={classItem.id} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">{classItem.name}</h4>
                  {getStatusBadge(classItem.status)}
                </div>
                <div className="text-sm text-muted-foreground space-y-1">
                  <div>{classItem.instructor}</div>
                  <div>{classItem.time}</div>
                  <div>{classItem.room}</div>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex-1 bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full" 
                        style={{ width: `${(classItem.enrolled / classItem.capacity) * 100}%` }}
                      />
                    </div>
                    <span className="text-xs">
                      {classItem.enrolled}/{classItem.capacity}
                    </span>
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