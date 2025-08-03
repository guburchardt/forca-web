"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { 
  Dumbbell, 
  Plus, 
  Search, 
  Settings,
  Users,
  Target,
  TrendingUp
} from "lucide-react"

export function ExerciseCategoriesContent() {
  const categories = [
    {
      id: 1,
      name: "Peito",
      description: "Exercícios para desenvolvimento do peitoral",
      exercises: 45,
      icon: "💪",
      color: "bg-red-100 text-red-800"
    },
    {
      id: 2,
      name: "Costas",
      description: "Exercícios para fortalecimento das costas",
      exercises: 38,
      icon: "🏋️",
      color: "bg-blue-100 text-blue-800"
    },
    {
      id: 3,
      name: "Ombros",
      description: "Exercícios para desenvolvimento dos ombros",
      exercises: 32,
      icon: "🎯",
      color: "bg-green-100 text-green-800"
    },
    {
      id: 4,
      name: "Bíceps",
      description: "Exercícios para braços e bíceps",
      exercises: 28,
      icon: "💪",
      color: "bg-purple-100 text-purple-800"
    },
    {
      id: 5,
      name: "Tríceps",
      description: "Exercícios para tríceps e braços",
      exercises: 25,
      icon: "💪",
      color: "bg-orange-100 text-orange-800"
    },
    {
      id: 6,
      name: "Pernas",
      description: "Exercícios para membros inferiores",
      exercises: 52,
      icon: "🦵",
      color: "bg-yellow-100 text-yellow-800"
    },
    {
      id: 7,
      name: "Abdômen",
      description: "Exercícios para core e abdômen",
      exercises: 35,
      icon: "🏃",
      color: "bg-pink-100 text-pink-800"
    },
    {
      id: 8,
      name: "Cardio",
      description: "Exercícios aeróbicos e cardio",
      exercises: 18,
      icon: "❤️",
      color: "bg-indigo-100 text-indigo-800"
    }
  ]

  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Categorias de Exercícios</h1>
          <p className="text-muted-foreground">
            Gerencie as categorias da biblioteca de exercícios
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nova Categoria
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Categorias</CardTitle>
            <Dumbbell className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{categories.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Exercícios</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {categories.reduce((acc, c) => acc + c.exercises, 0)}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Média por Categoria</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.round(categories.reduce((acc, c) => acc + c.exercises, 0) / categories.length)}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Categoria Mais Popular</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {categories.reduce((max, c) => c.exercises > max.exercises ? c : max).name}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Categorias</CardTitle>
          <CardDescription>
            Visualize e gerencie todas as categorias
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar categorias..."
                className="pl-8"
              />
            </div>
            <Button variant="outline">
              Filtrar
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Card key={category.id} className="overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${category.color}`}>
                      <span className="text-lg">{category.icon}</span>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{category.name}</CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </div>
                    <Badge variant="outline">{category.exercises}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Exercícios:</span>
                    <span className="font-medium">{category.exercises}</span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Utilização</span>
                      <span>{Math.round((category.exercises / categories.reduce((acc, c) => acc + c.exercises, 0)) * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full"
                        style={{width: `${(category.exercises / categories.reduce((acc, c) => acc + c.exercises, 0)) * 100}%`}}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      Ver Exercícios
                    </Button>
                    <Button variant="outline" size="sm">
                      <Settings className="h-3 w-3" />
                    </Button>
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