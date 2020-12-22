import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { FaLinkedin, FaGithub } from "react-icons/fa"

const Footer = () => {
  const {
    site: {
      meta: { links, title }
    },
  } = useStaticQuery(graphql`
    query FooterQuery {
      site {
        meta: siteMetadata {
          links {
            linkedin
            github
          }
          title
        }
      }
    }
  `)

  return (
    <footer>
      <div className="container py-12 md:flex md:items-center md:justify-between">
        <ul className="flex justify-center md:order-2">
          <FooterLink href={links.linkedin} icon={FaLinkedin} label="LinkedIn" />
          <FooterLink href={links.github} icon={FaGithub} label="Github" />
        </ul>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-sm md:text-base text-gray-600">
            &copy; 2020 {title}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

const FooterLink = ({ href, label, icon: Icon }) => {
  return (
    <li className="inline-block pl-6">
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        className="text-gray-600 hover:text-blue-600 transition duration-150 ease-in-out"
      >
        <span className="sr-only">{label}</span>
        <Icon className="w-5 h-5 fill-current" />
      </a>
    </li>
  )
}

export default Footer
