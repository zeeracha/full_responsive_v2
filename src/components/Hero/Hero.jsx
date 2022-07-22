import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import { HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton } from './HeroStyles';


const Hero = () => {
  return (
    <HeroSection>
        {/* <HeroVideo src="./assets/bg.mp4" autoPlay muted/> */}
        <HeroVideo src="https://github.com/zeeracha/fully_responsive_website/blob/main/public/assets/bg.mp4?raw=true" autoPlay muted/>
        <Container>
                <MainHeading>Show Me The Way To KOSMO</MainHeading>
                <HeroText>
                    My NARVIS, We Love You ♡
                </HeroText>
                <ButtonWrapper>
                    <Link to="/">
                        <Button>Get Started</Button>
                    </Link>
                    <HeroButton>Find More</HeroButton>
                </ButtonWrapper>
        </Container>
        
    </HeroSection>
  )
}

export default Hero