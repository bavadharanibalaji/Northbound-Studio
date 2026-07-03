import { Fraunces, Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-grotesk",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "Northbound Studio — Design & Digital Craft",
  description:
    "Northbound Studio is a design agency building brand identity, web experiences, and marketing that move ambitious companies forward.",
  keywords: [
    "design agency",
    "web development",
    "branding studio",
    "UI/UX design",
    "digital marketing",
  ],
  openGraph: {
    title: "Northbound Studio — Design & Digital Craft",
    description:
      "Brand identity, interfaces, and campaigns for companies heading somewhere new.",
    type: "website",
  },
  metadataBase: new URL("https://northbound.studio"),
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${grotesk.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Prevents a light/dark flash on load by applying the saved theme before paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var theme = localStorage.getItem('nb-theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
