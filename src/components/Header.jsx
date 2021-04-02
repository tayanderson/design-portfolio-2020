import { graphql, Link, useStaticQuery } from "gatsby"
import React, { useState } from "react"
import MenuMobile from "./MenuMobile"
import { FaBars } from "react-icons/fa"
import { globalHistory as history } from '@reach/router'
import { BsArrowLeft } from "react-icons/bs"
import { IoIosArrowDropleft } from "react-icons/io"

import AniLink from "gatsby-plugin-transition-link/AniLink";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const { location, navigate } = history

  const { site } = useStaticQuery(graphql`
    query {
      site {
        data: siteMetadata {
          menu {
            name
            to
          }
          title
        }
      }
    }
  `)

  // https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp
  if (typeof window !== 'undefined') {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      const maxScroll = document.body.clientHeight - window.innerHeight;
      let currentScrollPos = window.pageYOffset;
      if (
          (maxScroll > 0 && prevScrollpos > currentScrollPos && prevScrollpos <= maxScroll)
        || (maxScroll <= 0 && prevScrollpos > currentScrollPos)
        || (prevScrollpos <= 0 && currentScrollPos <= 0)
        ) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-8.0rem"; // adjustable based your need
      }
      prevScrollpos = currentScrollPos;
    }
  }

  return (
    <nav id="navbar" className="fixed transition-all duration-500 ease-in-out bg-gray-100 z-50 bg-opacity-90 w-full">
      <div className="container pt-6 pb-8 md:pt-8">
      <div className="flex justify-between items-center">
        <Link to="/" className="font-bold text-gray-800">
          { location.pathname != "/" ? <div className="flex items-center text-xl"><IoIosArrowDropleft className="h-auto w-8 fill-current mr-3" /><span>Back</span></div> : <span className="font-heading text-2xl font-black">taylor.anderson</span> }
        </Link>

        <button
          className="sm:hidden"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open Menu"
        >
          <FaBars className="h-6 w-auto text-gray-900 fill-current -mt-1" />
        </button>

        <div className="hidden sm:block">
          {site.data.menu.map((link, key) => (
            <Link
              key={`menu_desktop_link${key}`}
              className="ml-6 sm:ml-8 text-sm sm:text-lg font-semibold px-px border-b-2 border-transparent text-gray-600 hover:text-gray-500 hover:border-gray-500 transition duration-150 ease-in-out tracking-wide"
              activeClassName="border-gray-600 hover:text-gray-600 hover:border-gray-600"
              to={link.to}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      <MenuMobile
        isOpen={isMenuOpen}
        setIsOpen={setIsMenuOpen}
        links={site.data.menu}
      />
    </div>
  </nav>
  )
}

export default Header
