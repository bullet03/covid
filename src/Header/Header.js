import NavBar from "./NavBar"
import styles from './Header.module.css'

function Header () {
  return (
    <div className={styles.header}>
      <NavBar />
    </div>
  )
}

export default Header