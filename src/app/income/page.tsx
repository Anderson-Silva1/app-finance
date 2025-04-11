import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import DataTableTransactions from "./_components/data-table-transactions";
import { TransactionType } from "@prisma/client";

const incomePage = async () => {
  const { userId } = await auth();

  const transactions = await db.transaction.findMany({
    where: {
      userId: userId || undefined,
      type: TransactionType.DEPOSIT, // Filtra apenas as receitas
    },
    orderBy: {
      date: "desc",
    },
  });

  return <DataTableTransactions transactions={transactions} />;
};

export default incomePage;
