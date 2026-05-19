import type { Product } from "@/data/products";
import { ProductVisual } from "./ProductVisual";

const currency = new Intl.NumberFormat("en-HK");

export function RankingList({ products }: { products: Product[] }) {
  return (
    <section className="rounded-md border border-zinc-200 bg-white p-3 shadow-sm">
      <div className="mb-3 flex items-center justify-between border-b border-zinc-200 pb-2">
        <h2 className="text-2xl font-black text-zinc-950">熱銷排行榜</h2>
        <a href="#" className="text-xs font-bold text-zinc-500">查看全部 &gt;</a>
      </div>
      <div className="space-y-2">
        {products.slice(0, 5).map((product, index) => (
          <article key={product.id} className="grid grid-cols-[24px_64px_1fr_auto] items-center gap-2 border-b border-zinc-100 pb-2 last:border-b-0">
            <span className={`grid h-6 w-6 place-items-center rounded-sm text-xs font-black text-white ${index < 3 ? "bg-amber-500" : "bg-zinc-400"}`}>
              {index + 1}
            </span>
            <ProductVisual accent={product.accent} compact />
            <div className="min-w-0">
              <h3 className="truncate text-xs font-black text-zinc-950">{product.brand}</h3>
              <p className="truncate text-xs text-zinc-700">{product.name}</p>
            </div>
            <p className="text-xs font-black text-zinc-950">HK${currency.format(product.price)}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
