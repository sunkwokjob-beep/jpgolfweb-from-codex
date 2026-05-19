const services = [
  ["Trade-in Fair 以舊換新", "最高補貼 HK$2,000", "from-orange-500 to-red-600"],
  ["免息分期服務", "3/6/12 期 輕鬆入手", "from-lime-100 to-yellow-100"],
  ["全港免費送貨", "滿HK$800 免運費", "from-sky-600 to-blue-800"],
  ["正品保證・安心購物", "日本直送・原裝行貨", "from-amber-50 to-white"]
];

export function ServiceBanners() {
  return (
    <aside className="rounded-md border border-zinc-200 bg-white p-3 shadow-sm">
      <div className="mb-3 flex items-center justify-between border-b border-zinc-200 pb-2">
        <h2 className="text-xl font-black text-zinc-950">熱門活動 & 服務</h2>
        <a href="#" className="text-xs font-bold text-zinc-500">查看全部 &gt;</a>
      </div>
      <div className="grid gap-2">
        {services.map(([title, body, theme], index) => (
          <article key={title} className={`relative overflow-hidden rounded-md bg-gradient-to-r ${theme} p-4 ${index === 2 ? "text-white" : "text-zinc-950"}`}>
            <h3 className="text-lg font-black">{title}</h3>
            <p className={`mt-1 text-2xl font-black ${index === 0 ? "text-yellow-200" : index === 2 ? "text-white" : "text-red-600"}`}>{body}</p>
            <button className="mt-3 rounded bg-zinc-950 px-4 py-1.5 text-xs font-black text-white">了解更多</button>
            <span className="absolute -right-3 -top-3 grid h-16 w-16 place-items-center rounded-full bg-yellow-300 text-2xl font-black text-red-700 shadow">P</span>
          </article>
        ))}
      </div>
    </aside>
  );
}
