import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  padding: 20px 0;
  display: flex;

  @media (max-width: ${ props => props.theme.media.phone })  { 
    flex-direction: column;
  }
`
const CardLeft = styled.div``
const CardRight = styled.div`
  margin-left: 40px;

  @media (max-width: ${ props => props.theme.media.phone })  { 
    margin-top: 15px;
    margin-left: 0;
  }
`

const Title = styled.a`
  color: ${ props => props.theme.primary.primaryFont};
  font-size: ${ props => props.theme.fontSize[3]};
  font-family: ${ props => props.theme.titleFontFamily};
  font-weight: 600;
  text-decoration: none;

  :hover {
    color: ${ props => props.theme.primary.accent};
  }
`

const Body = styled.p`
  color: ${ props => props.theme.primary.secondaryFont};
  font-size: ${ props => props.theme.fontSize[1]};
  font-family: ${ props => props.theme.textFontFamily};
  font-weight: 300;
  margin-top: 15px;
`

const Date = styled.p`
  color: ${ props => props.theme.primary.secondaryFont};
  font-size: ${ props => props.theme.fontSize[0]};
  font-family: ${ props => props.theme.textFontFamily};
  font-weight: 300;
  margin-top: 15px;
`

const Image = styled.img`
  width: 350px;
  height: auto;
  border-radius: 10px;

  @media (max-width: ${ props => props.theme.media.phone })  { 
    width: 100%;
    border-radius: 0;
  }
`

export default function ({ title, body, date, link, image }) {
  return (<Card>
    <CardLeft>
      <Image src={image}></Image>
    </CardLeft>
    <CardRight>
      <Title href={link}>{title}</Title>
      <Body>{body}</Body>
      <Date>{date}</Date>
    </CardRight>
  </Card>);
}