"use server";
import { db } from "@/lib/prisma";
import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";
import { revalidatePath } from "next/cache";

interface createTransactionProps {
  name: string;
  type: TransactionType;
  amount: number;
  category: TransactionCategory;
  paymentMethod: TransactionPaymentMethod;
  userId: string;
  userName?: string;
  userEmail?: string;
  date: Date;
}

export const createTransaction = async ({
  amount,
  category,
  name,
  date,
  paymentMethod,
  type,
  userId,
  userName,
  userEmail,
}: createTransactionProps) => {
  console.log("Recebendo dados da transação:", {
    userId,
    userName,
    userEmail,
    amount,
    category,
    name,
    date,
    paymentMethod,
    type,
  });

  if (!userId) {
    throw new Error("O ID do usuário é obrigatório.");
  }

  // Verifica se o usuário já existe
  let user = await db.user.findUnique({
    where: { id: userId },
  });

  // Se o usuário não existir, cria ele
  if (!user) {
    if (!userName || !userEmail) {
      throw new Error("Nome e email são obrigatórios para criar um usuário.");
    }

    user = await db.user.create({
      data: {
        id: userId,
        nome: userName,
        email: userEmail,
      },
    });

    console.log("Usuário criado:", user);
  }

  // Cria a transação
  const transaction = await db.transaction.create({
    data: {
      amount,
      category,
      name,
      date,
      paymentMethod,
      type,
      userId,
    },
  });

  revalidatePath("/");
  // Faz o reload na página para aparecer as atualizações

  console.log("Transação criada:", transaction);
};
