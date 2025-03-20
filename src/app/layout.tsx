import type { Metadata } from "next";
import "./variables.scss";
import "./globals.scss";
import "@uploadthing/react/styles.css";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "../app/api/uploadthing/core";

export const metadata: Metadata = {
  title: "Sauté",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />

        {children}
      </body>
    </html>
  );
}
