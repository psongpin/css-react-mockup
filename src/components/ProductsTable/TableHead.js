import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import Checkbox from "./Checkbox";

const Th = styled.th`
  border-top: 0.5px solid;
  border-bottom: 0.5px solid;
  border-color: ${({ theme }) => theme.colors.border};
  padding: 5px 10px;
  height: 46px;
  text-align: center;
  font-size: 14px;
  font-weight: 600;

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

const HeadWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
`;

const Arrow = styled.div`
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  ${({ direction }) =>
    direction === "up"
      ? css`
          border-bottom: 5px solid black;
          margin-bottom: 4px;
        `
      : "border-top: 5px solid black"};
`;

const HeadContent = ({ content }) => (
  <HeadWrap>
    <span>{content}</span>
    <Flex>
      <Arrow direction="up" />
      <Arrow direction="down" />
    </Flex>
  </HeadWrap>
);

const TableHead = props => {
  const theads = [
    { id: "Select All", content: <Checkbox /> },
    {
      id: "Product Information",
      content: <HeadContent content="Product Information" />
    },
    { id: "KPI", content: <HeadContent content="KPI" /> },
    { id: "Avg Price", content: <HeadContent content="Avg Price" /> },
    { id: "Avg Profit", content: <HeadContent content="Avg Profit" /> },
    { id: "Avg Margin", content: <HeadContent content="Avg Margin" /> },
    {
      id: "Avg Daily Unit Sold",
      content: <HeadContent content="Avg Daily Unit Sold" />
    },
    {
      id: "Avg Daily Revenue",
      content: <HeadContent content="Avg Daily Revenue" />
    },
    { id: "Avg ROI", content: <HeadContent content="Avg ROI" /> },
    { id: "Avg Daily Rank", content: <HeadContent content="Avg Daily Rank" /> },
    { id: "Reviews", content: <HeadContent content="Reviews" /> },
    { id: "Rating", content: <HeadContent content="Rating" /> },
    { id: "Dimensions", content: <HeadContent content="Dimensions" /> },
    {
      id: "...",
      content: (
        <span style={{ fontSize: 30, verticalAlign: 16, color: "#98AECA" }}>
          &#8230;
        </span>
      )
    }
  ];

  return (
    <thead>
      <tr>
        {theads.map(({ id, content }) => (
          <Th key={id}>{content}</Th>
        ))}
      </tr>
      <tr />
      <tr />
      <tr />
    </thead>
  );
};

TableHead.propTypes = {};

export default TableHead;
