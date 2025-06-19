import Link from "next/link";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";
import { useSidebar } from "@/components/SidebarContext";
import { useRouter } from "next/navigation";

interface SideBarItemProps {
  icon: IconType;
  label: string;
  active?: boolean;
  href: string;
}

const SideBarItem: React.FC<SideBarItemProps> = ({
  icon: Icon,
  label,
  active,
  href,
}) => {
  const { closeSidebar } = useSidebar();
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    // Only close sidebar on mobile
    if (window.innerWidth < 768) {
      closeSidebar();
      router.push(href);
      e.preventDefault(); // Prevent default Link navigation
    }
    // Otherwise, let Link handle navigation
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={twMerge(
        `flex flex-row h-auto items-center w-full gap-x-4 text-md font-medium cursor-pointer hover:text-white transition text-neutral-400 py-1`,
        active && `text-white`
      )}
    >
      <Icon size={26} />
      <p className="truncate w-full">{label}</p>
    </Link>
  );
};

export default SideBarItem;
