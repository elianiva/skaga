import Layout from "components/Layout"
import Card from "components/Card"
import Title from "components/Title"
import Breadcrumb from "components/Breadcrumb"

export default function SemuaJurusan() {
  return (
    <Layout title="Jurusan">
      <div className="m-auto max-w-5xl pt-24">
        <Breadcrumb />
        <Title title="Kompetensi Keahlian" />
        <Card
          imgUrl="jurusan/perhotelan.jpg"
          jurusan="Akomodasi Perhotelan"
          alt="Akomodasi Perhotelan"
          deskripsi="Perhotelan merupakan bidang ilmu yang mempelajari pengelolaan hotel serta cara menyeimbangkan aspek wisata dan manajemen bisnis untuk mencapai kesuksesan."
          href="/profil/jurusan/perhotelan"
        />
        <Card
          imgUrl="jurusan/upw.jpg"
          jurusan="Usaha Perjalanan Wisata"
          alt="Usaha Perjalanan Wisata"
          deskripsi="Program studi yang mempelajari kegiatan yang bersifat komersial yang memberi pelayanan bagi suatu kelompok yang melakukan perjalanan dengan tujuan utama yaitu berwisata."
          href="/profil/jurusan/usaha-perjalanan-wisata"
        />
        <Card
          imgUrl="jurusan/tbg.jpg"
          jurusan="Tata Boga"
          alt="Tata Boga"
          deskripsi="Program studi yang mempelajari teknik penyajian makanan dengan memperhatikan kualitas, rasa, estetika, dan kebutuhan gizi. Kamu akan belajar mengolah berbagai hidangan dari daerah dan negara."
          href="/profil/jurusan/tata-boga"
        />
        <Card
          imgUrl="jurusan/tbs.jpg"
          jurusan="Tata Busana"
          alt="Tata Busana"
          deskripsi="Program studi yang mempelajari teknik mendesain, belajar membuat pola, menjahit, dan seluk beluk produksi busana atau fashion serta  analisa tren, bagaimana marketing dan manajemen bisnis fashion."
          href="/profil/jurusan/tata-busana"
        />
        <Card
          imgUrl="jurusan/df.jpg"
          jurusan="Desain Fesyen"
          alt="Desain Fesyen"
          deskripsi="Program studi yang mempelajari ilmu merancang busana. Ada banyak spesialisasi yang bisa dipilih dalam jurusan fashion design. Disini juga diajari cara memasarkan produk, menciptakan tren, dan sebagainya."
          href="/profil/jurusan/desain-fesyen"
        />
        <Card
          imgUrl="jurusan/kecantikan.jpg"
          jurusan="Kecantikan Kulit dan Rambut"
          alt="Kecantikan Kulit dan Rambut"
          deskripsi="Program studi yang mempelajari tata rias Indonesia dan internasional. Beberapa hal yang dipelajari adalah cara menata rambut, memotong rambut, merias wajah menggunakan bahan dan alat kosmetika."
          href="/profil/jurusan/kecantikan-kulit-dan-rambut"
        />
        <Card
          imgUrl="jurusan/tkj.jpg"
          jurusan="Teknik Komputer dan Jaringan"
          alt="Teknik Komputer dan Jaringan"
          deskripsi="Program studi yang mempelajari tentang cara-cara merakit komputer dan menginstalasi program komputer. Program studi ini juga membahas hal yang berkaitan dengan jaringan."
          href="/profil/jurusan/teknik-komputer-dan-jaringan"
        />
        <Card
          imgUrl="jurusan/rpl.jpg"
          jurusan="Rekayasa Perangkat Lunak"
          alt="Rekayasa Perangkat Lunak"
          deskripsi="Program studi yang mempelajari tentang cara-cara merakit komputer dan menginstalasi program komputer. Program studi ini juga membahas hal yang berkaitan dengan jaringan."
          href="/profil/jurusan/rekayasa-perangkat-lunak"
        />
        <Card
          imgUrl="jurusan/mm.jpg"
          jurusan="Multimedia"
          alt="Multimedia"
          deskripsi="Program studi yang mempelajari berkaitan dengan penggunaan berbagai media untuk menyampaikan informasi ke publik, termasuk media digital dan media cetak."
          href="/profil/jurusan/multimedia"
        />
      </div>
    </Layout>
  )
}
