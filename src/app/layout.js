import './globals.css';
import 'katex/dist/katex.min.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import BottomGame from '@/components/BottomGame/BottomGame';

export const metadata = {
    title: 'Profile & Blog',
    description: 'Personal profile and technical blog',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                <main style={{ minHeight: 'calc(100vh - 200px)' }}>{children}</main>
                <BottomGame />
                <Footer />
            </body>
        </html>
    );
}
