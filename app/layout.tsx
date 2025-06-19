import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import ToasterProvider from "@/providers/ToasterProvider";
import getSongsByUserId from "@/actions/getSongsByUserId";
import Player from "@/components/Player";
import ClientWrapper from "@/components/ClientWrapper";

const figTree = Figtree({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Soundora",
  description: "Listen to music with Soundora",
};

export const revalidate = 0;
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const userSongs = await getSongsByUserId();
  return (
    <html lang="en">
      <body className={`${figTree.className} antialiased`}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
            <ClientWrapper userSongs={userSongs}>{children}</ClientWrapper>
            <Player />
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
