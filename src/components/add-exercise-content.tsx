"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { 
  Dumbbell, 
  Camera, 
  Save,
  Plus,
  Target,
  Users
} from "lucide-react"

export function AddExerciseContent() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Adicionar Novo Exercício</h1>
          <p className="text-muted-foreground">
            Cadastre um novo exercício na biblioteca
          </p>
        </div>
        <Button>
          <Save className="mr-2 h-4 w-4" />
          Salvar Exercício
        </Button>
      </div>

      {/* Form */}
      <div className="grid gap-4 md:grid-cols-3">
        {/* Image Upload */}
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Imagem do Exercício</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="flex flex-col items-center gap-4">
              <AspectRatio ratio={16 / 9} className="w-full">
                <div className="w-full h-full bg-muted flex items-center justify-center border-2 border-dashed border-muted-foreground/25 rounded-lg">
                  <div className="text-center">
                    <Dumbbell className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground">Nenhuma imagem</p>
                  </div>
                </div>
              </AspectRatio>
              <Button variant="outline" size="sm">
                <Camera className="mr-2 h-4 w-4" />
                Adicionar Imagem
              </Button>
              <p className="text-xs text-muted-foreground">
                Clique para adicionar uma imagem do exercício
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Exercise Information */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Informações do Exercício</CardTitle>
            <CardDescription>
              Preencha os dados do exercício
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Basic Information */}
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label htmlFor="exercise-name">Nome do Exercício *</Label>
                  <Input id="exercise-name" placeholder="Ex: Supino Reto" />
                </div>
                <div>
                  <Label htmlFor="exercise-category">Categoria *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione a categoria" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="peito">Peito</SelectItem>
                      <SelectItem value="costas">Costas</SelectItem>
                      <SelectItem value="ombros">Ombros</SelectItem>
                      <SelectItem value="biceps">Bíceps</SelectItem>
                      <SelectItem value="triceps">Tríceps</SelectItem>
                      <SelectItem value="pernas">Pernas</SelectItem>
                      <SelectItem value="abdomen">Abdômen</SelectItem>
                      <SelectItem value="cardio">Cardio</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="exercise-difficulty">Dificuldade *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione a dificuldade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="iniciante">Iniciante</SelectItem>
                      <SelectItem value="intermediario">Intermediário</SelectItem>
                      <SelectItem value="avancado">Avançado</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="exercise-equipment">Equipamento</Label>
                  <Input id="exercise-equipment" placeholder="Ex: Barra e Banco" />
                </div>
              </div>

              {/* Description */}
              <div>
                <Label htmlFor="exercise-description">Descrição</Label>
                <Textarea 
                  id="exercise-description" 
                  placeholder="Descreva o exercício, músculos trabalhados, etc."
                  rows={3}
                />
              </div>

              {/* Instructions */}
              <div>
                <Label htmlFor="exercise-instructions">Instruções de Execução</Label>
                <Textarea 
                  id="exercise-instructions" 
                  placeholder="Passo a passo de como executar o exercício"
                  rows={4}
                />
              </div>

              {/* Additional Information */}
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label htmlFor="exercise-muscles">Músculos Principais</Label>
                  <Input id="exercise-muscles" placeholder="Ex: Peitoral, Tríceps" />
                </div>
                <div>
                  <Label htmlFor="exercise-muscles-secondary">Músculos Secundários</Label>
                  <Input id="exercise-muscles-secondary" placeholder="Ex: Deltóide Anterior" />
                </div>
              </div>

              {/* Video URL */}
              <div>
                <Label htmlFor="exercise-video">URL do Vídeo (Opcional)</Label>
                <Input id="exercise-video" placeholder="https://youtube.com/..." />
              </div>

              {/* Tags */}
              <div>
                <Label htmlFor="exercise-tags">Tags</Label>
                <Input id="exercise-tags" placeholder="Ex: força, hipertrofia, composto" />
                <p className="text-xs text-muted-foreground mt-1">
                  Separe as tags por vírgula
                </p>
              </div>

              {/* Safety Notes */}
              <div>
                <Label htmlFor="exercise-safety">Observações de Segurança</Label>
                <Textarea 
                  id="exercise-safety" 
                  placeholder="Pontos importantes sobre segurança e execução correta"
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