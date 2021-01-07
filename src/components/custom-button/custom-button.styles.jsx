import styled, { css } from 'styled-components';

const googleSignInButtonStyles = css`
  background-color: rgb(13, 41, 119);
  color: whitesmoke;

  &:hover {
    background-color: rgb(29, 77, 207);
    border: none;
  }
`;
const checkoutButtonStyles = css`
  background-color: grey;
  color: black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const determineStylesForAdditionalClass = function ({ additionalClassName }) {
  if (additionalClassName === 'google-sign-in') {
    return googleSignInButtonStyles;
  }

  if (additionalClassName === 'checkout-button') {
    return checkoutButtonStyles;
  }

  return null;
};

export const StyledCustomButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: grey;
    color: black;
    border: none;
  }

  ${determineStylesForAdditionalClass}
`;
