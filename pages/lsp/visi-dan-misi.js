import Layout from "components/Layout"
import Title from "components/Title"
import Breadcrumb from "components/Breadcrumb"

export default function VisiDanMisi() {
  return (
    <Layout title="Visi, Misi, dan Tujuan LSP">
      <div className="max-w-5xl m-auto pt-24 open-sans text-gray-800 text-lg leading-relaxed mb-16 px-4 lg:px-0">
        <Breadcrumb />
        <Title title="Visi, Misi dan Tujuan" />
        <h1 className="text-2xl font-bold mt-8 text-blue-900">Visi</h1>
        <p>
          Menjadi Lembaga Sertifikasi Profesi yang professional untuk
          menghasilkan lulusan yang ber-IMTAQ, kompeten dibidangnya, berdaya
          saing global, unggul, terpercaya dan berwawasan budaya bangsa
        </p>
        <h1 className="text-2xl font-bold mt-8 text-blue-900">Misi</h1>
        <ol className="list-decimal list-outside pl-6">
          <li>
            SMK Negeri 3 Jember menetapkan kebijakan, dan menerapkan pedoman
            BNSP 201 versi 2014/ISO 17024 secara menyeluruh tanpa pengecualian.
          </li>
          <li>
            Manajemen Mutu LSP-P1 SMK Negeri 3 Jember memberikan pelayanan uji
            kompetensi yang mengutamakan mutu dan kepuasan pelanggan serta
            menjamin bahwa proses pengujian dilaksanakan dengan kejujuran,
            teliti, cepat, tepat dan akurat serta efisien dalam menggunakan
            sumber daya.
          </li>
          <li>
            Menetapkan kebijakan, prosedur, dan administrasi lembaga sertifikasi
            harus terkait dengan kriteria sertifikasi, jujur dan wajar terhadap
            seluruh calon dan harus memenuhi semua persyaratan dan peraturan
            perundang-undangan yang berlaku.
          </li>
          <li>
            LSP dalam melakukan proses uji menjamin ketidakberpihakan sehingga
            semua proses akan dilakukan dengan jujur dan tidak berpihak serta
            mengacu kepada pedoman BNSP.
          </li>
        </ol>
        <h1 className="text-2xl font-bold mt-8 text-blue-900">
          Sasaran mutu LSP-P1 SMK Negeri 3 Jember tahun pelajaran 2015/2016
        </h1>
        <ol className="list-decimal list-outside pl-6">
          <li>Mendapatkan lisensi dari BNSP.</li>
          <li>
            Masing-masing Paket Keahlian sudah memiliki minimal seorang asesor
            yang distandarisasikan oleh BNSP.
          </li>
          <li>
            Masing-masing Paket Keahlian memiliki skema sertifikasi yang
            diverifikasi oleh BNSP.
          </li>
          <li>
            Sertifikasi Kompetensi untuk siswa kelas tiga di masing-masing paket
            keahlian di SMK Negeri 3 Jember terselenggara sesuai prosedur yang
            berlaku.
          </li>
        </ol>
        <h1 className="text-2xl font-bold mt-8 text-blue-900">
          Sasaran mutu LSP-P1 SMK Negeri 3 Jember tahun pelajaran 2016/2017
        </h1>
        <ol className="list-decimal list-outside pl-6">
          <li>
            Menambah Ruang Lingkup Lisensi untuk Paket keahlian yang belum
            terlisensi.
          </li>
          <li>
            Masing-masing Paket Keahlian sudah memiliki minimal seorang asesor
            yang distandarisasikan oleh BNSP.
          </li>
          <li>
            Masing-masing Paket Keahlian memiliki skema sertifikasi yang
            diverifikasi oleh BNSP.
          </li>
          <li>
            Sertifikasi Kompetensi untuk siswa kelas tiga di masing-masing paket
            keahlian di SMK Negeri 3 Jember terselenggara sesuai prosedur yang
            berlaku.
          </li>
        </ol>
        <h1 className="text-2xl font-bold mt-8 text-blue-900">
          Sasaran mutu LSP-P1 SMK Negeri 3 Jember tahun pelajaran 2017/2018
        </h1>
        <ol className="list-decimal list-outside pl-6">
          <li>
            Menambah Ruang Lingkup Lisensi untuk Paket keahlian yang belum
            terlisensi.
          </li>
          <li>Mengajukan Relisensi LSP SMKN 3 Jember</li>
          <li>
            Masing-masing Paket Keahlian memiliki skema Sertifikasi Kualifikasi
            Level II yang diverifikasi oleh BNSP.
          </li>
          <li>
            Sertifikasi Kompetensi untuk siswa kelas tiga di masing-masing paket
            keahlian di SMK Negeri 3 Jember terselenggara sesuai prosedur yang
            berlaku.
          </li>
        </ol>
      </div>
    </Layout>
  )
}
