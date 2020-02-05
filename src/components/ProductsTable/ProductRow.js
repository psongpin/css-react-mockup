import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Checkbox from "./Checkbox";
import { formatPrice } from "../../utils/price";
import { formatPercentage } from "../../utils/percentage";
import ProductInfo from "./ProductInfo";
import iconset from "../../images/iconset2.png";

const Td = styled.td`
  border-top: 0.5px solid;
  border-bottom: 0.5px solid;
  border-color: ${({ theme }) => theme.colors.border};
  padding: 16px 10px;
  text-align: ${({ align }) => align};

  &:first-of-type {
    border-left: 0.5px solid;
    border-top-left-radius: 11px;
    border-bottom-left-radius: 11px;
    padding-left: 16px;
  }

  &:last-of-type {
    border-right: 0.5px solid;
    border-top-right-radius: 11px;
    border-bottom-right-radius: 11px;
    padding-right: 16px;
  }
`;

export const Text = styled.span`
  color: ${({ type, theme }) => theme.colors[type]};
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
`;

const ProductRow = ({ product }) => {
  return (
    <tr>
      <Td align="left">
        <Checkbox />
      </Td>
      <Td align="left">
        <ProductInfo name={product.name} image={product.image} />
      </Td>
      <Td>
        <Text>{product.kpi}</Text>
      </Td>
      <Td>
        <Text>{formatPrice(product.avgPrice)}</Text>
      </Td>
      <Td>
        <Text>{formatPrice(product.avgProfit)}</Text>
      </Td>
      <Td>
        <Text>{formatPercentage(product.avgMargin)}</Text>
      </Td>
      <Td>
        <Text>{product.avgDailyUnitSold}</Text>
      </Td>
      <Td>
        <Text>{formatPrice(product.avgDailyRevenue)}</Text>
      </Td>
      <Td>
        <Text>{formatPercentage(product.avgRoi)}</Text>
      </Td>
      <Td>
        <Text>{product.avgDailyRank}</Text>
      </Td>
      <Td>
        <Text>{product.reviews}</Text>
      </Td>
      <Td>
        <Text>{product.rating}</Text>
      </Td>
      <Td>
        <Text>{product.dimension}</Text>
      </Td>
      <Td>
        <img src={iconset} alt="icon set" />
      </Td>
    </tr>
  );
};

Td.defaultProps = {
  align: "center"
};

Text.defaultProps = {
  type: "text",
  weight: "400",
  size: "16px"
};

ProductRow.propTypes = {};

export default ProductRow;
