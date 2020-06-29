import Button from "./Button"

export default function Card({ imgUrl, alt, jurusan, deskripsi }) {
  return (
    <div className="grid grid-cols-12 gap-4 items-center mb-12">
      <img src={imgUrl} alt={alt} className="col-span-5 rounded-md" />
      <div className="col-span-7 flex flex-col items-start">
        <span className="nunito text-lg text-blue-900">
          Kompetensi Keahlian
        </span>
        <h1 className="nunito text-3xl text-blue-900 font-semibold">
          {jurusan}
        </h1>
        <p className="open-sans text-gray-700 leading-loose mb-4">
          {deskripsi}
        </p>
        <Button />
      </div>
    </div>
  )
}
