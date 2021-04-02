import { graphql } from "gatsby"
import React from "react"
import SiteMetadata from "../components/SiteMetadata"
import Layout from "../layouts/Layout"
import ImageBlock from "../components/ImageBlock"
import TextBlock from "../components/TextBlock"
import VisibilitySensor from "../components/VisibilitySensor";

const PageTemplate = ({ data }) => {
  const { title, slug, contentBlocks } = data.contentfulPage

  return (
    <Layout>
      <SiteMetadata
        title={title}
      />

    <div className="bg-gray-100">
        <div className="container py-12 lg:pb-16">
          <div className="w-full md:w-1/2 xl:w-3/5 pb-8 md:pb-0">

            <VisibilitySensor once>
              {({ isVisible }) => (
                <div
                  className={isVisible ? "slideDown enter" : "slideDown"}
                >
                  <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-gray-800 sm:text-4xl mb-4">
                    {title}
                  </h1>

                  {contentBlocks.map(block => {
                    switch (block.type) {
                      case 'ContentfulBlockImage':
                        return <ImageBlock block={block} />
                      case 'ContentfulBlockText':
                        return <TextBlock block={block} />
                      default:
                        return ''
                    }
                  })}
                </div>
              )}
            </VisibilitySensor>

          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      title
      slug
      contentBlocks {
        type: __typename
        ... on Node {
          ... on ContentfulBlockImage {
            images {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 960, quality: 85) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
          ... on ContentfulBlockText {
            text {
              childMarkdownRemark {
                html
              }
            }
          }
        }
      }
    }
  }
`

export default PageTemplate
