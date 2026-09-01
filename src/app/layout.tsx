import "./globals.css";
import ErudaDebug from "../components/ErudaDebug";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        <ErudaDebug />

        {children}
      </body>
    </html>
  );
}