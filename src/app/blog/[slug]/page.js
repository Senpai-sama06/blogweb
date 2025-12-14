import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeHighlight from 'rehype-highlight';
import 'katex/dist/katex.min.css'; // Import KaTeX styles
import 'highlight.js/styles/atom-one-dark.css'; // Import Highlight.js theme
import { getPostData, getSortedPostsData } from '@/lib/posts';
import styles from './post.module.css';

export async function generateStaticParams() {
    const posts = getSortedPostsData();
    return posts.map((post) => ({
        slug: post.id,
    }));
}

import Comments from '@/components/Comments/Comments';

export default function Post({ params }) {
    const postData = getPostData(params.slug);

    return (
        <div className={styles.container}>
            <article className={styles.article}>
                <header className={styles.header}>
                    <h1 className={styles.title}>{postData.title}</h1>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                        <p className={styles.date}>{postData.date}</p>
                        {postData.tags && postData.tags.map(tag => (
                            <span key={tag} style={{
                                background: 'var(--surface1)',
                                padding: '0.2rem 0.6rem',
                                borderRadius: '4px',
                                fontSize: '0.8rem',
                                color: 'var(--subtext1)'
                            }}>#{tag}</span>
                        ))}
                    </div>
                </header>
                <div className={styles.content}>
                    <ReactMarkdown
                        remarkPlugins={[remarkMath]}
                        rehypePlugins={[rehypeKatex, rehypeHighlight]}
                    >
                        {postData.content}
                    </ReactMarkdown>
                </div>

                <Comments />
            </article>
        </div>
    );
}
