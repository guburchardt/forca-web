"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Clock, Plus, Calendar, User, Activity } from "lucide-react"

export function TimeTrackingInstructor() {
  const [timeEntries, setTimeEntries] = useState([
    {
      id: 1,
      date: "2024-01-15",
      student: "João Silva",
      activity: "Treino Funcional",
      hours: 2,
      description: "Aula de treino funcional com foco em força e resistência",
      status: "completed"
    },
    {
      id: 2,
      date: "2024-01-14",
      student: "Maria Santos",
      activity: "Pilates",
      hours: 1.5,
      description: "Sessão de pilates para fortalecimento do core",
      status: "completed"
    },
    {
      id: 3,
      date: "2024-01-13",
      student: "Pedro Oliveira",
      activity: "Spinning",
      hours: 1,
      description: "Aula de spinning para cardio",
      status: "completed"
    }
  ])

  const [showForm, setShowForm] = useState(false)
  const [newEntry, setNewEntry] = useState({
    date: "",
    student: "",
    activity: "",
    hours: "",
    description: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const entry = {
      id: timeEntries.length + 1,
      ...newEntry,
      hours: parseFloat(newEntry.hours),
      status: "completed"
    }
    setTimeEntries([entry, ...timeEntries])
    setNewEntry({
      date: "",
      student: "",
      activity: "",
      hours: "",
      description: ""
    })
    setShowForm(false)
  }

  const totalHours = timeEntries.reduce((sum, entry) => sum + entry.hours, 0)
  const thisWeekHours = timeEntries
    .filter(entry => {
      const entryDate = new Date(entry.date)
      const weekAgo = new Date()
      weekAgo.setDate(weekAgo.getDate() - 7)
      return entryDate >= weekAgo
    })
    .reduce((sum, entry) => sum + entry.hours, 0)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Controle de Tempo</h1>
          <p className="text-muted-foreground">
            Registre suas horas de trabalho com alunos
          </p>
        </div>
        <Button onClick={() => setShowForm(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Registrar Horas
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
            <div className="text-2xl font-bold">{totalHours}h</div>
            <p className="text-xs text-muted-foreground">
              Total registrado
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Esta Semana</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{thisWeekHours}h</div>
            <p className="text-xs text-muted-foreground">
              Últimos 7 dias
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Alunos Atendidos</CardTitle>
            <User className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{new Set(timeEntries.map(e => e.student)).size}</div>
            <p className="text-xs text-muted-foreground">
              Alunos únicos
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Atividades</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{new Set(timeEntries.map(e => e.activity)).size}</div>
            <p className="text-xs text-muted-foreground">
              Tipos de atividades
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Add New Entry Form */}
      {showForm && (
        <Card>
          <CardHeader>
            <CardTitle>Registrar Novas Horas</CardTitle>
            <CardDescription>
              Adicione um novo registro de horas trabalhadas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="date">Data</Label>
                  <Input
                    id="date"
                    type="date"
                    value={newEntry.date}
                    onChange={(e) => setNewEntry({...newEntry, date: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="student">Aluno</Label>
                  <Input
                    id="student"
                    placeholder="Nome do aluno"
                    value={newEntry.student}
                    onChange={(e) => setNewEntry({...newEntry, student: e.target.value})}
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="activity">Atividade</Label>
                  <Select value={newEntry.activity} onValueChange={(value) => setNewEntry({...newEntry, activity: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione a atividade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Treino Funcional">Treino Funcional</SelectItem>
                      <SelectItem value="Pilates">Pilates</SelectItem>
                      <SelectItem value="Spinning">Spinning</SelectItem>
                      <SelectItem value="Yoga">Yoga</SelectItem>
                      <SelectItem value="Musculação">Musculação</SelectItem>
                      <SelectItem value="Avaliação Física">Avaliação Física</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="hours">Horas</Label>
                  <Input
                    id="hours"
                    type="number"
                    step="0.5"
                    min="0"
                    placeholder="2.5"
                    value={newEntry.hours}
                    onChange={(e) => setNewEntry({...newEntry, hours: e.target.value})}
                    required
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="description">Descrição</Label>
                <Textarea
                  id="description"
                  placeholder="Descreva a atividade realizada..."
                  value={newEntry.description}
                  onChange={(e) => setNewEntry({...newEntry, description: e.target.value})}
                  required
                />
              </div>
              <div className="flex gap-2">
                <Button type="submit">Salvar</Button>
                <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                  Cancelar
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Time Entries List */}
      <Card>
        <CardHeader>
          <CardTitle>Registros de Horas</CardTitle>
          <CardDescription>
            Histórico de suas horas trabalhadas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {timeEntries.map((entry) => (
              <div key={entry.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-brand rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{entry.activity}</h3>
                    <p className="text-sm text-muted-foreground">
                      <User className="inline h-3 w-3 mr-1" />
                      {entry.student}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <Calendar className="inline h-3 w-3 mr-1" />
                      {new Date(entry.date).toLocaleDateString('pt-BR')}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {entry.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">{entry.hours}h</Badge>
                  <Badge variant="outline">Concluído</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 