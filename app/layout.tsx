import Footer from '@/components/Footer'
import '../styles/globals.scss'

export const metadata = {
  title: 'Maghfoor Ahmed',
  description: 'Maghfoor\'s Personal Website.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google" content="notranslate" />
        <meta httpEquiv="Content-Language" content="en" />
      </head>
      <body>{children}</body>
      <Footer />
    </html>
  )
}
