"use client";

import { useState } from "react";

const webhookUrl = process.env.NEXT_PUBLIC_LEAD_WEBHOOK_URL;

type SubmitState = "idle" | "loading" | "success" | "error";

export function LeadForm() {
  const [status, setStatus] = useState<SubmitState>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    if (!webhookUrl) {
      console.log("Lead payload", payload);
      setStatus("success");
      form.reset();
      return;
    }

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Webhook request failed");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl bg-white p-6 text-slate-950 shadow-2xl md:p-8">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium">
          Nimi *
          <input name="name" required className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-950" />
        </label>
        <label className="grid gap-2 text-sm font-medium">
          Yritys *
          <input name="company" required className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-950" />
        </label>
        <label className="grid gap-2 text-sm font-medium">
          Sähköposti *
          <input name="email" type="email" required className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-950" />
        </label>
        <label className="grid gap-2 text-sm font-medium">
          Puhelin
          <input name="phone" className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-950" />
        </label>
        <label className="grid gap-2 text-sm font-medium md:col-span-2">
          Verkkosivu
          <input name="website" placeholder="https://" className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-950" />
        </label>
        <label className="grid gap-2 text-sm font-medium">
          Toimialue
          <input name="serviceArea" placeholder="Esim. Helsinki, Uusimaa" className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-950" />
        </label>
        <label className="grid gap-2 text-sm font-medium">
          Aikataulu
          <select name="timeline" className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-950">
            <option value="">Valitse</option>
            <option>Heti</option>
            <option>1–3 kuukauden sisällä</option>
            <option>Myöhemmin</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-medium md:col-span-2">
          Minkälaisia töitä haluatte lisää?
          <select name="desiredWorkType" className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-950">
            <option value="">Valitse</option>
            <option>Huolto- ja korjaustyöt</option>
            <option>Taloyhtiöt</option>
            <option>Saneerauskohteet</option>
            <option>Rakennusliikkeiden alihankinta</option>
            <option>Toimitilamuutokset</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-medium md:col-span-2">
          Suurin haaste asiakashankinnassa?
          <select name="biggestChallenge" className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-950">
            <option value="">Valitse</option>
            <option>Tarjouspyyntöjä tulee liian vähän</option>
            <option>Tarjouspyynnöt ovat vääränlaisia</option>
            <option>Liikaa riippuvuutta muutamasta tilaajasta</option>
            <option>Ei aikaa myyntiin</option>
            <option>Verkkosivut eivät tuota yhteydenottoja</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-medium md:col-span-2">
          Lisätiedot
          <textarea name="message" rows={4} className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-950" />
        </label>
      </div>

      <button disabled={status === "loading"} className="mt-5 w-full rounded-full bg-slate-950 px-6 py-4 font-semibold text-white hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70">
        {status === "loading" ? "Lähetetään..." : "Pyydä maksuton kartoitus"}
      </button>

      {status === "success" && (
        <p className="mt-4 text-sm font-medium text-green-700">Lomake lähetetty. Otamme yhteyttä.</p>
      )}
      {status === "error" && (
        <p className="mt-4 text-sm font-medium text-red-700">Lähetys epäonnistui. Yritä uudelleen tai ota yhteyttä sähköpostilla.</p>
      )}
      <p className="mt-4 text-xs leading-5 text-slate-500">Kartoitus ei sido mihinkään. Käymme läpi nykyisen asiakashankinnan ja annamme konkreettiset parannuskohdat.</p>
    </form>
  );
}
