import React from 'react';
import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

const withSpinner = (WrappedComponent) => ({
  isLoading,
  ...componentProps
}) => {
  const SpinnerComponent = () => (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  );

  if (isLoading === true) {
    return SpinnerComponent();
  }

  return <WrappedComponent {...componentProps} />;
};

export default withSpinner;
