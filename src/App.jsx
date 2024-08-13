import './App.scss'
import Main from './components/Main'
import Header from './components/Header'
import Footer from './components/footer'
import Navbar from './components/Navbar'
import ParentComponent from './components/ParentComponent'


function App() {
   return (  
    <>
    <Header headerText="Props er cool"/>
    <ParentComponent/>
    <Main/>
    <Footer/>
    </>
   )
}
export default App

