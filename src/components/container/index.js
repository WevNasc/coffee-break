import React from "react"
import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  font-size: 10px;
  max-width: 1024px;
`

export default function({ children }) {
  return <Container>{children}</Container>
}