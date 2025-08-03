"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Clock, 
  TrendingUp, 
  Users,
  Calendar,
  Download,
  Activity,
  Target,
  BarChart3
} from "lucide-react"

export function TimeTrackingReportsContent() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Relatórios de Controle de Tempo</h1>
          <p className="text-muted-foreground">
            Análise detalhada do tempo dedicado às atividades
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Exportar
          </Button>
          <Button>
            <BarChart3 className="mr-2 h-4 w-4" />
            Gerar Relatório
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Horas Totais</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156h</div>
            <p className="text-xs text-muted-foreground">
              Este mês
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Atividades</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89</div>
            <p className="text-xs text-muted-foreground">
              Registradas
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Média Diária</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5.2h</div>
            <p className="text-xs text-muted-foreground">
              Por dia útil
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Produtividade</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87%</div>
            <p className="text-xs text-muted-foreground">
              Meta atingida
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Reports Tabs */}
      <Card>
        <CardHeader>
          <CardTitle>Análise de Tempo</CardTitle>
          <CardDescription>
            Visualize diferentes aspectos do controle de tempo
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Visão Geral</TabsTrigger>
              <TabsTrigger value="activities">Atividades</TabsTrigger>
              <TabsTrigger value="productivity">Produtividade</TabsTrigger>
              <TabsTrigger value="trends">Tendências</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Distribuição por Categoria</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm">Treino de Alunos</span>
                        <span className="text-sm font-medium">45h (29%)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Aulas em Grupo</span>
                        <span className="text-sm font-medium">38h (24%)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Avaliações</span>
                        <span className="text-sm font-medium">25h (16%)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Administrativo</span>
                        <span className="text-sm font-medium">22h (14%)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Marketing</span>
                        <span className="text-sm font-medium">18h (12%)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Outros</span>
                        <span className="text-sm font-medium">8h (5%)</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Tempo por Dia da Semana</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { day: "Segunda", hours: 8.5, efficiency: 92 },
                        { day: "Terça", hours: 7.8, efficiency: 88 },
                        { day: "Quarta", hours: 8.2, efficiency: 90 },
                        { day: "Quinta", hours: 7.5, efficiency: 85 },
                        { day: "Sexta", hours: 8.0, efficiency: 89 },
                        { day: "Sábado", hours: 4.5, efficiency: 78 },
                        { day: "Domingo", hours: 2.0, efficiency: 65 }
                      ].map((item) => (
                        <div key={item.day} className="flex justify-between items-center">
                          <div>
                            <div className="text-sm font-medium">{item.day}</div>
                            <div className="text-xs text-muted-foreground">{item.hours}h</div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium">{item.efficiency}%</div>
                            <div className="text-xs text-muted-foreground">eficiência</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="activities" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Atividades Mais Comuns</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Musculação</span>
                          <span className="text-sm font-medium">32h</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{width: '32%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Yoga</span>
                          <span className="text-sm font-medium">28h</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{width: '28%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Funcional</span>
                          <span className="text-sm font-medium">24h</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{width: '24%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Pilates</span>
                          <span className="text-sm font-medium">18h</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-yellow-500 h-2 rounded-full" style={{width: '18%'}}></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Eficiência por Atividade</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm">Musculação</span>
                        <span className="text-sm font-medium">95%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Yoga</span>
                        <span className="text-sm font-medium">92%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Funcional</span>
                        <span className="text-sm font-medium">88%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Pilates</span>
                        <span className="text-sm font-medium">85%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Avaliações</span>
                        <span className="text-sm font-medium">90%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="productivity" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Produtividade Semanal</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Meta Semanal</span>
                          <span className="text-sm font-medium">40h</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{width: '87%'}}></div>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Realizado: 34.8h / 40h (87%)
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Horas Produtivas vs Ociosas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm">Horas Produtivas</span>
                        <span className="text-sm font-medium">142h</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Horas Ociosas</span>
                        <span className="text-sm font-medium">14h</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Taxa de Produtividade</span>
                        <span className="text-sm font-medium">91%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="trends" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Tendências de Tempo (Últimos 6 meses)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { month: "Janeiro", hours: 145, trend: "+5%" },
                      { month: "Fevereiro", hours: 152, trend: "+8%" },
                      { month: "Março", hours: 148, trend: "+2%" },
                      { month: "Abril", hours: 158, trend: "+12%" },
                      { month: "Maio", hours: 162, trend: "+15%" },
                      { month: "Junho", hours: 156, trend: "+8%" }
                    ].map((item) => (
                      <div key={item.month} className="flex justify-between items-center">
                        <div>
                          <div className="text-sm font-medium">{item.month}</div>
                          <div className="text-xs text-muted-foreground">{item.hours}h</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-green-600">{item.trend}</div>
                          <div className="text-xs text-muted-foreground">vs mês anterior</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
} 