"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Settings, 
  Bell, 
  Shield, 
  Palette,
  Save,
  Globe,
  Database
} from "lucide-react"

export function SettingsContent() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Configurações</h1>
          <p className="text-muted-foreground">
            Gerencie as configurações do sistema
          </p>
        </div>
        <Button>
          <Save className="mr-2 h-4 w-4" />
          Salvar Alterações
        </Button>
      </div>

      {/* Settings Tabs */}
      <Card>
        <CardHeader>
          <CardTitle>Configurações do Sistema</CardTitle>
          <CardDescription>
            Personalize o comportamento da aplicação
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="general" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="general">Geral</TabsTrigger>
              <TabsTrigger value="notifications">Notificações</TabsTrigger>
              <TabsTrigger value="security">Segurança</TabsTrigger>
              <TabsTrigger value="appearance">Aparência</TabsTrigger>
            </TabsList>
            
            <TabsContent value="general" className="space-y-4">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="academy-name">Nome da Academia</Label>
                  <Input id="academy-name" defaultValue="Conexão Treinamento" />
                </div>
                <div>
                  <Label htmlFor="academy-email">Email de Contato</Label>
                  <Input id="academy-email" defaultValue="contato@conexao.com" />
                </div>
                <div>
                  <Label htmlFor="academy-phone">Telefone</Label>
                  <Input id="academy-phone" defaultValue="(11) 99999-9999" />
                </div>
                <div>
                  <Label htmlFor="academy-address">Endereço</Label>
                  <Input id="academy-address" defaultValue="Rua das Flores, 123" />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="notifications" className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Notificações por Email</Label>
                    <p className="text-sm text-muted-foreground">
                      Receber notificações por email
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Notificações Push</Label>
                    <p className="text-sm text-muted-foreground">
                      Receber notificações no navegador
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Lembretes de Aulas</Label>
                    <p className="text-sm text-muted-foreground">
                      Lembretes automáticos de aulas
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Relatórios Semanais</Label>
                    <p className="text-sm text-muted-foreground">
                      Enviar relatórios semanais por email
                    </p>
                  </div>
                  <Switch />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="security" className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Autenticação de Dois Fatores</Label>
                    <p className="text-sm text-muted-foreground">
                      Ativar 2FA para maior segurança
                    </p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Login com Google</Label>
                    <p className="text-sm text-muted-foreground">
                      Permitir login com conta Google
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Backup Automático</Label>
                    <p className="text-sm text-muted-foreground">
                      Fazer backup automático dos dados
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div>
                  <Label htmlFor="session-timeout">Timeout da Sessão (minutos)</Label>
                  <Input id="session-timeout" type="number" defaultValue="30" />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="appearance" className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Modo Escuro</Label>
                    <p className="text-sm text-muted-foreground">
                      Ativar tema escuro
                    </p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Animações</Label>
                    <p className="text-sm text-muted-foreground">
                      Mostrar animações na interface
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div>
                  <Label htmlFor="language">Idioma</Label>
                  <select className="w-full p-2 border rounded-md">
                    <option value="pt-BR">Português (Brasil)</option>
                    <option value="en">English</option>
                    <option value="es">Español</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="timezone">Fuso Horário</Label>
                  <select className="w-full p-2 border rounded-md">
                    <option value="America/Sao_Paulo">São Paulo (GMT-3)</option>
                    <option value="America/New_York">New York (GMT-5)</option>
                    <option value="Europe/London">London (GMT+0)</option>
                  </select>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* System Info */}
      <Card>
        <CardHeader>
          <CardTitle>Informações do Sistema</CardTitle>
          <CardDescription>
            Detalhes técnicos da aplicação
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Versão:</span>
                <span className="text-sm text-muted-foreground">1.0.0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium">Última Atualização:</span>
                <span className="text-sm text-muted-foreground">15/01/2024</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium">Banco de Dados:</span>
                <span className="text-sm text-muted-foreground">PostgreSQL 14</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Servidor:</span>
                <span className="text-sm text-muted-foreground">Linux Ubuntu 22.04</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium">Memória:</span>
                <span className="text-sm text-muted-foreground">2GB / 8GB</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium">Armazenamento:</span>
                <span className="text-sm text-muted-foreground">45GB / 100GB</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 