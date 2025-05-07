import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, DollarSign, TrendingDown, TrendingUp } from "lucide-react";

interface FinancialSummaryProps {
  income: number;
  expense: number;
  investiment: number;
  balance: number;
}

const FinancialSummary = ({
  balance,
  expense,
  income,
  investiment,
}: FinancialSummaryProps) => {
  return (
    <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Saldo Total</CardTitle>
          <DollarSign className="text-muted-foreground h-4 w-4" />
        </CardHeader>
        <CardContent>
          <div
            className={`text-2xl font-bold ${balance < 0 ? `text-red-500` : `text-green-500`} `}
          >{`${balance < 0 ? `- R$ ${balance}` : `R$ ${balance}`} `}</div>
          <p className="text-muted-foreground text-xs">
            +20,1% em relação ao mês anterior
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Receitas</CardTitle>
          <TrendingUp className="h-4 w-4 text-emerald-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">R$ {income}</div>
          <p className="text-muted-foreground text-xs">
            +2,5% em relação ao mês anterior
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Despesas</CardTitle>
          <TrendingDown className="h-4 w-4 text-rose-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">R$ {expense}</div>
          <p className="text-muted-foreground text-xs">
            -4,1% em relação ao mês anterior
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Investimentos</CardTitle>
          <BarChart className="text-muted-foreground h-4 w-4" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">R$ {investiment}</div>
          <p className="text-muted-foreground text-xs">
            +12,3% em relação ao mês anterior
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default FinancialSummary;
