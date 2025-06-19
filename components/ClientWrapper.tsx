"use client";
import React from "react";
import SideBar from "@/components/SideBar";
import { SidebarProvider, useSidebar } from "@/components/SidebarContext";
import { Song } from "@/types";

function ClientWrapperInner({
  userSongs,
  children,
}: {
  userSongs: Song[];
  children: React.ReactNode;
}) {
  const { isOpen, closeSidebar } = useSidebar();
  return (
    <SideBar
      songs={userSongs}
      isMobileOpen={isOpen}
      onCloseMobile={closeSidebar}
    >
      {children}
    </SideBar>
  );
}

export default function ClientWrapper({
  userSongs,
  children,
}: {
  userSongs: Song[];
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <ClientWrapperInner userSongs={userSongs}>{children}</ClientWrapperInner>
    </SidebarProvider>
  );
}
