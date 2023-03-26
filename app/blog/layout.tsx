export const metadata = {
    title: 'Maghfoor\'s Blog',
    description: 'This page shows blogs written by Maghfoor.',
}

export default function BlogLayout({
    children }: {
        children: React.ReactNode
    }): JSX.Element {
    return (
        <body>{children}</body>
    )
}