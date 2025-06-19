"use client";
import { useRouter } from "next/navigation";
import { HiMenu } from "react-icons/hi";
import { twMerge } from "tailwind-merge";
import Button from "@/components/Button";
import useAuthModal from "@/hooks/useAuthModal";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useUser } from "@/hooks/useUser";
import toast from "react-hot-toast";
import { useSidebar } from "@/components/SidebarContext";

interface HeaderProps {
  children?: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter();
  const authModal = useAuthModal();
  const supabaseClient = useSupabaseClient();
  const { user } = useUser();
  const { openSidebar } = useSidebar();

  const handleLogOut = async () => {
    const { error } = await supabaseClient.auth.signOut();
    router.refresh();
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Logged out successfully");
    }
  };

  return (
    <div
      className={twMerge(
        `h-fit bg-gradient-to-b from-emerald-800 p-6`,
        className
      )}
    >
      <div className="w-full mb-4 flex items-center justify-between">
        <div className="flex md:hidden gap-x-2 items-center ">
          <button
            className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition cursor-pointer"
            onClick={openSidebar}
            aria-label="Open sidebar"
          >
            <HiMenu size={22} className="text-black" />
          </button>
        </div>
        <div className="flex items-center justify-end gap-x-4 w-auto ml-auto">
          {user ? (
            <Button onClick={handleLogOut} className="bg-white px-6 py-2 ">
              Logout
            </Button>
          ) : (
            <>
              <div>
                <Button
                  onClick={authModal.onOpen}
                  className="bg-transparent text-neutral-300 font-medium cursor-pointer"
                >
                  Sign up
                </Button>
              </div>{" "}
              <div>
                <Button
                  onClick={authModal.onOpen}
                  className="bg-white px-6 py-2 cursor-pointer"
                >
                  Log in
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
