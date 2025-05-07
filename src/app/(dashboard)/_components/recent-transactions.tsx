import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import RecentTransactionsCard from "./recent-transactions-card";

const RecentTransactions = () => {
  return (
    <>
      <Card className="col-span-3 flex-2">
        <CardHeader>
          <CardTitle>Transações Recentes</CardTitle>
          <CardDescription>
            Você realizou 12 transações este mês.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RecentTransactionsCard />
        </CardContent>
      </Card>
    </>
  );
};

export default RecentTransactions;
