import styled from '@emotion/styled';

export const StyledContainer = styled.div`
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
  }
`;

export const boxStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 320,
  bgcolor: 'background.paper',
  outline: 0,
  p: 5,
};
