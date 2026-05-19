const brands = ["TaylorMade", "Callaway", "PING", "Titleist", "XXIO", "Mizuno", "Srixon", "Cobra", "Odyssey"];
const trustItems = [
  ["日本直送", "正品保證"],
  ["滿HK$800", "免運費"],
  ["30天安心退貨", "退貨無憂"],
  ["專業客服支援", "9:00 - 18:00"],
  ["門市自取服務", "全港多個自取點"]
];

export function Footer() {
  return (
    <footer className="mt-5 bg-white">
      <div className="mx-auto max-w-7xl px-2">
        <section className="grid grid-cols-[110px_1fr] items-center rounded-md border border-zinc-200">
          <div className="border-r border-zinc-200 p-4 text-sm font-black text-zinc-950">人氣品牌</div>
          <div className="grid grid-cols-3 gap-0 md:grid-cols-9">
            {brands.map((brand) => (
              <div key={brand} className="border-r border-zinc-100 px-3 py-4 text-center text-lg font-black text-zinc-800 last:border-r-0">
                {brand}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-2 grid gap-2 rounded-md border border-zinc-200 p-2 md:grid-cols-[repeat(5,1fr)_180px]">
          {trustItems.map(([title, body]) => (
            <div key={title} className="flex items-center gap-3 border-zinc-100 p-3 md:border-r">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border-2 border-zinc-800 text-sm font-black">OK</span>
              <div>
                <p className="font-black text-zinc-950">{title}</p>
                <p className="text-xs font-bold text-zinc-500">{body}</p>
              </div>
            </div>
          ))}
          <div className="flex items-center gap-3 rounded bg-emerald-50 p-3">
            <span className="rounded bg-green-500 px-2 py-1 text-sm font-black text-white">LINE</span>
            <div>
              <p className="font-black text-zinc-950">LINE 客服</p>
              <p className="text-xs font-bold text-emerald-800">@jpgolfclub</p>
            </div>
          </div>
        </section>
      </div>

      <div className="sale-stripes mt-4 bg-red-700 text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-3 py-5">
          <div>
            <span className="rounded bg-yellow-300 px-3 py-1 text-sm font-black text-red-700">今日限定!</span>
            <span className="ml-3 text-4xl font-black">POINTS UP!</span>
          </div>
          <p className="text-2xl font-black">消費可享 <span className="text-5xl text-yellow-300">5%→10%</span> 回贈</p>
          <button className="rounded bg-white px-6 py-3 font-black text-red-700">立即選購</button>
        </div>
      </div>
    </footer>
  );
}
