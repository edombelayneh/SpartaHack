import { ConvexClientProvider } from "./convex-client-provider";
import { GameCodeProvider } from "./game-context-provider";
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Barriecito&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ConvexClientProvider>
          <GameCodeProvider>{children}</GameCodeProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
