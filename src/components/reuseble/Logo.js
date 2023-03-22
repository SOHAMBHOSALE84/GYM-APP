import React from 'react'
import { GiGymBag } from 'react-icons/gi'
import styled from 'styled-components'
export default function Logo() {
  return (
    <Box>
        <Img>
        <GiGymBag/>
        </Img>
        <Title >fitness</Title>
    </Box>
  )
}

const Box = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`;

const Img = styled.p`
font-size: 30px;
align-items: center;
// margin-top: 10px;
color: white;
background:red;
// width: 50%;
// height: 50%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
background-size: 50%;
border : 3px solid white;
border-radius 50%;
padding: 4px;
cursor: pointer;
`;
const Title = styled.p`
display: flex;
flex-direction: row;
color: white;
text-transform: uppercase;
margin-left: 10px;
font-weight:bold;
font-size:30px


`;


