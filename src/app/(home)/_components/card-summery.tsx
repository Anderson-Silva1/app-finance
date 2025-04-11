"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { numberCurrency } from "@/lib/number-currency";

import { ReactNode } from "react";

interface CardSummery {
  title: string;
  amount: number;
  colorIcon: string;
  icon: ReactNode;
}

const CardSummery = ({ amount, icon, title, colorIcon }: CardSummery) => {
  return (
    <>
      <Card className="flex-1">
        <CardHeader className={`flex-row items-center gap-4 ${colorIcon}`}>
          {icon}
          <p className="text-muted-foreground">{title}</p>
        </CardHeader>
        <CardContent className="flex justify-between">
          <p className="text-2xl font-bold">{numberCurrency(amount)}</p>
        </CardContent>
      </Card>
    </>
  );
};

export default CardSummery;
