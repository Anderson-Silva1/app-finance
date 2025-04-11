import {
  ArrowDownCircle,
  ArrowUpCircle,
  PiggyBank,
  Wallet,
} from "lucide-react";

import CardSummery from "./card-summery";
import CardSummeryBalance from "./card-summery-balace";

interface SummeryCards {
  expense: number;
  income: number;
  investment: number;
  balance: number;
  userId: string;
}

const SummeryCards = ({
  balance,
  expense,
  income,
  investment,
  userId,
}: SummeryCards) => {
  return (
    <>
      <div className="px-[4%] flex flex-col gap-4">
        <div>
          <CardSummeryBalance
            userId={userId}
            amount={balance}
            icon={<Wallet />}
            title="Saldo"
          />
        </div>
        <div className="flex flex-col gap-2 md:flex-row">
          <CardSummery
            amount={investment}
            icon={<PiggyBank />}
            title="Investimento"
            colorIcon="text-black dark:text-white"
          />
          <CardSummery
            amount={income}
            icon={<ArrowUpCircle />}
            title="Receita"
            colorIcon="text-green-400"
          />
          <CardSummery
            amount={expense}
            icon={<ArrowDownCircle />}
            title="Gasto"
            colorIcon="text-red-400"
          />
        </div>
      </div>
    </>
  );
};

export default SummeryCards;
