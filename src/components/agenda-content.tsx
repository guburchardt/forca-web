"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { 
  Calendar as CalendarIcon, 
  Plus, 
  Clock,
  MapPin,
  Users,
  CheckCircle
} from "lucide-react"
import { useState } from "react"

export function AgendaContent() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  const bookings = [
    {
      id: 1,
      title: "Sala de Musculação",
      time: "09:00 - 10:00",
      user: "João Silva",
      status: "Confirmado",
      type: "Treino"
    },
    {
      id: 2,
      title: "Sala de Yoga",
      time: "14:00 - 15:00",
      user: "Maria Santos",
      status: "Pendente",
      type: "Aula"
    },
    {
      id: 3,
      title: "Academia",
      time: "16:00 - 17:30",
      user: "Carlos Oliveira",
      status: "Confirmado",
      type: "Treino"
    }
  ]

  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Agenda</h1>
          <p className="text-muted-foreground">
            Gerencie reservas e disponibilidade de recursos
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nova Reserva
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Reservas Hoje</CardTitle>
            <CalendarIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{bookings.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Recursos</CardTitle>
            <MapPin className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Disponíveis</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Usuários</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
          </CardContent>
        </Card>
      </div>

      {/* Calendar and Bookings */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Calendar */}
        <Card>
          <CardHeader>
            <CardTitle>Calendário</CardTitle>
            <CardDescription>
              Visualize as reservas por data
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </CardContent>
        </Card>

        {/* Today's Bookings */}
        <Card>
          <CardHeader>
            <CardTitle>Reservas de Hoje</CardTitle>
            <CardDescription>
              {date && date.toLocaleDateString("pt-BR")}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {bookings.map((booking) => (
                <div key={booking.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <MapPin className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">{booking.title}</h4>
                      <p className="text-sm text-muted-foreground">{booking.user}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Clock className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{booking.time}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline" className="mb-1">{booking.type}</Badge>
                    <Badge 
                      variant={booking.status === "Confirmado" ? "default" : "secondary"}
                      className="block"
                    >
                      {booking.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Resources */}
      <Card>
        <CardHeader>
          <CardTitle>Recursos Disponíveis</CardTitle>
          <CardDescription>
            Status dos recursos da academia
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-4 border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium">Sala de Musculação</h4>
                <Badge className="bg-green-100 text-green-800">Disponível</Badge>
              </div>
              <p className="text-sm text-muted-foreground">Capacidade: 20 pessoas</p>
            </div>
            
            <div className="p-4 border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium">Sala de Yoga</h4>
                <Badge variant="secondary">Ocupado</Badge>
              </div>
              <p className="text-sm text-muted-foreground">Capacidade: 15 pessoas</p>
            </div>
            
            <div className="p-4 border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium">Academia</h4>
                <Badge className="bg-green-100 text-green-800">Disponível</Badge>
              </div>
              <p className="text-sm text-muted-foreground">Capacidade: 30 pessoas</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 