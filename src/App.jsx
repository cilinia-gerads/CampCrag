import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Auth from './Pages/Auth/Auth'
import Login from './Pages/Auth/Login'
import Register from './Pages/Auth/Register'
import AuthCheck from './AuthCheck/AuthCheck'
import Product from './Pages/Product/Product'
import Footer from './Components/Footer/Footer'
import ProductCategory from './Pages/ProductCategory/ProductCategory'
import banner1 from './Components/Assets/banner1.jpg'
import banner2 from './Components/Assets/banner2.jpg'
import banner3 from './Components/Assets/banner3.jpg'
import banner4 from './Components/Assets/banner4.jpg'
import Cart from './Pages/Cart/Cart'
import Error from './Pages/Error/Error'
import NavbarProvider from './Context/NavbarContext'


function App() {
  return (
    <BrowserRouter>
      <NavbarProvider>
        <Navbar />
      </NavbarProvider>
      <Routes>
        <Route path='/' element={<AuthCheck><Home /></AuthCheck>} />
        <Route path='/tent&backpack' element={<ProductCategory banner={banner1} title="tent & backpack" category="tent&backpack" />} />
        <Route path='/cooking&hydration' element={<ProductCategory banner={banner2} title="cooking & hydration" category="cooking&hydration" />} />
        <Route path='/petgear' element={<ProductCategory banner={banner3} title="pet gear" category="pet gear" />} />
        <Route path='/other' element={<ProductCategory banner={banner4} title="other"  category="other" />} />
        <Route path='/product' element={<Product />} >
          <Route path=':productID' element={<Product />}/>
        </Route>
        <Route path='/auth' element={<Auth />}>
          <Route path='/auth/login' element={<Login />} />
          <Route path='/auth/register' element={<Register />} />
        </Route>
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<Error /> } />
      </Routes>
      <hr />
      <Footer />
    </BrowserRouter>
  )
}

export default App
