import React from 'react';
import Img from 'gatsby-image';

const ImageBlock = ({ block }) => (
  <div className="w-full">
    <div className={'mx-auto ' +
      (() => {
        switch (block.maxWidth) {
          case "sm": return "max-w-sm";
          case "md": return "max-w-md";
          case "lg": return "max-w-lg";
          default:   return "";
        }
      })()}>
      <div className="flex flex-col sm:flex-row -mx-2 mb-12">
        {block.images.map(image => {
          return (
            <div className="flex-1 mx-2 mb-6 sm:mb-0 justify-center">
              <Img
                fluid={image.localFile.childImageSharp.fluid}
                alt={image.title}
                className="shadow-md"
              />
            </div>
          )
        })}
      </div>
    </div>
  </div>
)

export default ImageBlock
