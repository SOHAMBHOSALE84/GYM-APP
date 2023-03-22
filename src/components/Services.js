import React from 'react'
import styled from 'styled-components';
import bg from '../assets/gym2.jpg';
import { serviceData } from '../data/Localdata';
// import Button from './reuseble/Button';
import H1 from './reuseble/H1';
import Withbartitle from './reuseble/Withbartitle';

export default function Services() {
    return (
      <Container id='services'>
        <InnerContainer>
          <Box>
            <Withbartitle title="Our Services for you" />
            <Header>
              <H1 style={{ width: "50%", fontSize: 40 }}>
                PUSH YOUR LIMITS FORWARD WE OFFER TO YOU
              </H1>
              {/* <Button animation="slideInUp">More Services</Button> */}
            </Header>
            <Cards>
              {serviceData.map((_, index) => {
                return (
                  <React.Fragment key={index}>
                    <Card item={_} />
                  </React.Fragment>
                );
              })}
            </Cards>
          </Box>
        </InnerContainer>
      </Container>
    );
  }
  
  export function Card({ item }) {
    return (
      <MyCard >
        <Icon >{item.icon}</Icon>
        <Title>{item.title}</Title>
        <Description >{item.description}</Description>
      </MyCard>
    );
  }
  
  const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${bg});
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
  `;
  
  const InnerContainer = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation:slideInRight;

  `;
  
  const Box = styled.div`
    width: 75%;
    height: 75%;
  `;
  
  const Header = styled.div`
    display: flex;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `;
  
  const Cards = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;

  `;
  
  const MyCard = styled.div`
    width: 30%;
    height: 400px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    color: #212025;
    transition: all 0.3s ease-in-out; /* add transition effect for hover */
    &:hover {
    background-color: red; /* change background color on hover */
    color: white;
    cursor: pointer; /* change cursor on hover */
  }
    
  `;
  
  const Icon = styled.span`
    font-size: 40px;
  `;
  const Title = styled.h3`
    font-size: 30px;
    text-align: center;
    margin: 30px 0px;
    font-weight: 400;
  `;
  const Description = styled.p`
    font-size: 20px;
    text-align: center;
    font-weight: 200;
    `;