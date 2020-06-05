import React from "react"
import styled from 'styled-components'

import { useStaticQuery, graphql } from "gatsby"

import Container from "../container"

const FooterContainer = styled.div`
  height: 300px;
  background: ${props => props.theme.secondary.background};
`

const Footer = styled.div`
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Brand = styled.p`
  color: ${props => props.theme.secondary.primaryFont};
  font-size: ${props => props.theme.fontSize[4]};
  font-family: ${props => props.theme.titleFontFamily};
`

const SocialList = styled.ul`
  list-style: none;
`

const SocialItem = styled.li`
  display: inline;
  margin-left: 30px;
`

const SocialImage = styled.img`
  width: 40px;
  height: 40px;
  fill: ${ props => props.theme.secondary.primaryFont};
`

export default function () {

  const social = useStaticQuery(graphql`
    query SocialQuery {
      allFile(filter: {absolutePath: {regex: "/social/"}}) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
      site {
        siteMetadata {
          social {
            twitter
            github
            linkedin
          }
        }
      }
    }
  `)

  return (
    <FooterContainer>
      <Container>
        <Footer>
          <div>
            <Brand>Coffee Break</Brand>
          </div>
          <div>
            <SocialList>
              {social.allFile.edges.map(image => <SocialItem key={image.node.name}>
                <a href={social.site.siteMetadata.social[image.node.name]} target="_blank" rel="noreferrer">
                  <SocialImage src={image.node.publicURL} alt={image.node.name} />
                </a>
              </SocialItem>)}
            </SocialList>
          </div>
        </Footer>
      </Container>
    </FooterContainer>
  )
}