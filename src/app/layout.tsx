import './globals.css';
import { Inter } from 'next/font/google';

import { Header } from '@/components/site/Header';
import { Footer } from '@/components/site/Footer';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  display: 'swap',
});

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.className}>
      <body>
        <div className="min-h-dvh grid grid-rows-[auto_1fr_auto]">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
