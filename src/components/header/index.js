import React from "react"
import styled from 'styled-components'

import Container from '../container';

const HeaderContainer = styled.div`
  height: 400px;
  background: ${ props => props.theme.primary.color };
`
const Header = styled.nav`
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const LeftContainer = styled.div`
`

const Title = styled.h1`
  max-width: 300px;
  color: ${ props => props.theme.primary.primaryFont };
  font-size: ${ props => props.theme.fontSize[4] };
  font-family: ${ props => props.theme.titleFontFamily };
  margin-bottom: 15px;
`

const Body = styled.h1`
  max-width: 350px;
  color: ${ props => props.theme.primary.primaryFont };
  font-size: ${ props => props.theme.fontSize[1] };
  font-family: ${ props => props.theme.textFontFamily };
`

export default function({ title, body, rightComponent }) {
  return (
    <HeaderContainer>
      <Container>
        <Header>
          <LeftContainer>
            <Title>{title}</Title>
            <Body>{body}</Body>
          </LeftContainer>
          {rightComponent && rightComponent}
        </Header>
      </Container>
    </HeaderContainer>
  )
}