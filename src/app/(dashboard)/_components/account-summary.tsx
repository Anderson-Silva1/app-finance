import { CreditCard, Landmark, PiggyBank, Wallet } from "lucide-react";

const AccountSummary = () => {
  return (
    <>
      <div className="space-y-4">
        <div className="flex items-center rounded-lg border p-4">
          <div className="mr-4 rounded-full bg-blue-100 p-2">
            <CreditCard className="h-5 w-5 text-blue-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-medium">Nubank</h3>
            <p className="text-muted-foreground text-xs">Conta Corrente</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium">R$ 12.458,32</p>
          </div>
        </div>

        <div className="flex items-center rounded-lg border p-4">
          <div className="mr-4 rounded-full bg-purple-100 p-2">
            <Wallet className="h-5 w-5 text-purple-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-medium">Inter</h3>
            <p className="text-muted-foreground text-xs">Conta Corrente</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium">R$ 8.723,57</p>
          </div>
        </div>

        <div className="flex items-center rounded-lg border p-4">
          <div className="mr-4 rounded-full bg-yellow-100 p-2">
            <Landmark className="h-5 w-5 text-yellow-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-medium">Banco do Brasil</h3>
            <p className="text-muted-foreground text-xs">Conta Poupança</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium">R$ 15.350,00</p>
          </div>
        </div>

        <div className="flex items-center rounded-lg border p-4">
          <div className="mr-4 rounded-full bg-green-100 p-2">
            <PiggyBank className="h-5 w-5 text-green-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-medium">Investimentos</h3>
            <p className="text-muted-foreground text-xs">XP Investimentos</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium">R$ 8.700,00</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountSummary;
