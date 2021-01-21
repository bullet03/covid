import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

function NavBar () {
  return (
    <div className={styles.navbar}>
      <Link to="/">Countries List</Link>
      <Link to="/comparison">Sort</Link>
    </div>
  );
}

export default NavBar