import Layout from "components/Layout"
import Image from "components/Image"
import Title from "components/Title"
import Breadcrumb from "components/Breadcrumb"

export default function StafDanGuru() {
  return (
    <Layout title="Komite Sekolah">
      <div className="max-w-5xl m-auto pt-24">
        <Breadcrumb />
        <Title title="Komite Sekolah" />
        <div className="text-xl w-1/2">
          <div className="grid grid-cols-12 nunito my-8">
            <span className="font-semibold col-span-4">Ketua Komite</span>
            <span className="font-semibold col-span-1">:</span>
            <span className="col-span-7">Ir. Sugeng</span>
          </div>
          <div className="grid grid-cols-12 nunito my-8">
            <span className="font-semibold col-span-4">Sekretaris Komite</span>
            <span className="font-semibold col-span-1">:</span>
            <span className="col-span-7">Sulastri</span>
          </div>
          <div className="grid grid-cols-12 nunito my-8">
            <span className="font-semibold col-span-4">Bendahara Komite</span>
            <span className="font-semibold col-span-1">:</span>
            <ul className="col-span-7">
              <li>Astini Utami</li>
              <li>Sariyatin</li>
            </ul>
          </div>
          <div className="grid grid-cols-12 nunito my-8">
            <span className="font-semibold col-span-4">Anggota Komite</span>
            <span className="font-semibold col-span-1">:</span>
            <ul className="col-span-7">
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
