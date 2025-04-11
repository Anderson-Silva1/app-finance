import Header from "@/components/Header";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import SummeryCards from "./_components/summery-cards";
import { db } from "@/lib/prisma";

export default async function Home() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/login");
  }

  // Buscar transações do usuário no banco de dados
  const transactions = await db.transaction.findMany({
    where: { userId },
  });

  // Filtrar os tipos de transação e calcular os valores
  const expense = transactions
    .filter((t) => t.type === "EXPENSE")
    .reduce((acc, t) => acc + Number(t.amount), 0);

  const income = transactions
    .filter((t) => t.type === "DEPOSIT")
    .reduce((acc, t) => acc + Number(t.amount), 0);

  const investment = transactions
    .filter((t) => t.type === "INVESTMENT")
    .reduce((acc, t) => acc + Number(t.amount), 0);

  const balance = income - expense - investment;

  return (
    <>
      <Header titulo="Dashbord" />
      <main>
        <section>
          <SummeryCards
            userId={userId}
            balance={balance}
            expense={expense}
            income={income}
            investment={investment}
          />
        </section>
      </main>
    </>
  );
}
