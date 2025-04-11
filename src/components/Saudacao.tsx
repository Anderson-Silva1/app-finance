"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // Para capturar o caminho atual

interface UserResource {
  firstName: string;
}

interface SaudacaoProps {
  user: UserResource | null | undefined;
}

const Saudacao: React.FC<SaudacaoProps> = ({ user }) => {
  const [text, setText] = useState("");
  const pathname = usePathname(); // Pega o caminho atual da URL

  useEffect(() => {
    const horaAtual = new Date().getHours();
    let saudacao = "";

    // Saudação conforme o período do dia
    if (horaAtual >= 0 && horaAtual < 6) {
      saudacao = `Boa madrugada,`;
    } else if (horaAtual >= 6 && horaAtual < 12) {
      saudacao = `Bom dia ${user?.firstName},`;
    } else if (horaAtual >= 12 && horaAtual < 18) {
      saudacao = `Boa tarde ${user?.firstName},`;
    } else {
      saudacao = `Boa noite ${user?.firstName},`;
    }

    if (pathname.includes("income")) {
      saudacao = `${saudacao} Agora é hora de olhar para suas fontes de renda e garantir que você está no caminho certo para alcançar seus objetivos financeiros.`;
    } else if (pathname.includes("expense")) {
      saudacao = `${saudacao} Lembre-se de controlar seus gastos para manter sua saúde financeira em dia.`;
    } else if (pathname.includes("investments")) {
      saudacao = `${saudacao} Que tal avaliar seus investimentos? Lembre-se que o investimento inteligente pode ser a chave para o seu futuro.`;
    } else if (pathname.includes("transactions")) {
      saudacao = `${saudacao} Vamos acompanhar suas transações? Manter tudo organizado é essencial para o sucesso financeiro.`;
    } else if (pathname.includes("/")) {
      saudacao = `${saudacao} O seu painel de controle está aqui para te ajudar a manter o foco nas suas finanças. Acompanhe seus progressos!`;
    }

    setText(saudacao);
  }, [user, pathname]);

  return (
    <p className="text-center text-xs italic sm:text-left sm:text-base">
      <span className="text-primary font-bold">Finance AI </span> {`"${text}"`}
    </p>
  );
};

export default Saudacao;
