import '../styles/global.scss';
import { Providers } from './globalRedux/provider';

export const metadata = {
  title: 'Do some business',
  description: 'Business app for some fun',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    
      <html lang="en">
          <body>
            <Providers>
              {children}
            </Providers>
          </body>
      </html>
  )
}