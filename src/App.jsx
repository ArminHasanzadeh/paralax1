
import { useState } from 'react'
import './App.css'
import Header from './Header/Header'
import Main from './main/Main'
import Footer from './footer/Footer'

export default function App() {
  const [set, setSt]= useState(0)
  function para(e){
    // console.log(e.target.scrollTop);
    setSt(e.target.scrollTop)
  }
  return (
    <section onScroll={para} className='w-full h-[100vh] overflow-auto'>
    <Header />
    <Main scrollTop={set}/>
    <Footer />
    </section>
  )
}

