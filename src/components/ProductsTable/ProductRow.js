import React from "react";
import PropTypes from "prop-types";

const ProductRow = ({ product }) => {
  return (
    <tr>
      <td>
        <input type="checkbox" />
      </td>
      <td>{product.name}</td>
      <td>{product.kpi}</td>
      <td>{product.avgPrice}</td>
      <td>{product.avgProfit}</td>
      <td>{product.avgMargin}</td>
      <td>{product.avgDailyUnitSold}</td>
      <td>{product.avgDailyRevenue}</td>
      <td>{product.avgRoi}</td>
      <td>{product.avgDailyRank}</td>
      <td>{product.reviews}</td>
      <td>{product.rating}</td>
      <td>{product.dimension}</td>
      <td></td>
    </tr>
  );
};

ProductRow.propTypes = {};

export default ProductRow;
