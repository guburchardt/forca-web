"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  BarChart3, 
  TrendingUp, 
  Users,
  Calendar,
  Download,
  Activity,
  Target,
  Clock
} from "lucide-react"

export function AnalyticsReportsContent() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Relatórios Analíticos</h1>
          <p className="text-muted-foreground">
            Análise avançada de dados e métricas
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
            <CardTitle className="text-sm font-medium">Taxa de Conversão</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23.5%</div>
            <p className="text-xs text-muted-foreground">
              +2.1% em relação ao mês passado
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tempo Médio de Sessão</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45min</div>
            <p className="text-xs text-muted-foreground">
              Por visita
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Satisfação</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.8/5</div>
            <p className="text-xs text-muted-foreground">
              Avaliação média
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">ROI Marketing</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">340%</div>
            <p className="text-xs text-muted-foreground">
              Retorno sobre investimento
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Analytics Reports Tabs */}
      <Card>
        <CardHeader>
          <CardTitle>Análise Avançada</CardTitle>
          <CardDescription>
            Visualize métricas e insights detalhados
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="performance" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="behavior">Comportamento</TabsTrigger>
              <TabsTrigger value="conversion">Conversão</TabsTrigger>
              <TabsTrigger value="satisfaction">Satisfação</TabsTrigger>
            </TabsList>
            
            <TabsContent value="performance" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Performance por Horário</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { time: "06:00 - 09:00", students: 45, utilization: 85 },
                        { time: "09:00 - 12:00", students: 32, utilization: 60 },
                        { time: "12:00 - 15:00", students: 28, utilization: 52 },
                        { time: "15:00 - 18:00", students: 78, utilization: 95 },
                        { time: "18:00 - 21:00", students: 65, utilization: 88 },
                        { time: "21:00 - 00:00", students: 15, utilization: 25 }
                      ].map((item) => (
                        <div key={item.time} className="flex justify-between items-center">
                          <div>
                            <div className="text-sm font-medium">{item.time}</div>
                            <div className="text-xs text-muted-foreground">{item.students} alunos</div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium">{item.utilization}%</div>
                            <div className="text-xs text-muted-foreground">utilização</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Performance por Dia da Semana</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { day: "Segunda", attendance: 85, revenue: 12500 },
                        { day: "Terça", attendance: 92, revenue: 13800 },
                        { day: "Quarta", attendance: 78, revenue: 11700 },
                        { day: "Quinta", attendance: 88, revenue: 13200 },
                        { day: "Sexta", attendance: 95, revenue: 14250 },
                        { day: "Sábado", attendance: 65, revenue: 9750 },
                        { day: "Domingo", attendance: 35, revenue: 5250 }
                      ].map((item) => (
                        <div key={item.day} className="flex justify-between items-center">
                          <div>
                            <div className="text-sm font-medium">{item.day}</div>
                            <div className="text-xs text-muted-foreground">{item.attendance} alunos</div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium">R$ {item.revenue.toLocaleString()}</div>
                            <div className="text-xs text-muted-foreground">receita</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="behavior" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Padrões de Uso</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Musculação</span>
                          <span className="text-sm font-medium">65%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{width: '65%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Aeróbico</span>
                          <span className="text-sm font-medium">45%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{width: '45%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Aulas em Grupo</span>
                          <span className="text-sm font-medium">38%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{width: '38%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Personal Trainer</span>
                          <span className="text-sm font-medium">22%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-yellow-500 h-2 rounded-full" style={{width: '22%'}}></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Tempo de Permanência</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm">Menos de 30min</span>
                        <span className="text-sm font-medium">15%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">30-60min</span>
                        <span className="text-sm font-medium">45%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">60-90min</span>
                        <span className="text-sm font-medium">28%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Mais de 90min</span>
                        <span className="text-sm font-medium">12%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="conversion" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Funil de Conversão</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Visitantes</span>
                          <span className="text-sm font-medium">1,250</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{width: '100%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Avaliações</span>
                          <span className="text-sm font-medium">450</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{width: '36%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Matrículas</span>
                          <span className="text-sm font-medium">156</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{width: '12.5%'}}></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Taxa de Retenção</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm">1º Mês</span>
                        <span className="text-sm font-medium">95%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">3º Mês</span>
                        <span className="text-sm font-medium">87%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">6º Mês</span>
                        <span className="text-sm font-medium">78%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">12º Mês</span>
                        <span className="text-sm font-medium">65%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="satisfaction" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Avaliações por Categoria</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm">Limpeza</span>
                        <span className="text-sm font-medium">4.9/5</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Atendimento</span>
                        <span className="text-sm font-medium">4.8/5</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Equipamentos</span>
                        <span className="text-sm font-medium">4.7/5</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Instrutores</span>
                        <span className="text-sm font-medium">4.9/5</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Preço</span>
                        <span className="text-sm font-medium">4.6/5</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Feedback dos Alunos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm">Muito Satisfeito</span>
                        <span className="text-sm font-medium">68%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Satisfeito</span>
                        <span className="text-sm font-medium">25%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Neutro</span>
                        <span className="text-sm font-medium">5%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Insatisfeito</span>
                        <span className="text-sm font-medium">2%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
} 