import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    height: 24,
    iconSize: 16,
    fontSize: 14,
    inputPaddingLeft: 24,
    borderSize: 1,
  },
  large: {
    height: 36,
    iconSize: 24,
    fontSize: 18,
    inputPaddingLeft: 36,
    borderSize: 2,
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  if (size !== "small" && size !== "large") {
    throw new Error("Please provide valid size");
  }
  const styles = STYLES[size];
  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ "--iconSize": `${styles.iconSize / 16}rem` }}>
        <Icon id={icon} size={styles.iconSize} />
      </IconWrapper>
      <StyledInput
        placeholder={placeholder}
        style={{
          "--height": `${styles.height / 16}rem`,
          "--iconSize": `${styles.iconSize / 16}rem`,
          "--inputPaddingLeft": `${styles.inputPaddingLeft / 16}rem`,
          "--width": `${width / 16}rem`,
          "--fontSize": `${styles.fontSize / 16}rem`,
          "--borderSize": `${styles.borderSize / 16}rem`,
        }}
        aria-label={label}
      />
    </Wrapper>
  );
};

export default IconInput;

const Wrapper = styled.label`
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  display: inline-block;
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  margin: auto;
  color: inherit;
  font-size: inherit;
  height: var(--iconSize);
  width: var(--iconSize);
`;

const StyledInput = styled.input`
  height: var(--height);
  padding: 10px;
  padding-left: var(--inputPaddingLeft);
  display: inline-block;
  color: inherit;
  width: var(--width);
  font-size: var(--fontSize);
  font-weight: 700;
  border: none;
  border-bottom: ${COLORS.black} solid var(--borderSize);

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }

  &:focus {
    outline: 1px dotted #212121; // fallback
    outline: auto 5px -webkit-focus-ring-color;
    outline-offset: 2px;
  }
`;
