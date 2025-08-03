"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { 
  MapPin, 
  Plus, 
  Settings,
  Users,
  Clock,
  Calendar,
  CheckCircle,
  AlertCircle
} from "lucide-react"

export function AgendaResourcesContent() {
  const resources = [
    {
      id: 1,
      name: "Sala de Musculação",
      type: "Sala",
      capacity: 20,
      status: "Disponível",
      currentUsage: 15,
      location: "1º Andar",
      equipment: ["Bancos", "Barras", "Halteres", "Cardio"]
    },
    {
      id: 2,
      name: "Sala de Yoga",
      type: "Sala",
      capacity: 15,
      status: "Ocupado",
      currentUsage: 15,
      location: "2º Andar",
      equipment: ["Tapetes", "Blocos", "Cintos"]
    },
    {
      id: 3,
      name: "Academia Principal",
      type: "Área",
      capacity: 30,
      status: "Disponível",
      currentUsage: 8,
      location: "Térreo",
      equipment: ["Esteiras", "Bicicletas", "Elípticos"]
    },
    {
      id: 4,
      name: "Sala de Funcional",
      type: "Sala",
      capacity: 12,
      status: "Manutenção",
      currentUsage: 0,
      location: "1º Andar",
      equipment: ["Cordas", "Kettlebells", "TRX"]
    }
  ]

  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Recursos</h1>
          <p className="text-muted-foreground">
            Gerencie recursos e espaços da academia
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Adicionar Recurso
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Recursos</CardTitle>
            <MapPin className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{resources.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Disponíveis</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {resources.filter(r => r.status === "Disponível").length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Capacidade Total</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {resources.reduce((acc, r) => acc + r.capacity, 0)}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Utilização</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.round((resources.reduce((acc, r) => acc + r.currentUsage, 0) / resources.reduce((acc, r) => acc + r.capacity, 0)) * 100)}%
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Recursos Disponíveis</CardTitle>
          <CardDescription>
            Visualize e gerencie todos os recursos
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 mb-4">
            <div className="relative flex-1">
              <MapPin className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar recursos..."
                className="pl-8"
              />
            </div>
            <Button variant="outline">
              Filtrar
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => (
              <Card key={resource.id} className="overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">{resource.name}</CardTitle>
                      <CardDescription>{resource.type}</CardDescription>
                    </div>
                    <Badge 
                      variant={resource.status === "Disponível" ? "default" : 
                             resource.status === "Ocupado" ? "secondary" : "destructive"}
                    >
                      {resource.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-3 w-3 text-muted-foreground" />
                    <span>{resource.currentUsage}/{resource.capacity} pessoas</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-3 w-3 text-muted-foreground" />
                    <span>{resource.location}</span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Utilização</span>
                      <span>{Math.round((resource.currentUsage / resource.capacity) * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          resource.status === "Disponível" ? "bg-green-500" :
                          resource.status === "Ocupado" ? "bg-yellow-500" : "bg-red-500"
                        }`}
                        style={{width: `${(resource.currentUsage / resource.capacity) * 100}%`}}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <div className="text-sm font-medium mb-1">Equipamentos:</div>
                    <div className="flex flex-wrap gap-1">
                      {resource.equipment.slice(0, 3).map((item, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {item}
                        </Badge>
                      ))}
                      {resource.equipment.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{resource.equipment.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      Ver Detalhes
                    </Button>
                    <Button variant="outline" size="sm">
                      <Settings className="h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 