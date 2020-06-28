import Layout from "../components/Layout"
import Hero from "../parts/Hero"
import About from "../parts/About"

export default function Home() {
  return (
    <Layout title="Beranda">
      <Hero />
      <div className="max-w-5xl m-auto mt-8">
        <About />
      </div>
    </Layout>
  )
}
