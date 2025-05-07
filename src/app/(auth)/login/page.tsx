import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LoginForm } from "./_components/login-form";
import { ModeToggle } from "@/components/mode-toggle";

// import { LoginForm } from "@/components/login-form";

export default function LoginPage() {
  return (
    <div className="bg-background flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-primary text-3xl font-bold tracking-tight">
            Gestão Financeira
          </h1>
          <p className="text-primary mt-2 text-sm">
            Faça login para acessar seu dashboard financeiro
          </p>
        </div>

        <Card>
          <CardHeader>
            <div className="flex justify-between">
              <CardTitle className="text-xl">Login</CardTitle>
              <ModeToggle />
            </div>
            <CardDescription>
              Entre com suas credenciais para acessar sua conta
            </CardDescription>
          </CardHeader>
          <CardContent>
            <LoginForm />
          </CardContent>
          <CardFooter className="flex flex-col items-center space-y-4">
            <div className="text-center text-sm">
              <Link
                href="/forgot-password"
                className="text-green-600 hover:text-green-500"
              >
                Esqueceu sua senha?
              </Link>
            </div>
            <div className="text-center text-sm">
              Não tem uma conta?{" "}
              <Link
                href="/register"
                className="text-green-600 hover:text-green-500"
              >
                Registre-se
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
