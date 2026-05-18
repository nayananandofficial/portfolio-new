import type { Metadata } from "next";
import { Doto, Outfit } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const doto = Doto({
  variable: "--font-doto",
  subsets: ["latin"],
});

const themeScript = `
  (() => {
    try {
      const storedTheme = localStorage.getItem('portfolio-theme');
      const theme = storedTheme === 'dark' ? 'dark' : 'light';
      document.documentElement.dataset.theme = theme;
      document.documentElement.style.colorScheme = theme;
    } catch (error) {
      document.documentElement.dataset.theme = 'light';
      document.documentElement.style.colorScheme = 'light';
    }
  })();
`;

export const metadata: Metadata = {
  metadataBase: new URL("https://nay4n.vercel.app/"),
  title: {
    default: "Nayan B Anand | Software Developer",
    template: "%s | Nayan B Anand",
  },
  description:
    "Modern software developer portfolio showcasing product-driven web apps, UI/UX design, and clean frontend-to-backend solutions.",
  keywords: [
    "Nayan B Anand",
    "software developer",
    "full-stack developer",
    "portfolio",
    "Next.js",
    "React",
    "web developer",
    "frontend",
    "backend",
    "product design",
    "software engineering",
  ],
  openGraph: {
    title: "Nayan B Anand | Software Developer",
    description:
      "Modern software developer portfolio showcasing product-driven web apps, UI/UX design, and clean frontend-to-backend solutions.",
    url: "https://nay4n.vercel.app/",
    siteName: "Nayan B Anand Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://nay4n.vercel.app/profile(2).png",
        width: 1200,
        height: 630,
        alt: "Nayan B Anand | Software Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nayan B Anand | Software Developer",
    description:
      "Modern software developer portfolio showcasing product-driven web apps, UI/UX design, and clean frontend-to-backend solutions.",
    images: ["https://nay4n.vercel.app/profile(2).png"],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} ${doto.variable} antialiased`}>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
