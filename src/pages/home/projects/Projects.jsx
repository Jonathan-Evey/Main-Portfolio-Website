import React, { forwardRef, useRef } from 'react'
import MainProjectsContainer from "./MainProjectsContainer"
import SmallProjectsContainer from "./SmallProjectsContainer"

const Projects = forwardRef((props, ref) => {
  return (
    <section className="section | padding-block-end-144" id='projects' ref={ref}>
      <div className="container">
        <h2 className="title projects | fs-900 fw-bold margin-block-end-96">Projects</h2>
        <MainProjectsContainer />
        <SmallProjectsContainer />
      </div>
    </section>
  )
});

export default Projects