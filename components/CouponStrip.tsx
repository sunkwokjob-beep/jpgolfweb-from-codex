const coupons = [
  ["滿 HK$1000", "減 HK$80", "JPG80"],
  ["滿 HK$2000", "減 HK$180", "JPG180"],
  ["滿 HK$3000", "減 HK$300", "JPG300"],
  ["會員專享", "折上折", "即登入領取"],
  ["今日下單", "明日出貨", "部分商品除外"]
];

export function CouponStrip() {
  return (
    <section className="mx-auto max-w-7xl px-2">
      <div className="grid gap-2 rounded-md bg-red-700 p-2 md:grid-cols-[150px_repeat(5,1fr)]">
        <div className="sale-stripes flex items-center justify-center rounded bg-red-800 p-3 text-center text-2xl font-black text-white">
          限時<br />COUPON
        </div>
        {coupons.map(([condition, value, code], index) => (
          <div key={value} className="relative overflow-hidden rounded bg-yellow-50 p-3 text-center shadow-sm">
            <div className="absolute -left-3 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-red-700" />
            <div className="absolute -right-3 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-red-700" />
            {index === 2 ? <span className="absolute right-2 top-1 rounded bg-red-600 px-2 py-0.5 text-[10px] font-black text-white">最划算!</span> : null}
            <p className="text-sm font-black text-red-800">{condition}</p>
            <p className="text-2xl font-black text-red-600">{value}</p>
            <p className="mt-1 rounded bg-white px-2 py-1 text-xs font-black text-zinc-900">優惠碼：{code}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
