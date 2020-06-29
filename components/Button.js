import Link from "next/link"

export default function Button({ children, className, href }) {
  return (
    <Link href={href}>
      <a
        className={`px-4 py-2 rounded bg-orange text-white shadow-orange hover:shadow-orangeHover hover:bg-orangeHover hover:bg- ${className}`}
        style={{ transition: `all ease-out .2s` }}
      >
        Selengkapnya
      </a>
    </Link>
  )
}
