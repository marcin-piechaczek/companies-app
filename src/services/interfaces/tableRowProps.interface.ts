import {IncomeType} from './incomes.interface';

export interface ITableRowProps {
  id: number;
  name: string;
  city: string;
  totalIncome: IncomeType;
  averageIncome: IncomeType;
  lastMonthIncome: IncomeType;
}
