import {ICompany} from './company.interface';
import {Income, IncomeType} from './incomes.interface';

export interface ICompanyDetails extends ICompany {
  incomes: Income[];
}

export interface ICompanyDetailsFormatted {
  id: number;
  name: string;
  city: string;
  totalIncome: IncomeType;
  averageIncome: IncomeType;
  lastMonthIncome: IncomeType;
}
