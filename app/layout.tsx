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
      <body>{children}</body>
    </html>
  )
}
