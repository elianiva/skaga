import Title from "components/Title"
import Button from "components/Button"
import NewsCard from "components/NewsCard"

export default function News() {
  return (
    <div className="m-auto mb-8">
      <Title title="Berita dan Informasi" />
      <div className="grid grid-cols-3 gap-4 mb-4">
        <NewsCard
          imgUrl="/berita/ppdb.jpg"
          title="PPDB SMK Negeri 3 Jember Tahun Ajaran 2020/2021 Telah Dibuka"
          desc="PPDB atau Penerimaan Peserta Didik Baru untuk tahun ajaran 2020/2021 telah dibuka. Ayo segera mendaftar!"
          date="31 Februari 2020"
        />
        <NewsCard
          imgUrl="/berita/skaga.jpg"
          title="Jadwal Penilaian Akhir Tahun Ajaran 2019/2020"
          desc="Bagi peserta didik yang akan melaksanakan Penilaian Akhir Tahun, dapat melihat jadwalnya disini."
          date="30 Februari 2020"
        />
        <NewsCard
          imgUrl="/berita/squor.jpg"
          title="Tim Futsal SMKN 3 Jember berhasil meraih Juara dalam ajang SQUOR CUP 2019"
          desc="Dolor provident nobis ut quasi vitae Quam temporibus sint nisi harum qui"
          date="29 Februari 2020"
        />
      </div>
      <Button
        href="/berita"
        className="block m-auto w-40 text-center"
        text="Berita lainnya"
      />
    </div>
  )
}
