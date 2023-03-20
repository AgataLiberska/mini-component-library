import React from "react"
import styled from "styled-components"

import { COLORS } from "../../constants"

import Icon from "../Icon"
import VisuallyHidden from "../VisuallyHidden"

const STYLES = {
  small: {
    iconSize: 16,
    strokeWidth: 1,
    fontSize: 14 / 16 + "rem",
    padding: "4px 1.5rem",
    borderWidth: 1 + "px",
  },
  large: {
    iconSize: 24,
    strokeWidth: 2,
    fontSize: 18 / 16 + "rem",
    padding: "8px 2.25rem",
    borderWidth: 2 + "px",
  },
}

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = STYLES[size]

  if (!styles) {
    throw new Error(`Unknown size passed to IconInput: ${size}`)
  }
  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper
        style={{
          "--size": styles.iconSize + "px",
        }}
      >
        <Icon
          id={icon}
          strokeWidth={styles.strokeWidth}
          size={styles.iconSize}
        />
      </IconWrapper>
      <InputField
        style={{
          "--width": width + "px",
          "--fontSize": styles.fontSize,
          "--padding": styles.padding,
          "--borderWidth": styles.borderWidth,
        }}
        placeholder={placeholder}
      />
    </Wrapper>
  )
}

const Wrapper = styled.label`
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
  width: var(--size);
`

const InputField = styled.input`
  width: var(--width);
  padding: var(--padding);
  border: none;
  border-bottom: var(--borderWidth) solid ${COLORS.black};
  font-size: var(--fontSize);
  font-weight: 700;
  color: currentColor;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  &:focus {
    outline-offset: 2px;
  }
`

export default IconInput
