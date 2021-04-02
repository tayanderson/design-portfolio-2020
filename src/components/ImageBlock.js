import React from 'react'
import Img from 'gatsby-image'

const ImageBlock = ({ block }) => (
  <div className="flex -mx-2 mb-12 justify-center">
    {block.images.map(image => {
      return (
        <div
          className=
          {(() => {
            switch (block.maxWidth) {
              case "sm": return "flex-1 mx-2 max-w-sm";
              case "md": return "flex-1 mx-2 max-w-md";
              case "lg": return "flex-1 mx-2 max-w-lg";
              default:   return "flex-1 mx-2";
            }
          })()}>
          <Img
            fluid={image.localFile.childImageSharp.fluid}
            alt={image.title}
            className="shadow-md"
          />
        </div>
      )
    })}
  </div>
)

export default ImageBlock
