import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/navbar";
import NextTopLoader from "nextjs-toploader";
import Footer from "@/components/footer";

const fontPoppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fahrialfarizki.vercel.app"),
  title: {
    default: "Fahri Alfa Rizki | Web Developer Indonesia",
    template: "%s | Fahri Alfa Rizki",
  },
  icons: {
    icon: "/profile.jpeg",
  },
  description:
    "Portfolio resmi Fahri Alfa Rizki, Web Developer Indonesia yang menggunakan Next.js untuk membangun website modern dan scalable.",
  keywords: [
    "Fahri Alfa Rizki",
    "Web Developer Indonesia",
    "Next.js Developer",
    "Fahri Sarung",
    "NestJS Developer",
  ],
  openGraph: {
    title: "Fahri Alfa Rizki | Web Developer Indonesia",
    description:
      "Portfolio resmi Fahri Alfa Rizki, spesialis Next.js dan NestJS.",
    url: "https://fahrialfarizki.vercel.app/",
    siteName: "Fahri Portfolio",
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontPoppins.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navbar />
          <NextTopLoader color="#e78a53" />
          <main className="px-[3%]">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
