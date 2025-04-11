// import {
//   TransactionCategory,
//   TransactionPaymentMethod,
//   TransactionType,
// } from "@prisma/client";

// export const TRANSACTION_PAYMENT_METHOD_ICONS = {
//   [TransactionPaymentMethod.CREDIT_CARD]: "credit-card.svg",
//   [TransactionPaymentMethod.DEBIT_CARD]: "debit-card.svg",
//   [TransactionPaymentMethod.BANK_TRANSFER]: "bank-transfer.svg",
//   [TransactionPaymentMethod.BANK_SLIP]: "bank-slip.svg",
//   [TransactionPaymentMethod.CASH]: "money.svg",
//   [TransactionPaymentMethod.PIX]: "pix.svg",
//   [TransactionPaymentMethod.OTHER]: "other.svg",
// };

// export const TRANSACTION_CATEGORY_LABELS = {
//   EDUCATION: "Educação",
//   ENTERTAINMENT: "Entretenimento",
//   FOOD: "Alimentação",
//   HEALTH: "Saúde",
//   HOUSING: "Moradia",
//   OTHER: "Outros",
//   SALARY: "Salário",
//   TRANSPORTATION: "Transporte",
//   UTILITY: "Utilidades",
// };

// export const TRANSACTION_PAYMENT_METHOD_LABELS = {
//   BANK_TRANSFER: "Transferência Bancária",
//   BANK_SLIP: "Boleto Bancário",
//   CASH: "Dinheiro",
//   CREDIT_CARD: "Cartão de Crédito",
//   DEBIT_CARD: "Cartão de Débito",
//   OTHER: "Outros",
//   PIX: "Pix",
// };

// export const TRANSACTION_TYPE_OPTIONS = [
//   {
//     value: TransactionType.EXPENSE,
//     label: "Despesa",
//   },
//   {
//     value: TransactionType.DEPOSIT,
//     label: "Depósito",
//   },
//   {
//     value: TransactionType.INVESTMENT,
//     label: "Investimento",
//   },
// ];

// export const TRANSACTION_PAYMENT_METHOD_OPTIONS = [
//   {
//     value: TransactionPaymentMethod.BANK_TRANSFER,
//     label:
//       TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.BANK_TRANSFER],
//   },
//   {
//     value: TransactionPaymentMethod.BANK_SLIP,
//     label:
//       TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.BANK_SLIP],
//   },
//   {
//     value: TransactionPaymentMethod.CASH,
//     label: TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.CASH],
//   },
//   {
//     value: TransactionPaymentMethod.CREDIT_CARD,
//     label:
//       TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.CREDIT_CARD],
//   },
//   {
//     value: TransactionPaymentMethod.DEBIT_CARD,
//     label:
//       TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.DEBIT_CARD],
//   },
//   {
//     value: TransactionPaymentMethod.OTHER,
//     label: TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.OTHER],
//   },
//   {
//     value: TransactionPaymentMethod.PIX,
//     label: TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.PIX],
//   },
// ];

// export const TRANSACTION_CATEGORY_OPTIONS = [
//   {
//     value: TransactionCategory.EDUCATION,
//     label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.EDUCATION],
//   },
//   {
//     value: TransactionCategory.ENTERTAINMENT,
//     label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.ENTERTAINMENT],
//   },
//   {
//     value: TransactionCategory.FOOD,
//     label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.FOOD],
//   },
//   {
//     value: TransactionCategory.HEALTH,
//     label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.HEALTH],
//   },
//   {
//     value: TransactionCategory.HOUSING,
//     label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.HOUSING],
//   },
//   {
//     value: TransactionCategory.OTHER,
//     label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.OTHER],
//   },
//   {
//     value: TransactionCategory.SALARY,
//     label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.SALARY],
//   },
//   {
//     value: TransactionCategory.TRANSPORTATION,
//     label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.TRANSPORTATION],
//   },
//   {
//     value: TransactionCategory.UTILITY,
//     label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.UTILITY],
//   },
// ];

import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";

export const TRANSACTION_PAYMENT_METHOD_ICONS = {
  [TransactionPaymentMethod.CREDIT_CARD]: "credit-card.svg",
  [TransactionPaymentMethod.DEBIT_CARD]: "debit-card.svg",
  [TransactionPaymentMethod.BANK_TRANSFER]: "bank-transfer.svg",
  [TransactionPaymentMethod.BANK_SLIP]: "bank-slip.svg",
  [TransactionPaymentMethod.CASH]: "money.svg",
  [TransactionPaymentMethod.PIX]: "pix.svg",
  [TransactionPaymentMethod.PAYPAL]: "paypal.svg",
  [TransactionPaymentMethod.CRYPTOCURRENCY]: "crypto.svg",
  [TransactionPaymentMethod.CHECK]: "check.svg",
  [TransactionPaymentMethod.GOOGLE_PAY]: "google-pay.svg",
  [TransactionPaymentMethod.APPLE_PAY]: "apple-pay.svg",
  [TransactionPaymentMethod.GIFT_CARD]: "gift-card.svg",
  [TransactionPaymentMethod.STORE_CREDIT]: "store-credit.svg",
  [TransactionPaymentMethod.OTHER]: "other.svg",
};

export const TRANSACTION_CATEGORY_LABELS = {
  HOUSING: "Moradia",
  RENT: "Aluguel",
  MORTGAGE: "Hipoteca",
  WATER: "Água",
  ELECTRICITY: "Luz",
  INTERNET: "Internet",
  GAS: "Gás",
  TRANSPORTATION: "Transporte",
  FUEL: "Combustível",
  PUBLIC_TRANSPORT: "Transporte Público",
  VEHICLE_MAINTENANCE: "Manutenção Veicular",
  FOOD: "Alimentação",
  GROCERIES: "Mercado",
  RESTAURANTS: "Restaurantes",
  ENTERTAINMENT: "Entretenimento",
  STREAMING_SERVICES: "Serviços de Streaming",
  MOVIES: "Cinema/Filmes",
  HEALTH: "Saúde",
  MEDICAL_EXPENSES: "Despesas Médicas",
  PHARMACY: "Farmácia",
  GYM: "Academia",
  DENTIST: "Dentista",
  MEDICAL_EXAMS: "Exames Médicos",
  HEALTH_INSURANCE: "Seguro de Saúde",
  TREATMENTS_THERAPIES: "Tratamentos e Terapias",
  UTILITY: "Utilidades",
  PHONE_BILL: "Conta de Telefone",
  SALARY: "Salário",
  EDUCATION: "Educação",
  SCHOOL_FEES: "Mensalidade Escolar",
  COURSES: "Cursos",
  OTHER: "Outros",
  INVESTMENTS: "Investimentos",
  LEISURE: "Lazer",
  CLOTHING: "Vestuário",
  SUBSCRIPTIONS_SERVICES: "Assinaturas e Serviços",
  TAXES_FEES: "Impostos e Taxas",
  DONATIONS_CHARITY: "Doações e Caridade",
  PERSONAL_CARE: "Cuidados Pessoais",
  TECHNOLOGY_ELECTRONICS: "Tecnologia e Eletrônicos",
  TRAVEL_TOURISM: "Viagens e Turismo",
  MAINTENANCE_REPAIRS: "Manutenção e Reparos",
  PETS: "Animais de Estimação",
  DEBTS_LOANS: "Dívidas e Empréstimos",
  TOOLS_EQUIPMENT: "Ferramentas e Equipamentos",
};

export const TRANSACTION_PAYMENT_METHOD_LABELS = {
  CASH: "Dinheiro",
  CREDIT_CARD: "Cartão de Crédito",
  DEBIT_CARD: "Cartão de Débito",
  BANK_TRANSFER: "Transferência Bancária",
  BANK_SLIP: "Boleto Bancário",
  PIX: "Pix",
  PAYPAL: "PayPal",
  CRYPTOCURRENCY: "Criptomoeda",
  CHECK: "Cheque",
  GOOGLE_PAY: "Google Pay",
  APPLE_PAY: "Apple Pay",
  GIFT_CARD: "Vale-Presente",
  STORE_CREDIT: "Crédito na Loja",
  OTHER: "Outro",
};

import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";

export const TRANSACTION_PAYMENT_METHOD_ICONS = {
  [TransactionPaymentMethod.CREDIT_CARD]: "credit-card.svg",
  [TransactionPaymentMethod.DEBIT_CARD]: "debit-card.svg",
  [TransactionPaymentMethod.BANK_TRANSFER]: "bank-transfer.svg",
  [TransactionPaymentMethod.BANK_SLIP]: "bank-slip.svg",
  [TransactionPaymentMethod.CASH]: "money.svg",
  [TransactionPaymentMethod.PIX]: "pix.svg",
  [TransactionPaymentMethod.PAYPAL]: "paypal.svg",
  [TransactionPaymentMethod.CRYPTOCURRENCY]: "crypto.svg",
  [TransactionPaymentMethod.CHECK]: "check.svg",
  [TransactionPaymentMethod.GOOGLE_PAY]: "google-pay.svg",
  [TransactionPaymentMethod.APPLE_PAY]: "apple-pay.svg",
  [TransactionPaymentMethod.GIFT_CARD]: "gift-card.svg",
  [TransactionPaymentMethod.STORE_CREDIT]: "store-credit.svg",
  [TransactionPaymentMethod.OTHER]: "other.svg",
};

export const TRANSACTION_CATEGORY_OPTIONS = [
  { value: TransactionCategory.HOUSING, label: "Moradia" },
  { value: TransactionCategory.RENT, label: "Aluguel" },
  { value: TransactionCategory.MORTGAGE, label: "Hipoteca" },
  { value: TransactionCategory.WATER, label: "Água" },
  { value: TransactionCategory.ELECTRICITY, label: "Luz" },
  { value: TransactionCategory.INTERNET, label: "Internet" },
  { value: TransactionCategory.GAS, label: "Gás" },
  { value: TransactionCategory.TRANSPORTATION, label: "Transporte" },
  { value: TransactionCategory.FUEL, label: "Combustível" },
  { value: TransactionCategory.PUBLIC_TRANSPORT, label: "Transporte Público" },
  { value: TransactionCategory.VEHICLE_MAINTENANCE, label: "Manutenção Veicular" },
  { value: TransactionCategory.FOOD, label: "Alimentação" },
  { value: TransactionCategory.GROCERIES, label: "Mercado" },
  { value: TransactionCategory.RESTAURANTS, label: "Restaurantes" },
  { value: TransactionCategory.ENTERTAINMENT, label: "Entretenimento" },
  { value: TransactionCategory.STREAMING_SERVICES, label: "Serviços de Streaming" },
  { value: TransactionCategory.MOVIES, label: "Cinema/Filmes" },
  { value: TransactionCategory.HEALTH, label: "Saúde" },
  { value: TransactionCategory.MEDICAL_EXPENSES, label: "Despesas Médicas" },
  { value: TransactionCategory.PHARMACY, label: "Farmácia" },
  { value: TransactionCategory.GYM, label: "Academia" },
  { value: TransactionCategory.DENTIST, label: "Dentista" },
  { value: TransactionCategory.MEDICAL_EXAMS, label: "Exames Médicos" },
  { value: TransactionCategory.HEALTH_INSURANCE, label: "Seguro de Saúde" },
  { value: TransactionCategory.TREATMENTS_THERAPIES, label: "Tratamentos e Terapias" },
  { value: TransactionCategory.EDUCATION, label: "Educação" },
  { value: TransactionCategory.SCHOOL_FEES, label: "Mensalidade Escolar" },
  { value: TransactionCategory.COURSES, label: "Cursos" },
  { value: TransactionCategory.OTHER, label: "Outros" },
  { value: TransactionCategory.INVESTMENTS, label: "Investimentos" },
  { value: TransactionCategory.LEISURE, label: "Lazer" },
  { value: TransactionCategory.CLOTHING, label: "Vestuário" },
  { value: TransactionCategory.SUBSCRIPTIONS_SERVICES, label: "Assinaturas e Serviços" },
  { value: TransactionCategory.TAXES_FEES, label: "Impostos e Taxas" },
  { value: TransactionCategory.DONATIONS_CHARITY, label: "Doações e Caridade" },
  { value: TransactionCategory.PERSONAL_CARE, label: "Cuidados Pessoais" },
  { value: TransactionCategory.TECHNOLOGY_ELECTRONICS, label: "Tecnologia e Eletrônicos" },
  { value: TransactionCategory.TRAVEL_TOURISM, label: "Viagens e Turismo" },
  { value: TransactionCategory.MAINTENANCE_REPAIRS, label: "Manutenção e Reparos" },
  { value: TransactionCategory.PETS, label: "Animais de Estimação" },
  { value: TransactionCategory.DEBTS_LOANS, label: "Dívidas e Empréstimos" },
  { value: TransactionCategory.TOOLS_EQUIPMENT, label: "Ferramentas e Equipamentos" },
];

export const TRANSACTION_PAYMENT_METHOD_OPTIONS = [
  { value: TransactionPaymentMethod.CASH, label: "Dinheiro" },
  { value: TransactionPaymentMethod.CREDIT_CARD, label: "Cartão de Crédito" },
  { value: TransactionPaymentMethod.DEBIT_CARD, label: "Cartão de Débito" },
  { value: TransactionPaymentMethod.BANK_TRANSFER, label: "Transferência Bancária" },
  { value: TransactionPaymentMethod.BANK_SLIP, label: "Boleto Bancário" },
  { value: TransactionPaymentMethod.PIX, label: "Pix" },
  { value: TransactionPaymentMethod.PAYPAL, label: "PayPal" },
  { value: TransactionPaymentMethod.CRYPTOCURRENCY, label: "Criptomoeda" },
  { value: TransactionPaymentMethod.CHECK, label: "Cheque" },
  { value: TransactionPaymentMethod.GOOGLE_PAY, label: "Google Pay" },
  { value: TransactionPaymentMethod.APPLE_PAY, label: "Apple Pay" },
  { value: TransactionPaymentMethod.GIFT_CARD, label: "Vale-Presente" },
  { value: TransactionPaymentMethod.STORE_CREDIT, label: "Crédito na Loja" },
  { value: TransactionPaymentMethod.OTHER, label: "Outro" },
];

export const TRANSACTION_TYPE_OPTIONS = [
  { value: TransactionType.EXPENSE, label: "Despesa" },
  { value: TransactionType.DEPOSIT, label: "Depósito" },
  { value: TransactionType.INVESTMENT, label: "Investimento" },
];
