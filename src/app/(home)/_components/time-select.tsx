import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const TimeSelect = () => {
  const months = [
    { label: "Janeiro", value: 1 },
    { label: "Fevereiro", value: 2 },
    { label: "Março", value: 3 },
    { label: "Abril", value: 4 },
    { label: "Maio", value: 5 },
    { label: "Junho", value: 6 },
    { label: "Julho", value: 7 },
    { label: "Agosto", value: 8 },
    { label: "Setembro", value: 9 },
    { label: "Outubro", value: 10 },
    { label: "Novembro", value: 11 },
    { label: "Dezembro", value: 12 },
  ];

  return (
    <>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Mês" />
        </SelectTrigger>
        <SelectContent>
          {months.map((month) => (
            <SelectItem key={month.value} value={month.label}>
              {month.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
};

export default TimeSelect;
