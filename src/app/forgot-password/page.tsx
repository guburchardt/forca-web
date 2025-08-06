import { Dumbbell } from "lucide-react"
import { ForgotPasswordForm } from "@/components/forgot-password-form"

export default function ForgotPasswordPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="/login" className="flex items-center gap-2 font-medium">
            <div className="bg-brand text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <Dumbbell className="size-4" />
            </div>
            Conexão Treinamento
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <ForgotPasswordForm />
          </div>
        </div>
      </div>
      <div className="bg-brand relative hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-br from-brand/20 to-primary/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Dumbbell className="mx-auto size-24 mb-4 opacity-80" />
            <h2 className="text-2xl font-bold mb-2">Conexão Treinamento</h2>
            <p className="text-lg opacity-90">Sistema de Gestão de Academia</p>
          </div>
        </div>
      </div>
    </div>
  )
} 