import { CampaignGrid } from "@/components/CampaignGrid";
import { CouponStrip } from "@/components/CouponStrip";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroBanner } from "@/components/HeroBanner";
import { ProductSection } from "@/components/ProductSection";
import { RankingList } from "@/components/RankingList";
import { ServiceBanners } from "@/components/ServiceBanners";
import { newArrivals, products } from "@/data/products";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-950">
      <Header />
      <HeroBanner />
      <CouponStrip />
      <CampaignGrid />

      <div className="mx-auto max-w-7xl px-2 py-2">
        <ProductSection title="限時優惠" products={products.slice(0, 6)} />
      </div>

      <div className="mx-auto grid max-w-7xl gap-3 px-2 py-2 lg:grid-cols-[1fr_1fr_320px]">
        <RankingList products={products} />
        <ProductSection title="新品上市" subtitle="New Arrivals" products={newArrivals} columns="compact" />
        <ServiceBanners />
      </div>

      <div className="mx-auto max-w-7xl px-2 py-2">
        <ProductSection title="熱銷排行榜" subtitle="Ranking Picks" products={[...products.slice(6), ...products.slice(0, 2)]} />
      </div>

      <Footer />
    </main>
  );
}
