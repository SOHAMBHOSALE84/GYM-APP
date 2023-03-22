import React from 'react'
import styled from 'styled-components'
import bg from '../assets/img_9.webp'
import Button from './reuseble/Button';
import H1 from './reuseble/H1';
import H2 from './reuseble/H2';
import Paragraph from './reuseble/Paragraph';
import Withbartitle from './reuseble/Withbartitle';
import './header.css';
export default function About() {
    return (
      <Container id='about'>
        <Left>
          <Image src={bg} />
        </Left>
        <Right>
          <Withbartitle title="About Our Gym" />
          <H1 color = '#2c234d' > 
            SAFE BODY BUILDING PROPER SOLUTIONS THAT SAVES OUR VALUABLE TIME!
          </H1>
  
          <H2 color='2c234d' >
            Brook presents your services with flexible, convenient and cdpose
            layouts. You can select your favorite layouts & elements for cular ts
            with unlimited ustomization possibilities. Pixel-perfect replication
            of the designers is intended.
          </H2>
  
          <Paragraph>
            Brook presents your services with flexible, convefnient and chient
            anipurpose layouts. You can select your favorite layouts.
          </Paragraph>
  
          <Button><a className='btn' href="#regForm" animation="slideInUp" style={{ marginTop: 30 }}>Became a member</a></Button>
        </Right>
      </Container>
    );
  }
  
  const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: white;
    display: flex;
    flex-direction: row;
    align-items: center;
  `;
  
  const Left = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
  `;
  const Right = styled.div`
    width: 45%;
  `;
  const Image = styled.img`
    width: 70%;
    height: 100%;
    margin-right:140px;

  `;