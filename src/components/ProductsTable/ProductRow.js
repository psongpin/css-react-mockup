import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Checkbox from "./Checkbox";
import ProductModal from "./ProductModal";
import ProductInfo from "./ProductInfo";
import { formatPrice } from "../../utils/price";
import { formatPercentage } from "../../utils/percentage";
import iconset from "../../images/iconset2.png";

const Td = styled.td`
  border-top: 0.5px solid;
  border-bottom: 0.5px solid;
  border-color: ${({ theme }) => theme.colors.border};
  padding: 16px 10px;
  text-align: ${({ align }) => align};
  display: none;

  @media (min-width: 1024px) {
    display: table-cell;
  }

  &:first-of-type {
    border-left: 0.5px solid;
    border-top-left-radius: 11px;
    border-bottom-left-radius: 11px;
    padding-left: 16px;
    display: table-cell;
  }

  &:nth-child(2) {
    display: table-cell;
  }

  &:last-of-type {
    border-right: 0.5px solid;
    border-top-right-radius: 11px;
    border-bottom-right-radius: 11px;
    padding-right: 16px;
    display: table-cell;
  }
`;

export const Text = styled.span`
  color: ${({ type, theme }) => theme.colors[type]};
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
`;

const ViewButton = styled.button`
  display: block;
  margin: 10px auto 0;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  padding: 8px 20px;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.primary};
  border-radius: 15px;
  background: transparent;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const ProductRow = ({ product }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  return (
    <tr>
      <Td align="left">
        <Checkbox />
      </Td>
      <Td align="left">
        <ProductInfo name={product.name} image={product.image} />
        <ViewButton onClick={openModal}>View Info</ViewButton>
        <ProductModal
          visible={isModalVisible}
          closeModal={closeModal}
          product={product}
        />
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

ProductRow.propTypes = {
  product: PropTypes.shape({
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
  }).isRequired
};

export default ProductRow;
