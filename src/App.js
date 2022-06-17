import React from 'react'

import {Footer,Possibility,Blog,Features,WhatGPT3,Header} from './containers'
import {Cta,Brand,NavBar} from './components'


const App = () => {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <NavBar />
        <Header />
       </div>
       <Brand/>
       <WhatGPT3/>
       <Features/>
       <Possibility/>
       <Cta/>
       <Blog/>
       <Footer/>
    
    
    
    </div>
  )
}

export default App