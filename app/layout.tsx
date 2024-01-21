import { GeistSans } from 'geist/font/sans';
import './globals.css';
import { ThemeProvider } from '@/components/ui/theme-provider';

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Supabase Next.js shadcn/ui Boilerplate',
  description: 'Supabase Next.js shadcn/ui Boilerplate',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={GeistSans.className} suppressHydrationWarning>
      <body className='bg-background text-foreground'>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <main className='min-h-screen flex flex-col items-center'>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
