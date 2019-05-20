import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/openlayout"

export default ({ data }) => (
  <Layout>
    <h1>About {data.site.siteMetadata.title}</h1> 
    <p>
      Using OpenWeather as the weather data source.
    </p>
    <img src="https://source.unsplash.com/400x200/?chicago" alt="" />
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`