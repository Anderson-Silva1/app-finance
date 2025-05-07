import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  ShoppingBagIcon,
  HomeIcon,
  CoffeeIcon,
  CarIcon,
} from "lucide-react";

export function RecentTransactionsCard() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="mr-3 h-9 w-9">
          <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
          <AvatarFallback>
            <ShoppingBagIcon className="h-4 w-4" />
          </AvatarFallback>
        </Avatar>
        <div className="flex-1 space-y-1">
          <p className="text-sm leading-none font-medium">Supermercado Extra</p>
          <p className="text-muted-foreground text-sm">Hoje, 14:30</p>
        </div>
        <div className="flex items-center text-red-500">
          <ArrowDownIcon className="mr-1 h-4 w-4" />
          <span className="font-medium">R$ 235,42</span>
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="mr-3 h-9 w-9">
          <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
          <AvatarFallback>
            <HomeIcon className="h-4 w-4" />
          </AvatarFallback>
        </Avatar>
        <div className="flex-1 space-y-1">
          <p className="text-sm leading-none font-medium">Aluguel</p>
          <p className="text-muted-foreground text-sm">Ontem, 10:00</p>
        </div>
        <div className="flex items-center text-red-500">
          <ArrowDownIcon className="mr-1 h-4 w-4" />
          <span className="font-medium">R$ 1.800,00</span>
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="mr-3 h-9 w-9">
          <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
          <AvatarFallback>
            <CoffeeIcon className="h-4 w-4" />
          </AvatarFallback>
        </Avatar>
        <div className="flex-1 space-y-1">
          <p className="text-sm leading-none font-medium">Café Starbucks</p>
          <p className="text-muted-foreground text-sm">20/04/2025, 16:45</p>
        </div>
        <div className="flex items-center text-red-500">
          <ArrowDownIcon className="mr-1 h-4 w-4" />
          <span className="font-medium">R$ 22,90</span>
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="mr-3 h-9 w-9">
          <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
          <AvatarFallback>
            <CarIcon className="h-4 w-4" />
          </AvatarFallback>
        </Avatar>
        <div className="flex-1 space-y-1">
          <p className="text-sm leading-none font-medium">Uber</p>
          <p className="text-muted-foreground text-sm">19/04/2025, 08:30</p>
        </div>
        <div className="flex items-center text-red-500">
          <ArrowDownIcon className="mr-1 h-4 w-4" />
          <span className="font-medium">R$ 32,50</span>
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="mr-3 h-9 w-9 bg-green-100">
          <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
          <AvatarFallback className="bg-green-100 text-green-600">
            <ArrowUpIcon className="h-4 w-4" />
          </AvatarFallback>
        </Avatar>
        <div className="flex-1 space-y-1">
          <p className="text-sm leading-none font-medium">Salário</p>
          <p className="text-muted-foreground text-sm">15/04/2025, 00:01</p>
        </div>
        <div className="flex items-center text-green-500">
          <ArrowUpIcon className="mr-1 h-4 w-4" />
          <span className="font-medium">R$ 8.500,00</span>
        </div>
      </div>
    </div>
  );
}
export default RecentTransactionsCard;
