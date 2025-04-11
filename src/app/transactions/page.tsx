import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import DataTableTransactions from "./_components/data-table-transactions";

const TransactionsPage = async () => {
  const { userId } = await auth();

  const transactions = await db.transaction.findMany({
    where: {
      userId: userId || undefined,
    },
    orderBy: {
      date: "desc",
    },
  });

  return <DataTableTransactions transactions={transactions} />;
};

export default TransactionsPage;
