import MainProjectsContainer from "./MainProjectsContainer"
import SmallProjectsContainer from "./SmallProjectsContainer"

const Projects = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="title projects | fs-900 fw-bold margin-block-end-96">Projects</h2>
        <MainProjectsContainer />
        <SmallProjectsContainer />
      </div>
    </section>
  )
}

export default Projects