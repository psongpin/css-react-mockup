import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Text } from "./ProductRow";
import flag from "../../images/flag.png";
import iconset from "../../images/iconset1.png";

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

const BottomInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 10px 0;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;

const ProductImage = styled.img`
  margin-right: 15px;
  max-width: 100%;
`;

const Flag = styled.img`
  margin-right: 20px;
`;

const IconSet = styled.img`
  margin-top: 10px;

  @media (min-width: 768px) {
    margin-left: 16px;
    margin-top: 0px;
  }
`;

const ProductInfo = ({ name, image, productId }) => {
  return (
    <Flex>
      <ProductImage src={image} alt={name} />
      <div>
        <Text type="secondary" size="14px" weight="500">
          {name}
        </Text>
        <BottomInfo>
          <Flag src={flag} />

          <Text type="text" size="14px" weight="500">
            {productId}
          </Text>

          <IconSet src={iconset} />
        </BottomInfo>
      </div>
    </Flex>
  );
};

ProductInfo.defaultProps = {
  productId: "B078WLH42J"
};

ProductInfo.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  productId: PropTypes.string.isRequired
};

export default ProductInfo;
