"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users, Plus } from "lucide-react"

export function EventsContent() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Eventos</h1>
          <p className="text-muted-foreground">
            Gerencie eventos, workshops e atividades especiais da academia
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Criar Evento
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Eventos</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">
              +12% em relação ao mês passado
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Próximos Eventos</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">
              Nos próximos 30 dias
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Participantes</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">
              Média por evento
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Locais</CardTitle>
            <MapPin className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
              Salas disponíveis
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Buscar Eventos</CardTitle>
          <CardDescription>
            Encontre eventos por nome, data ou local
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <div className="flex-1">
              <Label htmlFor="search">Buscar</Label>
              <Input
                id="search"
                placeholder="Digite o nome do evento..."
                className="mt-1"
              />
            </div>
            <div className="w-48">
              <Label htmlFor="status">Status</Label>
              <select
                id="status"
                className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
              >
                <option value="">Todos</option>
                <option value="upcoming">Próximos</option>
                <option value="ongoing">Em andamento</option>
                <option value="completed">Concluídos</option>
                <option value="cancelled">Cancelados</option>
              </select>
            </div>
            <div className="w-48">
              <Label htmlFor="location">Local</Label>
              <select
                id="location"
                className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
              >
                <option value="">Todos</option>
                <option value="sala-1">Sala 1</option>
                <option value="sala-2">Sala 2</option>
                <option value="sala-3">Sala 3</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Events List */}
      <Card>
        <CardHeader>
          <CardTitle>Eventos Recentes</CardTitle>
          <CardDescription>
            Lista de eventos programados e realizados
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Event 1 */}
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-brand rounded-lg flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Workshop de Yoga</h3>
                  <p className="text-sm text-muted-foreground">
                    <Clock className="inline h-3 w-3 mr-1" />
                    15/02/2024 - 14:00 às 16:00
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <MapPin className="inline h-3 w-3 mr-1" />
                    Sala 1 - Prof. Ana Silva
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="secondary">Próximo</Badge>
                <Button variant="outline" size="sm">
                  Ver detalhes
                </Button>
              </div>
            </div>

            {/* Event 2 */}
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Aula de Spinning</h3>
                  <p className="text-sm text-muted-foreground">
                    <Clock className="inline h-3 w-3 mr-1" />
                    12/02/2024 - 19:00 às 20:00
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <MapPin className="inline h-3 w-3 mr-1" />
                    Sala 2 - Prof. Carlos Santos
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="default">Em andamento</Badge>
                <Button variant="outline" size="sm">
                  Ver detalhes
                </Button>
              </div>
            </div>

            {/* Event 3 */}
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Pilates para Iniciantes</h3>
                  <p className="text-sm text-muted-foreground">
                    <Clock className="inline h-3 w-3 mr-1" />
                    10/02/2024 - 09:00 às 10:00
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <MapPin className="inline h-3 w-3 mr-1" />
                    Sala 3 - Prof. Maria Costa
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="outline">Concluído</Badge>
                <Button variant="outline" size="sm">
                  Ver detalhes
                </Button>
              </div>
            </div>

            {/* Event 4 */}
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Treino Funcional</h3>
                  <p className="text-sm text-muted-foreground">
                    <Clock className="inline h-3 w-3 mr-1" />
                    08/02/2024 - 18:00 às 19:00
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <MapPin className="inline h-3 w-3 mr-1" />
                    Sala 1 - Prof. João Silva
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="destructive">Cancelado</Badge>
                <Button variant="outline" size="sm">
                  Ver detalhes
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 