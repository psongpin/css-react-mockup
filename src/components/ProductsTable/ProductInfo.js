import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Text } from "./ProductRow";
import flag from "../../images/flag.png";
import iconset from "../../images/iconset1.png";

const Flex = styled.div`
  display: flex;
  align-items: center;
  margin: ${({ margin }) => margin};
`;

const ProductImage = styled.img`
  margin-right: 15px;
`;

const Flag = styled.img`
  margin-right: 20px;
`;

const IconSet = styled.img`
  margin-left: 16px;
`;

const ProductInfo = ({ name, image, productId = "B078WLH42J" }) => {
  return (
    <Flex>
      <ProductImage src={image} alt={name} />
      <div>
        <Text type="secondary" size="14px" weight="500">
          {name}
        </Text>
        <Flex margin="10px 0">
          <Flag src={flag} />

          <Text type="text" size="14px" weight="500">
            {productId}
          </Text>

          <IconSet src={iconset} />
        </Flex>
      </div>
    </Flex>
  );
};

ProductInfo.propTypes = {};

export default ProductInfo;
