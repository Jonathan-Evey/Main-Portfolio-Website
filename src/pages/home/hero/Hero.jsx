const Hero = ({heroRef}) => {

  let rings = [];

  for (let i = 0; i <= 10; i++) {
    rings.push(i);
  }

  return (
    <section className="section hero" ref={heroRef}>
      <div className="bg-large-sphere hero">
        {rings.map((ring, index) => (<div style={{ "--i": `${index}`}} className="ring" key={ring}></div>))}
      </div>
      <div className="hero container">
        <h1 className="title | fs-900 fw-bold">Jonathan</h1>
        <h1 className="title | fs-900 fw-bold margin-block-end-40">Evey</h1>
        <p className="fs-500 margin-block-32">Hello and welcome! I am a self taught developer that started out in front end development and am working towards becoming proficient as a full stack developer. My main skill set currently includes JavaScript, React, CSS and SASS.</p>
      </div>
    </section>
  )
};

export default Hero