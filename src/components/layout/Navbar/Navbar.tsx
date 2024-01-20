import style from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={style.container}>
        <h1 className={style.logo}>Logo</h1>
        <div className={style.categories_container}>
            <ul>
                <li><span>Categoría 1</span></li>
                <li><span>Categoría 2</span></li>
                <li><span>Categoría 3</span></li>
                <li><span>Categoría 4</span></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar