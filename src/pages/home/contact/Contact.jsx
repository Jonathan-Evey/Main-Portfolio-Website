import React, { forwardRef, useRef } from 'react'
import ContactForm from "./ContactForm"

const Contact = forwardRef((props, ref) => {
  return (
    <section id='contact' className="section contact | magin-block-end-48" ref={ref}>
      <div className="container contact ">
        <h2 className="title | fs-900 fw-bold margin-block-end-56">Contact</h2>
        <p className="margin-block-end-56">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam accusamus eos quod labore tempore error placeat ipsam voluptates dolore praesentium optio architecto, id molestias distinctio. Quo consequatur cupiditate ratione dignissimos.</p>
      <ContactForm />
      </div>

      <div className="container find-me">
        <h3 className="title | fs-900 fw-bold ">Find Me</h3>
        <a className="link social | fs-600 margin-block-start-80" href="https://github.com/NighIsTheEnd">gitHub</a>
        <a className="link social | fs-600 margin-block-start-80" href="http://">LinkedIn</a>
      </div>
      <div className="bg-large-sphere contact"></div>
    </section>
  )
});

export default Contact