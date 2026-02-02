import "./globals.css";



export const metadata = {
  title: "Isuru Herath | Portfolio",
  description: "Discover about Isuru Herath - Alias Rexhonz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
