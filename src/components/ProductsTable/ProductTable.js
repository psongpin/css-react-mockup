import React from "react";
import PropTypes from "prop-types";

import TableHead from "./TableHead";
import ProductRow from "./ProductRow";
import styled from "styled-components";

const Table = styled.table`
  width: 100%;
  max-width: 1450px;
  margin: 0 auto;
  border-collapse: separate;
  border-spacing: 0 12px;
  color: ${({ theme }) => theme.colors.text};
`;

const ProductTable = ({ data }) => {
  return (
    <Table>
      <TableHead />

      <tbody>
        {data.map(product => (
          <ProductRow product={product} key={product.id} />
        ))}
      </tbody>
    </Table>
  );
};

ProductTable.propTypes = {};

export default ProductTable;
