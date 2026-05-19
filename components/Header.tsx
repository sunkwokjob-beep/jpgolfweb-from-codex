const categories = [
  ["全部分類", ""],
  ["DRIVER", "一號木桿"],
  ["FAIRWAY WOOD", "球道木桿"],
  ["HYBRID", "混合桿"],
  ["IRON", "鐵桿套裝"],
  ["WEDGE", "挖起桿"],
  ["PUTTER", "推桿"],
  ["SHAFT", "桿身"],
  ["GRIP", "握把"],
  ["BAG", "球袋"],
  ["BALL", "高爾夫球"],
  ["GOLF ACCESSORIES", "配件"],
  ["BRAND LIST", "品牌一覽"],
  ["SALE", "特價"]
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="sale-stripes bg-red-700 text-white">
        <div className="mx-auto flex max-w-7xl items-center gap-3 overflow-x-auto px-3 py-2 text-xs font-black md:text-sm">
          <span className="shrink-0 rounded bg-yellow-300 px-2 py-1 text-red-700">SUPER SALE 進行中!</span>
          <span className="shrink-0">低至 <b className="text-yellow-300">7折起</b></span>
          <span className="shrink-0 rounded bg-white px-3 py-1 text-zinc-950">滿HK$3000減HK$300</span>
          <span className="shrink-0">會員價折上折</span>
          <span className="shrink-0 text-yellow-300">再享POINTS UP!</span>
          <span className="ml-auto shrink-0 rounded bg-zinc-950 px-2 py-1">限時倒數 02 天 15 時 43 分 12 秒</span>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 px-3 py-4">
        <a href="#" className="mr-2 shrink-0">
          <div className="text-3xl font-black tracking-tight text-emerald-950 md:text-5xl">jpgolfclub</div>
          <div className="-mt-1 text-xs font-bold tracking-[0.2em] text-zinc-500">日本高爾夫用品專門店</div>
        </a>
        <form className="order-3 flex min-w-0 flex-1 basis-full md:order-none md:basis-auto">
          <input
            className="h-11 min-w-0 flex-1 rounded-l-md border-2 border-emerald-950 px-4 text-sm outline-none"
            placeholder="搜尋品牌、產品、型號..."
          />
          <button className="h-11 rounded-r-md bg-emerald-950 px-6 text-sm font-black text-white">搜尋</button>
        </form>
        <div className="ml-auto flex items-center gap-2 text-xs font-bold text-zinc-800 md:gap-4">
          <a className="rounded-md border border-zinc-200 px-2 py-2 hover:border-red-500" href="#">登入 / 註冊</a>
          <a className="rounded-md border border-zinc-200 px-2 py-2 hover:border-red-500" href="#">收藏清單</a>
          <a className="relative rounded-md border border-zinc-200 px-2 py-2 hover:border-red-500" href="#">
            購物車
            <span className="absolute -right-2 -top-2 rounded-full bg-red-600 px-1.5 text-[10px] text-white">10</span>
          </a>
        </div>
      </div>

      <nav className="border-y border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-7xl overflow-x-auto px-2">
          {categories.map(([en, zh], index) => (
            <a
              key={en}
              href="#"
              className={`min-w-max border-r border-zinc-200 px-3 py-2 text-center text-[11px] font-black leading-tight hover:bg-yellow-50 ${
                index === 0 ? "rounded-l bg-red-600 text-white hover:bg-red-700" : "text-zinc-900"
              }`}
            >
              <span className="block">{en}</span>
              {zh ? <span className="block text-[10px] font-bold opacity-70">{zh}</span> : null}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
