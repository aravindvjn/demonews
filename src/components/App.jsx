import React,{useState} from 'react'
import Header from './Header'
import Hero from './Hero'
import Footer from './Footer'
import Filtered from './Filtered'

const App = () => {
  const [currentPage,setCurrentPage] = useState("1");
  return (
    <div>
      <Header setCurrentPage={setCurrentPage} />
      {currentPage==="1"? <Hero/> : <Filtered  currentPage={currentPage}/> }
      
      
      <Footer/>
    </div>
  )
}

export default App
