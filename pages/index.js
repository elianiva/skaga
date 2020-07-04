import Layout from "components/Layout"
import Hero from "parts/Hero"
import About from "parts/About"
import Statistic from "parts/Statistic"
import MajorSection from "parts/MajorSection"
import News from "parts/News"
import Instagallery from "parts/Instagallery"
import { getSortedNews } from "lib/news"

export default function Home({ allNews }) {
  return (
    <Layout title="Beranda">
      <Hero />
      <div className="max-w-5xl m-auto mt-8 px-4 lg:px-0">
        <About />
      </div>
      <Statistic />
      <div className="max-w-5xl m-auto mt-8 px-4 lg:px-0">
        <MajorSection />
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
      allNews,
    },
  }
}
