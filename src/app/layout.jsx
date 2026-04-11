import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import ClientProtection from "@/components/layout/ClientProtection"; // path may vary

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata = {
  title: {
    default: "Shams Ali - MERN Stack Developer & DevOps Engineer",
    template: "%s | Shams Ali",
  },
  description:
    "Professional portfolio of Shams Ali, MERN Stack Developer and DevOps Engineer...",
  // ... rest of your metadata
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon and App Icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={`${robotoMono.variable} antialiased`}>
        <ClientProtection />
        {children}
      </body>
    </html>
  );
}
