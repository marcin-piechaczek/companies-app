/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {averageIncome, lastMonthIncome, totalIncome} from './incomeService';
import {ICompanyDetails, ICompanyDetailsFormatted} from './interfaces/companyDetails.interface';
import React, {FunctionComponent, SVGAttributes} from 'react';

export const CompanyInfoFormatter = (company: ICompanyDetails): ICompanyDetailsFormatted => ({
  id: company.id,
  name: company.name,
  city: company.city,
  totalIncome: totalIncome(company.incomes),
  averageIncome: averageIncome(company.incomes),
  lastMonthIncome: lastMonthIncome(company.incomes),
});

// eslint-disable-next-line max-len
export const renderIcon = (src: FunctionComponent<SVGAttributes<SVGElement>>, alt: string) => <img src={src.toString()} alt={alt}></img>;
