import React from 'react';
import {TablePaginationWrapper} from './styles';
import {ITablePaginationProps} from '../../services/interfaces/tablePaginationProps.interface';

const TablePagination: React.FC<ITablePaginationProps> = ({
  postsPerPage,
  totalPosts,
  paginate,
  changePostsPerPage,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePaginateClick = (pageNumber: number): void => {
    paginate(pageNumber);
  };

  const handlePostPerPageClick = (event: any): void => {
    changePostsPerPage(Number(event.target.value));
  };

  return (
    <TablePaginationWrapper>
      <ul className="pagination-list">
        {pageNumbers.map((number) => (
          <li
            className={
              currentPage === number ? 'number-box active' : 'number-box'
            }
            key={number}
          >
            <div className="number"
              onClick={(): void => handlePaginateClick(number)}
            >
              {number}
            </div>
          </li>
        ))}
      </ul>
      <div className="total-results">
        <strong>{`${totalPosts} `}</strong>
        Results
      </div>
      <div className="show-results">
        <span>Show:</span>
        <select
          onChange={(e): void => handlePostPerPageClick(e)}
          id="show"
          name="show"
        >
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
    </TablePaginationWrapper>
  );
};

export default TablePagination;
