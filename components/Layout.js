import Head from "next/head"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{`${title} | SMKN 3 Jember`}</title>
      </Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
