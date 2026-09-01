import "./globals.css";
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <Script
          src="https://cdn.jsdelivr.net/npm/eruda"
          strategy="beforeInteractive"
        />
        <Script id="eruda-init" strategy="beforeInteractive">
          eruda.init();
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}

// import "./globals.css";

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="id">
//       <body>{children}</body>
//     </html>
//   );
// }