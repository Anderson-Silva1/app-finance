"use server";

import { db } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const deleteTransactionById = async ({
  transactionId,
}: {
  transactionId: string;
}) => {
  try {
    await db.transaction.delete({
      where: { id: transactionId },
    });

    // Revalida o cache para atualizar a página automaticamente sem reload
    revalidatePath("/transactions");

    return { success: true };
  } catch (error) {
    console.error("Erro ao excluir transação:", error);
    return { success: false, error: "Erro ao excluir transação" };
  }
};
