import React from "react"
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"

import Container from '../container';

const HeroContainer = styled.div`
  height: 400px;
  background: ${ props => props.theme.primary.color };

  @media (max-width: ${ props => props.theme.media.phone })  { 
    height: 250px;
  }
`
const Hero = styled.div`
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${ props => props.theme.media.phone })  { 
    height: 250px;
  }
`

const LeftContainer = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media (max-width: ${ props => props.theme.media.phone })  { 
    width: 100%;
  }
`

const Title = styled.h1`
  color: ${ props => props.theme.primary.primaryFont };
  font-size: ${ props => props.theme.fontSize[4] };
  font-family: ${ props => props.theme.titleFontFamily };
  margin-bottom: 15px;
  white-space: pre-line;
`

const Body = styled.p`
  color: ${ props => props.theme.primary.secondaryFont };
  font-size: ${ props => props.theme.fontSize[2] };
  font-family: ${ props => props.theme.textFontFamily };
  font-weight: 300;
  line-height: 1.5em;
`

const Image = styled.img`
  width: 30%;
  height: auto;
  border-radius: 10px;

  @media (max-width: ${ props => props.theme.media.phone })  { 
    display: none;
  }
`

export default function({ title, body }) {
  const data = useStaticQuery(graphql`
    query AvatarQuery {
      file(absolutePath: {regex: "/me.jpg/"}) {
        publicURL
      }
    }
  `)
  return (
    <HeroContainer>
      <Container>
        <Hero>
          <LeftContainer>
            <Title>{title}</Title>
            <Body>{body}</Body>
          </LeftContainer>
          <Image src={data.file.publicURL} alt={"Weverson"} />
        </Hero>
      </Container>
    </HeroContainer>
  )
}