import NavBar from "@/components/Navigation/NavBar"

export const metadata = {
    title: "It's a business day!",
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
                <header>
                    <NavBar />
                </header>
                {children}
            </body>
        </html>
    )
}