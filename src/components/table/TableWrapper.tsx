import React, {useEffect, useState} from 'react';
import {ICompanyDetailsFormatted} from '../../services/interfaces/companyDetails.interface';
import TableRow from './TableRow';
import TablePagination from './TablePagination';
import {
  SearchWrapperStyled,
  TableWrapperStyled,
  Table,
  TableNav,
  TableBody,
} from './styles';
import {CompanyInfoFormatter, renderIcon} from '../../services/TableService';
import {ITableWrapperProps} from '../../services/interfaces/tableWrapperProps.inteface';
import sortIcon from '../../images/sort-solid.svg';

const TableWrapper: React.FC<ITableWrapperProps> = ({companiesDetails}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [sortedField, setSortedField] = useState<string | null>(null);
  const [companyDetails, setCompanyDetails] = useState<
    ICompanyDetailsFormatted[]
  >([]);
  const [searchValue, setSearchValue] = useState<string>('');
  const [order, setOrder] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage, setPostsPerPage] = useState<number>(20);

  useEffect(() => {
    if (companiesDetails.length > 0) {
      const companyInfo = companiesDetails.map((company) => CompanyInfoFormatter(company));
      const searchFilter = (search: ICompanyDetailsFormatted) =>
        Object.values(search)
            .toString()
            .toLowerCase()
            .includes(searchValue.toLowerCase()); // ¯\_(ツ)_/¯
      const filteredData = companyInfo.filter((search) => searchFilter(search));
      searchValue ? setCompanyDetails(filteredData) : setCompanyDetails(companyInfo);
      setIsLoading(false);
    }
  }, [companiesDetails, searchValue, order]);

  const sortedCompanyList = [...companyDetails];
  if (sortedField !== null) {
    sortedCompanyList.sort((a, b) => {
      // @ts-ignore
      if (a[sortedField] < b[sortedField]) {
        return order ? -1 : 1;
      }

      // @ts-ignore
      if (a[sortedField] > b[sortedField]) {
        return order ? 1 : -1;
      }
      return 0;
    });
  }

  const handleSort = (value: string): void => {
    setSortedField(value);
    setOrder(!order);
  };

  const changePostsPerPage = (postsPerPage: string | number): void => {
    setPostsPerPage(Number(postsPerPage));
    setCurrentPage(1);
  };

  const handleSearching = (event: any): void => {
    setSearchValue(event.target.value.toString());
    setCurrentPage(1);
  };

  // Paginate
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = sortedCompanyList.slice(
      indexOfFirstPost,
      indexOfLastPost,
  );
  const paginate = (pageNumber: number): void => setCurrentPage(pageNumber);

  // Render rows
  const companyRow = currentPosts.map((company) => (
    <TableRow {...company} key={company.id} />
  ));

  return (
    <>
      <TableWrapperStyled>
        <TableNav>
          <SearchWrapperStyled>
            <label htmlFor="search">
              <input
                onChange={(event): void => handleSearching(event)}
                type="search"
                id="search"
                placeholder="Search for anything here"
              />
            </label>
          </SearchWrapperStyled>
          <TablePagination
            postsPerPage={postsPerPage}
            changePostsPerPage={changePostsPerPage}
            currentPage={currentPage}
            totalPosts={sortedCompanyList.length}
            paginate={paginate}
          />
        </TableNav>
        <TableBody>
          <Table>
            <thead className="table-head">
              <tr className="table-head-row">
                <th className="table-head-cell">
                  <button
                    className="btn"
                    type="button"
                    onClick={(): void => handleSort('id')}
                  >
                    Id
                    <span>{renderIcon(sortIcon, 'sort')}</span>
                  </button>
                </th>
                <th className="table-head-cell">
                  <button
                    className="btn"
                    type="button"
                    onClick={(): void => handleSort('name')}
                  >
                    Name
                    <span>{renderIcon(sortIcon, 'sort')}</span>
                  </button>
                </th>
                <th className="table-head-cell">
                  <button
                    className="btn"
                    type="button"
                    onClick={(): void => handleSort('city')}
                  >
                    City
                    <span>{renderIcon(sortIcon, 'sort')}</span>
                  </button>
                </th>
                <th className="table-head-cell">
                  <button
                    className="btn"
                    type="button"
                    onClick={(): void => handleSort('totalIncome')}
                  >
                    Total income
                    <span>{renderIcon(sortIcon, 'sort')}</span>
                  </button>
                </th>
                <th className="table-head-cell">
                  <button
                    className="btn"
                    type="button"
                    onClick={(): void => handleSort('averageIncome')}
                  >
                    Average income
                    <span>{renderIcon(sortIcon, 'sort')}</span>
                  </button>
                </th>
                <th className="table-head-cell">
                  <button
                    className="btn"
                    type="button"
                    onClick={(): void => handleSort('lastMonthIncome')}
                  >
                    Last month income
                    <span>{renderIcon(sortIcon, 'sort')}</span>
                  </button>
                </th>
              </tr>
            </thead>
            <tbody className="table-body">
              {isLoading ? (
                <tr>
                  <td>Loading...</td>
                </tr>
              ) : (
                companyRow
              )}
            </tbody>
          </Table>
        </TableBody>
      </TableWrapperStyled>
    </>
  );
};

export default TableWrapper;
