import Image from "components/Image"

export default function Hero() {
  return (
    <div
      className="relative w-full z-0 nunito flex flex-col justify-center text-center text-white"
      style={{ height: `29rem` }}
    >
      <Image
        src="main_cover.jpg"
        alt="Foto SMKN 3 Jember"
        className="absolute w-full h-full z-0 object-cover"
      />
      <span className="text-white z-10 text-lg">Selamat datang di website</span>
      <h1 className="text-white font-bold text-3xl lg:text-5xl z-10">
        SMK Negeri 3 Jember
      </h1>
    </div>
  )
}
