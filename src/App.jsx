import './App.scss'
import Main from './components/Main'
import Header from './components/Header'
import Footer from './components/footer'
import Navbar from './components/Navbar'
import ParentComponent from './components/ParentComponent'
import Favorites from './components/Favorites'
import ButtonsContainer from './components/ButtonsContainer'


function App() {
   return (  
    <>
    <Header headerText="Props er cool"/>
    <Favorites/>
    <ButtonsContainer/>
    <ParentComponent/>
    <Main/>
    <Footer/>
    </>
   )
}
export default App

