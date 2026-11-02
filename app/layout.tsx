import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ismail Abelouas — Web & App Developer",
  description: "Freelance web and app developer building websites, web apps, and mobile applications.",
  openGraph: {
    title: "Ismail Abelouas — Web & App Developer",
    description: "Websites, web apps, Android and iOS applications.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body>{children}</body></html>;
}
