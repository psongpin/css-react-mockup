import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { formatPrice } from "../../utils/price";
import { formatPercentage } from "../../utils/percentage";

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9998;
  background: rgba(0, 0, 0, 0.3);
`;

const Modal = styled.div`
  width: 400px;
  max-width: 100%;
  min-height: 400px;
  max-height: 100vh;
  overflow-y: auto;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 9999;
  background: ${({ theme }) => theme.colors.mainBackground};
  transform: translate(-50%, -50%);
  border-radius: 11px;
  padding-bottom: 60px;
`;

const CloseButton = styled.button`
  display: block;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  padding: 8px 20px;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.primary};
  border-radius: 15px;
  background: transparent;
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
`;

const Head = styled.div`
  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.colors.border};
  padding: 10px 15px;
  text-align: center;
  font-weight: 700;
`;

const ModalContent = styled.div`
  padding: 15px;
`;

const Row = styled.div`
  display: flex;
  margin: 0 auto 16px;

  > * {
    flex: 1;

    &:first-child {
      font-weight: 700;
    }

    &:last-child {
      text-align: right;
    }
  }
`;

const ContentRow = ({ label, value }) => (
  <Row>
    <div>{label}</div>
    <div>{value ? value : "-"}</div>
  </Row>
);
const ProductModal = ({ visible, closeModal, product }) => {
  const displayData = [
    { label: "KPI", value: product.kpi },
    { label: "Avg Price", value: formatPrice(product.avgPrice) },
    { label: "Avg Profit", value: formatPrice(product.avgProfit) },
    { label: "Avg Margin", value: formatPercentage(product.avgMargin) },
    {
      label: "Avg Daily Unit Sold",
      value: product.avgDailyUnitSold
    },
    {
      label: "Avg Daily Revenue",
      value: formatPrice(product.avgDailyRevenue)
    },
    { label: "Avg ROI", value: formatPercentage(product.avgRoi) },
    { label: "Avg Daily Rank", value: product.avgDailyRank },
    { label: "Reviews", value: product.reviews },
    { label: "Rating", value: product.rating },
    { label: "Dimensions", value: product.dimension }
  ];

  return !visible ? null : (
    <>
      <Overlay />
      <Modal>
        <Head>{product.id}</Head>
        <ModalContent>
          {displayData.map(data => (
            <ContentRow label={data.label} value={data.value} />
          ))}
        </ModalContent>
        <CloseButton onClick={closeModal}>Close</CloseButton>
      </Modal>
    </>
  );
};

ProductModal.propTypes = {
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

export default ProductModal;
