import type { Metadata } from "next";
import { Inter, Inter_Tight, Pixelify_Sans, Micro_5 } from "next/font/google";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

const interTight = Micro_5({
    variable: "--font-inter-tight",
    subsets: ["latin"],
    weight: "400",
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} ${interTight.variable} font-body antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
