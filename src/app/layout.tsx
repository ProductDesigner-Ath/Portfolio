import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atharv Kelwadkar — Portfolio",
  description: "Product Designer, No-Code developer & a designer who loves to solve real problems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preload" as="image" href="https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a32547a0be6c9f95b9414d7_1.png" crossOrigin="anonymous"/>
        <link rel="preload" as="image" href="https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a32548ddc4295c73da78df3_1.png" crossOrigin="anonymous"/>
        <link rel="preload" as="image" href="https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a3254b5f8f9cd0502c14281_1.png" crossOrigin="anonymous"/>
        <link rel="preload" as="image" href="https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a3254a9e557403980dddcd5_1.png" crossOrigin="anonymous"/>
        <link rel="preload" as="image" href="https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a32544544be990d9b6941e4_1.png" crossOrigin="anonymous"/>
        <link rel="preload" as="image" href="https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a325482555321906a0b334f_1.png" crossOrigin="anonymous"/>
        <link rel="preload" as="image" href="https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a32549e3da864ec36d4f2c3_1.png" crossOrigin="anonymous"/>
        <link rel="preload" as="image" href="https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a3254a1ec85e3dca2b332ec_1.png" crossOrigin="anonymous"/>
        <link rel="preload" as="image" href="https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a32549533e2ba8a35e5b07e_1.png" crossOrigin="anonymous"/>
        <link rel="preload" as="image" href="https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a325478d5d27325522da347_1.png" crossOrigin="anonymous"/>
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>{children}</body>
    </html>
  );
}
