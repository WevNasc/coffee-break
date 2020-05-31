import React from "react"
import styled from 'styled-components'

import Container from '../container';

const NavbarContainer = styled.div`
  height: 70px;
  background: ${ props => props.theme.primary.background };
`
const Navbar = styled.nav`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Brand = styled.a`
  color: ${ props => props.theme.primary.primaryFont };
  font-size: ${ props => props.theme.fontSize[2] };
  font-family: ${ props => props.theme.textFontFamily };
`

export default function() {
  return (
    <NavbarContainer>
      <Container>
        <Navbar>
          <Brand href="/">Coffee Break!</Brand>
        </Navbar>
      </Container>
    </NavbarContainer>
  )
}