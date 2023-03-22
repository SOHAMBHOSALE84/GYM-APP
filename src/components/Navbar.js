import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

export default function Navbar() {
  return (
    <Nav>
      <Logo href='#'>My Gym</Logo>
      <NavLinks>
        <NavLink
          to='services'
          smooth={true}
          duration={500}
          spy={true}
          exact='true'
          offset={-80}
        >
          Services
        </NavLink>
        <NavLink
          to='about'
          smooth={true}
          duration={500}
          spy={true}
          exact='true'
          offset={-80}
        >
          About
        </NavLink>
        <NavLink
          to='contact'
          smooth={true}
          duration={500}
          spy={true}
          exact='true'
          offset={-80}
        >
          Contact Us
        </NavLink>
      </NavLinks>
    </Nav>
  );
}

const Nav = styled.nav`
  background: #000;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
`;

const Logo = styled.a`
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  margin-right: 1.5rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #01bf71;
  }
`;
