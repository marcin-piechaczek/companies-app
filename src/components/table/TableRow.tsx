import React from 'react';
import {ITableRowProps} from '../../services/interfaces/tableRowProps.interface';

const TableRow: React.FC<ITableRowProps> = ({
  id,
  name,
  city,
  totalIncome,
  averageIncome,
  lastMonthIncome,
}) => (
  <tr className="table-body-row" key={id}>
    <td className="table-body-cell">{id}</td>
    <td className="table-body-cell">{name}</td>
    <td className="table-body-cell">{city}</td>
    <td className="table-body-cell">{totalIncome}</td>
    <td className="table-body-cell">{averageIncome}</td>
    <td className="table-body-cell">{lastMonthIncome}</td>
  </tr>
);

export default TableRow;
