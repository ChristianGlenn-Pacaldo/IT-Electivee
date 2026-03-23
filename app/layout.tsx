import './globals.css';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/providers/theme-provider';

export const metadata: Metadata = {
  title: 'Christian.dev | Software Developer',
  description: 'A modern personal portfolio built with Next.js and TailwindCSS',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#03040C] text-slate-900 dark:text-white antialiased font-sans transition-colors duration-500">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}