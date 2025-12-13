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

export default function Post({ params }) {
    const postData = getPostData(params.slug);

    return (
        <div className={styles.container}>
            <article className={styles.article}>
                <header className={styles.header}>
                    <h1 className={styles.title}>{postData.title}</h1>
                    <p className={styles.date}>{postData.date}</p>
                </header>
                <div className={styles.content}>
                    <ReactMarkdown
                        remarkPlugins={[remarkMath]}
                        rehypePlugins={[rehypeKatex, rehypeHighlight]}
                    >
                        {postData.content}
                    </ReactMarkdown>
                </div>
            </article>
        </div>
    );
}
