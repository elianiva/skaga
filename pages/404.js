import Layout from "components/Layout"

export default function error() {
  return (
    <Layout title="404">
      <div className="max-w-5xl m-auto pt-20 flex items-center justify-center min-h-screen">
        <h1 className="nunito text-2xl md:text-4xl">
          Halaman yang anda cari tidak dapat ditemukan.
        </h1>
      </div>
    </Layout>
  )
}
