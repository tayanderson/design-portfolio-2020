import React from "react"
import Layout from "../layouts/Layout"
import SiteMetadata from "../components/SiteMetadata"
import VisibilitySensor from "../components/VisibilitySensor";

function ContactPage() {
  return (
    <Layout>
      <SiteMetadata title="contact" />
      <div className="bg-gray-0 py-12 lg:py-16">
        <div className="container">

          <VisibilitySensor partialVisibility once>
            {({ isVisible }) => (
              <div
                className={isVisible ? "slideDown enter max-w-screen-md mx-auto mb-16" : "slideDown max-w-screen-md mx-auto mb-16"}
              >
                <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-gray-800 sm:text-4xl mb-6">
                  Contact
                </h1>

                <form className="mx-auto w-full" method="post" netlify-honeypot="bot-field" name="contact" data-netlify="true">
                  <input type="hidden" name="bot-field" />
                  <input type="hidden" name="form-name" value="contact" />

                  <label
                    className="block mb-2 font-bold text-gray-800 text-xl"
                    htmlFor="name"
                  >
                    Name
                  </label>

                  <input
                    className="w-full mb-6 form-input p-2 focus:outline-black"
                    id="name"
                    type="text"
                  />

                  <label
                    className="block mb-2 font-bold text-gray-800 text-xl p-2"
                    htmlFor="email"
                  >
                    Email Address
                  </label>

                  <input
                    className="w-full mb-6 form-input p-2 focus:outline-black"
                    id="email"
                    type="email"
                  />

                  <label
                    className="block mb-2 font-bold text-gray-800 text-xl p-2"
                    htmlFor="message"
                  >
                    Message
                  </label>

                  <textarea
                    className="w-full mb-6 form-textarea focus:outline-black p-2"
                    id="message"
                    rows="8"
                  />

                <input value="Send Message" type="Submit" className="px-4 py-2 font-bold text-white text-xl bg-gray-800 hover:bg-gray-600 transition duration-150 ease-in-out focus:outline-black" />
                </form>
              </div>
              )}
            </VisibilitySensor>
        </div>
      </div>
    </Layout>
  );
}

export default ContactPage;
