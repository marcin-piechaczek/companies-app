import {totalIncome, averageIncome, lastMonthIncome} from './incomeService';
import {Income} from './interfaces/incomes.interface';

const mockIncomes: Income[] = [
  {
    value: '1.35',
    date: new Date('2019-12-12T02:15:22.004Z'),
  },
  {
    value: '2.73',
    date: new Date('2019-12-12T02:15:22.004Z'),
  },
  {
    value: '3.56',
    date: new Date('2019-12-12T02:15:22.004Z'),
  },
  {
    value: '4',
    date: new Date('2019-12-12T02:15:22.004Z'),
  },
];

describe('incomeService', () => {
  describe('totalIncome', () => {
    it('It should return a total income', () => {
      const totalIncomes = totalIncome(mockIncomes);

      expect(totalIncomes).toEqual(11.64);
    });

    it('It should return loading', () => {
      // @ts-ignore
      const totalIncomes = totalIncome(null);

      expect(totalIncomes).toEqual('...loading');
    });
  });

  describe('averageIncome', () => {
    it('It should return a average income', () => {
      const totalIncomes = averageIncome(mockIncomes);

      expect(totalIncomes).toEqual(2.91);
    });

    it('It should return loading', () => {
      // @ts-ignore
      const totalIncomes = totalIncome(null);

      expect(totalIncomes).toEqual('...loading');
    });
  });

  describe('lastMonthIncome', () => {
    it('It should return a last month income income', () => {
      const mockLastMonthIncome = (incomes: Income[], currentMonth: number) => {
        const lastMonthFilter = (date: any) => {
          let dateLastMonth = currentMonth - 1;

          if (dateLastMonth === -1) {
            dateLastMonth = 11;
          }

          return date.getMonth() === dateLastMonth;
        };
        if (incomes) {
          // eslint-disable-next-line max-len
          const lastMonthIncomes = incomes.filter((income) =>
            lastMonthFilter(new Date(income.date)),
          );
          return totalIncome(lastMonthIncomes);
        }
        return '...loading';
      };

      const januaryTest = mockLastMonthIncome(mockIncomes, 0);
      expect(januaryTest).toEqual(11.64);

      const notFoundTest = mockLastMonthIncome(mockIncomes, 11);
      expect(notFoundTest).toEqual(0);

      const serviceTest = lastMonthIncome(mockIncomes);
      const currentMonth = new Date().getMonth();

      if (currentMonth === 0) {
        expect(serviceTest).toEqual(11.64);
      } else {
        expect(serviceTest).toEqual(0);
      }
    });

    it('It should return loading', () => {
      // @ts-ignore
      const totalIncomes = totalIncome(null);

      expect(totalIncomes).toEqual('...loading');
    });
  });
});
