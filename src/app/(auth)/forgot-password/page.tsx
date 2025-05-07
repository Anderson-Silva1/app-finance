import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ForgotPasswordForm } from "./_components/forgot-password-form";
import { ModeToggle } from "@/components/mode-toggle";

export default function ForgotPasswordPage() {
  return (
    <div className="bg-background flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-primary text-3xl font-bold tracking-tight">
            Gestão Financeira
          </h1>
          <p className="text-primary mt-2 text-sm">
            Recupere o acesso à sua conta
          </p>
        </div>

        <Card>
          <CardHeader>
            <div className="flex justify-between">
              <CardTitle className="text-xl">Esqueceu sua senha?</CardTitle>
              <ModeToggle />
            </div>
            <CardDescription>
              Digite seu email para receber um link de recuperação de senha
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ForgotPasswordForm />
          </CardContent>
          <CardFooter className="flex justify-center">
            <div className="text-center text-sm">
              Lembrou sua senha?{" "}
              <Link
                href="/login"
                className="text-green-600 hover:text-green-500"
              >
                Voltar para o login
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
