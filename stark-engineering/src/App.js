import React  from 'react'
import Header from './Header'
import Footer from './Footer'
import Navbar from './Navbar'
import About  from './About'
import Parallex2 from './Parallex2'
import Services from './Services'
import Parallex3 from './Parallex3'
import Contact from './Contact'

function App(){
    return(
        <div className="App">
            <Header />
            <Navbar />
            <About />
            <Parallex2 />
            <Services />
            <Parallex3 />
            <Contact />
            <Footer />
        </div>
    )
}

export default App