import styled from 'styled-components';

export const TableWrapperStyled = styled.div`
  font-family: "Poppins", sans-serif;
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
  margin: 20px;
  font-size: 13px;
  @media (max-width: 580px) {
    margin: 0;
    padding-top: 30px;
  }
`;

export const TableBody = styled.div`
  @media (max-width: 1275px) {
    overflow-x: auto;
  }
`;

export const SearchWrapperStyled = styled.div`
  input {
    font-size: 13px;
    font-family: "Poppins", sans-serif;
    padding: 8px 13px;
    min-width: 300px;
    outline: none;
    @media (max-width: 580px) {
      min-width: 200px;
    }
  }
`;

export const Table = styled.table`
  margin: 1%;
  width: 98%;
  .table-head {
    .table-head-row {
      .table-head-cell {
        min-width: 200px;
        .btn {
          border: none;
          cursor: pointer;
          width: 100%;
          padding: 15px;
          font-weight: bold;
          background-color: #eff5fc;
          text-align: left;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        span {
          margin-right: 5px;
          align-items: center;
          display: flex;
          img {
            width: 11px;
            height: 11px;
          }
        }
      }
    }
  }
  .table-body {
    .table-body-row {
      &:nth-child(2n) {
        .table-body-cell {
          background-color: #eff5fc;
        }
      }
      .table-body-cell {
        padding: 15px;
        text-align: left;
        min-width: 155px;
        min-height: 44px;
      }
    }
  }
`;

export const TablePaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 920px) {
    flex-direction: column;
    justify-content: center;
  }
  .pagination-list {
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-left: 0;
    .number-box {
      margin: 2px;
      min-width: 10px;
      &.active {
        background-color: #eff5fc;
      }
      .number {
        padding: 3px;
        cursor: pointer;
      }
    }
  }
  .total-results {
    margin: 0 15px;
    @media (max-width: 920px) {
      margin: 15px;
    }
  }
  .show-results {
    span {
      margin: 0 10px;
    }
    select {
      padding: 5px;
    }
  }
`;

export const TableNav = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  margin: 0 20px;
  padding: 10px 0;
  display: flex;
  min-height: 71px;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 920px) {
    flex-direction: column;
  }
`;
