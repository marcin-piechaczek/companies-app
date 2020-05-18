import React, {useEffect, useState} from 'react';
import {
  fetchCompanies,
  fetchCompanyIncomeById,
} from '../../services/ApiService';
import {ICompany} from '../../services/interfaces/company.interface';
import {IIncomes} from '../../services/interfaces/incomes.interface';
// eslint-disable-next-line max-len
import {ICompanyDetails} from '../../services/interfaces/companyDetails.interface';
import TableWrapper from './TableWrapper';

const Table: React.FC<unknown> = () => {
  const [companies, setCompanies] = useState<ICompany[]>([]);
  const [incomes, setIncomes] = useState<IIncomes[]>([]);
  const [companiesDetails, setCompaniesDetails] = useState<ICompanyDetails[]>(
      [],
  );

  /*
  /* Fetch companies from API
  */
  useEffect(() => {
    (async function(): Promise<void> {
      try {
        const fetchedCompanies: any = await fetchCompanies();
        await setCompanies(fetchedCompanies);
      } catch (error) {
        throw Error(error);
      }
    }());
  }, []);

  /*
  /* Fetch companies incomes by passing company ID
  */
  useEffect(() => {
    (async function(): Promise<void> {
      try {
        const companyIncomes: any = await Promise.all(
            companies.map(
                async (company) => await fetchCompanyIncomeById(company.id),
            ),
        );
        await setIncomes(companyIncomes);
      } catch (error) {
        throw Error(error);
      }
    }());
  }, [companies]);

  /*
  /* Merge incomes with company
  */
  useEffect(() => {
    const mergeIncomesWithCompany: any = companies.map((company) => ({
      ...company,
      ...incomes.find((income) => income.id === company.id),
    }));
    setCompaniesDetails(mergeIncomesWithCompany);
  }, [companies, incomes]);

  return (
    <>
      <TableWrapper companiesDetails={companiesDetails} />
    </>
  );
};

export default Table;
