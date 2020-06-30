import Button from "components/Button"
import Image from "components/Image"

export default function About() {
  return (
    <div className="justify-center grid lg:grid-cols-2 lg:gap-4 my-8 text-blue-900">
      <div>
        <Image
          src="about_cover.jpg"
          alt="Foto SMKN 3 Jember"
          className="mb-8 lg:mb-0 lg:w-11/12 lg:h-full"
        />
      </div>
      <div className="nunito flex flex-col justify-center items-start">
        <h1 className="text-2xl leading-snug">Tentang</h1>
        <h2 className="text-4xl font-semibold">SMKN 3 Jember</h2>
        <p className="text-gray-700 open-sans leading-loose">
          SMKN 3 Jember merupakan sekolah menengah kejuruan yg berada di Jember
          dengan akreditasi A. Siswa tidak hanya diajari teori namun juga
          diajarkan berbagai macam praktek yang akan berguna di dunia industri.
        </p>
        <Button className="mt-4" href="/profil/sekolah" text="Selengkapnya" />
      </div>
    </div>
  )
}
