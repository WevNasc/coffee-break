import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  section {
    padding: 30px 0;
  }

  code {
    font-size: 1em;
    background: ${ props => props.theme.secondary.background};
    border-radius: 5px;
    padding: 1px 5px;
    color: #FFF;
  }

  pre {
    width: 100%;
    padding: 20px 10px;
    background:  ${ props => props.theme.secondary.background};
    font-size: ${ props => props.theme.fontSize[1]};
    line-height: ${ props => props.theme.fontSize[1]};
    border-radius: 5px;
    overflow-x: auto;
  }

  p {
    font-size: ${ props => props.theme.fontSize[1]};
    margin-bottom: 40px;
    color: ${ props => props.theme.primary.secondaryFont};
    line-height: ${ props => props.theme.fontSize[1]};
  }

  p > a {
    font-size: 1em;
    color: ${ props => props.theme.primary.accent};
  }

  h2, h3, h4 {
    margin-bottom: 20px;
    margin-top: 50px
  }

  h2 {
    font-size: ${ props => props.theme.fontSize[4]};
  }

  h3 {
    font-size: ${ props => props.theme.fontSize[3]};
  }

  h4 {
    font-size: ${ props => props.theme.fontSize[1]};
  }

  table {
    width: 100%;
    font-size: ${ props => props.theme.fontSize[1]};
    line-height: ${ props => props.theme.fontSize[1]};
    margin-bottom: 50px;
    overflow-x: auto;
    white-space: nowrap;
    display: block;
  }

  th {
    text-transform: capitalize;
  }

  li > a {
    font-size: 1em;
    color: ${ props => props.theme.primary.secondaryFont};;
    text-decoration: none;
  }

  li > a:hover {
    color: ${ props => props.theme.primary.accent};
  }

  blockquote {
    border-left: 6px solid ${ props => props.theme.primary.accent};;
    padding-left: 20px;
    font-style: italic;
    margin-bottom: 30px;
  }

  ul, li {
    font-size: ${ props => props.theme.fontSize[0]};
    color: ${ props => props.theme.primary.secondaryFont};
    margin-bottom: 10px;
  }

  ul {
    margin-bottom: 30px;
  }
`

export default GlobalStyle