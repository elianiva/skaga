import Layout from "components/Layout"
import Title from "components/Title"
import Breadcrumb from "components/Breadcrumb"
import Skema from "components/Skema"
import { data } from "lib/data-skema"

export default function SkemaLSP() {
  return (
    <Layout title="Skema LSP">
      <div className="max-w-5xl m-auto pt-24 pb-16 px-4 lg:px-0">
        <Breadcrumb />
        <Title title="Skema LSP" />
        {data.map(data => (
          <Skema title={data.title} tableData={data.table} />
        ))}
        <small className="block text-center text-gray-600">
          udahlah bro, ini banyak banget skemanya, cape yg mau copas satu
          persatu
        </small>
      </div>
    </Layout>
  )
}

