"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import Box from "@/components/Box";
import SideBarItem from "@/components/SideBarItem";
import Library from "@/components/Library";
import { Song } from "@/types";
import usePlayer from "@/hooks/usePlayer";
import { twMerge } from "tailwind-merge";

interface SideBarProps {
  children: React.ReactNode;
  songs: Song[];
  isMobileOpen?: boolean;
  onCloseMobile?: () => void;
}

const SideBar: React.FC<SideBarProps> = ({
  children,
  songs,
  isMobileOpen = false,
  onCloseMobile,
}) => {
  const player = usePlayer();

  const pathname = usePathname();
  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: "Home",
        active: pathname !== "/search",
        href: "/",
      },
      {
        icon: BiSearch,
        label: "Search",
        active: pathname === "/search",
        href: "/search",
      },
    ],
    [pathname]
  );
  return (
    <div
      className={twMerge(
        "flex h-full",
        player.activeId && "h-[calc(100%-80px)]"
      )}
    >
      {/* Mobile Sidebar Drawer */}
      <div
        className={twMerge(
          "fixed inset-0 z-40 bg-black flex-col gap-y-2 w-screen h-screen p-2 transition-transform duration-300 md:hidden",
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
        style={{ display: isMobileOpen ? "flex" : "none" }}
      >
        <button
          className="absolute top-4 right-4 p-2 rounded-full bg-white text-black hover:opacity-75 transition cursor-pointer"
          onClick={onCloseMobile}
          aria-label="Close sidebar"
        >
          <IoClose size={22} />
        </button>
        <Box>
          <div className="flex flex-col gap-y-4 px-5 py-4 mt-8">
            {routes.map((item) => (
              <SideBarItem key={item.label} {...item} />
            ))}
          </div>
        </Box>
        <Box className="h-full overflow-y-auto">
          <Library songs={songs} />
        </Box>
      </div>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2">
        <Box>
          <div className="flex flex-col gap-y-4 px-5 py-4">
            {routes.map((item) => (
              <SideBarItem key={item.label} {...item} />
            ))}
          </div>
        </Box>
        <Box className="h-full overflow-y-auto">
          <Library songs={songs} />
        </Box>
      </div>
      <main className="h-full flex-1 overflow-y-auto py-2">{children}</main>
    </div>
  );
};

export default SideBar;
