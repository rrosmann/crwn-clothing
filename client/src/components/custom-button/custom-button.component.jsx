import React from 'react';
// import './custom-button.styles.scss';
import { StyledCustomButton } from './custom-button.styles';

const CustomButton = ({
  children,
  additionalClassName,
  ...otherButtonProps
}) => (
  <StyledCustomButton
    additionalClassName={additionalClassName}
    {...otherButtonProps}
  >
    {children}
  </StyledCustomButton>
);

export default CustomButton;
