import Layout from "components/Layout"
import Breadcrumb from "components/Breadcrumb"
import Title from "components/Title"

export default () => {
  return (
    <Layout title="Desain Fesyen">
      <div className="max-w-5xl pt-24 m-auto open-sans text-lg text-blue-900 leading-relaxed">
        <Breadcrumb />
        <Title title="Desain Fesyen" />
        <img
          src="/jurusan/wide/df.jpg"
          alt="Foto Jurusan Desain Fesyen"
          className="m-auto object-cover rounded-md"
          style={{height: `25rem`}}
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
