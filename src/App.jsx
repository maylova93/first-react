import './App.scss'
import Main from './components/Main'
import Header from './components/Header'
import Footer from './components/footer'
import Navbar from './components/Navbar'
import React from 'react';
import ParentComponent from './components/ParentComponent'


function App() {
   return (  
    <>
 
    <ParentComponent/>
    <Header/>
    <Main/>
    <Footer/>
    </>
   )
}
export default App

