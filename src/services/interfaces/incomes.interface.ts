export type Income = {
  value: string;
  date: Date;
};

export interface IIncomes {
  id: number;
  incomes: Income[];
}

export type IncomeType = string | number;
