import React from "react"
import Layout from "../layouts/Layout"
import SiteMetadata from "../components/SiteMetadata"

const ThankYouPage = () => (
  <Layout>
    <SiteMetadata title="Thank You" description="Thanks for getting in touch" />

    <div className="bg-gray-100">
      <div className="container py-12 pb-64 lg:pb-128">
        <div className="w-full md:w-1/2 xl:w-3/5 pb-8 md:pb-0">
          <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Thanks for getting in touch!
          </h1>

          <h2 className="text-xl leading-tight font-semibold tracking-tight text-blue-600 sm:text-2xl">
            I've recieved your message and I will get back to you as soon as I can. Have a great day!
          </h2>
        </div>
      </div>
    </div>
  </Layout>
)

export default ThankYouPage
