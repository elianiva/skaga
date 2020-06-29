import { useRouter } from "next/router"
import { useEffect } from "react"

export default function Breadcrumb() {
  const router = useRouter()
  const routes = router.pathname.split("/").slice(1)

  return (
    <div className="flex nunito text-lg">
      <span className="bread-item">Beranda</span>
      {routes.map((route, index, routes) =>
        routes.length - 1 !== index ? (
          <span key={index} className="bread-item capitalize">
            {route}
          </span>
        ) : (
          <span className="text-orange capitalize font-semibold" key={index}>
            {route}
          </span>
        )
      )}
    </div>
  )
}
