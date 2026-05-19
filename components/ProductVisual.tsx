import type { Product } from "@/data/products";

const accentClass: Record<Product["accent"], string> = {
  red: "from-red-900 via-zinc-900 to-red-500",
  green: "from-emerald-950 via-zinc-900 to-emerald-500",
  blue: "from-blue-950 via-zinc-900 to-sky-500",
  gold: "from-amber-800 via-zinc-900 to-yellow-400",
  black: "from-zinc-950 via-zinc-800 to-zinc-500"
};

export function ProductVisual({
  accent,
  compact = false
}: {
  accent: Product["accent"];
  compact?: boolean;
}) {
  return (
    <div
      className={`relative mx-auto ${
        compact ? "h-16 w-16" : "h-36 w-full"
      } overflow-hidden rounded-md bg-gradient-to-br from-zinc-50 to-zinc-200`}
      aria-hidden="true"
    >
      <div
        className={`absolute ${
          compact ? "left-3 top-3 h-9 w-10" : "left-1/2 top-6 h-20 w-24 -translate-x-1/2"
        } rounded-[42%_58%_48%_52%] bg-gradient-to-br ${
          accentClass[accent]
        } shadow-xl ring-2 ring-white`}
      />
      <div
        className={`absolute ${
          compact ? "left-9 top-8 h-12" : "left-[58%] top-[82px] h-20"
        } w-1 rotate-[24deg] rounded-full bg-gradient-to-b from-zinc-400 to-zinc-950`}
      />
      <div
        className={`absolute ${
          compact ? "left-5 top-5 h-4 w-5" : "left-[46%] top-12 h-8 w-10"
        } rounded-full border border-white/70 bg-white/20`}
      />
      <div className="absolute inset-x-3 bottom-3 h-2 rounded-full bg-white/70" />
    </div>
  );
}
