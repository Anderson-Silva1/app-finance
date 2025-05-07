import Header from "@/components/header";
import FinancialSummary from "./_components/financial-summary";

export default function Home() {
  return (
    <>
      <section className="h-screen w-full">
        <Header />
        <FinancialSummary />
      </section>
    </>
  );
}
