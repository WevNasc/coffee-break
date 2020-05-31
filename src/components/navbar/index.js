import React from "react"
import styled from 'styled-components'

import Container from '../container';

const NavbarContainer = styled.div`
  height: 70px;
  background: ${ props => props.theme.primary.color };
`
const Navbar = styled.nav`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Brand = styled.p`
  color: ${ props => props.theme.primary.primaryFont };
  font-size: ${ props => props.theme.fontSize[2] };
  font-family: ${ props => props.theme.textFontFamily };
`

const Link = styled.a`
  color: ${ props => props.theme.primary.primaryFont };
  font-size: ${ props => props.theme.fontSize[1] };
  font-family: ${ props => props.theme.textFontFamily };
  text-decoration: none;
  text-transform: capitalize;
  margin-left: 20px;
`

export default function({ links }) {
  console.log(links)
  return (
    <NavbarContainer>
      <Container>
        <Navbar>
          <Brand>Coffee Break</Brand>
          <div>
            {links.map(link => <Link href={link.href} >{link.name}</Link>)}
          </div>
        </Navbar>
      </Container>
    </NavbarContainer>
  )
}