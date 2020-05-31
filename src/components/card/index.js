import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  padding: 20px 0;
  display: flex;
`
const CardLeft = styled.div``
const CardRight = styled.div`
  margin-left: 40px;
`

const Title = styled.a`
  color: ${ props => props.theme.primary.primaryFont};
  font-size: ${ props => props.theme.fontSize[3]};
  font-family: ${ props => props.theme.titleFontFamily};
  font-weight: 600;
  text-decoration: none;
`

const Body = styled.p`
  color: ${ props => props.theme.primary.secondaryFont};
  font-size: ${ props => props.theme.fontSize[1]};
  font-family: ${ props => props.theme.titleFontFamily};
  font-weight: 300;
  margin-top: 15px;
`

const Image = styled.img`
  width: 350px;
  height: auto;
  border-radius: 10px;

  @media (max-width: ${ props => props.theme.media.phone })  { 
    display: none;
  }
`

export default function ({ title, body, link, image }) {
  return (<Card>
    <CardLeft>
      <Image src={image}></Image>
    </CardLeft>
    <CardRight>
      <Title href={link}>{title}</Title>
      <Body>{body}</Body>
    </CardRight>
  </Card>);
}