import '../styles/global.scss';

export const metadata = {
  title: 'Do some business',
  description: 'Business app for some fun',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}