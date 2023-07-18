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
        <p className="fs-500 margin-block-32">Hello and welcome! I am an aspiring developer who embarked on a self-taught journey, starting with front-end development and now aiming to become proficient in full-stack development. Through my dedicated efforts, I have acquired a solid foundation in various technologies and tools that are essential for building modern web applications.</p>
        <p className="fs-500">While front-end development has been my initial focus, I have been expanding my skills to encompass the entire stack. I am enthusiastic about learning back-end technologies, such as Node.js, with express.js, and databases like MongoDB, as they will enable me to create robust and scalable web applications.</p>
      </div>
    </section>
  )
};

export default Hero