"use client"

import { useUser } from "@/contexts/user-context"
import { TimeTrackingInstructor } from "./time-tracking-instructor"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Plus, Calendar, Users, Activity } from "lucide-react"

export function TimeTrackingContent() {
  const { role } = useUser()

  // Se for instrutor, mostra a interface específica para registrar horas
  if (role === "instructor") {
    return <TimeTrackingInstructor />
  }

  // Se for admin, mostra a interface de relatórios
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Controle de Tempo (Instrutores)</h1>
          <p className="text-muted-foreground">
            Relatórios de horas trabalhadas pelos instrutores
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Gerar Relatório
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Horas</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156h</div>
            <p className="text-xs text-muted-foreground">
              +12% em relação ao mês passado
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Instrutores Ativos</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">
              Registrando horas
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Esta Semana</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42h</div>
            <p className="text-xs text-muted-foreground">
              Últimos 7 dias
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Atividades</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">
              Tipos diferentes
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Time Tracking List */}
      <Card>
        <CardHeader>
          <CardTitle>Relatórios de Horas</CardTitle>
          <CardDescription>
            Lista de todos os registros de tempo dos instrutores
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Entry 1 */}
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-brand rounded-lg flex items-center justify-center">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">João Silva</h3>
                  <p className="text-sm text-muted-foreground">
                    Treino Funcional - Maria Santos
                  </p>
                  <p className="text-sm text-muted-foreground">
                    15/01/2024 - 2 horas
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="secondary">2h</Badge>
                <Badge variant="outline">Concluído</Badge>
              </div>
            </div>

            {/* Entry 2 */}
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Ana Costa</h3>
                  <p className="text-sm text-muted-foreground">
                    Pilates - Pedro Oliveira
                  </p>
                  <p className="text-sm text-muted-foreground">
                    14/01/2024 - 1.5 horas
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="secondary">1.5h</Badge>
                <Badge variant="outline">Concluído</Badge>
              </div>
            </div>

            {/* Entry 3 */}
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Carlos Santos</h3>
                  <p className="text-sm text-muted-foreground">
                    Spinning - Ana Silva
                  </p>
                  <p className="text-sm text-muted-foreground">
                    13/01/2024 - 1 hora
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="secondary">1h</Badge>
                <Badge variant="outline">Concluído</Badge>
              </div>
            </div>

            {/* Entry 4 */}
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Maria Costa</h3>
                  <p className="text-sm text-muted-foreground">
                    Yoga - João Silva
                  </p>
                  <p className="text-sm text-muted-foreground">
                    12/01/2024 - 1.5 horas
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="secondary">1.5h</Badge>
                <Badge variant="outline">Concluído</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 