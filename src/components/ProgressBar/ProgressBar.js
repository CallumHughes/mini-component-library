import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
  let Component;

  if (size === "small") {
    Component = ({ children }) => (
      <SmallProgressBar>{children}</SmallProgressBar>
    );
  } else if (size === "large") {
    Component = ({ children }) => (
      <LargeProgressBar>{children}</LargeProgressBar>
    );
  } else {
    Component = ({ children }) => <BaseProgressBar>{children}</BaseProgressBar>;
  }

  return (
    <Component
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <BarWrapper>
        <Progress value={value} />
      </BarWrapper>
      <VisuallyHidden>Progress is at {value}%</VisuallyHidden>
    </Component>
  );
};

/* apply a curve to bar at the edges */
const BarWrapper = styled.div`
  overflow: hidden;
  border-radius: 4px;
  height: 100%;
`;

const BaseProgressBar = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
  height: 12px;
`;

const SmallProgressBar = styled(BaseProgressBar)`
  height: 8px;
`;

const LargeProgressBar = styled(BaseProgressBar)`
  height: 24px;
  padding: 4px;
  border-radius: 8px;
`;

const Progress = styled.div`
  background-color: ${COLORS.primary};
  height: 100%;
  width: ${(props) => props.value}%;
  border-radius: 4px 0 0 4px;
`;

export default ProgressBar;
