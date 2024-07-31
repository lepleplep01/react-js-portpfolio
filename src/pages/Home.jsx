
import LoaderHome from "../components/LoaderHome"
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Portfolio from "../components/Portfolio"
import About from "../components/About"
import Footer from "../components/Footer"
import Contact from "../components/Contact"
import ScrollToTop from "../components/ScrollToTop"


function Home() {

  return (
    <>
      <LoaderHome />
       <Navbar />
       <Header />
       <Portfolio />
       <About />
       <Contact />
       <Footer />
       <ScrollToTop />
    </>
    
    
  )
}

export default Home 