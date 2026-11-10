import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#222', color: '#fff', display: 'flex', gap: '20px' }}>
      <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Головна</Link>
      <Link to="/campaigns" style={{ color: '#fff', textDecoration: 'none' }}>Кампанії</Link>
      <Link to="/missions" style={{ color: '#fff', textDecoration: 'none' }}>Місії</Link>
      <Link to="/login" style={{ color: '#fff', textDecoration: 'none' }}>Увійти</Link>
    </nav>
  );
}