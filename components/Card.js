import Button from "./Button"
import Image from "./Image"

export default function Card({ imgUrl, alt, jurusan, deskripsi, href }) {
  return (
    <div className="grid grid-cols-12 gap-4 items-center mb-12">
      <Image src={imgUrl} alt={alt} className="col-span-5 rounded-md" />
      <div className="col-span-7 flex flex-col items-start ml-4">
        <span className="nunito text-lg text-blue-900">
          Kompetensi Keahlian
        </span>
        <h1 className="nunito text-3xl text-blue-900 mb-2">{jurusan}</h1>
        <p className="open-sans text-gray-700 leading-relaxed mb-4">
          {deskripsi}
        </p>
        <Button href={href} text="Selengkapnya" />
      </div>
    </div>
  )
}
