"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { 
  Calendar as CalendarIcon, 
  Clock,
  Users,
  CheckCircle,
  AlertCircle,
  XCircle
} from "lucide-react"
import { useState } from "react"

export function AgendaAvailabilityContent() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  const availability = [
    {
      id: 1,
      resource: "Sala de Musculação",
      time: "09:00 - 10:00",
      status: "Disponível",
      capacity: 20,
      current: 8,
      instructor: "João Silva"
    },
    {
      id: 2,
      resource: "Sala de Yoga",
      time: "14:00 - 15:00",
      status: "Ocupado",
      capacity: 15,
      current: 15,
      instructor: "Maria Santos"
    },
    {
      id: 3,
      resource: "Academia Principal",
      time: "16:00 - 17:30",
      status: "Disponível",
      capacity: 30,
      current: 12,
      instructor: "Carlos Oliveira"
    },
    {
      id: 4,
      resource: "Sala de Funcional",
      time: "18:00 - 19:00",
      status: "Manutenção",
      capacity: 12,
      current: 0,
      instructor: "N/A"
    }
  ]

  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Disponibilidade</h1>
          <p className="text-muted-foreground">
            Verifique a disponibilidade de recursos
          </p>
        </div>
        <Button>
          <CalendarIcon className="mr-2 h-4 w-4" />
          Ver Calendário
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Recursos Disponíveis</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {availability.filter(a => a.status === "Disponível").length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ocupados</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {availability.filter(a => a.status === "Ocupado").length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Em Manutenção</CardTitle>
            <XCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {availability.filter(a => a.status === "Manutenção").length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Taxa de Ocupação</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.round((availability.reduce((acc, a) => acc + a.current, 0) / availability.reduce((acc, a) => acc + a.capacity, 0)) * 100)}%
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Calendar and Availability */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Calendar */}
        <Card>
          <CardHeader>
            <CardTitle>Calendário</CardTitle>
            <CardDescription>
              Selecione uma data para ver a disponibilidade
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

        {/* Today's Availability */}
        <Card>
          <CardHeader>
            <CardTitle>Disponibilidade de Hoje</CardTitle>
            <CardDescription>
              {date && date.toLocaleDateString("pt-BR")}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {availability.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${
                      item.status === "Disponível" ? "bg-green-100" :
                      item.status === "Ocupado" ? "bg-yellow-100" : "bg-red-100"
                    }`}>
                      {item.status === "Disponível" ? (
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      ) : item.status === "Ocupado" ? (
                        <AlertCircle className="h-4 w-4 text-yellow-600" />
                      ) : (
                        <XCircle className="h-4 w-4 text-red-600" />
                      )}
                    </div>
                    <div>
                      <h4 className="font-medium">{item.resource}</h4>
                      <p className="text-sm text-muted-foreground">{item.time}</p>
                      <p className="text-xs text-muted-foreground">{item.instructor}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge 
                      variant={item.status === "Disponível" ? "default" : 
                             item.status === "Ocupado" ? "secondary" : "destructive"}
                      className="mb-1"
                    >
                      {item.status}
                    </Badge>
                    <div className="text-sm">
                      {item.current}/{item.capacity}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Availability */}
      <Card>
        <CardHeader>
          <CardTitle>Detalhamento por Horário</CardTitle>
          <CardDescription>
            Visualize a disponibilidade por período
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { period: "Manhã (06:00 - 12:00)", available: 3, total: 4 },
              { period: "Tarde (12:00 - 18:00)", available: 2, total: 4 },
              { period: "Noite (18:00 - 22:00)", available: 1, total: 4 }
            ].map((item) => (
              <div key={item.period} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">{item.period}</h4>
                  <Badge variant="outline">{item.available}/{item.total}</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Disponíveis</span>
                    <span className="font-medium">{item.available}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Ocupados</span>
                    <span className="font-medium">{item.total - item.available}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full"
                      style={{width: `${(item.available / item.total) * 100}%`}}
                    ></div>
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