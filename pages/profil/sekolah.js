import Layout from "components/Layout"
import Breadcrumb from "components/Breadcrumb"
import Title from "components/Title"

export default function SekolahPage() {
  const misi = [
    "Menjadi lembaga pendidikan kejuruan yang dikelola secara professional menghasilkan lulusan yang berIMTAQ, kompeten di bidangnya dan berwawasan budaya bangsa ",
    "Membangun iklim belajar yang berIMTAQ dan berwawasan budaya bangsa.",
    "Melaksanakan pengelolaan pendidikan menuju standar ISO 9001-2008.",
    "Meningkatkan kualifikasi tenaga pendidik dan kependidikan.",
    "Melaksanakan pembelajaran yang bermutu, berbasis TIK dan multilingual.",
    "Membekali siswa dengan pengetahuan dan keterampilan agar menghasilkan tamatan yang kompeten di bidangnya.",
    "Meningkatkan kerjasama dengan DU/DI dalam pembelajaran produktif dan penyaluran tamatan.",
    "Meningkatkan fasilitas dan layanan pendidikan sesuai dengan standar nasional pendidikan.",
    "Meningkatkan peran Business Centre dalam menunjang kegiatan sekolah.",
    "Meningkatkan pendidikan berwawasan lingkungan."
  ]

  return (
    <Layout title="Tentang Sekolah">
      <div className="max-w-5xl pt-24 m-auto open-sans text-lg text-blue-900 leading-relaxed">
        <Breadcrumb />
        <Title title="Profil SMKN 3 Jember" />
        <img src="/smol_cover.jpg" alt="Foto SMKN 3 Jember" />
        <p className="my-8">
          SMKN 3 Jember merupakan Sekolah Menengah Kejuruan berbasis Pariwisata
          yang ada di Jember, Jawa Timur. Pada awal berdirinya, sekolah ini
          bernama Sekolah Kesejahteraan Keluarga Tingkat Atas (SKKA) pada tahun
          1969. Pada tahun pelajaran 1976 berganti nama menjadi SMKK. Pada tahun
          pelajaran 1997 berganti nama menjadi SMK Negeri 3 Jember hingga
          sekarang.
        </p>
        <span>
          Sejak saat itu pergantian Kepala Sekolah dapat diurutkan sebagai
          berikut :
        </span>
        <ol className="list-decimal list-inside">
          <li>
            Tahun 1968 dipimpin oleh <b>Ibu Marianah</b>
          </li>
          <li>
            Tahun 1998 dipimpin oleh <b>Bapak Drs. Dasuki</b>
          </li>
          <li>
            Tahun 1998 dipimpin oleh <b>Bapak Ir. Holidin</b>
          </li>
          <li>
            Tahun 1999 dipimpin oleh <b>Ibu Wiwiek Sukendah, S.Pd.</b>
          </li>
          <li>
            Tahun 2005 dipimpin oleh <b>Bapak Kustanto, S.Pd.</b>
          </li>
          <li>
            Tahun 2008 dipimpin oleh <b>Bapak Drs. Furqon Adi S, MM.</b>
          </li>
          <li>
            Tahun 2010 dipimpin oleh <b>Bapak Drs. Bambang Irianto, M.Si.</b>
          </li>
          <li>
            Tahun 2014 dipimpin oleh <b>Bapak Suprihartono, S.Pd.</b>
          </li>
          <li>
            Tahun 2017 dipimpin oleh <b>Bapak Agus Budiarto, S.P., M.Pd.</b>{" "}
            hingga sekarang.
          </li>
        </ol>
        <h1 className="text-2xl font-bold mt-8">Visi</h1>
        <p>
          Menjadi lembaga pendidikan kejuruan yang dikelola secara professional,
          menghasilkan lulusan yang berIMTAQ, kompeten di bidangnya dan
          berwawasan budaya bangsa
        </p>
        <h1 className="text-2xl font-bold mt-8">Misi</h1>
        <ol className="list-decimal list-outside pl-6">
          {misi.map(misi => (
            <li>{misi}</li>
          ))}
        </ol>
        <h1 className="text-2xl font-bold mt-8">Tujuan</h1>
        <ol className="list-decimal list-outside pl-6 mb-16">
          <li>
            Sekolah memiliki hubungan kemitraan yang baik dengan seluruh warga
            sekolah, stake holders dan instansi serta institusi pendukung
            pendidikan lainnya.
          </li>
          <li>
            Siswa memiliki, mengaplikasikan dan meningkatkan nilai-nilai
            ketuhanan serta nilai-nilai kehidupan yang bersifat universal dalam
            kehidupannya.
          </li>
        </ol>
      </div>
    </Layout>
  )
}
