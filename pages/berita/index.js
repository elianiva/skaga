import { format, parseISO } from "date-fns"
import { id } from "date-fns/locale"
import Title from "components/Title"
import Button from "components/Button"
import NewsCard from "components/NewsCard"
import Breadcrumb from "components/Breadcrumb"
import Layout from "components/Layout"
import { getSortedNews } from "lib/news"

export default function NewsPage({ allNews }) {
  return (
    <Layout title="Berita">
      <div className="max-w-5xl m-auto pt-24 px-4 lg:px-0">
        <Breadcrumb />
        <Title title="Berita dan Informasi" />
        <div className="grid lg:grid-cols-3 gap-4 mb-16">
          {allNews.map((news, index) => (
            <NewsCard
              imgUrl={news.cover}
              title={news.title}
              desc={news.excerpt}
              date={format(parseISO(news.date), "dd MMMM yyyy", {
                locale: id
              })}
              key={index}
              href={news.id}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  let allNews = getSortedNews()
  return {
    props: { allNews }
  }
}
