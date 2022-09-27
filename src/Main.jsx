import Hero from './hero/Hero'
import Projects from './projects/Projects'
import Contact from './contact/Contact'

function Main(props) {


  return (
    <main className="main">
      <Hero ref={props.heroRef} />
      <Projects ref={props.projectsRef}/>
      <Contact ref={props.contactRef}/>
    </main>
  )
}

export default Main
