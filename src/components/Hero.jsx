import React from "react"
import VisibilitySensor from "./VisibilitySensor";

const Hero = () => (
  <div className="container py-12 lg:py-32">
    <VisibilitySensor partialVisibility once>
      {({ isVisible }) => (
        <div
          className={isVisible ? "slideDown enter" : "slideDown"}
        >
        <h1 className="w-full md:w-2/3" data-sal="fade" data-sal-easing="ease">
            <span className="text-3xl sm:text-5xl font-bold leading-tight tracking-tight text-gray-800 block">Designer & Front-end Developer based in Chicago, IL.</span>
        </h1>
      </div>
    )}
  </VisibilitySensor>
  </div>
)

export default Hero
