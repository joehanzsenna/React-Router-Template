import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeIndex from './Pages/Home/HomeIndex'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import AboutIndex from './Pages/About/AboutIndex'
import ContactsIndex from './Pages/Contact/ContactsIndex'
import ShopIndex from './Pages/Shop/SHopIndex'
import CartIndex from './Pages/cart/CartIndex'
import ErrorPage from './Components/ErrorPage/ErrorPage'
import ShopProduct from './Pages/Shop/ShopComponents/ShopProducts/ShopProduct'
import FirstContent from './Pages/Shop/ShopComponents/ShopProducts/FirstContent'
import SecondContent from './Pages/Shop/ShopComponents/ShopProducts/SecondContent'
import ProductDetails from './Pages/Home/HomeComponents/Products/ProductDetails'
import { useState } from 'react'
import Cart from './Pages/cart/CartComponents/MainCart/MainCart'

function App() {

  const [cart, setCart] = useState([]);

  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      {/* <Cart/> */}
        <Routes>
          <Route index element={<HomeIndex/>}  />
          <Route path='about' element={<AboutIndex/>}  />
          <Route path='contacts' element={<ContactsIndex/>}  />
          <Route path='product/:productId' element={<ProductDetails/>}  />


          <Route path='shop' element={<ShopIndex/>} cart={cart} setCart={setCart}>
            <Route path='first' element={<FirstContent/>} />
            <Route path='Second' element={<SecondContent/>} />
          </Route>
          <Route path='cart' element={<CartIndex/>}  />
          <Route path='*' element={<ErrorPage/>}  />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
