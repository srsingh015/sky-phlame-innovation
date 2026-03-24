import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/footer";
import { HashScroll } from "@/components/hash-scroll";
import { Header } from "@/components/header";
import { MobileBottomBar } from "@/components/mobile-bottom-bar";
import { homeMetadata } from "@/lib/seo";
import { localBusinessSchema } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = homeMetadata;

export const viewport: Viewport = {
  themeColor: "#0f213b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full" suppressHydrationWarning>
        <a href="#content" className="skip-link">
          Skip to content
        </a>
        <HashScroll />
        <div className="relative flex min-h-screen flex-col overflow-x-hidden">
          <Header />
          <div className="flex flex-1 flex-col">
            <main id="content" className="site-bg flex-1 overflow-x-clip">
              {children}
            </main>
            <Footer />
          </div>
          <MobileBottomBar />
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </body>
    </html>
  );
}
