import Layout from "components/Layout"
import Image from "components/Image"
import Title from "components/Title"
import Breadcrumb from "components/Breadcrumb"
import SmallCard from "components/SmallCard"

export default function StafDanGuru() {
  return (
    <Layout title="Staf dan Guru">
      <div className="max-w-5xl m-auto pt-24">
        <Breadcrumb />
        <Title title="Staf dan Guru" />
        <Image
          src="struktur_skaga.jpg"
          alt="Struktur SMKN 3 Jember"
          className="mb-8"
        />
        <div className="grid grid-cols-4 gap-4 mb-16">
          <SmallCard
            imgUrl="kepala_sekolah.jpg"
            alt="Foto Kepala Sekolah"
            title="Kepala Sekolah"
            name="AGUS BUDIARTO, S.P., M.Pd."
            nip="19611003 198403 1 003"
          />
          <SmallCard
            imgUrl="placeholder_avatar.jpg"
            alt="Foto Placeholder"
            title="Lorem Ipsum"
            name="Nama Lengkap....."
            nip="10239 1 20931 0231 02"
          />
          <SmallCard
            imgUrl="placeholder_avatar.jpg"
            alt="Foto Placeholder"
            title="Lorem Ipsum"
            name="Nama Lengkap....."
            nip="10239 1 20931 0231 02"
          />
          <SmallCard
            imgUrl="placeholder_avatar.jpg"
            alt="Foto Placeholder"
            title="Lorem Ipsum"
            name="Nama Lengkap....."
            nip="10239 1 20931 0231 02"
          />
          <SmallCard
            imgUrl="placeholder_avatar.jpg"
            alt="Foto Placeholder"
            title="Lorem Ipsum"
            name="Nama Lengkap....."
            nip="10239 1 20931 0231 02"
          />
          <SmallCard
            imgUrl="placeholder_avatar.jpg"
            alt="Foto Placeholder"
            title="Lorem Ipsum"
            name="Nama Lengkap....."
            nip="10239 1 20931 0231 02"
          />
          <SmallCard
            imgUrl="placeholder_avatar.jpg"
            alt="Foto Placeholder"
            title="Lorem Ipsum"
            name="Nama Lengkap....."
            nip="10239 1 20931 0231 02"
          />
          <SmallCard
            imgUrl="placeholder_avatar.jpg"
            alt="Foto Placeholder"
            title="Lorem Ipsum"
            name="Nama Lengkap....."
            nip="10239 1 20931 0231 02"
          />
        </div>
      </div>
    </Layout>
  )
}
