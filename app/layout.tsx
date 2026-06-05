import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'
import Cta from "./_components/cta/Cta";
import NavBar from "./_components/navbar/NavBar";
import Footer from "./_components/footer/Footer";
import { ThemeProvider } from "./lib/ThemeContext";

const ibaraItalic = localFont({
  src: '../fonts/ibarra_real_nova/IbarraRealNova-Italic-Variable.ttf',
  variable: '--font-ibarra-italic',
  display: 'swap',
})

const ibaraRegular = localFont({
  src: '../fonts/ibarra_real_nova/IbarraRealNova-Variable.ttf',
  variable: '--font-ibarra-regular',
  display: 'swap',
})

const fustat = localFont({
  src: [
    { path: '../fonts/fustat/Fustat-ExtraLight.ttf', weight: '200' },
    { path: '../fonts/fustat/Fustat-Light.ttf', weight: '300' },
    { path: '../fonts/fustat/Fustat-Regular.ttf', weight: '400' },
    { path: '../fonts/fustat/Fustat-Medium.ttf',  weight: '500' },
    { path: '../fonts/fustat/Fustat-SemiBold.ttf',  weight: '600' },
    { path: '../fonts/fustat/Fustat-Bold.ttf',    weight: '700' },
    { path: '../fonts/fustat/Fustat-ExtraBold.ttf',    weight: '800' },
  ],
  variable: '--font-fustat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Athena Ventura",
  description: "Money problems? Organizing problems? OCD about managing your things? We can build a software for that!! Do reach out.",
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/favicon/white_on_black_favicon.png',
        href: '/favicon/white_on_black_favicon.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/favicon/black_on_white_favicon.png',
        href: '/favicon/black_on_white_favicon.png',
      },
    ],
  },
  openGraph: {
    title: "Athena Ventura",
    description: "Two friends. One studio. We design and build digital products we're genuinely proud of, from brand identity and UI/UX to full-stack web and mobile apps. Professional work, human approach.",
    url: "https://athenaventura.com",
    siteName: "Athena Ventura",
    images: [
      {
        url: "/metadata_image.png",
        width: 1200,
        height: 630,
        alt: "Athena Ventura - UI/UX Design Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Athena Ventura",
    description: "Two friends. One studio. We design and build digital products we're genuinely proud of, from brand identity and UI/UX to full-stack web and mobile apps. Professional work, human approach.",
    images: ["/metadata_image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ibaraRegular.variable} ${ibaraItalic.variable} ${fustat.variable} h-full antialiased`}
    >
      <body className="min-h-full  flex flex-col">
        <ThemeProvider>
          <main>
          {children}
          <div className="fixed h-screen w-full"
          ></div>
          <Footer />
          </main>
          <Cta />
          <NavBar />
        </ThemeProvider>
      </body>
    </html>
  );
}
