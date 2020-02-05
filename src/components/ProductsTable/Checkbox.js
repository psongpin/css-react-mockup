import React from "react";
import styled from "styled-components";

const StyledCheckbox = styled.input`
  font-size: 12px;
`;

const Checkbox = props => {
  return <StyledCheckbox type="checkbox" {...props} />;
};

Checkbox.propTypes = {};

export default Checkbox;
