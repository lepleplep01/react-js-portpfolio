
import portfolio1 from '../assets/portfolio1.png'
import {PortfolioList} from '../data/DataPortfolio'
import {Link} from 'react-router-dom'
import '../styles/Portfolio.css'
function Portfolio() {
  return (
    <section id="portfolio">
        <div className="wrapper">
            <h3>portfolio</h3>
            <div className="grid">
                {
                    PortfolioList.map((item)=>{

                        return(
                            <div className="item" key={item.id} >
                            <Link to={`/portfolio/${item.id}`}><img src={item.Image}/></Link>
                        </div>
                        )
                    })
                }
                    
            </div>
        </div>
    </section>
  )
}

export default Portfolio