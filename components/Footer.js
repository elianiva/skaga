import FacebookIcon from "public/icons/facebook_icon.svg"
import InstagramIcon from "public/icons/instagram_icon.svg"
import MailIcon from "public/icons/mail_icon.svg"
import PhoneIcon from "public/icons/phone_icon.svg"
import Image from "components/Image"

export default function Footer() {
  return (
    <footer>
      <div className="pt-8 border-t-2 border-gray-300 px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row max-w-5xl m-auto lg:items-center">
          <div className="flex flex-col flex-1">
            <div className="lg:flex lg:items-center text-center">
              <Image
                src="logo_skaga.jpg"
                alt="Logo SMKN 3 Jember"
                className="inline-block w-32 h-32 lg:w-20 lg:h-20 mr-2 mb-4 lg:mb-0"
              />
              <h3 className="text-2xl nunito font-bold">
                SMK NEGERI 3 <br className="hidden lg:block" />
                JEMBER
              </h3>
            </div>
            <p className="lg:text-sm text-grey-700 open-sans block mt-4 text-center lg:text-left">
              SMKN 3 Jember merupakan sekolah menengah kejuruan berbasis
              pariwisata dengan akreditasi A.
            </p>
          </div>
          <div
            className="hidden lg:block h-32 bg-orange rounded mx-8"
            style={{ width: `.125rem` }}
          ></div>
          <div
            className="lg:hidden block bg-orange rounded my-4 m-auto w-full"
            style={{ height: `.125rem` }}
          ></div>
          <div className="nunito flex-1 lg:py-0">
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
            className="hidden lg:block h-32 bg-orange rounded mx-8"
            style={{ width: `.125rem` }}
          ></div>
          <div
            className="lg:hidden block bg-orange rounded my-4 m-auto w-full"
            style={{ height: `.125rem` }}
          ></div>
          <div className="flex-1">
            <Image
              src="map.jpg"
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
      <span className="open-sans text-lg mt-4 py-4 text-center block bg-gray-100">
        &copy; 1969 - 2020 SMK Negeri 3 Jember
      </span>
    </footer>
  )
}
