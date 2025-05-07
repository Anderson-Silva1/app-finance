import Header from "@/components/header";
import FinancialSummary from "./_components/financial-summary";
import CreateTransaction from "./_components/create-transaction";
import TimeSelect from "./_components/time-select";
import RecentTransactions from "./_components/recent-transactions";
import AccountOverview from "./_components/account-overview";

export default function Home() {
  const income = 2300;
  const expenses = 1800;
  const investments = 400;
  const balance = income - expenses - investments;

  return (
    <>
      <section className="h-screen w-full px-[4%] py-6">
        <Header title="Dashboard" />
        <div className="flex justify-between pt-6">
          <TimeSelect />
          <CreateTransaction />
        </div>
        <FinancialSummary
          income={income}
          expense={expenses}
          investiment={investments}
          balance={balance}
        />
        <div className="flex flex-col gap-4 pt-6 xl:flex-row xl:gap-8">
          <AccountOverview />
          <RecentTransactions />
        </div>
      </section>
    </>
  );
}
