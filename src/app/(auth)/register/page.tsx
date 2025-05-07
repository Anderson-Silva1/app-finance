import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RegisterForm } from "./_components/register-form";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";

const RegisterPage = () => {
  return (
    <div className="bg-background flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-primary text-3xl font-bold tracking-tight">
            Gestão Financeira
          </h1>
          <p className="text-primary mt-2 text-sm">
            Crie sua conta para começar a gerenciar suas finanças
          </p>
        </div>

        <Card>
          <CardHeader>
            <div className="flex justify-between">
              <CardTitle className="text-xl">Criar Conta</CardTitle>
              <ModeToggle />
            </div>
            <CardDescription>
              Preencha os dados abaixo para se registrar
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RegisterForm />
          </CardContent>
          <CardFooter className="flex justify-center">
            <div className="text-center text-sm">
              Já tem uma conta?{" "}
              <Link
                href="/login"
                className="text-green-600 hover:text-green-500"
              >
                Faça login
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default RegisterPage;
