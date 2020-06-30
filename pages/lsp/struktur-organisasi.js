import Layout from "components/Layout"
import Title from "components/Title"
import Breadcrumb from "components/Breadcrumb"
import Image from "components/Image"

export default function StrukturOrganisasi() {
  return (
    <Layout title="Struktur Organisasi">
      <div className="max-w-5xl m-auto pt-24 px-4 lg:px-0">
        <Breadcrumb />
        <Title title="Struktur Organisasi" />
        <Image src="lsp/struktur_lsp.jpg" alt="Struktur LSP" className="mb-8" />
        <Title title="Struktur Personil" />
        <div className="lg:grid lg:grid-cols-12 grid-flow-col-dense open-sans text-blue-900 text-lg leading-relaxed mb-8">
          <div className="col-span-5">
            <div className="mb-8">
              <h1 className="text-xl font-bold">Dewan Pengarah</h1>
              <div className="grid grid-cols-8">
                <p className="col-span-2">Ketua</p>
                <p className="col-start-3 col-end-9">
                  : Agus Budiarto, SP, M.Pd.
                </p>
              </div>
              <div className="grid grid-cols-8">
                <p className="col-span-2">Anggota</p>
                <p className="col-start-3 col-end-9">
                  : Drs. Abdul Madjid, M.Pd.
                </p>
                <p className="col-start-3 col-end-9">: Rahmah Hidana, M.Si.</p>
                <p className="col-start-3 col-end-9">: Syahroni, S.Pd. </p>
              </div>
            </div>
            <div className="mb-8">
              <h1 className="text-xl font-bold">Pengurus</h1>
              <div className="grid grid-cols-8">
                <p className="col-span-4 lg:col-span-3">Ketua LSP</p>
                <p className="col-start-5 col-end-9 lg:col-start-4 lg:col-end-8">
                  : Kristin Asri, S.Pd.
                </p>
              </div>
              <div className="grid grid-cols-8">
                <p className="col-span-4 lg:col-span-3">Sekretaris</p>
                <p className="col-start-5 col-end-9 lg:col-start-4 lg:col-end-8">
                  : Dyah Wijayanti, S.Pd.
                </p>
              </div>
              <div className="grid grid-cols-8">
                <p className="col-span-4 lg:col-span-3">Ketua Komite Skema</p>
                <p className="col-start-5 col-end-9 lg:col-start-4 lg:col-end-8">
                  : Sutejo, S.Pd.
                </p>
              </div>
            </div>
            <div className="mb-8">
              <h1 className="text-xl font-bold">Ketua Bidang</h1>
              <div className="grid grid-cols-8">
                <p className="col-span-4 lg:col-span-3">Manajemen Mutu</p>
                <p className="col-start-5 col-end-9 lg:col-start-4 lg:col-end-8">
                  : Siti Armini, S.Pd.
                </p>
              </div>
              <div className="grid grid-cols-8">
                <p className="col-span-4 lg:col-span-3">Keuangan</p>
                <p className="col-start-5 col-end-9 lg:col-start-4 lg:col-end-8">
                  : Novaning Prahasti, S.Pd.
                </p>
              </div>
              <div className="grid grid-cols-8">
                <p className="col-span-4 lg:col-span-3">Teknis Sertifikasi</p>
                <p className="col-start-5 col-end-9 lg:col-start-4 lg:col-end-8">
                  : Tintin Ratnawati, S.Pd.
                </p>
                <p className="col-start-5 col-end-9 lg:col-start-4 lg:col-end-8">
                  : Sri Wahyuni, S.Pd.
                </p>
              </div>
            </div>
          </div>
          <div className="col-start-6 col-end-13 mb-8">
            <h1 className="text-xl font-bold">Kelompok Asesor</h1>
            <div className="grid grid-cols-2">
              <p>Akomodasi Perhotelan</p>
              <p>: Andi Cholifatullah, SST.Par.</p>
            </div>
            <div className="grid grid-cols-2">
              <p>Usaha Perjalanan Wisata</p>
              <p>: Tommy Herlambang Saputra, SST.Par.</p>
            </div>
            <div className="grid grid-cols-2">
              <p>Patiseri</p>
              <p>: Eny Retnobudi W, S.Pd.</p>
            </div>
            <div className="grid grid-cols-2">
              <p>Jasa Boga</p>
              <p>: Inayah Rahmani, S.Pd.</p>
            </div>
            <div className="grid grid-cols-2">
              <p>Kecantikan Rambut</p>
              <p>: Siti Armini, S.Pd.</p>
            </div>
            <div className="grid grid-cols-2">
              <p>Kecantikan Rambut</p>
              <p>: Siti Armini, S.Pd.</p>
            </div>
            <div className="grid grid-cols-2">
              <p>Kecantikan Kulit</p>
              <p>: Dra. Diana Binti S.</p>
              <p className="col-start-2">: Farida Ariyani, S.Pd.</p>
            </div>
            <div className="grid grid-cols-2">
              <p>Rekayasa Perangkat Lunak</p>
              <p>: Dony Tatang Triatmo, S.Kom.</p>
            </div>
            <div className="grid grid-cols-2">
              <p>Teknik Komputer dan Jaringan</p>
              <p>: Imam Ashadi, S.Kom.</p>
            </div>
            <div className="grid grid-cols-2">
              <p>Multimedia</p>
              <p>: Feri Indra Prasta, S.Kom.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
