import React from "react"

import Container from "../components/container";
import Layout from "../components/layout";
import Card from "../components/card";

export default function Home() {
  return (
    <Layout>
      <Container>
        <h1>Coffee Break</h1>
        <Card title="What is a web server?" 
              body="The web server is an application that can deliver web content like HTML, images, JSON, etc... The web servers use the HTTP protocol to deliver the content which can be static or dynamic."
              date="27 may, 2020" />
      </Container>
    </Layout>
  )
}
