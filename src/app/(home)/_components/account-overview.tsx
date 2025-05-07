import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AccountSummary from "./account-summary";

const AccountOverview = () => {
  return (
    <>
      <div className="flex-3">
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Resumo de Contas</CardTitle>
            <CardDescription>
              Visualize o saldo de todas as suas contas.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <AccountSummary />
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default AccountOverview;
