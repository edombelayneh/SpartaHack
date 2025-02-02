import "./globals.css";

export const metadata = {
  title: "My Cows!",
  description: "Road Trip Unwrapped",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
