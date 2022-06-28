import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper aria-label={label}>
      <StyledSelect value={value} onChange={onChange}>
        {children}
      </StyledSelect>
      <PresentationWrapper>
        {displayedValue}
        <IconWrapper style={{ "--size": "24px" }}>
          <Icon id="chevron-down" strokeWidth={1.5} />
        </IconWrapper>
      </PresentationWrapper>
    </Wrapper>
  );
};

export default Select;

const Wrapper = styled.div`
  width: max-content;
  position: relative;
`;

const StyledSelect = styled.select`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  opacity: 0;
  appearance: none;
`;

const PresentationWrapper = styled.div`
  padding: 12px 52px 12px 16px;
  border-radius: 8px;
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};

  ${StyledSelect}:focus + & {
    outline: 1px dotted #212121; // fallback
    outline: auto 5px -webkit-focus-ring-color;
  }

  ${StyledSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  pointer-events: none;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  height: var(--size);
  width: var(--size);
`;
