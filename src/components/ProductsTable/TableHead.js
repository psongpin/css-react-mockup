import React from "react";
import PropTypes from "prop-types";

const TableHead = props => {
  const theads = [
    { id: "Select All", content: <input type="checkbox" /> },
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
          <th key={id}>{content}</th>
        ))}
      </tr>
    </thead>
  );
};

TableHead.propTypes = {};

export default TableHead;
