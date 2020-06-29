import Button from "../components/Button"

export default function About() {
  return (
    <div className="grid grid-cols-12 gap-4 my-8 text-blue-900">
      <div className="col-span-6">
        <img
          src="/about_cover.jpg"
          alt="Foto SMKN 3 Jember"
          className="w-11/12 h-full"
        />
      </div>
      <div className="col-span-6 nunito flex flex-col justify-center items-start">
        <h1 className="text-2xl leading-snug">Tentang</h1>
        <h2 className="text-4xl font-semibold">SMKN 3 Jember</h2>
        <p className="text-gray-700 open-sans leading-loose">
          SMKN 3 Jember merupakan sekolah menengah kejuruan yg berada di Jember
          dengan akreditasi A. Siswa tidak hanya diajari teori namun juga
          diajarkan berbagai macam praktek yang akan berguna di dunia industri.
        </p>
        <Button className="mt-4" href="/profil/sekolah" />
      </div>
    </div>
  )
}
