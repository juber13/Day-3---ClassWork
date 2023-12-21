import Header from "./components/Header"
import Home from "./pages/Home"
import Quote from "./pages/Quote"
import Footer from "./components/Footer"
import {Routes , Route} from 'react-router-dom'


function App() {
  return (
    <>
    <Header/>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/quote" element={<Quote/>} />
     </Routes>
    <Footer/>
    </>
  )
}

export default App
