import Layout from "components/Layout"
import Title from "components/Title"
import Breadcrumb from "components/Breadcrumb"
import { getAllNewsId, getNewsData } from "lib/news"

export default ({ newsData }) => {
  return (
    <Layout title={newsData.title}>
      <div className="max-w-5xl m-auto mb-16 pt-20">
        <Title title={newsData.title} />
        <hr className="my-8" />
        <div
          className="text-lg open-sans leading-relaxed markdown"
          dangerouslySetInnerHTML={{ __html: newsData.htmlString }}
        ></div>
      </div>
    </Layout>
  )
}

// return possible values for id
export async function getStaticPaths() {
  const paths = getAllNewsId()
  return {
    paths,
    fallback: false
  }
}

// fetch data from given params
export async function getStaticProps({ params }) {
  const newsData = await getNewsData(params.id)
  return {
    props: {
      newsData
    }
  }
}
