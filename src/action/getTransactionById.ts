"use server";

import { db } from "@/lib/prisma";

export const getTransactionById = async (transactionId: string) => {
  try {
    const transaction = await db.transaction.findUnique({
      where: { id: transactionId },
    });

    if (!transaction) {
      throw new Error("Transação não encontrada");
    }

    return { success: true, transaction };
  } catch (error) {
    console.error("Erro ao buscar transação:", error);
    return { success: false, error: "Erro ao buscar transação" };
  }
};
