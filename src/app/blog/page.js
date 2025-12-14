import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';
import styles from './blog.module.css';
import BlogList from '@/components/BlogList/BlogList';

export default function Blog() {
    const allPostsData = getSortedPostsData();

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>🐱 Blog</h1>
                <p className={styles.subtitle}>Thoughts on Signal Processing, Math, and Tech.</p>
            </header>

            <BlogList posts={allPostsData} />
        </div>
    );
}
