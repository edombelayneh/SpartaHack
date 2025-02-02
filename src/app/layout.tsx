
import { ConvexClientProvider } from "./convex-client-provider";
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
      <body>
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </body>
    </html>
  );
}
