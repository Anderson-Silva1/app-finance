export const numberCurrency = (value: number) => {
  if (isNaN(value)) return "R$ 0,00"; // Retorna um valor padrão se for NaN

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};
