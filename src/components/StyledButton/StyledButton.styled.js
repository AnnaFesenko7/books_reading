import styled from 'styled-components';

export const StyledButton = styled.button`
  font-size: ${p => p.theme.fontSize.mainSiz};
  font-weight: 500;
  color: ${p => p.theme.colors.secondaryText};
  padding-top: 10px;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 10px;
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.accentColor};
    border: none;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  }
`;
