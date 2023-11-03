import React from 'react'
import {logo} from '../assets';
// import './App.css'
const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt="logo" className='w-28'/>

        <button type='button' onClick={()=>window.open('https://github.com')} className='black_btn'>GitHub</button> 
      </nav>
      <h1 className="head_text">
        Summarise Articles with <br className='max-md:hidden'/><span className='orange_gradient'>OpenAI gpt-4</span>
      </h1>
      <h2 className="desc">Simplify your reading with Summize, an open-source article summarizer that transforms length articles into clear and concise summaries</h2>
      
    </header>
  )
}

export default Hero;
