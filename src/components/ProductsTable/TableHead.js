import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Checkbox from "./Checkbox";

const Th = styled.th`
  border-top: 0.5px solid;
  border-bottom: 0.5px solid;
  border-color: ${({ theme }) => theme.colors.border};
  padding: 0 10px;
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

const TableHead = props => {
  const theads = [
    { id: "Select All", content: <Checkbox /> },
    { id: "Product Information", content: "Product Information" },
    { id: "KPI", content: "KPI" },
    { id: "Avg Price", content: "Avg Price" },
    { id: "Avg Profit", content: "Avg Profit" },
    { id: "Avg Margin", content: "Avg Margin" },
    { id: "Avg Daily Unit Sold", content: "Avg Daily Unit Sold" },
    { id: "Avg Daily Revenue", content: "Avg Daily Revenue" },
    { id: "Avg ROI", content: "Avg ROI" },
    { id: "Avg Daily Rank", content: "Avg Daily Rank" },
    { id: "Reviews", content: "Reviews" },
    { id: "Rating", content: "Rating" },
    { id: "Dimensions", content: "Dimensions" },
    { id: "...", content: <span>&#8230;</span> }
  ];
  return (
    <thead>
      <tr>
        {theads.map(({ id, content }) => (
          <Th key={id}>{content}</Th>
        ))}
      </tr>
    </thead>
  );
};

TableHead.propTypes = {};

export default TableHead;
