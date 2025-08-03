"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { 
  Dumbbell, 
  Plus, 
  Search, 
  Filter,
  Target,
  Clock,
  Users
} from "lucide-react"

export function ExercisesContent() {
  const exercises = [
    {
      id: 1,
      name: "Supino Reto",
      category: "Peito",
      difficulty: "Intermediário",
      equipment: "Barra e Banco",
      image: "/exercises/supino.jpg",
      description: "Exercício fundamental para desenvolvimento do peitoral"
    },
    {
      id: 2,
      name: "Agachamento",
      category: "Pernas",
      difficulty: "Avançado",
      equipment: "Barra",
      image: "/exercises/agachamento.jpg",
      description: "Rei dos exercícios para desenvolvimento das pernas"
    },
    {
      id: 3,
      name: "Puxada na Frente",
      category: "Costas",
      difficulty: "Iniciante",
      equipment: "Polia",
      image: "/exercises/puxada.jpg",
      description: "Excelente para desenvolvimento da largura das costas"
    },
    {
      id: 4,
      name: "Desenvolvimento",
      category: "Ombros",
      difficulty: "Intermediário",
      equipment: "Halteres",
      image: "/exercises/desenvolvimento.jpg",
      description: "Desenvolvimento de força e massa nos ombros"
    }
  ]

  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Biblioteca de Exercícios</h1>
          <p className="text-muted-foreground">
            Gerencie a biblioteca completa de exercícios
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Adicionar Exercício
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Exercícios</CardTitle>
            <Dumbbell className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{exercises.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Categorias</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Equipamentos</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Usados Hoje</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Exercícios</CardTitle>
          <CardDescription>
            Visualize e gerencie todos os exercícios disponíveis
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar exercícios..."
                className="pl-8"
              />
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filtros
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {exercises.map((exercise) => (
              <Card key={exercise.id} className="overflow-hidden">
                <AspectRatio ratio={16 / 9}>
                  <div className="w-full h-full bg-muted flex items-center justify-center">
                    <Dumbbell className="h-8 w-8 text-muted-foreground" />
                  </div>
                </AspectRatio>
                <CardHeader className="p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{exercise.name}</CardTitle>
                      <CardDescription>{exercise.description}</CardDescription>
                    </div>
                    <Badge variant="outline">{exercise.difficulty}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-medium">Categoria:</span>
                      <Badge variant="secondary">{exercise.category}</Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-medium">Equipamento:</span>
                      <span className="text-muted-foreground">{exercise.equipment}</span>
                    </div>
                    <div className="flex gap-2 pt-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        Ver Detalhes
                      </Button>
                      <Button variant="outline" size="sm">
                        Adicionar ao Treino
                      </Button>
                    </div>
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