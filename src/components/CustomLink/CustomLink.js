import { Link, useMatch } from 'react-router-dom';
import styled from 'styled-components';

export const CustomeLink = ({ children, icon: Icon, to, ...p }) => {
  const match = useMatch(to);

  return (
    <StyledLink to={to} match={match}>
      {Icon && <Icon size="20" lineheight="0" />}
      {children}
    </StyledLink>
  );
};
const StyledLink = styled(Link)`
  width: 33px;
  height: 33px;
  border-radius: ${p => p.theme.radii.round};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  line-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${p =>
    p.match ? p.theme.colors.secondaryText : p.theme.colors.iconColor};
  &:hover {
    color: ${p => p.theme.colors.accentColor};
  }
`;
