export const metadata = {
  title: 'A Night That Changed Everything',
  description: 'A cinematic story of compassion and healing',
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
