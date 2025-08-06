"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, CheckCircle } from "lucide-react"

export function ForgotPasswordForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    // Simulate password reset process
    setTimeout(() => {
      if (email) {
        setSuccess(true)
        setLoading(false)
        // In a real application, you would send a reset email here
      } else {
        setError("Por favor, insira um email válido")
        setLoading(false)
      }
    }, 1000)
  }

  if (success) {
    return (
      <div className={cn("flex flex-col gap-6", className)}>
        <div className="flex flex-col items-center gap-2 text-center">
          <CheckCircle className="h-12 w-12 text-green-500 mb-4" />
          <h1 className="text-2xl font-bold">Email enviado!</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Enviamos um link de recuperação para <strong>{email}</strong>
          </p>
        </div>
        
        <div className="text-center text-sm text-muted-foreground">
          <p>Verifique sua caixa de entrada e siga as instruções para redefinir sua senha.</p>
        </div>

        <Button 
          variant="outline" 
          className="w-full" 
          onClick={() => router.push("/login")}
        >
          Voltar para o login
        </Button>
      </div>
    )
  }

  return (
    <form className={cn("flex flex-col gap-6", className)} onSubmit={handleSubmit} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Esqueceu sua senha?</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Digite seu email abaixo e enviaremos um link para redefinir sua senha
        </p>
      </div>
      
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input 
            id="email" 
            type="email" 
            placeholder="seu@email.com" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </div>
        
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Enviando..." : "Enviar link de recuperação"}
        </Button>
      </div>
      
      <div className="text-center text-sm">
        Lembrou sua senha?{" "}
        <a href="/login" className="underline underline-offset-4">
          Voltar para o login
        </a>
      </div>
    </form>
  )
} 