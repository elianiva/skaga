import FacebookIcon from "../public/facebook_icon.svg"
import InstagramIcon from "../public/instagram_icon.svg"
import MailIcon from "../public/mail_icon.svg"
import PhoneIcon from "../public/phone_icon.svg"

export default function Footer() {
  return (
    <>
      <div className="pt-8 border-t-2 border-gray-300">
        <div className="flex max-w-5xl m-auto items-center">
          <div className="flex flex-col flex-1">
            <div className="flex items-center">
              <img
                src="/logo_skaga.jpg"
                alt="Logo SMKN 3 Jember"
                className="inline-block w-20 h-20 mr-2"
              />
              <h3 className="text-2xl nunito font-bold">
                SMK NEGERI 3
                <br />
                JEMBER
              </h3>
            </div>
            <p className="text-sm text-grey-700 open-sans block mt-4">
              SMKN 3 Jember merupakan sekolah menengah kejuruan berbasis
              pariwisata dengan akreditasi A.
            </p>
          </div>
          <div
            className="h-32 bg-orange rounded mx-8"
            style={{ width: `.125rem` }}
          ></div>
          <div className="nunito flex-1">
            <h2 className="font-bold text-xl text-center">Kontak</h2>
            <span className="flex block my-2">
              <PhoneIcon className="w-8" /> 0331 - 488069
            </span>
            <span className="flex block my-2">
              <MailIcon className="w-8" /> smk3_jember@yahoo.co.id
            </span>
            <span className="flex block my-2">
              <InstagramIcon className="w-8" /> @smkn3_jember
            </span>
            <span className="flex block my-2">
              <FacebookIcon className="w-8" /> SMKN 3 JEMBER
            </span>
          </div>
          <div
            className="h-32 bg-orange rounded mx-8"
            style={{ width: `.125rem` }}
          ></div>
          <div className="flex-1">
            <img
              src="/map.jpg"
              alt="Lokasi SMKN 3 Jember"
              className="max-h-40"
            />
            <span className="open-sans text-sm text-gray-700 mt-4 block">
              Jl. dr Soebandi No 31, Kreongan, Kaliwates, Kabupaten Jember, Jawa
              Timur 68131
            </span>
          </div>
        </div>
      </div>
      <span className="open-sans text-lg my-4 text-center block">
        &copy; 1969 - 2020 SMK Negeri 3 Jember
      </span>
    </>
  )
}
