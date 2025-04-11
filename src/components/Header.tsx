"use client";
import { UserButton, useUser } from "@clerk/nextjs";

import { ModeToggle } from "./ModeToggle";
import Saudacao from "./Saudacao";

// Definindo o tipo UserResource para garantir que o tipo do usuário seja correto
interface UserResource {
  firstName: string;
}

interface HeaderProps {
  titulo: string;
}

const Header = ({ titulo }: HeaderProps) => {
  const { user } = useUser();

  // Garantir que o tipo de user seja compatível com o tipo esperado por Saudacao
  const userResource = user as UserResource | null;

  return (
    <header className="bg-background mb-32 flex h-10 w-full flex-col gap-4 px-[4%] sm:mb-20">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">{titulo}</h1>
        <div className="flex items-center justify-center gap-10">
          <ModeToggle />
          <UserButton />
        </div>
      </div>
      <div>
        {/* Passando o userResource para o componente Saudacao */}
        <Saudacao user={userResource} />
      </div>
    </header>
  );
};

export default Header;
