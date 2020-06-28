import { useEffect, useState } from "react"
import Link from "next/link"
import Arrow from "../public/arrow.svg"

export default function Navbar({ currentPage }) {
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    window.addEventListener("scroll", () => setOffsetY(window.pageYOffset))
  }, [])

  return (
    <nav
      className={`fixed z-10 t-0 inset-x-0 h-16 nunito ${
        offsetY >= 32
          ? "bg-white text-blue-900 border-b-2 border-gray-100"
          : "text-white"
      }`}
      style={{
        transition: `background-color ease-out .25s`
      }}
    >
      <div className="max-w-5xl flex items-center m-auto h-full">
        <h1 className="font-extrabold text-2xl flex-1">SMKN 3 Jember</h1>
        <div className="grid grid-cols-5 justify-center items-center gap-4 font-semibold tracking-wider">
          <div className="flex items-center justify-center cursor-pointer hover:text-orange">
            <Link href="/">
              <a title="Beranda">Beranda</a>
            </Link>
          </div>
          <div className="flex items-center justify-center cursor-pointer hover:text-orange">
            <Link href="/berita">
              <a title="Berita">Berita</a>
            </Link>
          </div>
          <div className="flex items-center justify-center cursor-pointer hover:text-orange">
            <Link href="/jurusan">
              <a title="Jurusan">Jurusan</a>
            </Link>
          </div>
          <div className="flex items-center justify-center cursor-pointer">
            <span className="mr-2">Profil</span>
            <Arrow />
          </div>
          <div className="flex items-center justify-center cursor-pointer">
            <span className="mr-2">LSP</span>
            <Arrow />
          </div>
        </div>
      </div>
    </nav>
  )
}
