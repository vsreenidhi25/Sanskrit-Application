import { ClerkLoading, ClerkLoaded, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { SidebarItem } from "./sidebar-item";

type SidebarProps = {
  className?: string;
};

export const Sidebar = ({ className }: SidebarProps) => {
  return (
    <div
      className={cn(
        "flex bg-blue-50 h-full lg:w-[370px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
        className
      )}
    >
      <Link href="/learn">
        <div className="flex items-center gap-x-3 pb-7 pl-4 pt-8">
          <Image src="/cute.svg" alt="Mascot" height={40} width={40} />

          <h1 className="text-2xl font-extrabold tracking-wide text-green-600">
          Samskrutapadakṣepaḥ
          </h1>
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-y-2">
        <SidebarItem label="adhigaccha (learn)" href="/learn" iconSrc="/learn.svg" />
        <SidebarItem
          label="nētṛtvapaṭṭikā (leader board)"
          href="/leaderboard"
          iconSrc="/leaderboard.svg"
        />
        
  <SidebarItem label="Anveṣaṇam (quests)" href="/quests" iconSrc="/quests.svg" />
  <SidebarItem label="Āpaṇaḥ.(shop)" href="/shop" iconSrc="/shop.svg" />
  <SidebarItem label="Chat Room" href="/Room" iconSrc="/room.svg" />
  <SidebarItem label="Slokas" href="/Slokas" iconSrc="/Sloka.svg" />
  <SidebarItem label="Videos" href="/Videos" iconSrc="/videos.svg" />
  <SidebarItem label="Pustakani(books)" href="/books" iconSrc="/book.svg" />
  <SidebarItem label="108 Counter" href="/japa" iconSrc="/japa.svg" />
  
  
</div>

      <div className="p-4">
        <ClerkLoading>
          <Loader className="h-5 w-5 animate-spin text-muted-foreground" />
        </ClerkLoading>

        <ClerkLoaded>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: { userButtonPopoverCard: { pointerEvents: "initial" } },
            }}
          />
        </ClerkLoaded>
      </div>
    </div>
  );
};
