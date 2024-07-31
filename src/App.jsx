import './App.css'
//import LoaderHome from './components/LoaderHome'
import DetailPortFolio from './pages/DetailPortFolio'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'
import Experience from './pages/Experience'
import {BrowserRouter, Routes, Route} from 'react-router-dom' 

function App() {
  return (
   
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/portfolio/:id' element={<DetailPortFolio />}/>
        <Route path='/PageNotFound' element={<PageNotFound />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  
  )
}

export default App