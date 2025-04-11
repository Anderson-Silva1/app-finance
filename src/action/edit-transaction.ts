"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server"; // Importa autenticação
import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";

interface EditTransactionProps {
  transactionId: string;
  name: string;
  type: string;
  category: string;
  paymentMethod: string;
  date: string;
  amount: number;
}

export const editTransaction = async ({
  transactionId,
  name,
  type,
  category,
  paymentMethod,
  date,
  amount,
}: EditTransactionProps) => {
  try {
    const { userId } = await auth(); // Obtém o userId do usuário autenticado

    if (!userId) {
      return { success: false, error: "Usuário não autenticado" };
    }

    const updatedTransaction = await db.transaction.updateMany({
      where: {
        id: transactionId,
        userId, // Garante que só pode editar se for dono da transação
      },
      data: {
        name,
        type: type as TransactionType,
        category: category as TransactionCategory,
        paymentMethod: paymentMethod as TransactionPaymentMethod,
        date: new Date(date),
        amount,
      },
    });

    if (updatedTransaction.count === 0) {
      return {
        success: false,
        error: "Transação não encontrada ou não pertence ao usuário",
      };
    }

    return { success: true };
  } catch (error) {
    console.error("Erro ao editar transação:", error);
    return { success: false, error: "Erro ao editar transação" };
  }
};
