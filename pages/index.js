import Layout from "components/Layout"
import Hero from "parts/Hero"
import About from "parts/About"
import Statistic from "parts/Statistic"
import AboutJurusan from "parts/AboutJurusan"

export default function Home() {
  return (
    <Layout title="Beranda">
      <Hero />
      <div className="max-w-5xl m-auto mt-8">
        <About />
      </div>
      <Statistic />
      <div className="max-w-5xl m-auto mt-8">
        <AboutJurusan />

      </div>
    </Layout>
  )
}
