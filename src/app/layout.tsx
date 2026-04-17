import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'HTML to PDF API Service',
  description: 'A blazing fast, highly scalable API for converting HTML to pristine PDF files.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}
