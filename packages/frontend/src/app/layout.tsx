import type { Metadata } from "next";
import "@/styles/app.scss";
import Head from "next/head";

export const metadata: Metadata = {
  title: "ANYONEGIRL",
  description:
    "ANYONEBOOKS is an independent publishing imprint and creator of anyonegirl journal. Founded by Yasmine Ganley and Natasha Mead, we work with creative individuals and organisations to design and produce contemporary print publications for their work.",
  openGraph: {
    title: "ANYONEGIRL",
    description:
      "ANYONEBOOKS is an independent publishing imprint and creator of anyonegirl journal. Founded by Yasmine Ganley and Natasha Mead, we work with creative individuals and organisations to design and produce contemporary print publications for their work.",
    url: "https://anyonegirl.com",
    siteName: "ANYONEGIRL",
    images: [
      {
        url: "/Opengraph.jpg",
        width: 1200,
        height: 630,
        alt: "ANYONEGIRL Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="anyonebooks" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <body>{children}</body>
    </html>
  );
}
