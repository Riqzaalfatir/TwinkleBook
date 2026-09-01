import "./globals.css";
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        {children}

        <Script id="eruda-debug" strategy="afterInteractive">
          {`
            (function () {
              try {
                const params = new URLSearchParams(window.location.search);

                // Eruda hanya aktif jika URL mengandung ?debug=1
                if (params.get("debug") !== "1") return;

                if (window.eruda) {
                  window.eruda.init();
                  return;
                }

                const script = document.createElement("script");
                script.src = "https://cdn.jsdelivr.net/npm/eruda";
                script.async = true;

                script.onload = function () {
                  if (window.eruda) {
                    window.eruda.init();
                  }
                };

                script.onerror = function () {
                  console.error("Gagal load Eruda");
                };

                document.body.appendChild(script);
              } catch (error) {
                console.error("Eruda init error:", error);
              }
            })();
          `}
        </Script>
      </body>
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
