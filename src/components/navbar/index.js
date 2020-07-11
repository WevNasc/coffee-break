import React from "react"
import styled from 'styled-components'

import Container from '../container'

const NavbarContainerImage = styled.div`
  height: 400px;
  background-image: ${props => `url(${props.background})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

const NavbarContainerColor = styled.div`
  height: 100px;
  background: ${props => props.theme.primary.background};
`
const NavbarTransparence = styled.div`
  height: ${props => props.enable ? "400px" : "100px"};
  background: ${props => props.enable ? "rgba(0, 0, 0, 0.4)" : "transparent"};
`

const Navbar = styled.nav`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Brand = styled.a`
  color: ${ props => props.reverse ? "#ffffff" : props.theme.primary.primaryFont};
  font-size: ${ props => props.theme.fontSize[3]};
  font-family: ${ props => props.theme.textFontFamily};
  text-decoration: none;
`

const Body = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 20px;
`

const Title = styled.p`
  color: #ffffff;
  font-size: ${ props => props.theme.fontSize[6]};
  font-family: ${ props => props.theme.titleFontFamily};
  padding-bottom: 15px;
  font-weight: 500;

  @media (max-width: ${ props => props.theme.media.phone })  { 
    font-size: ${ props => props.theme.fontSize[4]};
  }
`

const Date = styled.p`
  color: #ffffff;
  font-size: ${ props => props.theme.fontSize[1]};
  font-family: ${ props => props.theme.titleFontFamily};

  @media (max-width: ${ props => props.theme.media.phone })  { 
    font-size: ${ props => props.theme.fontSize[0]};
  }
`

export default function ({ background, title, date }) {
  const NavbarContainer = background ? NavbarContainerImage : NavbarContainerColor
  const isImageTheme = background !== undefined
  return (
    <NavbarContainer background={background} >
      <NavbarTransparence enable={isImageTheme} >
        <Container>
          <Navbar>
            <Brand reverse={isImageTheme} href="/">Coffee Break!</Brand>
          </Navbar>
          {background && 
            <Body>
              <Title>{title}</Title>
              <Date>{date}</Date>
            </Body>
          }
        </Container>
      </NavbarTransparence>
    </NavbarContainer>
  )
}