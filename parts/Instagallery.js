import Title from "components/Title"
import Image from "components/Image"

export default function Instagallery() {
  return (
    <div className="bg-gray-100 py-4 px-4 lg:px-0">
      <Title title="Instagallery" />
      <div className="max-w-5xl m-auto grid justify-center lg:grid-cols-4 gap-4">
        <Image
          src="instagallery/instagram1.jpg"
          alt="Instagallery 1"
          className="lg:w-64 lg:h-64 object-cover rounded-md shadow-md border border-gray-500"
        />
        <Image
          src="instagallery/instagram2.jpg"
          alt="Instagallery 2"
          className="lg:w-64 lg:h-64 object-cover rounded-md shadow-md border border-gray-500"
        />
        <Image
          src="instagallery/instagram3.jpg"
          alt="Instagallery 3"
          className="lg:w-64 lg:h-64 object-cover rounded-md shadow-md border border-gray-500"
        />
        <Image
          src="instagallery/instagram4.jpg"
          alt="Instagallery 4"
          className="lg:w-64 lg:h-64 object-cover rounded-md shadow-md border border-gray-500"
        />
      </div>
      <span className="block text-xl nunito text-center my-4">
        Follow{" "}
        <a
          href="https://www.instagram.com/smkn3_jember/"
          target="_blank"
          rel="noopener"
          className="text-orange font-semibold"
        >
          @smkn3_jember{" "}
        </a>
        untuk melihat foto lainnya.
      </span>
    </div>
  )
}
