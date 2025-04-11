"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import { DataTable } from "@/components/ui/data-table";
import { transactionColumns } from "./columns";
import { Transaction } from "@prisma/client";

interface DataTableTransactionsProps {
  transactions: Transaction[];
}

const DataTableTransactions = ({
  transactions,
}: DataTableTransactionsProps) => {
  const [visibleColumns, setVisibleColumns] = useState(transactionColumns);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleColumns(
          transactionColumns.filter((_, index) => [0, 1, 5, 6].includes(index))
        );
      } else {
        // Exibir todas as colunas
        setVisibleColumns(transactionColumns);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Header titulo="Receitas" />
      <div className="px-6">
        <DataTable
          columns={visibleColumns}
          data={JSON.parse(JSON.stringify(transactions))}
        />
      </div>
    </>
  );
};

export default DataTableTransactions;
