import './globals.css';
import 'katex/dist/katex.min.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import dynamic from 'next/dynamic';
import { Inter } from 'next/font/google';

const InterFont = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
});

const BottomGame = dynamic(() => import('@/components/BottomGame/BottomGame'), {
    ssr: false,
});

export const metadata = {
    title: 'Profile & Blog',
    description: 'Personal profile and technical blog',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={InterFont.variable}>
            <body>
                <Navbar />
                <main style={{ minHeight: 'calc(100vh - 200px)' }}>{children}</main>
                <BottomGame />
                <Footer />
            </body>
        </html>
    );
}
