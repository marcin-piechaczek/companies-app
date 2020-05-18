import {ICompany} from './interfaces/company.interface';
import {IIncomes} from './interfaces/incomes.interface';
import {API_URL} from '../config/config';

export async function fetchCompanies(): Promise<ICompany> {
  const response = await fetch(`${API_URL}/companies`);
  return await response.json();
}

export async function fetchCompanyIncomeById(id: number): Promise<IIncomes> {
  const response = await fetch(`${API_URL}/incomes/${id}`);
  return await response.json();
}
