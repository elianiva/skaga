import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import Arrow from "public/icons/arrow.svg"

export default function Navbar({ currentPage }) {
  const router = useRouter()
  const [offsetY, setOffsetY] = useState(0)
  const [isVisible, setVisible] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => setOffsetY(window.pageYOffset))
  }, [])

  return (
    <>
      <nav
        className={
          router.pathname === "/"
            ? `fixed z-10 t-0 px-4 lg:px-0 inset-x-0 h-16 nunito ${
                offsetY >= 32
                  ? "bg-white text-blue-900 border-b-2 border-gray-300"
                  : "bg-white text-blue-900 lg:bg-transparent lg:text-white"
              }`
            : "fixed z-10 t-0 px-4 lg:px-0 inset-x-0 h-16 nunito bg-white text-blue-900 border-b-2 border-gray-300"
        }
        style={{
          transition: `background-color ease-out .25s`
        }}
      >
        <div className="max-w-5xl flex items-center m-auto h-full">
          <h1 className="font-extrabold text-xl lg:text-2xl flex-1">
            <Link href="/">
              <a title="Beranda">SMKN 3 Jember</a>
            </Link>
          </h1>
          <div className="hidden lg:grid grid-cols-5 justify-center items-center gap-4 tracking-wider">
            <div className="flex items-center justify-center cursor-pointer hover:text-orange">
              <Link href="/">
                <a
                  title="Beranda"
                  className={
                    router.pathname === "/" ? "active font-semibold" : ""
                  }
                >
                  Beranda
                </a>
              </Link>
            </div>
            <div className="flex items-center justify-center cursor-pointer hover:text-orange">
              <Link href="/berita">
                <a
                  title="Berita"
                  className={
                    router.pathname === "/berita" ? "active font-semibold" : ""
                  }
                >
                  Berita
                </a>
              </Link>
            </div>
            <div className="flex items-center justify-center cursor-pointer hover:text-orange">
              <Link href="/profil/jurusan">
                {/* prettier-ignore */}
                <a
                title="Jurusan"
                className={ router.pathname === "/profil/jurusan" ? "active font-semibold" : "" }
              >
                Jurusan
              </a>
              </Link>
            </div>
            <div className="group relative flex items-center justify-center cursor-pointer">
              <span className="mr-2">Profil</span>
              <Arrow />
              <div
                className="group-hover:block hidden absolute w-64 pt-6"
                style={{ right: `-0.5rem`, top: `50%` }}
              >
                <div className="grid grid-rows-3 bg-white text-blue-900 p-4 rounded-md border-2 border-gray-300">
                  <Link href="/profil/sekolah">
                    <a className="nunito block hover:bg-lightOrange hover:text-darkOrange rounded-md p-2">
                      Sekolah
                    </a>
                  </Link>
                  <Link href="/profil/staf-dan-guru">
                    <a className="nunito block hover:bg-lightOrange hover:text-darkOrange rounded-md p-2">
                      Staf dan Guru
                    </a>
                  </Link>
                  <Link href="/profil/komite-sekolah">
                    <a className="nunito block hover:bg-lightOrange hover:text-darkOrange rounded-md p-2">
                      Komite Sekolah
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="group relative flex items-center justify-center cursor-pointer">
              <span className="mr-2">LSP</span>
              <Arrow />
              <div
                className="group-hover:block hidden absolute w-64 pt-6"
                style={{ right: `-0.5rem`, top: `50%` }}
              >
                <div className="grid grid-rows-3 bg-white text-blue-900 p-4 rounded-md border-2 border-gray-300">
                  <Link href="/lsp/ketua-lsp">
                    <a className="nunito block hover:bg-lightOrange hover:text-darkOrange rounded-md p-2">
                      Ketua LSP
                    </a>
                  </Link>
                  <Link href="/lsp/sejarah-singkat">
                    <a className="nunito block hover:bg-lightOrange hover:text-darkOrange rounded-md p-2">
                      Sejarah Singkat
                    </a>
                  </Link>
                  <Link href="/lsp/skema-lsp">
                    <a className="nunito block hover:bg-lightOrange hover:text-darkOrange rounded-md p-2">
                      Skema LSP
                    </a>
                  </Link>
                  <Link href="/lsp/visi-dan-misi">
                    <a className="nunito block hover:bg-lightOrange hover:text-darkOrange rounded-md p-2">
                      Visi dan Misi
                    </a>
                  </Link>
                  <Link href="/lsp/struktur-organisasi">
                    <a className="nunito block hover:bg-lightOrange hover:text-darkOrange rounded-md p-2">
                      Struktur Organisasi
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="block lg:hidden hamburger w-8 h-8 relative flex flex-col justify-center">
            <input
              type="checkbox"
              className="absolute w-8 h-8 opacity-0"
              onClick={() => setVisible(!isVisible)}
            />
            <span className="block w-full bg-blue-900 rounded"></span>
            <span className="block w-full bg-blue-900 rounded my-2"></span>
            <span className="block w-full bg-blue-900 rounded"></span>
          </div>
        </div>
      </nav>

      {isVisible && (
        <div className="fixed mt-16 grid-rows-5 justify-center items-center tracking-wider bg-white z-50 w-full text-xl shadow-lg">
          <div className="flex items-center justify-center cursor-pointer my-4">
            <Link href="/">
              <a title="Beranda">Beranda</a>
            </Link>
          </div>
          <div className="flex items-center justify-center cursor-pointer my-4">
            <Link href="/berita">
              <a title="Berita">Berita</a>
            </Link>
          </div>
          <div className="flex items-center justify-center cursor-pointer my-4">
            <Link href="/profil/jurusan">
              {/* prettier-ignore */}
              <a
                title="Jurusan"
                className={ router.pathname === "/profil/jurusan" ? "active font-semibold" : "" }
              >
                Jurusan
              </a>
            </Link>
          </div>
          <div className="group relative flex flex-col items-center justify-center cursor-pointer my-4">
            <div className="flex items-center">
              <span className="mr-2">Profil</span>
              <Arrow />
            </div>
            <div className="group-hover:block hidden w-64 text-center">
              <div className="grid grid-rows-3 bg-white text-blue-900 p-4">
                <Link href="/profil/sekolah">
                  <a className="nunito block hover:bg-lightOrange hover:text-darkOrange rounded-md p-2">
                    Sekolah
                  </a>
                </Link>
                <Link href="/profil/staf-dan-guru">
                  <a className="nunito block hover:bg-lightOrange hover:text-darkOrange rounded-md p-2">
                    Staf dan Guru
                  </a>
                </Link>
                <Link href="/profil/komite-sekolah">
                  <a className="nunito block hover:bg-lightOrange hover:text-darkOrange rounded-md p-2">
                    Komite Sekolah
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="group relative flex flex-col items-center justify-center cursor-pointer my-4">
            <div className="flex items-center">
              <span className="mr-2">LSP</span>
              <Arrow />
            </div>
            <div className="group-hover:block hidden w-64 text-center">
              <div className="grid grid-rows-3 bg-white text-blue-900 p-4">
                <Link href="/lsp/ketua-lsp">
                  <a className="nunito block hover:bg-lightOrange hover:text-darkOrange rounded-md p-2">
                    Ketua LSP
                  </a>
                </Link>
                <Link href="/lsp/sejarah-singkat">
                  <a className="nunito block hover:bg-lightOrange hover:text-darkOrange rounded-md p-2">
                    Sejarah Singkat
                  </a>
                </Link>
                <Link href="/lsp/skema-lsp">
                  <a className="nunito block hover:bg-lightOrange hover:text-darkOrange rounded-md p-2">
                    Skema LSP
                  </a>
                </Link>
                <Link href="/lsp/visi-dan-misi">
                  <a className="nunito block hover:bg-lightOrange hover:text-darkOrange rounded-md p-2">
                    Visi dan Misi
                  </a>
                </Link>
                <Link href="/lsp/struktur-organisasi">
                  <a className="nunito block hover:bg-lightOrange hover:text-darkOrange rounded-md p-2">
                    Struktur Organisasi
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
