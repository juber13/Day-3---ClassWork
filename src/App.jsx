import Header from "./components/Header"
import Home from "./pages/Home"
import Quote from "./pages/Quote"
import Footer from "./components/Footer"
import {Routes , Route} from 'react-router-dom'

import RestaurentList from "./components/RestaurentList"
import Foods from "./components/Foods"
import Contact from "./components/Contact"

function App() {
  return (
    <>
    <Header/>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/quote" element={<Quote/>} />
      <Route path="/restaurent" element={<RestaurentList/>} />
      <Route path="/foods" element={<Foods/>} />
      <Route path="/contact" element={<Contact/>} />
     </Routes>
    <Footer/>
    </>
  )
}

export default App
