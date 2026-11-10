import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.navLink}>Головна</Link>
      <Link to="/campaigns" className={styles.navLink}>Кампанії</Link>
      <Link to="/missions" className={styles.navLink}>Місії</Link>
      <Link to="/login" className={styles.navLink}>Увійти</Link>
    </nav>
  );
}