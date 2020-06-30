import Layout from "components/Layout"
import Breadcrumb from "components/Breadcrumb"
import Title from "components/Title"
import Image from "components/Image"

export default () => {
  return (
    <Layout title="Usaha Perjalanan Wisata">
      <div className="max-w-5xl pt-24 m-auto open-sans text-lg text-blue-900 leading-relaxed">
        <Breadcrumb />
        <Title title="Usaha Perjalanan Wisata" />
        <Image
          src="jurusan/wide/upw.jpg"
          alt="Foto Jurusan Usaha Perjalanan Wisata"
          className="m-auto object-cover rounded-md"
          style={{ height: `25rem` }}
        />
        <p className="my-8">
          Sit blanditiis necessitatibus ad accusantium consectetur Magnam minus
          libero itaque eius dolorem Sequi sed dolor magnam facilis unde veniam
          dolor? Sed id hic voluptatem esse expedita. Quaerat ab exercitationem
          ex aliquam obcaecati?
        </p>
        <p className="my-8">
          Lorem nam saepe animi fugit repellendus? Aliquid non ab soluta labore
          placeat nesciunt! Sit non illum labore impedit inventore magni
          asperiores Qui nobis earum tenetur rerum id dolor Similique itaque
          doloremque et totam quam? Adipisci tempore voluptatum veritatis id
          accusantium sit. Iste sint laborum perferendis nostrum ullam nemo!
          Doloribus assumenda quae asperiores quis doloribus, magnam Quaerat
          delectus doloremque fugit adipisci minus! Sint itaque delectus.
        </p>
      </div>
    </Layout>
  )
}
