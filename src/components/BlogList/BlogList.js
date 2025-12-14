'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import styles from './BlogList.module.css';
import InteractiveCat from '@/components/InteractiveCat/InteractiveCat';

export default function BlogList({ posts }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTag, setSelectedTag] = useState(null);

    // Extract all unique tags
    const allTags = useMemo(() => {
        const tags = new Set();
        posts.forEach(post => {
            if (post.tags && Array.isArray(post.tags)) {
                post.tags.forEach(tag => tags.add(tag));
            }
        });
        return Array.from(tags).sort();
    }, [posts]);

    // Filter posts
    const filteredPosts = useMemo(() => {
        return posts.filter(post => {
            const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesTag = selectedTag ? (post.tags && post.tags.includes(selectedTag)) : true;
            return matchesSearch && matchesTag;
        });
    }, [posts, searchQuery, selectedTag]);

    return (
        <div>
            <div className={styles.searchContainer}>
                <input
                    type="text"
                    placeholder="Search posts..."
                    className={styles.searchInput}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />

                <div className={styles.tagsContainer}>
                    <button
                        className={`${styles.tagButton} ${selectedTag === null ? styles.active : ''}`}
                        onClick={() => setSelectedTag(null)}
                    >
                        All
                    </button>
                    {allTags.map(tag => (
                        <button
                            key={tag}
                            className={`${styles.tagButton} ${selectedTag === tag ? styles.active : ''}`}
                            onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>

            <div className={styles.grid}>
                {filteredPosts.map(({ id, date, title, excerpt, tags }) => (
                    <Link href={`/blog/${id}`} key={id} className={styles.card}>
                        <article>
                            <h2 className={styles.cardTitle}>{title}</h2>
                            <p className={styles.cardDate}>{date}</p>
                            <p className={styles.cardExcerpt}>{excerpt}</p>
                            {tags && tags.length > 0 && (
                                <div className={styles.cardTags}>
                                    {tags.map(tag => (
                                        <span key={tag} className={styles.cardTag}>#{tag}</span>
                                    ))}
                                </div>
                            )}
                        </article>
                    </Link>
                ))}

                {/* Always show the AI Cat at the end, or only if no results? 
                    Let's show it if no results, or just append it as a fun element 
                    if the list is small? Let's just keep it at the bottom.
                */}
                <InteractiveCat />
            </div>

            {filteredPosts.length === 0 && (
                <p style={{ textAlign: 'center', marginTop: '2rem', color: 'var(--subtext0)' }}>
                    No posts found matching your criteria.
                </p>
            )}
        </div>
    );
}
