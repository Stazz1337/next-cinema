import { Inter } from 'next/font/google';
import './globals.css';
import Nav from './Nav/Nav';

const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children }) {
  return (
    <div className={inter.className}>
      <Nav />
      {children}
    </div>
  );
}
