import { graphql } from "gatsby"
import React from "react"
import Hero from "../components/Hero"
import Layout from "../layouts/Layout"
import SiteMetadata from "../components/SiteMetadata"
import Grid from "../components/Grid"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SiteMetadata title="Home" description="Taylor Anderson's Portfolio" />

      <Hero />

      {data.portfolio && data.portfolio.nodes.length > 0 ? (
        <Grid items={data.portfolio.nodes} title="Selected Projects" />
      ) : (
        <div className="container">No projects found.</div>
      )}

    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query HomeQuery {
    portfolio: allContentfulPortfolio (sort: {fields: order, order: ASC})
     {
      nodes {
        ...PortfolioCard
      }
    }
  }
`
