import React from "react"
import styled from 'styled-components';
import Container from "../container"

const FooterContainer = styled.div`
  height: 300px;
  background: ${ props => props.theme.secondary.background};
`

const Footer = styled.p`
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const FooterLeft = styled.div`
`

const FooterRight = styled.div`
`

const Brand = styled.p`
  color: ${ props => props.theme.secondary.primaryFont};
  font-size: ${ props => props.theme.fontSize[4]};
  font-family: ${ props => props.theme.titleFontFamily};
`

const SocialList = styled.ul`
  list-style: none;
`

const SocialItem = styled.li`
  display: inline;
  margin-left: 30px;
`

const SocialLink = styled.a`
`

const SocialImage = styled.img`
  width: 40px;
  height: 40px;
  fill: ${ props => props.theme.secondary.primaryFont};
`


export default function ({ social }) {
  return (
    <FooterContainer>
      <Container>
        <Footer>
          <FooterLeft>
            <Brand>Coffee Break</Brand>
          </FooterLeft>
          <FooterRight>
            <SocialList>
              {social.map(item => <SocialItem>
                <SocialLink href={item.link} target="_blank"><SocialImage src={item.src} alt={item.alt} /></SocialLink>
              </SocialItem>)}
            </SocialList>
          </FooterRight>
        </Footer>
      </Container>
    </FooterContainer>
  )
}