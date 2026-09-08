import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'H2O Breath & Bodywork',
  description: 'Grounded, intuitive cupping, remedial massage and breathwork.',
  icons: { icon: '/h2o-logo.png' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
