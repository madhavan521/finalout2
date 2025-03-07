import React from 'react'
import { BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './Component/Home'
import AboutUs from './Component/AboutUs'
import CareerPage from './Component/Carrers'


const App = () => {
   

  return (
    <div>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />   
      <Route path='/about' element={<AboutUs />} />
      <Route path='/carrer' element={<CareerPage />}/>
       </Routes>
   </BrowserRouter>
      
    </div>
  )
}

export default App
