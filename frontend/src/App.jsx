import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import  Home  from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import  Footer  from './components/Footer/Footer'
// import './App.css'
import { useState } from 'react'
import LoginPopup from './components/LoginPopup/LoginPopup'
import { Toaster } from 'react-hot-toast'
const App = () => {

  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            background: '#fff',
            color: '#333',
            padding: '16px',
            borderRadius: '10px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
            fontWeight: '500',
          },
          success: {
            iconTheme: {
              primary: '#10b981',
              secondary: '#fff',
            },
            style: {
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: '#fff',
            },
          },
        }}
      />
      {showLogin? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className='app'>
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<PlaceOrder />} />
      </Routes>
      </div>
      <Footer />
  
    </>
   
  

  )
}

export default App