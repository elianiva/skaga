import Layout from "components/Layout"
import Image from "components/Image"
import Title from "components/Title"
import Breadcrumb from "components/Breadcrumb"
import SmallCard from "components/SmallCard"

export default function KetuaLSP() {
  return (
    <Layout title="Ketua LSP">
      <div className="max-w-5xl m-auto pt-24">
        <Breadcrumb />
        <Title title="Sambutan Ketua LSP" />
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-9 text-justify text-lg text-gray-800 leading-relaxed">
            <p className="mb-8">
              Puji Syukur kami panjatkan kepada Tuhan Yang Maha Esa karena kasih
              karunia dan AnugerahNya keluarga besar SMKN 3 Jember khususnya LSP
              SMKN 3 Jember selalu dalam lindungan Tuhan. SMKN 3 Jember
              senantiasa berkarya dan berusaha menghasilkan generasi-generasi
              terbaik sehingga lulusan SMKN 3 Jember berguna dalam membangun
              manusia yang berbudi dan kompeten terlebih untuk kemajuan Bangsa
              dan Negara kita tercinta, Indonesia.
            </p>
            <p className="mb-8">
              LSP SMKN 3 Jember terbentuk dengan keinginan bahwa siswa SMKN 3
              Jember dapat tersertifikasi dan mendapat sertifikat kompetensi
              berskala Nasional bahkan ASEAN. Era Globalisasi sangat ditentukan
              oleh kualitas suatu bangsa dan ditentukan oleh kualitas sumber
              daya manusianya yang sangat erat kaitannya dengan kompetensi
              kerja. Sertifikasi kompetensi ini membuka peluang lebih besar bagi
              peserta didik untuk mendapatkan pekerjaan sesuai dengan
              kompetensinnya dan menjadi kompetitif baik dipasar tenaga kerja
              maupun diluar negeri. Tujuan sertifikasi kompetensi adalah
              memberikan pengakuan kepada kompetensi siswa SMKN 3 Jember yang
              dapat dijadikan acauan untuk mengukur tenaga kerja Indonesia yang
              kompeten, profesional dan kompetitif.
            </p>
            <p className="mb-8">
              LSP SMKN 3 Jember terbentuk dengan keinginan bahwa siswa SMKN 3
              Jember dapat tersertifikasi dan mendapat sertifikat kompetensi
              berskala Nasional bahkan ASEAN. Era Globalisasi sangat ditentukan
              oleh kualitas suatu bangsa dan ditentukan oleh kualitas sumber
              daya manusianya yang sangat erat kaitannya dengan kompetensi
              kerja. Sertifikasi kompetensi ini membuka peluang lebih besar bagi
              peserta didik untuk mendapatkan pekerjaan sesuai dengan
              kompetensinya dan menjadi kompetitif baik dipasar tenaga kerja
              maupun diluar negeri. Tujuan sertifikasi kompetensi adalah
              memberikan pengakuan kepada kompetensi siswa SMKN 3 Jember yang
              dapat dijadikan acuan untuk mengukur tenaga kerja Indonesia yang
              kompeten, profesional dan kompetitif.
            </p>
          </div>
          <div className="col-span-3">
            <SmallCard
              imgUrl="lsp/ketua_lsp.jpg"
              name="Kristin Asri, S.Pd."
              title="Ketua LSP"
              nip="000 0 0 00 0 0000"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}
