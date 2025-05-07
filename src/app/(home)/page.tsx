import Header from "@/components/header";
import FinancialSummary from "./_components/financial-summary";
import CreateTransaction from "./_components/create-transaction";
import TimeSelect from "./_components/time-select";
import RecentTransactions from "./_components/recent-transactions";
import AccountOverview from "./_components/account-overview";

export default function Home() {
  return (
    <>
      <section className="h-screen w-full">
        <Header />
        <div className="flex justify-between px-[4%] pt-6">
          <TimeSelect />
          <CreateTransaction />
        </div>
        <FinancialSummary />
        <div className="flex gap-4 px-[4%] pt-6">
          <AccountOverview />
          <RecentTransactions />
        </div>
      </section>
    </>
  );
}
