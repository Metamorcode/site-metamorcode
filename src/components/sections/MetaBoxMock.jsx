import { Nfc } from "lucide-react";

export default function MetaBoxMock() {
  return (
    <div className="w-full max-w-sm rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-5 shadow-2xl mx-auto">
      <div className="rounded-2xl bg-white p-4 shadow-sm">
        <div className="mb-3 flex items-center justify-between text-[10px] text-slate-400">
          <span>MetaBox · Kiosk</span>
          <span>09:41</span>
        </div>
        <div className="rounded-xl bg-primary-50 p-4 text-center">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
            <Nfc className="h-6 w-6" />
          </span>
          <p className="mt-3 text-sm font-semibold text-slate-900">
            Aproxime o seu cartão
          </p>
          <p className="text-xs text-slate-500">Entrada registada às 08:02</p>
        </div>
        <div className="mt-3 space-y-2">
          {["Turno 08:00–16:00", "Cliente: R. das Flores, 21", "Próxima visita: 16:30"].map((t) => (
            <div key={t} className="rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-600">
              {t}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
