import ContactForm from "./ContactForm"

const Contact = ({contactRef}) => {
  let rings = [];

  for (let i = 0; i <= 5; i++) {
    rings.push(i);
  }
  return (
    <section id='contact' className="section contact | magin-block-end-48" ref={contactRef}>
      <div className="container contact ">
        <h2 className="title | fs-900 fw-bold margin-block-end-80">Contact</h2>
        <p className="fs-500 margin-block-end-56">Have any questions, comments, or looking to work with me? Feel free to send me a message, or reach out to me on my <a href='#socials' className='link project'>socials</a>. I look forward to hearing from you.</p>
      <ContactForm />
      </div>

      <div className="container find-me">
        <h3 id="socials" className="title | fs-900 fw-bold ">Find Me</h3>
        <a className="link social | fs-600 margin-block-start-80" href="https://github.com/NighIsTheEnd">gitHub</a>
        <a className="link social | fs-600 margin-block-start-80" href="http://">LinkedIn</a>
      </div>
      <div className="bg-large-sphere contact">
        {rings.map((ring, index) => (<div style={{ "--i": `${index}`}} className="ring" key={ring}></div>))}
      </div>
    </section>
  )
};

export default Contact