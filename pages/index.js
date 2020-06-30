import Layout from "components/Layout"
import Hero from "parts/Hero"
import About from "parts/About"
import Statistic from "parts/Statistic"
import AboutJurusan from "parts/AboutJurusan"
import News from "parts/News"
import Instagallery from "parts/Instagallery"
import { getSortedNews } from "lib/berita"

export default function Home({ allNews }) {
  return (
    <Layout title="Beranda">
      <Hero />
      <div className="max-w-5xl m-auto mt-8">
        <About />
      </div>
      <Statistic />
      <div className="max-w-5xl m-auto mt-8">
        <AboutJurusan />
        <News data={allNews} />
      </div>
      <Instagallery />
    </Layout>
  )
}

export async function getStaticProps() {
  const allNews = getSortedNews()
  return {
    props: {
      allNews
    }
  }
}
