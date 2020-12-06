import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({
  children,
  additionalClassName,
  ...otherButtonProps
}) => (
  <button
    className={`custom-button ${additionalClassName}`}
    {...otherButtonProps}
  >
    {children}
  </button>
);

export default CustomButton;
