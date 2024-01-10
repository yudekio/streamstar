import "./globals.css";
import { Saira } from "next/font/google";
import Head from "next/head";

const saira = Saira({ subsets: ["latin"] });

export const metadata = {
  title: "StreamStar | Platfrom",
  description: "StreamStar - science platform.",
  icon: "/icon.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/icon.png"></link>
      </Head>
      <body className={saira.className}>{children}</body>
    </html>
  );
}
