import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';
import styles from './blog.module.css';
import ComingSoonCat from '@/components/ComingSoonCat/ComingSoonCat';

export default function Blog() {
    const allPostsData = getSortedPostsData();

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>🐱 Blog</h1>
                <p className={styles.subtitle}>Thoughts on Signal Processing, Math, and Tech.</p>
            </header>

            <div className={styles.grid}>
                {allPostsData.map(({ id, date, title, excerpt }) => (
                    <Link href={`/blog/${id}`} key={id} className={styles.card}>
                        <article>
                            <h2 className={styles.cardTitle}>{title}</h2>
                            <p className={styles.cardDate}>{date}</p>
                            <p className={styles.cardExcerpt}>{excerpt}</p>
                        </article>
                    </Link>
                ))}

                {/* Coming Soon Placeholder */}
                <ComingSoonCat />
            </div>
        </div>
    );
}
