import {Income, IncomeType} from './interfaces/incomes.interface';

// eslint-disable-next-line max-len
export const incomeFormat = (income: number): number => parseFloat(income.toFixed(2));

export const totalIncome = (incomes: Income[]): IncomeType => {
  if (incomes) {
    const incomeValues: number[] = [];
    incomes.map((income) => incomeValues.push(Number(income.value)));
    const totalIncomeSum = incomeValues.reduce((a, b) => a + b, 0);
    return incomeFormat(totalIncomeSum);
  }
  return '...loading';
};

export const averageIncome = (incomes: Income[]): IncomeType => {
  if (incomes) {
    return incomeFormat(Number(totalIncome(incomes)) / incomes.length);
  }
  return '...loading';
};

export const lastMonthIncome = (incomes: Income[]): IncomeType => {
  const lastMonthFilter = (date: Date): boolean => {
    let dateLastMonth = new Date().getMonth() - 1;

    if (dateLastMonth === -1) {
      dateLastMonth = 11;
    }

    return date.getMonth() === dateLastMonth;
  };
  if (incomes) {
    // eslint-disable-next-line max-len
    const lastMonthIncomes = incomes.filter((income) => lastMonthFilter(new Date(income.date)));
    return totalIncome(lastMonthIncomes);
  }
  return '...loading';
};
