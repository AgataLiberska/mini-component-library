/* eslint-disable no-unused-vars */
import React from "react"
import styled from "styled-components"

import { COLORS } from "../../constants"
import VisuallyHidden from "../VisuallyHidden"

const STYLES = {
  small: {
    height: 8 + "px",
    padding: 0,
    borderRadius: 4 + "px",
  },
  medium: {
    height: 12 + "px",
    padding: 0,
    borderRadius: 4 + "px",
  },
  large: {
    height: 24 + "px",
    padding: 4 + "px",
    borderRadius: 8 + "px",
  },
}

const ProgressBar = ({ value, size, id }) => {
  const styles = STYLES[size]

  if (!styles) {
    throw new Error(`Unknown size passed to ProgressBar: ${size}`)
  }
  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={{
        "--padding": styles.padding,
        "--border-radius": styles.borderRadius,
      }}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <BarWrapper>
        <Bar
          style={{
            "--width": value + "%",
            "--height": styles.height,
          }}
        />
      </BarWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--border-radius);
  padding: var(--padding);
`

const BarWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
`

const Bar = styled.div`
  height: var(--height);
  background-color: ${COLORS.primary};
  width: var(--width);
  border-radius: 4px 0 0 4px;
`

export default ProgressBar
