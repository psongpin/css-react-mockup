import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Text } from "./ProductRow";

const Flex = styled.div`
  display: flex;
`;

const Image = styled.img`
  margin-right: 15px;
`;

const ProductInfo = ({ name, image }) => {
  return (
    <Flex>
      <Image src={image} alt={name} />
      <Text type="secondary" size="14px" weight="500">
        {name}
      </Text>
    </Flex>
  );
};

ProductInfo.propTypes = {};

export default ProductInfo;
