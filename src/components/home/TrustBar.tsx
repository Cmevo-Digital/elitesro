const stats = [
  { value: "200+", label: "Evenimente finalizate" },
  { value: "5★", label: "Rating Google" },
  { value: "3", label: "Zone de operare" },
  { value: "24h", label: "Timp răspuns ofertă" },
];

export default function TrustBar() {
  return (
    <div className="bg-white border-b border-warm-dark">
      <div className="container-brand py-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-warm-dark">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white flex flex-col sm:flex-row items-center justify-center gap-2 px-6 py-4 text-center sm:text-left"
            >
              <span className="font-display text-xl font-semibold text-gold leading-none">
                {s.value}
              </span>
              <span className="text-xs text-charcoal/60 font-medium leading-tight">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
