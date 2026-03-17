import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Christian.dev | Software Developer',
  description: 'A modern personal portfolio built with Next.js and TailwindCSS',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
      </body>
    </html>
  );
}