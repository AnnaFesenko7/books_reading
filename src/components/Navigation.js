import { NavLink } from 'react-router-dom';
import { VscHome } from 'react-icons/vsc';
import { MdMenuBook } from 'react-icons/md';
import styled from 'styled-components';
const AppContext = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & a {
    color: #a6abb9;
  }
`;

const Navigation = () => {
  const activeStyle = {
    color: 'orange',
  };

  return (
    <AppContext>
      <div></div>
      <div></div>
      <nav>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/"
        >
          <VscHome />
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/Library"
        >
          <MdMenuBook />
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/Library"
        >
          Вихід
        </NavLink>
      </nav>
    </AppContext>
  );
};
export default Navigation;
