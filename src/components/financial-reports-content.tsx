"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown,
  Download,
  BarChart3,
  PieChart,
  Activity,
  CreditCard
} from "lucide-react"

export function FinancialReportsContent() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Relatórios Financeiros</h1>
          <p className="text-muted-foreground">
            Análise financeira da academia
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
            <CardTitle className="text-sm font-medium">Receita Total</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 542.300</div>
            <p className="text-xs text-muted-foreground">
              +12% em relação ao mês passado
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Despesas</CardTitle>
            <TrendingDown className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 89.450</div>
            <p className="text-xs text-muted-foreground">
              -5% em relação ao mês passado
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Lucro Líquido</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 452.850</div>
            <p className="text-xs text-muted-foreground">
              +18% em relação ao mês passado
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Margem de Lucro</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">83.5%</div>
            <p className="text-xs text-muted-foreground">
              +2.3% em relação ao mês passado
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Financial Reports Tabs */}
      <Card>
        <CardHeader>
          <CardTitle>Análise Financeira</CardTitle>
          <CardDescription>
            Visualize diferentes aspectos financeiros
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="revenue" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="revenue">Receita</TabsTrigger>
              <TabsTrigger value="expenses">Despesas</TabsTrigger>
              <TabsTrigger value="profit">Lucro</TabsTrigger>
              <TabsTrigger value="cashflow">Fluxo de Caixa</TabsTrigger>
            </TabsList>
            
            <TabsContent value="revenue" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Receita por Plano</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm">Mensal</span>
                        <span className="text-sm font-medium">R$ 245.300</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Trimestral</span>
                        <span className="text-sm font-medium">R$ 135.800</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Semestral</span>
                        <span className="text-sm font-medium">R$ 108.400</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Anual</span>
                        <span className="text-sm font-medium">R$ 52.800</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Receita Mensal (Últimos 6 meses)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { month: "Janeiro", revenue: 485000 },
                        { month: "Fevereiro", revenue: 512000 },
                        { month: "Março", revenue: 498000 },
                        { month: "Abril", revenue: 523000 },
                        { month: "Maio", revenue: 541000 },
                        { month: "Junho", revenue: 542300 }
                      ].map((item) => (
                        <div key={item.month} className="flex justify-between">
                          <span className="text-sm">{item.month}</span>
                          <span className="text-sm font-medium">R$ {item.revenue.toLocaleString()}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="expenses" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Despesas por Categoria</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm">Salários</span>
                        <span className="text-sm font-medium">R$ 45.200</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Aluguel</span>
                        <span className="text-sm font-medium">R$ 15.000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Equipamentos</span>
                        <span className="text-sm font-medium">R$ 8.500</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Marketing</span>
                        <span className="text-sm font-medium">R$ 6.750</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Utilitários</span>
                        <span className="text-sm font-medium">R$ 4.000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Outros</span>
                        <span className="text-sm font-medium">R$ 10.000</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Controle de Despesas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Orçamento Mensal</span>
                          <span className="text-sm font-medium">R$ 100.000</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{width: '89.5%'}}></div>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Despesas: R$ 89.450 / R$ 100.000 (89.5%)
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="profit" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Análise de Lucratividade</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Margem Bruta</span>
                          <span className="text-sm font-medium">95.2%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{width: '95.2%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Margem Operacional</span>
                          <span className="text-sm font-medium">83.5%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{width: '83.5%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Margem Líquida</span>
                          <span className="text-sm font-medium">78.3%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{width: '78.3%'}}></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Projeção de Lucro</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm">Este Mês</span>
                        <span className="text-sm font-medium text-green-600">R$ 452.850</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Próximo Mês</span>
                        <span className="text-sm font-medium">R$ 485.000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Trimestre</span>
                        <span className="text-sm font-medium">R$ 1.425.000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Ano</span>
                        <span className="text-sm font-medium">R$ 5.680.000</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="cashflow" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Fluxo de Caixa</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-green-600">+R$ 542.300</div>
                        <div className="text-sm text-muted-foreground">Entradas</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-red-600">-R$ 89.450</div>
                        <div className="text-sm text-muted-foreground">Saídas</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">+R$ 452.850</div>
                        <div className="text-sm text-muted-foreground">Saldo</div>
                      </div>
                    </div>
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