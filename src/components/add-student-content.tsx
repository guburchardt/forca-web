"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  User, 
  Save,
  Camera
} from "lucide-react"

export function AddStudentContent() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Adicionar Novo Aluno</h1>
          <p className="text-muted-foreground">
            Cadastre um novo aluno no sistema
          </p>
        </div>
        <Button>
          <Save className="mr-2 h-4 w-4" />
          Salvar Aluno
        </Button>
      </div>

      {/* Form */}
      <div className="grid gap-4 md:grid-cols-3">
        {/* Photo Upload */}
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Foto do Aluno</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="flex flex-col items-center gap-4">
              <Avatar className="h-32 w-32">
                <AvatarImage src="" />
                <AvatarFallback className="text-2xl">
                  <User className="h-8 w-8" />
                </AvatarFallback>
              </Avatar>
              <Button variant="outline" size="sm">
                <Camera className="mr-2 h-4 w-4" />
                Adicionar Foto
              </Button>
              <p className="text-xs text-muted-foreground">
                Clique para adicionar uma foto do aluno
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Student Information */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Informações do Aluno</CardTitle>
            <CardDescription>
              Preencha os dados pessoais do aluno
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Personal Information */}
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label htmlFor="first-name">Nome *</Label>
                  <Input id="first-name" placeholder="Digite o nome" />
                </div>
                <div>
                  <Label htmlFor="last-name">Sobrenome *</Label>
                  <Input id="last-name" placeholder="Digite o sobrenome" />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="email@exemplo.com" />
                </div>
                <div>
                  <Label htmlFor="phone">Telefone *</Label>
                  <Input id="phone" placeholder="(11) 99999-9999" />
                </div>
                <div>
                  <Label htmlFor="birth-date">Data de Nascimento</Label>
                  <Input id="birth-date" type="date" />
                </div>
                <div>
                  <Label htmlFor="cpf">CPF</Label>
                  <Input id="cpf" placeholder="123.456.789-00" />
                </div>
              </div>

              {/* Address */}
              <div>
                <Label htmlFor="address">Endereço</Label>
                <Input id="address" placeholder="Rua, número, complemento" />
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <Label htmlFor="city">Cidade</Label>
                  <Input id="city" placeholder="São Paulo" />
                </div>
                <div>
                  <Label htmlFor="state">Estado</Label>
                  <Input id="state" placeholder="SP" />
                </div>
                <div>
                  <Label htmlFor="zip">CEP</Label>
                  <Input id="zip" placeholder="01234-567" />
                </div>
              </div>

              {/* Plan Information */}
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label htmlFor="plan-type">Tipo de Plano</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o plano" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mensal">Mensal</SelectItem>
                      <SelectItem value="trimestral">Trimestral</SelectItem>
                      <SelectItem value="semestral">Semestral</SelectItem>
                      <SelectItem value="anual">Anual</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="status">Status</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ativo">Ativo</SelectItem>
                      <SelectItem value="inativo">Inativo</SelectItem>
                      <SelectItem value="pendente">Pendente</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Emergency Contact */}
              <div>
                <Label htmlFor="emergency-contact">Contato de Emergência</Label>
                <Input id="emergency-contact" placeholder="Nome e telefone" />
              </div>

              {/* Medical Information */}
              <div>
                <Label htmlFor="medical-info">Informações Médicas</Label>
                <Textarea 
                  id="medical-info" 
                  placeholder="Alergias, condições médicas, restrições..."
                  rows={3}
                />
              </div>

              {/* Goals */}
              <div>
                <Label htmlFor="goals">Objetivos</Label>
                <Textarea 
                  id="goals" 
                  placeholder="O que o aluno quer alcançar?"
                  rows={2}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 