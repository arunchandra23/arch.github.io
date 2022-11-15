import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import ContactPage from '../ContactPage/ContactPage';
import HomePage from '../HomePage/HomePage';
const App=()=> {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='contact' element={<ContactPage/>}/>

    </Routes>
    
    </BrowserRouter>
  )
}

export default App;