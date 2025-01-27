import AboutInstitutimiz from "../components/AboutInstitutimiz"
import Cards from "../components/Cards"
import Contact from "../components/Contact"
import Directions from "../components/Directions"
import Footer from "../components/Footer"
import Header from "../components/Header"
import LastestNews from "../components/LastestNews"
import Nav from "../components/Nav"

const HomePage = () => {
  return (
    <main>
      <Nav />
      <Header />
      <AboutInstitutimiz />
      <Cards />
      <Directions />
      <LastestNews />
      <Contact />
      <Footer />
    </main>
  )
}

export default HomePage