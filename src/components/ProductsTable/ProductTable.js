import React from "react";
import PropTypes from "prop-types";

import TableHead from "./TableHead";
import ProductRow from "./ProductRow";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 1450px;
  max-width: 100%;
  margin: 0 auto;
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 12px;
  color: ${({ theme }) => theme.colors.text};
`;

const ProductTable = ({ data }) => {
  return (
    <Wrapper>
      <Table>
        <TableHead />

        <tbody>
          {data.map(product => (
            <ProductRow product={product} key={product.id} />
          ))}
        </tbody>
      </Table>
    </Wrapper>
  );
};

ProductTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      kpi: PropTypes.string,
      avgPrice: PropTypes.number,
      avgProfit: PropTypes.number,
      avgMargin: PropTypes.number,
      avgDailyUnitSold: PropTypes.number,
      avgDailyRevenue: PropTypes.number,
      avgRoi: PropTypes.number,
      avgDailyRank: PropTypes.number,
      reviews: PropTypes.number,
      rating: PropTypes.number,
      dimension: PropTypes.number,
      image: PropTypes.string
    })
  ).isRequired
};

export default ProductTable;
