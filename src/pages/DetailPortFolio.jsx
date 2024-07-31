
import { useParams,Navigate } from 'react-router-dom'
import '../styles/DetailPortfolio.css'
import {PortfolioList} from '../data/DataPortfolio'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
function DetailPortFolio() {

  const {id} = useParams();
  const data = PortfolioList.find((item)=> item.id === id)

  if (data === undefined) {
    return <Navigate to= '/PageNotFound'/>
  }
  

  return (
    <>
    <Navbar />

    <section id="detail-portfolio">
      <div className='wrapper'>
        <h1>{data.title}</h1>
        <img src={data.Image} />
        <p className='skill'><b>Skills: </b> {data.skill}</p>
      </div>
    </section>
    <Footer />
    <ScrollToTop />
    </>
  )
}

export default DetailPortFolio