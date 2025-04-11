import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { TransactionType } from "@prisma/client";
import DataTableTransactions from "./_components/data-table-transactions";

const InvestmentsPage = async () => {
  const { userId } = await auth();

  const transactions = await db.transaction.findMany({
    where: {
      userId: userId || undefined,
      type: TransactionType.INVESTMENT,
    },
    orderBy: {
      date: "desc",
    },
  });

  return <DataTableTransactions transactions={transactions} />;
};

export default InvestmentsPage;
