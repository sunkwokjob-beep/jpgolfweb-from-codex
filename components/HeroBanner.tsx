export function HeroBanner() {
  return (
    <section className="mx-auto grid max-w-7xl gap-2 px-2 py-3 lg:grid-cols-[180px_1fr_250px]">
      <aside className="sale-stripes hidden rounded-md border-2 border-red-900 bg-red-700 p-5 text-white shadow lg:block">
        <p className="text-4xl font-black leading-none">SUPER<br />SALE</p>
        <p className="mt-5 text-lg font-black">低至</p>
        <p className="text-7xl font-black text-yellow-300">7<span className="text-2xl">折起</span></p>
        <p className="mt-3 inline-block rounded-full bg-yellow-300 px-3 py-2 text-center text-sm font-black text-red-800">2天<br />限定</p>
        <button className="mt-4 w-full rounded bg-zinc-950 py-2 text-sm font-black text-white">立即搶購</button>
      </aside>

      <div className="relative min-h-[330px] overflow-hidden rounded-md border border-zinc-300 bg-[radial-gradient(circle_at_70%_40%,#4b5563_0,#111827_36%,#020617_68%)] p-5 text-white shadow">
        <div className="absolute right-4 top-5 h-64 w-72 rounded-[45%_55%_48%_52%] bg-gradient-to-br from-zinc-200 via-zinc-700 to-zinc-950 shadow-2xl ring-4 ring-white/20 md:right-10 md:h-80 md:w-96" />
        <div className="absolute right-24 top-44 h-44 w-2 rotate-[25deg] rounded-full bg-gradient-to-b from-zinc-300 to-zinc-950 md:right-40 md:top-56" />
        <div className="absolute right-20 top-24 h-20 w-28 rounded-full border border-white/40 bg-white/10 md:right-36 md:top-32" />
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,.18)_0,transparent_38%,rgba(37,99,235,.18)_70%,transparent_100%)]" />
        <div className="relative z-10 max-w-xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded bg-white/10 px-3 py-1 text-sm font-bold">
            TaylorMade <span className="rounded bg-red-600 px-2 py-0.5 text-xs">SUPER SALE</span>
          </div>
          <h1 className="text-5xl font-black leading-none tracking-tight md:text-7xl">Qi10 Driver</h1>
          <p className="mt-3 text-2xl font-black">極致距離 × 更穩定 × 更易打</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {["碳纖維桿面", "慣性更高", "容錯性 UP", "POINTS UP", "會員價"].map((tag) => (
              <span key={tag} className="rounded bg-yellow-300 px-3 py-1 text-sm font-black text-zinc-950">{tag}</span>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap items-end gap-4">
            <span className="text-5xl font-black text-red-500">HK$4,680</span>
            <span className="pb-2 text-sm font-bold text-zinc-300">建議零售價 <span className="line-through">HK$6,280</span></span>
            <button className="rounded bg-red-600 px-8 py-3 text-base font-black text-white shadow hover:bg-red-500">立即選購</button>
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {[1, 2, 3, 4, 5].map((dot) => (
            <span key={dot} className={`h-2.5 w-2.5 rounded-full ${dot === 1 ? "bg-white" : "bg-white/40"}`} />
          ))}
        </div>
      </div>

      <aside className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
        <div className="sale-stripes rounded-md border-2 border-red-800 bg-red-700 p-4 text-white shadow">
          <p className="text-2xl font-black">滿HK$3000<br /><span className="text-5xl text-yellow-200">減 HK$300</span></p>
          <p className="mt-3 rounded bg-yellow-100 px-3 py-2 text-sm font-black text-zinc-950">輸入優惠碼：JPG300</p>
          <button className="mt-3 rounded bg-zinc-950 px-4 py-2 text-sm font-black">立即領券</button>
        </div>
        <div className="rounded-md border-2 border-amber-300 bg-white p-4 shadow">
          <p className="text-2xl font-black text-zinc-950">會員價　折上折</p>
          <p className="mt-2 text-lg font-black text-red-600">再享 POINTS UP!</p>
          <div className="mt-3 flex justify-end gap-1">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-yellow-300 font-black text-red-700 shadow">P</span>
            <span className="grid h-7 w-7 place-items-center rounded-full bg-yellow-200 text-xs font-black text-red-700 shadow">P</span>
          </div>
        </div>
      </aside>
    </section>
  );
}
