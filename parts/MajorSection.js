import { Carousel } from "react-responsive-carousel"
import Button from "components/Button"
import Image from "components/Image"

export default function MajorSection() {
  const data = [
    {
      name: "Perhotelan",
      url: "jurusan/perhotelan.jpg"
    },
    {
      name: "Usaha Perjalanan Wisata",
      url: "jurusan/upw.jpg"
    },
    {
      name: "Tata Boga",
      url: "jurusan/tbg.jpg"
    },
    {
      name: "Tata Busana",
      url: "jurusan/tbs.jpg"
    },
    {
      name: "Desain Fesyen",
      url: "jurusan/df.jpg"
    },
    {
      name: "Kecantikan Kulit dan Rambut",
      url: "jurusan/kecantikan.jpg"
    },
    {
      name: "Teknik Komputer dan Jaringan",
      url: "jurusan/tkj.jpg"
    },
    {
      name: "Rekayasa Perangkat Lunak",
      url: "jurusan/rpl.jpg"
    },
    {
      name: "Multimedia",
      url: "jurusan/mm.jpg"
    }
  ]

  return (
    <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-4 my-8 text-blue-900">
      <div className="nunito flex flex-col justify-center items-start">
        <h2 className="text-2xl lg:text-3xl mb-2 lg:mb-4 font-semibold">
          Berbagai Macam Kompetensi Keahlian
        </h2>
        <p className="text-gray-700 open-sans leading-loose">
          Calon peserta didik diberi banyak pilihan kometensi keahlian sehingga
          mereka dapat memilih yang sesuai dengan minat dan bakatnya. SMK Negeri
          3 Jember memiliki jumlah total 9 kompetensi keahlian.
        </p>
        <Button className="mt-4" href="/profil/jurusan" text="Selengkapnya" />
      </div>
      <div className="self-end rounded-md overflow-hidden mb-4 lg:mb-0">
        <Carousel autoPlay infiniteLoop showThumbs="false">
          {data.map((data, index) => (
            <div key={index}>
              <img src={data.url} alt={data.name} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}
