import { PostHogProvider } from "@/components/PostHogProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";
import Script from "next/script";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Space_Grotesk({ subsets: ["latin"], weight: ["500", "600", "700"] });

export const metadata: Metadata = {
  title: "Affan Raza - Full Stack Developer",
  description: "Portfolio of Affan Raza, a passionate full-stack developer specializing in modern web technologies, React, Next.js, and innovative digital solutions.",
  keywords: "Affan Raza, Full Stack Developer, React, Next.js, Web Development, Portfolio",
  authors: [{ name: "Affan Raza" }],
  openGraph: {
    title: "Affan Raza - Full Stack Developer",
    description: "Portfolio of Affan Raza, a passionate full-stack developer specializing in modern web technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      
      <body className={inter.className}>
          <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-S1BQDER84V"
        ></Script>

        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-S1BQDER84V');
          `}
        </Script>
        <PostHogProvider>
          <ThemeProvider>
            {/* <AnimatedBackground /> */}
            {children}
          </ThemeProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}
