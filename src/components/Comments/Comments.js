'use client';

import Giscus from '@giscus/react';

export default function Comments() {
    return (
        <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--surface1)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--mauve)' }}>Comments</h3>
            <Giscus
                id="comments"
                repo="Senpai-sama06/profile-website"
                repoId="R_kgDOQn7Isg"
                category="Q&A"
                categoryId="DIC_kwDOQn7Iss4CzxBW"
                mapping="pathname"
                term="Welcome to my blog!"
                reactionsEnabled="1"
                emitMetadata="0"
                inputPosition="top"
                theme="catppuccin_mocha" // Or "preferred_color_scheme", "dark", "light"
                lang="en"
                loading="lazy"
            />
        </div>
    );
}
