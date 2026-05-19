import type { Product } from "@/data/products";
import { ProductVisual } from "./ProductVisual";

const currency = new Intl.NumberFormat("en-HK");

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group relative flex h-full flex-col rounded-md border border-zinc-200 bg-white p-2 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className={`absolute left-2 top-2 z-10 rounded-sm px-2 py-1 text-xs font-black text-white ${product.discount === "NEW" ? "bg-emerald-700" : "bg-red-600"}`}>
        {product.discount}
      </div>
      <ProductVisual accent={product.accent} />
      <div className="mt-2 flex flex-1 flex-col">
        <p className="text-[11px] font-bold text-zinc-500">{product.brand}</p>
        <h3 className="line-clamp-2 min-h-9 text-sm font-black leading-tight text-zinc-950">
          {product.name}
        </h3>
        <p className="mt-1 min-h-8 text-[11px] leading-snug text-zinc-500">{product.spec}</p>
        <div className="mt-2 flex items-end gap-2">
          <span className="text-base font-black text-red-600">HK${currency.format(product.price)}</span>
          <span className="text-xs text-zinc-400 line-through">HK${currency.format(product.originalPrice)}</span>
        </div>
        <div className="mt-2 flex flex-wrap gap-1">
          {product.tags.map((tag) => (
            <span key={tag} className="rounded-sm bg-yellow-100 px-1.5 py-0.5 text-[10px] font-bold text-amber-900">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <button className="absolute bottom-2 right-2 grid h-8 w-8 place-items-center rounded border border-zinc-300 bg-white text-sm font-black text-zinc-700 transition hover:border-red-600 hover:bg-red-600 hover:text-white" aria-label={`加入購物車 ${product.name}`}>
        +
      </button>
    </article>
  );
}
