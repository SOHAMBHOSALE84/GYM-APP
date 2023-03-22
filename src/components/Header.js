import React from 'react'
import styled from 'styled-components'
import Logo from './reuseble/Logo'
import './header.css';

const menuData = [    {        id:1,        name: 'Home',        link:"#home",    },    {        id:2,        name: 'About',        link:"#about",    },    {        id:3,        name: 'Services',        link:"#services",    },    {        id:4,        name: 'Schedule',        link:"#schedule",    },    {        id:5,        name: 'Contact',        link:"#contact",    }]

export default function Header() {
  return (
    <Box>
        <Left>
            <Logo/>
        </Left>
        <Right>
            <Menus>
                {menuData.map((item, index) => (
                    <Menu key={index} href={item.link}>
                        {item.name}
                    </Menu>
                ))}
            </Menus>
            <Button><A><a className='btn' href="#regForm">become a member</a></A></Button>
        </Right>
    </Box>
  )
}

const A = styled.a`
color: white;
// font-size:15px;
font-weight:bold;
background-color:red;
text-decoration:none;
`;

const Box = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 5px 20px;
`

const Button = styled.button`
    outline: none;
    border: none;
    text-transform: uppercase;
    padding: 20px;
    background-color: red;
    cursor: pointer;
    color: white;
    animation: slideInRight;
    text-decoration: none;
`

const Left = styled.div``

const Right = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center; 
`

const Menu = styled.a`
    text-transform: capitalize;
    border: none;
    background-color: transparent;
    outline: none;
    color: white;
    margin-right: 20px;
    cursor: pointer;
    font-size: 25px;
    animation: zoomIn;
    animation-duration: 2s;

    &:hover {
        text-decoration: underline;
    }
`;

const Menus = styled.div``;


