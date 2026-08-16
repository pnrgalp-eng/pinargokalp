import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pınar Gökalp Vize Danışmanlığı",
  description: "Schengen, İngiltere, ulusal vize ve ret sonrası başvurular için profesyonel, şeffaf ve kişiye özel vize danışmanlığı.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
