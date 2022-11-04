export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>My APP</title>
      </head>
      <body>{children}</body>
    </html>
  )
}
