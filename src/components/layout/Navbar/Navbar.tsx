import style from './Navbar.module.css'
import menu_restaurante from '../../../assets/menu-icons/restaurante_menu.svg'
import menu from '../../../assets/menu-icons/menu.svg'
import { useState } from 'react'



const Navbar = () => {
    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(true)

    const toggleMenu = ()=> setMenuIsOpen(!menuIsOpen)
  return (
    <header className={style.container}>
        <div className={style.menu_icon} onClick={toggleMenu}>
            {
                menuIsOpen ?
                <img src={menu_restaurante} alt="" />
                :
                <img src={menu} alt=""/>
            }
        </div>
        <nav className={`${style.nav} animate__animated ${menuIsOpen ? 'animate__slideInDown' : 'animate__slideOutUp'}`}>
            <h1 className={style.logo}>Logo</h1>
            <div className={style.categories_container}>
                <ul>
                    <li><span>Categoría 1</span></li>
                    <li><span>Categoría 2</span></li>
                    <li><span>Categoría 3</span></li>
                    <li><span>Categoría 4</span></li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Navbar