import type { Product } from "@/data/products";
import { ProductCard } from "./ProductCard";

export function ProductSection({
  title,
  subtitle,
  products,
  columns = "wide"
}: {
  title: string;
  subtitle?: string;
  products: Product[];
  columns?: "wide" | "compact";
}) {
  return (
    <section className="rounded-md bg-white">
      <div className="mb-2 flex items-end justify-between border-b border-zinc-200 pb-2">
        <div className="flex items-end gap-2">
          <h2 className="text-2xl font-black text-zinc-950">{title}</h2>
          {subtitle ? <span className="text-xs font-black uppercase text-red-600">{subtitle}</span> : null}
        </div>
        <a href="#" className="text-xs font-bold text-zinc-500 hover:text-red-600">查看全部 &gt;</a>
      </div>
      <div className={`grid grid-cols-2 gap-2 ${columns === "wide" ? "md:grid-cols-3 xl:grid-cols-6" : "md:grid-cols-2"}`}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
