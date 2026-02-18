import { Playfair_Display, Montserrat, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-accent",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-accent",
  display: "swap",
});

export const metadata = {
  title: "H-S Photography | Wedding, Pre-Wedding & Event Photography",
  description: "H-S Photography captures your timeless stories with a premium, cinematic touch. Specializing in Wedding, Pre-wedding, and Baby Shoots in Hyderabad.",
  metadataBase: new URL("https://hsphotography.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "H-S Photography | Professional Memories",
    description: "Capturing life's most beautiful moments with a modern, premium touch.",
    url: "https://hsphotography.vercel.app",
    siteName: "H-S Photography",
    images: [
      {
        url: "https://i.postimg.cc/B6ZDNJLr/IMG-9894-JPG.jpg",
        width: 1200,
        height: 630,
        alt: "H-S Photography Preview",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "H-S Photography | Professional Memories",
    description: "Capturing life's most beautiful moments with a modern, premium touch.",
    images: ["https://i.postimg.cc/B6ZDNJLr/IMG-9894-JPG.jpg"],
  },
  icons: {
    icon: "https://i.postimg.cc/B6ZDNJLr/IMG-9894-JPG.jpg",
    shortcut: "https://i.postimg.cc/B6ZDNJLr/IMG-9894-JPG.jpg",
    apple: "https://i.postimg.cc/B6ZDNJLr/IMG-9894-JPG.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable} ${cormorant.variable}`} suppressHydrationWarning>
      <body className="bg-onyx text-pearl antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
