import type { Metadata, Viewport } from 'next';
import './globals.css';
import { ThemeProvider } from '@/lib/theme-context';
import { LanguageProvider } from '@/lib/language-context';

export const metadata: Metadata = {
  metadataBase: new URL('https://matengineeringet.com'),
  title: 'MAT Engineering and Trading PLC | Construction Materials, Furniture & General Contracting',
  description:
    'MAT Engineering and Trading PLC provides dependable construction materials, quality home and office furniture, and professional general contracting services in Ethiopia. General Manager: Amare Tesfa. Phone: 0911 994 405.',
  keywords: [
    'MAT Engineering and Trading PLC',
    'Amare Tesfa',
    'Construction Material Supplier Ethiopia',
    'Addis Ababa Construction Materials',
    'Home Furniture Ethiopia',
    'Office Furniture Addis Ababa',
    'General Contractor Ethiopia',
    'Building Construction Ethiopia',
    'Rebar Steel Cement Ethiopia',
  ],
  authors: [{ name: 'MAT Engineering and Trading PLC' }],
  openGraph: {
    title: 'MAT Engineering and Trading PLC',
    description:
      'Building Better. Supplying Better. Furnishing Better. Quality construction materials, modern furniture, and reliable general contracting in Ethiopia.',
    siteName: 'MAT Engineering & Trading PLC',
    locale: 'en_US',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F8FAFC' },
    { media: '(prefers-color-scheme: dark)', color: '#0a192f' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover"
        />
      </head>
      <body className="font-sans antialiased overflow-x-hidden selection:bg-blue-600 selection:text-white">
        <LanguageProvider>
          <ThemeProvider>
            <div className="relative min-h-screen overflow-x-hidden flex flex-col">
              {children}
            </div>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
