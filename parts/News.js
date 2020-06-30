import { format, parseISO } from "date-fns"
import { id } from "date-fns/locale"
import Title from "components/Title"
import Button from "components/Button"
import NewsCard from "components/NewsCard"

export default function News({ data }) {
  return (
    <div className="m-auto mb-8">
      <Title title="Berita dan Informasi" />
      <div className="grid grid-cols-3 gap-4 mb-4">
        {data.slice(0, 3).map((news, index) => (
          <NewsCard
            imgUrl={news.cover}
            title={news.title}
            desc={news.excerpt}
            date={format(parseISO(news.date), "dd MMMM yyyy", { locale: id })}
            key={index}
          />
        ))}
      </div>
      <Button
        href="/berita"
        className="block m-auto w-40 text-center"
        text="Berita lainnya"
      />
    </div>
  )
}
