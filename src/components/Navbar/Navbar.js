import Link from 'next/link';
import BackButton from '../BackButton/BackButton';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <BackButton />
                    <Link href="/" className={styles.logo}>
                        Profile
                    </Link>
                </div>
                <div className={styles.links}>
                    <Link href="/">Home</Link>
                    <Link href="/now">Now page</Link>
                    <Link href="/research">Research</Link>
                    <Link href="/resume">Resume</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/contact">Contact</Link>
                </div>
            </div>
        </nav>
    );
}
