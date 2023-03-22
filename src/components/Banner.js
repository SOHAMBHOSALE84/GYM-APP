import React from 'react'
import styled from "styled-components"
import bg from '../assets/gym2.jpg';
import H1 from './reuseble/H1';
import Button from './reuseble/Button';
import Withbartitle from './reuseble/Withbartitle';
import { FaPlay } from 'react-icons/fa';
import Header from './Header';
import './header.css';


export default function Banner() {
  return (
    <Main>
      <Header/>  
    <Container>
       <Rightbox>
        <Withbartitle title="WITH SOHAM BHOSALE"/>
            <H1>
              Build perfect body shape for good and healthy life. 
            </H1>
            <Button> <a className='btn' href="#regForm" animation="fadeInLeft">became a member</a></Button>
        </Rightbox>
        <Leftbox>
          <Circle>
          <CircleButton>
            <FaPlay/>
          </CircleButton>
          </Circle>
        </Leftbox>
    </Container>
    </Main>
  )
}

const Main = styled.div`
    width:100%;
    height:100vh;
    background-size:cover;
    background-attachment:fixed;
    background-repeat:no-repeat;
    //  background-image: url(${bg});
    

    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

`;



const Container = styled.div`
    width:100%;
    height:100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

`;

const Leftbox = styled.div`
width:50%;
display: flex;
flex-direction: column;
align-items: flex-end;
`;
const Rightbox = styled.div`
width: 36%;
padding : 100px
`;

const Circle = styled.div`
border : 3px solid red;
width: 100px;
height: 100px;
border-radius:50%;
margin-right:20px;
margin-top:260px;
padding :1px;
animation: zoomIn;
animation-duration: 2s;
`;

const CircleButton = styled.button` 
 outline: none;
 background-color: red;
 color: white;
 width: 100%;
 height: 100%;
 border-radius:50%;
 margin-right:20px;
 cursor:pointer;

`;

