"use client";

import { useState } from "react";
import {
  SearchIcon,
  DownloadIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Header from "@/components/header";

// Dados de exemplo
const transactions = [
  {
    id: "1",
    description: "Salário",
    date: "2025-04-15",
    amount: 8500.0,
    type: "investiment",
    category: "Salário",
    account: "Nubank",
  },
  {
    id: "2",
    description: "Aluguel",
    date: "2025-04-10",
    amount: 1800.0,
    type: "expense",
    category: "Moradia",
    account: "Inter",
  },
  {
    id: "3",
    description: "Supermercado Extra",
    date: "2025-04-08",
    amount: 235.42,
    type: "expense",
    category: "Alimentação",
    account: "Nubank",
  },
  {
    id: "4",
    description: "Uber",
    date: "2025-04-07",
    amount: 32.5,
    type: "expense",
    category: "Transporte",
    account: "Nubank",
  },
  {
    id: "5",
    description: "Netflix",
    date: "2025-04-05",
    amount: 39.9,
    type: "expense",
    category: "Entretenimento",
    account: "Nubank",
  },
  {
    id: "6",
    description: "Freelance Design",
    date: "2025-04-03",
    amount: 1200.0,
    type: "income",
    category: "Freelance",
    account: "Inter",
  },
  {
    id: "7",
    description: "Restaurante",
    date: "2025-04-02",
    amount: 89.9,
    type: "expense",
    category: "Alimentação",
    account: "Nubank",
  },
  {
    id: "8",
    description: "Farmácia",
    date: "2025-04-01",
    amount: 65.3,
    type: "expense",
    category: "Saúde",
    account: "Inter",
  },
  {
    id: "9",
    description: "Dividendos",
    date: "2025-03-30",
    amount: 320.0,
    type: "income",
    category: "Investimentos",
    account: "XP Investimentos",
  },
  {
    id: "10",
    description: "Academia",
    date: "2025-03-28",
    amount: 99.9,
    type: "expense",
    category: "Saúde",
    account: "Nubank",
  },
  {
    id: "11",
    description: "Pix da mãe",
    date: "2025-04-16",
    amount: 200.0,
    type: "income",
    category: "Ajuda Familiar",
    account: "Nubank",
  },
  {
    id: "12",
    description: "Cinema",
    date: "2025-04-14",
    amount: 50.0,
    type: "expense",
    category: "Entretenimento",
    account: "Nubank",
  },
  {
    id: "13",
    description: "Transporte coletivo",
    date: "2025-04-13",
    amount: 15.0,
    type: "expense",
    category: "Transporte",
    account: "Inter",
  },
  {
    id: "14",
    description: "Venda de item usado",
    date: "2025-04-12",
    amount: 180.0,
    type: "income",
    category: "Outros",
    account: "Dinheiro",
  },
  {
    id: "15",
    description: "Conta de Luz",
    date: "2025-04-11",
    amount: 130.5,
    type: "expense",
    category: "Moradia",
    account: "Inter",
  },
  {
    id: "16",
    description: "Assinatura Figma",
    date: "2025-04-09",
    amount: 49.9,
    type: "expense",
    category: "Educação",
    account: "Nubank",
  },
  {
    id: "17",
    description: "Pagamento Freelancer",
    date: "2025-04-06",
    amount: 950.0,
    type: "income",
    category: "Freelance",
    account: "Inter",
  },
  {
    id: "18",
    description: "Compras no Mercantil",
    date: "2025-04-04",
    amount: 180.0,
    type: "expense",
    category: "Alimentação",
    account: "Nubank",
  },
  {
    id: "19",
    description: "Compra de Livro",
    date: "2025-04-02",
    amount: 70.0,
    type: "expense",
    category: "Educação",
    account: "Inter",
  },
  {
    id: "20",
    description: "Recebimento Juros CDB",
    date: "2025-03-31",
    amount: 110.0,
    type: "income",
    category: "Investimentos",
    account: "XP Investimentos",
  },
];

export default function TransactionsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [monthFilter, setMonthFilter] = useState("all");

  // Filtrar transações por mês (opcional)
  const filteredByMonth =
    monthFilter === "all"
      ? transactions
      : transactions.filter((transaction) => {
          const transactionDate = new Date(transaction.date);
          return transactionDate.getMonth() + 1 === parseInt(monthFilter, 10);
        });

  // Filtrar transações
  const filteredTransactions = filteredByMonth.filter((transaction) => {
    const matchesSearch = transaction.description
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === "all" || transaction.type === typeFilter;
    const matchesCategory =
      categoryFilter === "all" || transaction.category === categoryFilter;

    return matchesSearch && matchesType && matchesCategory;
  });

  // Obter categorias únicas
  const categories = Array.from(new Set(transactions.map((t) => t.category)));

  return (
    <div className="space-y-6 px-[4%] py-6">
      <Header title="Transações" />
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button>
          <DownloadIcon className="mr-2 h-4 w-4" />
          Exportar
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Filtros</CardTitle>
          <CardDescription>
            Refine sua busca por transações específicas.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="relative">
              <SearchIcon className="text-muted-foreground absolute top-2.5 left-2.5 h-4 w-4" />
              <Input
                type="search"
                placeholder="Buscar transações..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* <div className="flex flex-col gap-10 xl:flex-row"> */}
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Tipo de transação" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os tipos</SelectItem>
                <SelectItem value="income">Receitas</SelectItem>
                <SelectItem value="expense">Despesas</SelectItem>
              </SelectContent>
            </Select>
            <Select value={monthFilter} onValueChange={setMonthFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Mês" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os meses</SelectItem>
                <SelectItem value="1">Janeiro</SelectItem>
                <SelectItem value="2">Fevereiro</SelectItem>
                <SelectItem value="3">Março</SelectItem>
                <SelectItem value="4">Abril</SelectItem>
                <SelectItem value="5">Maio</SelectItem>
                <SelectItem value="6">Junho</SelectItem>
                <SelectItem value="7">Julho</SelectItem>
                <SelectItem value="8">Agosto</SelectItem>
                <SelectItem value="9">Setembro</SelectItem>
                <SelectItem value="10">Outubro</SelectItem>
                <SelectItem value="11">Novembro</SelectItem>
                <SelectItem value="12">Dezembro</SelectItem>
              </SelectContent>
            </Select>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas as categorias</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {/* </div> */}
          </div>
        </CardContent>
      </Card>

      {window.innerWidth > 768 && (
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Descrição</TableHead>
                  <TableHead>Data</TableHead>
                  <TableHead>Categoria</TableHead>
                  <TableHead>Conta</TableHead>
                  <TableHead className="text-right">Valor</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTransactions.length === 0 ? (
                  <TableRow>
                    <TableCell
                      colSpan={5}
                      className="text-muted-foreground py-8 text-center"
                    >
                      Nenhuma transação encontrada.
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredTransactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell>{transaction.description}</TableCell>
                      <TableCell>
                        {new Date(transaction.date).toLocaleDateString("pt-BR")}
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{transaction.category}</Badge>
                      </TableCell>
                      <TableCell>{transaction.account}</TableCell>
                      <TableCell
                        className={`text-right font-medium text-white ${transaction.type === "income" ? "text-green-600" : transaction.type === "expense" ? "text-red-600" : "text-primary"}`}
                      >
                        {transaction.type === "income"
                          ? "+"
                          : transaction.type === "income"
                            ? "-"
                            : ""}
                        {transaction.amount.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </CardContent>
          <div className="flex items-center justify-end border-t p-4">
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="icon">
                <ChevronLeftIcon className="h-4 w-4" />
              </Button>
              <p className="text-muted-foreground text-sm">Página 1 de 1</p>
              <Button variant="outline" size="icon">
                <ChevronRightIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}
