import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    Profile
                </Link>
                <div className={styles.links}>
                    <Link href="/">Home</Link>
                    <Link href="/resume">Resume</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/contact">Contact</Link>
                </div>
            </div>
        </nav>
    );
}
