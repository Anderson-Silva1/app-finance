import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { ReactNode } from "react";
import AddTransactionButton from "@/components/AddTransactionButton";
import { numberCurrency } from "@/lib/number-currency";

interface CardSummerySaldo {
  title: string;
  amount: number;
  icon: ReactNode;
  userId: string;
}

const CardSummeryBalance = ({
  amount,
  icon,
  title,
  userId,
}: CardSummerySaldo) => {
  const valueNegativo = amount < 0;

  return (
    <>
      <Card>
        <CardHeader className="flex-row items-center gap-4">
          {icon}
          <p className="text-muted-foreground">{title}</p>
        </CardHeader>
        <CardContent className="flex flex-col justify-between gap-6 sm:flex-row">
          <p
            className={`text-2xl font-bold ${
              valueNegativo ? "text-red-500" : ""
            }`}
          >
            {numberCurrency(amount)}
          </p>
          <AddTransactionButton userId={userId} />
        </CardContent>
      </Card>
    </>
  );
};

export default CardSummeryBalance;
