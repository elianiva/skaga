import Image from "components/Image"

export default function SmallCard({ imgUrl, alt, title, name, nip }) {
  return (
    <div className="rounded-md shadow-md border-gray-300 flex flex-col text-blue-900">
      <Image src={imgUrl} />
      <div className="p-4 nunito">
        <span className="block text-xs font-semibold">{title}</span>
        <span className="block text-sm">{name}</span>
        <span className="block text-xs text-gray-700">NIP. {nip}</span>
      </div>
    </div>
  )
}
