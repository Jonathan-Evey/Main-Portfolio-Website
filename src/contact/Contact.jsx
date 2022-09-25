import ContactForm from "./ContactForm"

const Contact = () => {
  return (
    <section className="section contact | magin-block-end-48">
      <div className="container contact | padding-inline-96">
        <h2 className="title | fs-900 fw-bold margin-block-end-40">Contact</h2>
        <p className="padding-inline-48 margin-block-end-40">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam accusamus eos quod labore tempore error placeat ipsam voluptates dolore praesentium optio architecto, id molestias distinctio. Quo consequatur cupiditate ratione dignissimos.</p>
      <ContactForm />
      </div>

      <div className="container find-me | padding-inline-end-96 ">
        <h3 className="title | fs-900 fw-bold ">Find Me</h3>
        <a className="link social | fs-600 margin-block-start-80" href="http://">gitHub</a>
        <a className="link social | fs-600 margin-block-start-80" href="http://">LinkedIn</a>
      </div>
      <div className="bg-large-sphere contact"></div>
    </section>
  )
}

export default Contact