import { Outlet } from 'react-router-dom';
import { StyledContainer } from './Layout.styled';
import { Header } from 'components/Header/Header';

export const Layout = () => {
  return (
    <StyledContainer>
      <Header />
      <Outlet />
    </StyledContainer>
  );
};
