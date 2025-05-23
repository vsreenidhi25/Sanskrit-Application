import { InfinityIcon } from "lucide-react";
import Image from "next/image";

import { cn } from "@/lib/utils";

type ResultCardProps = {
  value: number;
  variant: "points(sūcikā)" | "hearts(hṛdaya)";
};

export const ResultCard = ({ value, variant }: ResultCardProps) => {
  const imageSrc = variant === "points(sūcikā)" ? "/points.svg" : "/heart.svg";

  return (
    <div
      className={cn(
        "w-full rounded-2xl border-2",
        variant === "points(sūcikā)" && "border-orange-400 bg-orange-400",
        variant === "hearts(hṛdaya)" && "border-rose-500 bg-rose-500"
      )}
    >
      <div
        className={cn(
          "rounded-t-xl p-1.5 text-center text-xs font-bold uppercase text-white",
          variant === "points(sūcikā)" && "bg-orange-400",
          variant === "hearts(hṛdaya)" && "bg-rose-500"
        )}
      >
        {variant === "hearts(hṛdaya)" ? "Hears Left(Avaśiṣṭāni hṛdayāni)" : "Total(pūrṇa) XP"}
      </div>

      <div
        className={cn(
          "flex items-center justify-center rounded-2xl bg-white p-6 text-lg font-bold",
          variant === "points(sūcikā)" && "text-orange-400",
          variant === "hearts(hṛdaya)" && "text-rose-500"
        )}
      >
        <Image
          src={imageSrc}
          alt={variant}
          height={30}
          width={30}
          className="mr-1.5"
        />
        {value === Infinity ? (
          <InfinityIcon className="h-6 w-6 stroke-[3]" />
        ) : (
          value
        )}
      </div>
    </div>
  );
};
