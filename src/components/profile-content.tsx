"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  User, 
  Mail, 
  Phone, 
  MapPin,
  Calendar,
  Shield,
  Save,
  Camera
} from "lucide-react"

export function ProfileContent() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Meu Perfil</h1>
          <p className="text-muted-foreground">
            Gerencie suas informações pessoais
          </p>
        </div>
        <Button>
          <Save className="mr-2 h-4 w-4" />
          Salvar Alterações
        </Button>
      </div>

      {/* Profile Info */}
      <div className="grid gap-4 md:grid-cols-3">
        {/* Avatar and Basic Info */}
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Foto do Perfil</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="flex flex-col items-center gap-4">
              <Avatar className="h-24 w-24">
                <AvatarImage src="/avatars/admin.jpg" />
                <AvatarFallback className="text-lg">AD</AvatarFallback>
              </Avatar>
              <Button variant="outline" size="sm">
                <Camera className="mr-2 h-4 w-4" />
                Alterar Foto
              </Button>
              <div className="text-center">
                <h3 className="font-medium">Administrador</h3>
                <p className="text-sm text-muted-foreground">admin@conexao.com</p>
                <Badge className="mt-2">Administrador</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Profile Details */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Informações Pessoais</CardTitle>
            <CardDescription>
              Atualize suas informações de contato
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="personal" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="personal">Pessoal</TabsTrigger>
                <TabsTrigger value="contact">Contato</TabsTrigger>
                <TabsTrigger value="security">Segurança</TabsTrigger>
              </TabsList>
              
              <TabsContent value="personal" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="first-name">Nome</Label>
                    <Input id="first-name" defaultValue="Administrador" />
                  </div>
                  <div>
                    <Label htmlFor="last-name">Sobrenome</Label>
                    <Input id="last-name" defaultValue="Sistema" />
                  </div>
                  <div>
                    <Label htmlFor="birth-date">Data de Nascimento</Label>
                    <Input id="birth-date" type="date" defaultValue="1990-01-01" />
                  </div>
                  <div>
                    <Label htmlFor="cpf">CPF</Label>
                    <Input id="cpf" defaultValue="123.456.789-00" />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="contact" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" defaultValue="admin@conexao.com" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Telefone</Label>
                    <Input id="phone" defaultValue="(11) 99999-9999" />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="address">Endereço</Label>
                    <Input id="address" defaultValue="Rua das Flores, 123" />
                  </div>
                  <div>
                    <Label htmlFor="city">Cidade</Label>
                    <Input id="city" defaultValue="São Paulo" />
                  </div>
                  <div>
                    <Label htmlFor="state">Estado</Label>
                    <Input id="state" defaultValue="SP" />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="security" className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="current-password">Senha Atual</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  <div>
                    <Label htmlFor="new-password">Nova Senha</Label>
                    <Input id="new-password" type="password" />
                  </div>
                  <div>
                    <Label htmlFor="confirm-password">Confirmar Nova Senha</Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="two-factor" />
                    <Label htmlFor="two-factor">Ativar autenticação de dois fatores</Label>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      {/* Activity and Stats */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Atividade Recente</CardTitle>
            <CardDescription>
              Suas últimas ações no sistema
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <User className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Login realizado</p>
                  <p className="text-xs text-muted-foreground">Hoje às 09:00</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Calendar className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Aula criada</p>
                  <p className="text-xs text-muted-foreground">Ontem às 14:30</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Shield className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Configurações alteradas</p>
                  <p className="text-xs text-muted-foreground">2 dias atrás</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Estatísticas</CardTitle>
            <CardDescription>
              Resumo da sua atividade
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Logins este mês:</span>
                <span className="text-sm text-muted-foreground">45</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium">Aulas criadas:</span>
                <span className="text-sm text-muted-foreground">12</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium">Alunos atendidos:</span>
                <span className="text-sm text-muted-foreground">156</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium">Relatórios gerados:</span>
                <span className="text-sm text-muted-foreground">8</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium">Tempo online:</span>
                <span className="text-sm text-muted-foreground">24h 30min</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 