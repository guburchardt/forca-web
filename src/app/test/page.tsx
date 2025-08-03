import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function TestPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Teste de Estilos - Conexão Treinamento
          </h1>
          <p className="text-muted-foreground">
            Esta página testa se os componentes shadcn/ui estão funcionando corretamente.
          </p>
        </div>

        {/* Botões */}
        <Card>
          <CardHeader>
            <CardTitle>Botões</CardTitle>
            <CardDescription>Teste dos diferentes tipos de botões</CardDescription>
          </CardHeader>
          <CardContent className="space-x-4">
            <Button>Botão Padrão</Button>
            <Button variant="secondary">Botão Secundário</Button>
            <Button variant="outline">Botão Outline</Button>
            <Button variant="destructive">Botão Destrutivo</Button>
            <Button variant="ghost">Botão Ghost</Button>
            <Button variant="link">Botão Link</Button>
          </CardContent>
        </Card>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Card 1</CardTitle>
              <CardDescription>Descrição do card</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Conteúdo do card</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Card 2</CardTitle>
              <CardDescription>Descrição do card</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Conteúdo do card</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Card 3</CardTitle>
              <CardDescription>Descrição do card</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Conteúdo do card</p>
            </CardContent>
          </Card>
        </div>

        {/* Badges */}
        <Card>
          <CardHeader>
            <CardTitle>Badges</CardTitle>
            <CardDescription>Teste dos diferentes tipos de badges</CardDescription>
          </CardHeader>
          <CardContent className="space-x-2">
            <Badge>Padrão</Badge>
            <Badge variant="secondary">Secundário</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destrutivo</Badge>
          </CardContent>
        </Card>

        {/* Cores da marca */}
        <Card>
          <CardHeader>
            <CardTitle>Cores da Marca</CardTitle>
            <CardDescription>Teste das cores do Conexão Treinamento</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-primary rounded-lg"></div>
                <div>
                  <p className="font-medium">Cor Primária</p>
                  <p className="text-sm text-muted-foreground">#79cb9c</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-secondary rounded-lg"></div>
                <div>
                  <p className="font-medium">Cor Secundária</p>
                  <p className="text-sm text-muted-foreground">Cinza</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 