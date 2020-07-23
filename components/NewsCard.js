import Link from "next/link"
import Image from "components/Image"

export default function NewsCard({ imgUrl, title, desc, date, href }) {
  return (
    <div className="flex flex-col rounded-md border border-gray-400 overflow-hidden">
      <Image src={imgUrl} alt={title} className="h-48 object-cover" />
      <div className="flex flex-col items-start p-4">
        <Link href="/berita/[id]" as={`/berita/${href}`}>
          <a title="Blog">
            <h1 className="text-lg nunito mb-2">{title}</h1>
          </a>
        </Link>
        <p className="text-sm open-sans text-gray-700 mb-4">{desc}</p>
        <div className="p-2 bg-lightOrange rounded-md text-sm nunito">
          {date}
        </div>
      </div>
    </div>
  )
}
