'use client';
import { useRouter, usePathname } from 'next/navigation';
import styles from './BackButton.module.css';

export default function BackButton() {
    const router = useRouter();
    const pathname = usePathname();

    if (pathname === '/') return null;

    return (
        <button className={styles.backBtn} onClick={() => router.back()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back
        </button>
    );
}
