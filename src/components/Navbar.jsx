import style from '../style/Navbar.module.scss'
function Navbar(){
    return(
<nav className={style.navStyle}>
    <ul>
        <li className={style.linkStyle}> Home</li>
       
        <li className={style.linkStyle}>About</li>

        <li className={style.linkStyle}>Services</li>
      
        <li className={style.linkStyle}>Contact</li>
    </ul>
</nav>
    )
}
export default Navbar
