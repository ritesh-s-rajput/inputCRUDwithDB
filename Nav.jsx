import { Link } from "react-router-dom"
import style from "./nav.module.css"
const Nav=()=>{
    return(
            <section id={style.nav}>
                <Link to="/" className={style.menu}>CREATE - USER</Link>
                <Link to="/user" className={style.menu}>USERS</Link>
            </section>
    )
}
export default Nav