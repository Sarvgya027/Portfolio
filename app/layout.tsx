import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const areYouSerious =  Be_Vietnam_Pro({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("http://localhost:3000/"),  

	title: "Sarvgya Verma",
	description:
		"Based in India, I am passionate about building FullStack web applications",
	openGraph: {
		title: "sarvgya Verma",
		description:
			"Based in India, I am passionate about building FullStack web applications",
		url: "http://localhost:3000/",
		siteName: "Daily Vote",
		images: "/image.png",
		type: "website",
	},
	keywords: ["daily web coding", "chensokheng", "dailywebcoding"],
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body className={areYouSerious.className}>
        <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider></body>
    </html>
  );
}
