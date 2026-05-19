const campaigns = [
  {
    title: "週末快閃",
    en: "WEEKEND FLASH SALE",
    body: "限時 48 小時",
    price: "低至 7 折起",
    theme: "from-orange-500 to-red-600"
  },
  {
    title: "會員日",
    en: "每月 5・15・25 日",
    body: "全館商品會員價",
    price: "再享 95 折",
    theme: "from-emerald-50 to-lime-100"
  },
  {
    title: "客製桿身匹配週",
    en: "GOLF CLUB FITTING WEEK",
    body: "免費桿身諮詢・彈道分析",
    price: "指定優惠 9 折",
    theme: "from-zinc-100 to-emerald-50"
  },
  {
    title: "品牌祭典",
    en: "BRAND FESTIVAL",
    body: "精選品牌限時優惠",
    price: "低至 7 折起",
    theme: "from-white to-amber-50"
  }
];

export function CampaignGrid() {
  return (
    <section className="mx-auto grid max-w-7xl gap-3 px-2 py-3 md:grid-cols-2 xl:grid-cols-4">
      {campaigns.map((campaign, index) => (
        <article
          key={campaign.title}
          className={`relative min-h-52 overflow-hidden rounded-md border border-zinc-200 bg-gradient-to-br ${campaign.theme} p-5 shadow-sm`}
        >
          <div className="relative z-10">
            <p className={`text-sm font-black ${index === 0 ? "text-yellow-100" : "text-emerald-900"}`}>{campaign.en}</p>
            <h2 className={`mt-1 text-3xl font-black ${index === 0 ? "text-white" : "text-zinc-950"}`}>{campaign.title}</h2>
            <p className={`mt-3 inline-block rounded px-2 py-1 text-sm font-black ${index === 0 ? "bg-yellow-300 text-red-700" : "bg-emerald-900 text-white"}`}>{campaign.body}</p>
            <p className={`mt-4 text-4xl font-black ${index === 0 ? "text-yellow-200" : "text-red-600"}`}>{campaign.price}</p>
            <button className="mt-4 rounded bg-zinc-950 px-4 py-2 text-sm font-black text-white">立即搶購</button>
          </div>
          <div className="absolute bottom-4 right-4 h-28 w-28 rounded-[45%_55%_48%_52%] bg-gradient-to-br from-zinc-200 via-zinc-800 to-zinc-950 opacity-80 shadow-xl" />
          <div className="absolute bottom-0 right-12 h-28 w-1 rotate-[24deg] bg-zinc-900" />
        </article>
      ))}
    </section>
  );
}
