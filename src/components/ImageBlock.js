import React from 'react'
import Img from 'gatsby-image'

const ImageBlock = ({ block }) => (
  <div className="flex -mx-2 mb-12 justify-center">
    {block.images.map(image => {
      return (
        <div className={
          block.maxWidth
            ? `flex-1 mx-2 max-w-${block.maxWidth}`
            : 'flex-1 mx-2'
          }>
          <Img
            fluid={image.localFile.childImageSharp.fluid}
            alt={image.title}
          />
        </div>
      )
    })}
  </div>
)

export default ImageBlock
