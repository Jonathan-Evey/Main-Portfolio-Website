import React, { forwardRef, useRef } from 'react'

const Hero = forwardRef((props, ref) => {

  return (
    <section className="section hero" ref={ref}>
      <div className="bg-large-sphere hero"></div>
      <div className="hero container">
        <h1 className="title | fs-900 fw-bold">Jonathan</h1>
        <h1 className="title | fs-900 fw-bold margin-block-end-40">Evey</h1>
        <p className="fs-500 margin-block-32">Hello and welcome! I am a self taught developer that started out in front end development and am working towards becoming proficient as a full stack developer. My main skill set currently includes JavaScript, React, CSS and SASS.</p>
        {/* <p className="fs-500">Bellow are a few of the projects that I have created along the way.</p> */}
      </div>
    </section>
  )
});

export default Hero