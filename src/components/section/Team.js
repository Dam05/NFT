import React from 'react'
import styled from 'styled-components';

import img1 from './img/bighead.svg';
import img2 from './img/bighead-10.svg';
import img3 from './img/bighead-2.svg';
import img4 from './img/bighead-3.svg';
import img5 from './img/bighead-4.svg';
import img6 from './img/bighead-5.svg';
import img7 from './img/bighead-6.svg';
import img8 from './img/bighead-7.svg';
import img9 from './img/bighead-8.svg';

import ConfettiComponent from '../Confetti'; 

const Section = styled.section`
min-height: 100vh;
width: 100vw;
background-color: ${props => props.theme.body};
position: relative;
`
const Title = styled.h1`
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
color: ${props => props.theme.text};
display: flex;
justify-content: center;
align-items: center;
margin: 1rem auto;
border-bottom: 2px solid ${props => props.theme.text};
width:fit-content;

@media (max-width: 40em){
  font-size: ${props => props.theme.fontxl};
}
`

const Container = styled.div`
width: 75%;
margin: 2rem auto;

display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;

@media (max-width: 64em){
  width: 80%;

}

@media (max-width: 48em){
  width: 90%;
  justify-content: center;
}


`
const Item = styled.div`
width: cal(20rem -4vw);
padding: 1rem auto;
color: ${props => props.theme.body};
margin: 2rem 1rem;
position: relative;

backdrop-filter: blur(4px);
z-index:5;

border: 2px solid ${props => props.theme.text};
border-radius: 20px;
transition: all 0.3s ease;

&:hover{
  img{
    transform: translateY(-2rem) scale(1.2);
  }
}
@media (max-width: 30em){
  width: 70vw;

}
`

const ImageContainer = styled.div`
width: 15rem;
margin: 0 auto;
background-color: ${props => props.theme.carouselColor};
border: 1px solid ${props => props.theme.text};
padding: 1rem;

border-radius: 20px;
cursor: pointer;

img{
  width: 100%;
  height: auto;
  transition: all 0.3s ease;
}
`
const Name = styled.h2`
font-size: ${props => props.theme.fontlg};
display: flex;
align-items: center;
justify-content: center;
text-transform: uppercase;
color: ${props => `rgba(${props.theme.textRgba}, 0.9)`};
font-weight:400;

`

const Position = styled.h2`
font-size: ${props => props.theme.fontmd};
display: flex;
align-items: center;
justify-content: center;
text-transform: capitalize;
color: ${props => props.theme.text};
margin-top: 1rem;

`


const MemberComponent = ({img, name="", position=""}) =>{

  return(
    <Item>
      <ImageContainer>
        <img src={img} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Item>
  )
}

const Team = () => {
  return (
    <Section id="team">
    <ConfettiComponent />
    <Title>Team </Title>
    <Container>
    <MemberComponent img={img1} name="SKYBLAZE" position="Founder" />
    <MemberComponent img={img2} name="MEGNUM" position="Co-Founder" />
    <MemberComponent img={img3} name="MONKEY KING" position="Director" />
    <MemberComponent img={img4} name="BLACK PANTHER" position="manager" />
    <MemberComponent img={img5} name="DEATHESTROKE" position="artist" />
    <MemberComponent img={img6} name="LAZY KONG" position="Socail media manager" />
    <MemberComponent img={img7} name="CYBER PUNK" position="blockchain specialist" />
    <MemberComponent img={img8} name="MONK" position="web3 devloper" />
    <MemberComponent img={img9} name="BANANA" position="graphic designer" />
    </Container>
   
    </Section>
  )
}

export default Team