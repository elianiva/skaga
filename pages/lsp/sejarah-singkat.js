import Layout from "components/Layout"
import Image from "components/Image"
import Title from "components/Title"
import Breadcrumb from "components/Breadcrumb"

export default function SejarahLSP() {
  return (
    <Layout title="Sejarah Singkat">
      <div className="max-w-5xl m-auto pt-24">
        <Breadcrumb />
        <Title title="Sejarah Singkat" />
        <h1 className="nunito text-xl font-bold">
          Pembentukan LSP SMKN 3 Jember
        </h1>
        <p className="open-sans text-lg text-gray-800 leading-relaxed mb-8">
          Pembentukan LSP SMKN 3 Jember sudah dimulai pada akhir tahun 2013
          dengan SK pembentukan dari Kepala Sekolah SMKN 3 Jember dan
          mendapatkan Lisensi pada Juni 2015 dari BNSP. Penambahan Ruang lingkup
          dilakukan pada tahun 2016 dan mendapatkan Lisensi pada Nopember 2016.
        </p>
        <div className="grid grid-cols-12 grid-flow-col-dense gap-4">
          <div className="grid grid-cols-7 col-span-7">
            <div className="col-span-3">
              <h1 className="nunito text-xl font-bold">Warna Logo</h1>
              <div className="grid grid-cols-3 open-sans text-lg text-gray-800 leading-relaxed">
                <span>Biru</span>
                <span className="col-span-2">: Percaya Diri</span>
                <span>Hijau</span>
                <span className="col-span-2">: Keseimbangan</span>
                <span>Kuning</span>
                <span className="col-span-2">: Optimis</span>
                <span>Putih</span>
                <span className="col-span-2">: Jujur</span>
              </div>
            </div>
            <div className="col-span-4">
              <h1 className="nunito text-xl font-bold">Bentuk Logo</h1>
              <div className="grid grid-cols-2 open-sans text-lg text-gray-800 leading-relaxed">
                <span>Bentuk Huruf</span>
                <span>: Percaya Diri</span>
                <span>Dua Tangan</span>
                <span>: Keseimbangan</span>
                <span>Dunia</span>
                <span>: Optimis</span>
              </div>
            </div>
            <div className="col-span-7 mt-8">
              <h1 className="nunito text-xl font-bold">Makna Logo</h1>
              <p className="open-sans text-lg text-gray-800 leading-relaxed mb-8">
                Dengan lembaga yang berbasiskan Pariwisata dan teknnologi serta
                dinaungi oleh SMKN 3 Jember, LSP SMKN 3 Jember dengan percaya
                diri dan optimis ingin menjadikan Lembaga Sertifikasi Profesi
                sebuah lembaga sertifikasi yang jujur dan terpercaya.
                Menghasilkan lulusan yang memiliki semangat untuk bekerja
                sehingga dapat memberi perubahan yang lebih baik kepada dunia
                dan menciptakan keseimbangan yang memberikan pengaruh yang
                positif kepada masyarakat dengan memberikan kemampuan yang
                memadai bagi dunia dan masyarakat yang membutuhkan.
              </p>
            </div>
          </div>
          <div className="col-span-5">
            <Image src="lsp/logo_lsp.jpg" />
          </div>
        </div>
      </div>
    </Layout>
  )
}
