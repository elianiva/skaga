import Title from "components/Title"

export default function Instagallery() {
  return (
    <div className="bg-gray-100 py-4">
      <Title title="Instagallery" />
      <div className="max-w-5xl m-auto grid grid-cols-4 gap-4">
        <img
          src="/instagallery/instagram1.jpg"
          alt="Instagallery 1"
          className="w-64 h-64 object-cover rounded-md shadow-md border border-gray-500"
        />
        <img
          src="/instagallery/instagram2.jpg"
          alt="Instagallery 2"
          className="w-64 h-64 object-cover rounded-md shadow-md border border-gray-500"
        />
        <img
          src="/instagallery/instagram3.jpg"
          alt="Instagallery 3"
          className="w-64 h-64 object-cover rounded-md shadow-md border border-gray-500"
        />
        <img
          src="/instagallery/instagram4.jpg"
          alt="Instagallery 4"
          className="w-64 h-64 object-cover rounded-md shadow-md border border-gray-500"
        />
      </div>
      <span className="block text-xl nunito text-center my-4">
        Follow{" "}
        <a
          href="https://www.instagram.com/smkn3_jember/"
          target="_blank"
          rel="noopener"
          className="text-orange"
        >
          @smkn3_jember{" "}
        </a>
        untuk melihat foto lainnya.
      </span>
    </div>
  )
}
