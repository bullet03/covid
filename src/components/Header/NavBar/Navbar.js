import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

function NavBar () {
  return (
    <nav className={styles.navbar}>
      <Link to="/">Countries List</Link>
      <Link to="/sort">Sort</Link>
    </nav>
  );
}

export default NavBar