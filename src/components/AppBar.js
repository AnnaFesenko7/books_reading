import Navigation from 'components/Navigation';
import styled from 'styled-components';

const StyledHeader = styled.header`
  /* background-color: #f5f7fa; */
  height: 60px;
  width: 100%;
  border: 1px solid #e0e5eb;
`;

const AppBar = () => {
  return (
    <>
      <StyledHeader>
        <Navigation />
      </StyledHeader>
    </>
  );
};
export default AppBar;
