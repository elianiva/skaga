import Layout from "components/Layout"
import Image from "components/Image"
import Title from "components/Title"
import Breadcrumb from "components/Breadcrumb"

export default function StafDanGuru() {
  return (
    <Layout title="Komite Sekolah">
      <div className="max-w-5xl m-auto pt-24 px-4 lg:px-0">
        <Breadcrumb />
        <Title title="Komite Sekolah" />
        <div className="text-xl w-full lg:w-1/2">
          <div className="grid grid-cols-12 nunito my-8">
            <span className="font-semibold col-span-5">Ketua Komite</span>
            <span className="font-semibold col-span-1 self-center">:</span>
            <span className="col-span-6">Ir. Sugeng</span>
          </div>
          <div className="grid grid-cols-12 nunito my-8">
            <span className="font-semibold col-span-5">Sekretaris Komite</span>
            <span className="font-semibold col-span-1 self-senter">:</span>
            <span className="col-span-6">Sulastri</span>
          </div>
          <div className="grid grid-cols-12 nunito my-8">
            <span className="font-semibold col-span-5">Bendahara Komite</span>
            <span className="font-semibold col-span-1 self-senter">:</span>
            <ul className="col-span-6">
              <li>Astini Utami</li>
              <li>Sariyatin</li>
            </ul>
          </div>
          <div className="grid grid-cols-12 nunito my-8">
            <span className="font-semibold col-span-5">Anggota Komite</span>
            <span className="font-semibold col-span-1 self-senter">:</span>
            <ul className="col-span-6">
              <li>Wahyu Nuraeni</li>
              <li>Endang Sumiati</li>
              <li>Wiwit</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}
