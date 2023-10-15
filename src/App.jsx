import React from 'react'
// import Test from './Test'
import Home from './Component/Home'
import Test from './Test'
import { Route,Routes,BrowserRouter } from 'react-router-dom'

// import Loader from './Loader'
const App = () => {
  return (
      



      <BrowserRouter>
      {/* <Loader/> */}
      <Routes>
        
        <Route path='/' element={<Home/>}/>
        <Route path='/map' element={<Test/>}/>
      </Routes>
      
      </BrowserRouter>
     
      
     
  )
}

export default App
