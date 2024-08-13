import Navbar from "./Navbar"

function Header({ headerText = "Mangler headerText" }) {
     return (
          <>
          <Navbar/>
          <h1>{headerText}</h1>
          </>
     );
 }

 export default Header;