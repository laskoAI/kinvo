"use client";

import { FormEvent, useState } from "react";
import {
  ArrowUpRight,
  Bot,
  Check,
  CircleCheck,
  Clock3,
  Menu,
  Play,
  Sparkles,
  Send,
  X,
  Zap,
} from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [chatSent, setChatSent] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitError("");

    if (!supabase) {
      setSubmitError("Formularz nie jest jeszcze skonfigurowany.");
      return;
    }

    setIsSubmitting(true);
    const { error } = await supabase
      .from("waitlist")
      .insert({ email: email.trim().toLowerCase() });

    if (error?.code === "23505") {
      setSubmitted(true);
    } else if (error) {
      setSubmitError("Nie udało się zapisać adresu. Spróbuj ponownie.");
    } else {
      setSubmitted(true);
    }

    setIsSubmitting(false);
  }

  function handleChatSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (chatInput.trim()) setChatSent(true);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#fbf7f0] text-[#2b2420]">
      <nav className="relative z-20 w-full border-b border-[#eadfd3] bg-[#f4e8da] text-[#2b2420]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a href="#top" className="flex items-center gap-2.5 text-xl font-bold tracking-[-0.06em]">
          <LogoMark size="md" dark />
          kinvo<span className="text-[#95b14c]">.</span>
        </a>
        <div className="hidden items-center gap-6 text-sm font-medium md:flex">
          <div className="flex items-center gap-1 rounded-full border border-white/15 bg-white/8 p-1">
            <a href="#dla-twórców" className="rounded-full bg-[#2b2420] px-4 py-2 text-[#fffaf4] transition-colors hover:bg-[#d96f4f]">Dla twórców</a>
            <a href="#dla-marek" className="rounded-full px-4 py-2 text-[#7b6d63] transition-colors hover:bg-[#ead1b9] hover:text-[#2b2420]">Dla marek</a>
          </div>
          <a href="#jak-to-działa" className="text-[#7b6d63] transition-colors hover:text-[#2b2420]">Jak to działa</a>
        </div>
        <div className="hidden items-center gap-5 md:flex">
          <a href="#waitlist" className="rounded-full bg-[#d96f4f] px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-[#c85e40]">Dołącz do listy <ArrowUpRight className="ml-1 inline" size={15} /></a>
        </div>
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Otwórz menu">{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>
      {menuOpen && <div className="absolute left-0 right-0 top-20 z-20 mx-4 rounded-2xl border border-[#eadfd3] bg-[#fffdf9] p-5 text-[#2b2420] shadow-xl md:hidden"><div className="flex flex-col gap-4 text-sm font-medium"><a href="#dla-twórców" onClick={() => setMenuOpen(false)}>Dla twórców</a><a href="#dla-marek" onClick={() => setMenuOpen(false)}>Dla marek</a><a href="#jak-to-działa" onClick={() => setMenuOpen(false)}>Jak to działa</a><a href="#waitlist" className="rounded-full bg-[#d96f4f] px-4 py-3 text-center text-white">Dołącz do listy</a></div></div>}

      <WaitlistBar />

      <section id="top" className="relative mx-auto overflow-hidden bg-[#f4e8da] px-6 pb-20 pt-10 text-[#2b2420] lg:px-10 lg:pb-28 lg:pt-14">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(224,166,122,.38),transparent_42%),linear-gradient(180deg,#f4e8da_0%,#fbf7f0_100%)]" />
        <div className="absolute -left-40 top-10 -z-0 h-80 w-80 rounded-full bg-[#dceebd] blur-3xl" />
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#e5c8ad] bg-[#fffaf4]/70 px-3.5 py-2 text-xs font-semibold uppercase tracking-[.14em] text-[#8d6756]"><span className="h-2 w-2 rounded-full bg-[#d96f4f]" /> Kinvo · startujemy wkrótce</div>
          <h1 className="mx-auto max-w-6xl text-[clamp(2.75rem,6vw,5.5rem)] font-semibold leading-[.98] tracking-[-0.065em]">Miejsce, gdzie marki<br /><span className="text-[#c85e40]">spotykają właściwych twórców.</span></h1>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-[#725f54] sm:text-lg">Od pomysłu do gotowej kampanii — z Kinvo znajdziesz właściwego twórcę, ustalisz budżet i osiągniesz efekt.</p>
          <form id="waitlist" onSubmit={handleSubmit} className="scroll-mt-32 mx-auto mt-9 flex max-w-xl flex-col gap-3 sm:flex-row">
            {submitted ? <div className="flex flex-1 items-center gap-3 rounded-full border border-[#c6d4b9] bg-[#edf3e7] px-5 py-4 text-sm font-semibold text-[#58704b]"><CircleCheck size={18} /> Jesteś na liście. Odezwiemy się wkrótce.</div> : <><input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Twój adres e-mail" aria-label="Twój adres e-mail" className="min-w-0 flex-1 rounded-full border border-[#e4d6ca] bg-[#fffdf9] px-5 py-4 text-sm text-[#2b2420] outline-none placeholder:text-[#a3948a] focus:border-[#d96f4f]" /><button disabled={isSubmitting} className="rounded-full bg-[#d96f4f] px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-[#c85e40] disabled:cursor-wait disabled:opacity-70">{isSubmitting ? "Zapisuję..." : "Zapisz się na listę"} <ArrowUpRight className="ml-1 inline" size={16} /></button></>}
          </form>
          <p className="mt-4 text-xs text-[#896f61]">Wskocz do pierwszej edycji Kinvo — dla pierwszych osób dostęp za 0 zł.</p>
          {submitError && <p role="alert" className="mt-2 text-xs font-semibold text-[#b6533d]">{submitError}</p>}
        </div>
        <div className="relative z-10 mx-auto mt-16 w-full max-w-[900px]">
          <div className="absolute -right-10 top-8 h-40 w-40 rounded-full bg-[#dff5a7] blur-2xl" />
          <div className="relative rounded-[28px] border border-[#eadfd3] bg-[#fffdf9] p-4 text-[#2b2420] shadow-[0_25px_80px_rgba(104,69,47,.14)] sm:p-7">
            <div className="mb-7 flex items-center justify-between border-b border-[#edf1eb] pb-4"><div className="flex items-center gap-2 text-sm font-bold"><LogoMark size="sm" /> kinvo</div><span className="rounded-full bg-[#f3f7ed] px-3 py-1.5 text-[10px] font-semibold text-[#70805e]">Creator workspace</span></div>
            <div className="mb-6 flex items-end justify-between"><div><p className="text-xs text-[#6f7d74]">Dzień dobry, Maja</p><h2 className="mt-1 text-2xl font-semibold tracking-tight text-[#14211c]">Twoje współprace</h2></div><div className="rounded-xl bg-[#eff8de] p-2.5 text-[#79a72d]"><Zap size={19} fill="currentColor" /></div></div>
            <div className="grid grid-cols-3 gap-2.5"><div className="rounded-2xl bg-[#14211c] p-4 text-white"><p className="text-[10px] text-[#afbbb3]">W tym miesiącu</p><p className="mt-2 text-2xl font-semibold">12.4k</p><p className="mt-1 text-[10px] text-[#c9f65b]">+18.6% ↗</p></div><div className="rounded-2xl bg-[#f4f7f1] p-4"><p className="text-[10px] text-[#8c9991]">Aktywne</p><p className="mt-2 text-2xl font-semibold">08</p><p className="mt-1 text-[10px] text-[#8c9991]">kampanii</p></div><div className="rounded-2xl bg-[#f4f7f1] p-4"><p className="text-[10px] text-[#8c9991]">Zasięg</p><p className="mt-2 text-2xl font-semibold">284k</p><p className="mt-1 text-[10px] text-[#8c9991]">odbiorców</p></div></div>
            <div className="mt-5 rounded-2xl border border-[#edf1eb] p-4"><div className="mb-4 flex items-center justify-between"><span className="text-xs font-semibold">Ostatnie zaproszenia</span><span className="text-[10px] text-[#8c9991]">Zobacz wszystkie</span></div>{[["Nalu Studio", "Kampania letnia", "#f4d4bb"], ["Oat & Co.", "Reels · lifestyle", "#d2e0c1"], ["Ritual Coffee", "UGC content", "#dbc6e8"]].map(([brand, campaign, color], i) => <div key={brand} className="flex items-center gap-3 border-t border-[#f0f3ef] py-3"><span className="grid h-8 w-8 place-items-center rounded-lg text-[11px] font-bold" style={{ backgroundColor: color }}>{brand.charAt(0)}</span><div className="flex-1"><p className="text-xs font-semibold">{brand}</p><p className="text-[10px] text-[#8c9991]">{campaign}</p></div><span className={`rounded-full px-2 py-1 text-[9px] font-semibold ${i === 0 ? "bg-[#fff5d9] text-[#a27b20]" : "bg-[#eef7e2] text-[#719c31]"}`}>{i === 0 ? "Nowe" : "Dopasowano"}</span></div>)}</div>
          </div>
          <div className="absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl border border-[#dce5d8] bg-white px-4 py-3 shadow-lg sm:-left-8"><span className="grid h-8 w-8 place-items-center rounded-full bg-[#c9f65b] text-[#45621d]"><Check size={17} /></span><div><p className="text-[10px] font-semibold">Nowa współpraca!</p><p className="text-[9px] text-[#8c9991]">Ritual Coffee zaakceptowało ofertę</p></div></div>
        </div>
      </section>

      <StrategyDemo />

      <section className="border-y border-[#e1e8df] bg-white px-6 py-8"><div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-12 gap-y-4 text-xs font-semibold uppercase tracking-[.18em] text-[#9aa69e]"><span>Dla marek i twórców</span><span className="text-base normal-case tracking-normal text-[#65736b]">Współprace bez chaosu.</span><span>Od briefu do płatności</span><span className="hidden sm:inline">Jedna wspólna przestrzeń</span></div></section>

      <section id="dla-twórców" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32"><div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr]"><div><p className="kinvo-section-label mb-4">Dla twórców</p><h2 className="max-w-sm text-4xl font-semibold leading-tight tracking-[-.055em] sm:text-5xl">Mniej wiadomości.<br /><span className="text-[#8aaf34]">Więcej dobrych briefów.</span></h2><p className="mt-6 max-w-sm leading-7 text-[#718077]">Od pierwszego zaproszenia do zaakceptowanej kampanii. Kinvo porządkuje współpracę, żebyś mógł skupić się na tworzeniu.</p><a href="#waitlist" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#14211c] px-5 py-3 text-sm font-semibold text-white hover:bg-[#293d32]">Dołącz jako twórca <ArrowUpRight size={15} /></a></div><div className="grid gap-4 sm:grid-cols-2"><Feature icon={<Sparkles />} title="Współprace dopasowane do Ciebie" text="Otrzymuj propozycje od marek, które pasują do Twojej niszy i odbiorców." /><Feature icon={<Clock3 />} title="Koniec ping-ponga" text="Brief, zakres, stawka i termin w jednym przejrzystym miejscu." /><Feature icon={<CircleCheck />} title="Jasne zasady od początku" text="Wiesz, co tworzysz, ile zarabiasz i kiedy dostajesz płatność." /><Feature icon={<Play />} title="Więcej czasu na treści" text="Kinvo ogarnia operacyjną stronę współpracy, nie Twój styl." /></div></div></section>

      <section className="border-y border-[#e0e8de] bg-white px-6 py-24 lg:px-10 lg:py-32"><div className="mx-auto max-w-7xl"><div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center"><div><p className="mb-4 text-xs font-bold uppercase tracking-[.18em] text-[#8aaf34]">Dla kreatorów</p><h2 className="max-w-lg text-4xl font-semibold leading-tight tracking-[-.055em] sm:text-6xl">Nie czekaj na<br /><span className="text-[#8aaf34]">lepsze współprace.</span></h2><p className="mt-6 max-w-md text-lg leading-8 text-[#718077]">Pokaż markom, co tworzysz, ile kosztuje Twoja praca i z kim chcesz pracować. Kinvo pomaga Ci zarabiać na twórczości bez tracenia czasu na operacyjne drobiazgi.</p><a href="#waitlist" className="mt-8 inline-flex rounded-full bg-[#14211c] px-6 py-4 text-sm font-semibold text-white">Zacznij od listy oczekujących <ArrowUpRight className="ml-1 inline" size={16} /></a></div><div className="relative rounded-[28px] bg-[#eef5e8] p-5 sm:p-8"><div className="absolute -right-4 -top-5 rounded-2xl bg-[#c9f65b] px-4 py-3 text-xs font-bold text-[#314619] shadow-lg">Gotowe do współprac</div><div className="rounded-2xl border border-[#dce5d8] bg-white p-5 shadow-[0_16px_40px_rgba(37,61,47,.1)]"><div className="flex items-center gap-4 border-b border-[#edf1eb] pb-5"><div className="grid h-16 w-16 place-items-center rounded-full bg-[#d2e0c1] text-xl font-bold">MN</div><div><h3 className="text-xl font-semibold">Maja Nowak</h3><p className="text-xs text-[#8c9991]">Lifestyle · Food · Warszawa</p><div className="mt-2 flex gap-1.5"><span className="rounded-full bg-[#eff8de] px-2 py-1 text-[10px] font-semibold text-[#719c31]">84K odbiorców</span><span className="rounded-full bg-[#f4f7f1] px-2 py-1 text-[10px] text-[#718077]">4.8% engagement</span></div></div></div><div className="mt-5 grid grid-cols-3 gap-2 text-center"><div className="rounded-xl bg-[#f4f7f1] p-3"><p className="text-[10px] text-[#8c9991]">Reels</p><p className="mt-1 text-sm font-semibold">2 400 zł</p></div><div className="rounded-xl bg-[#f4f7f1] p-3"><p className="text-[10px] text-[#8c9991]">Stories</p><p className="mt-1 text-sm font-semibold">900 zł</p></div><div className="rounded-xl bg-[#f4f7f1] p-3"><p className="text-[10px] text-[#8c9991]">Pakiet</p><p className="mt-1 text-sm font-semibold">3 100 zł</p></div></div><div className="mt-5 flex items-center justify-between rounded-xl border border-[#dce5d8] p-3"><div><p className="text-xs font-semibold">Oat & Co. chce współpracować</p><p className="mt-1 text-[10px] text-[#8c9991]">Kampania · Poranki, które mają smak</p></div><span className="rounded-full bg-[#c9f65b] px-3 py-2 text-[10px] font-bold text-[#314619]">Zobacz</span></div></div></div></div><div className="mt-16 grid gap-4 sm:grid-cols-3"><CreatorBenefit icon={<Sparkles />} title="Media kit, który pracuje" text="Pokaż markom zasięg, ofertę i najlepsze realizacje w kilka minut." /><CreatorBenefit icon={<CircleCheck />} title="Tylko dobre dopasowania" text="Otrzymuj zaproszenia od marek, które pasują do Twoich odbiorców." /><CreatorBenefit icon={<Clock3 />} title="Mniej administracji" text="Briefy, rozmowy, terminy i płatności bez arkuszy i chaosu." /></div></div></section>

      <section id="dla-marek" className="scroll-mt-8 bg-[#ead8c6] px-6 py-24 text-[#2b2420] lg:px-10 lg:py-28"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center"><div><p className="kinvo-section-label mb-4">Dla marek</p><h2 className="max-w-lg text-4xl font-semibold leading-tight tracking-[-.055em] sm:text-5xl">Opisujesz cel.<br />Kinvo znajduje<br /><span className="text-[#b6533d]">właściwych ludzi.</span></h2><a href="#waitlist" className="mt-9 inline-flex rounded-full bg-[#d96f4f] px-6 py-4 text-sm font-bold text-white hover:bg-[#c85e40]">Zacznij planować kampanię <ArrowUpRight className="ml-1 inline" size={16} /></a></div><div><p className="max-w-md text-lg leading-8 text-[#6d5a4f]">Ustawiasz budżet, odbiorców i format. Dostajesz krótką listę twórców, którzy mają realny fit z Twoją marką, zamiast setek przypadkowych profili.</p><div className="mt-9 flex flex-wrap gap-3"><span className="rounded-full border border-[#d4b99e] bg-[#f7eadc] px-4 py-2 text-xs text-[#725c4d]">Konkretny brief</span><span className="rounded-full border border-[#d4b99e] bg-[#f7eadc] px-4 py-2 text-xs text-[#725c4d]">Realne dopasowanie</span><span className="rounded-full border border-[#d4b99e] bg-[#f7eadc] px-4 py-2 text-xs text-[#725c4d]">Sprawna realizacja</span></div></div></div></section>

      <section className="bg-[#edf3e9] px-6 py-24 lg:px-10 lg:py-32"><div className="mx-auto max-w-7xl"><div className="mx-auto max-w-2xl text-center"><p className="mb-4 text-xs font-bold uppercase tracking-[.18em] text-[#8aaf34]">Kinvo AI workspace</p><h2 className="text-4xl font-semibold leading-tight tracking-[-.055em] sm:text-5xl">Opisz kampanię.<br /><span className="text-[#8aaf34]">Resztę ogarniemy.</span></h2><p className="mt-5 text-base leading-7 text-[#718077]">Nie szukasz w bazie i nie wypełniasz dziesięciu formularzy. Piszesz, czego potrzebujesz, a Kinvo zamienia rozmowę w gotową kampanię.</p></div><div className="mt-16 grid gap-5 lg:grid-cols-[.92fr_1.08fr]"><div className="rounded-[24px] border border-[#dce5d8] bg-white p-4 shadow-[0_18px_50px_rgba(37,61,47,.07)] sm:p-6"><div className="mb-6 flex items-center gap-3 border-b border-[#edf1eb] pb-4"><div className="grid h-9 w-9 place-items-center rounded-xl bg-[#14211c] text-[#c9f65b]"><Bot size={18} /></div><div><p className="text-sm font-bold">Kinvo assistant</p><p className="text-[10px] text-[#8c9991]">Znajdźmy najlepszych twórców</p></div><span className="ml-auto h-2 w-2 rounded-full bg-[#a6d64b]" /></div><div className="space-y-4 text-sm"><div className="max-w-[88%] rounded-2xl rounded-tl-sm bg-[#f1f6ed] p-4 leading-6 text-[#4f6157]">Hej! Opowiedz mi o kampanii, którą chcesz stworzyć. Możesz napisać normalnie, np. cel, budżet i kogo szukasz.</div>{chatSent && <div className="ml-auto max-w-[88%] rounded-2xl rounded-tr-sm bg-[#14211c] p-4 leading-6 text-white">{chatInput}</div>}<div className="max-w-[88%] rounded-2xl rounded-tl-sm bg-[#f1f6ed] p-4 leading-6 text-[#4f6157]">{chatSent ? "Super. Przygotowałem plan i wybrałem twórców, którzy pasują do Twojej grupy odbiorców." : "Przykład: Szukam 4 twórców lifestyle do kampanii kawy. Budżet 8 000 zł, Instagram Reels, start w maju."}</div></div><form onSubmit={handleChatSubmit} className="mt-6 flex items-center gap-2 rounded-2xl border border-[#dce5d8] bg-[#fbfcfa] p-2"><input value={chatInput} onChange={(e) => setChatInput(e.target.value)} placeholder="Napisz o swojej kampanii..." className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm outline-none placeholder:text-[#a0aca4]" /><button aria-label="Wyślij wiadomość" className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#c9f65b] text-[#314619] transition-transform hover:scale-105"><Send size={16} /></button></form><div className="mt-3 flex flex-wrap gap-2"><button type="button" onClick={() => setChatInput("Szukam twórców do kampanii produktu za 5 000 zł") } className="rounded-full border border-[#dce5d8] px-3 py-1.5 text-[10px] text-[#718077]">Ustaw budżet</button><button type="button" onClick={() => setChatInput("Chcę dotrzeć do młodych odbiorców na Instagramie") } className="rounded-full border border-[#dce5d8] px-3 py-1.5 text-[10px] text-[#718077]">Określ odbiorców</button></div></div><div className="rounded-[24px] border border-[#dce5d8] bg-[#14211c] p-5 text-white shadow-[0_18px_50px_rgba(37,61,47,.12)] sm:p-7"><div className="flex items-center justify-between"><div><p className="text-[10px] uppercase tracking-[.16em] text-[#a8c75b]">Wygenerowany plan</p><h3 className="mt-2 text-2xl font-semibold tracking-tight">Poranki, które mają smak</h3></div><span className="rounded-full bg-[#314b36] px-3 py-1.5 text-[10px] font-semibold text-[#c9f65b]">Gotowe</span></div><div className="mt-7 grid grid-cols-2 gap-3"><div className="rounded-2xl bg-white/8 p-4"><p className="text-[10px] text-[#9faf9f]">Budżet</p><p className="mt-2 text-xl font-semibold">8 000 zł</p><p className="mt-1 text-[10px] text-[#a8c75b]">dopasowany do celu</p></div><div className="rounded-2xl bg-white/8 p-4"><p className="text-[10px] text-[#9faf9f]">Rekomendacja</p><p className="mt-2 text-xl font-semibold">4 twórców</p><p className="mt-1 text-[10px] text-[#a8c75b]">Instagram Reels</p></div></div><div className="mt-5 border-t border-white/10 pt-5"><div className="mb-4 flex items-center justify-between"><span className="text-xs font-semibold">Dopasowani twórcy</span><span className="text-[10px] text-[#9faf9f]">92% średni fit</span></div>{[["Maja Nowak", "Lifestyle · 84k", "96%"], ["Ola Kwiatkowska", "Food · 61k", "93%"], ["Kuba Wrona", "Daily life · 42k", "89%"]].map(([name, niche, fit], i) => <div key={name} className="flex items-center gap-3 border-t border-white/10 py-3"><span className={`grid h-8 w-8 place-items-center rounded-full text-[10px] font-bold text-[#14211c] ${i === 0 ? "bg-[#e9b68e]" : i === 1 ? "bg-[#b9d5b0]" : "bg-[#d0b7dc]"}`}>{name.charAt(0)}</span><div className="flex-1"><p className="text-xs font-semibold">{name}</p><p className="text-[10px] text-[#9faf9f]">{niche}</p></div><span className="text-xs font-semibold text-[#c9f65b]">{fit}</span></div>)}</div><button className="mt-5 w-full rounded-full bg-[#c9f65b] py-3.5 text-xs font-bold text-[#314619]">Zobacz propozycje i wyślij brief <ArrowUpRight className="ml-1 inline" size={14} /></button></div></div><div className="mx-auto mt-10 max-w-2xl text-center text-sm text-[#718077]"><span className="font-semibold text-[#14211c]">To działa w obie strony.</span> Marka zaczyna od celu i budżetu. Twórca dostaje dopasowaną propozycję, negocjuje warunki i akceptuje współpracę w tym samym miejscu.</div></div></section>

      <section id="jak-to-działa" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32"><div className="mb-14 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="kinvo-section-label mb-4">Jak to działa</p><h2 className="text-4xl font-semibold tracking-[-.055em] sm:text-5xl">Od pomysłu do <span className="text-[#8aaf34]">efektu.</span></h2></div><p className="max-w-xs text-sm leading-6 text-[#718077]">Trzy kroki, które zdejmują ciężar z Twoich barków.</p></div><div className="grid gap-4 md:grid-cols-3">{[["01", "Opisz", "Powiedz, co chcesz osiągnąć, jaki masz budżet i do kogo chcesz dotrzeć."], ["02", "Dopasuj", "Kinvo porządkuje brief i pokazuje osoby, które naprawdę pasują."], ["03", "Współpracuj", "Ustalcie warunki, zrealizujcie kampanię i zamknijcie temat bez chaosu."]].map(([number, title, text]) => <div key={number} className="kinvo-card p-6"><span className="text-sm font-bold text-[#89ad3a]">{number}</span><h3 className="mt-12 text-2xl font-semibold tracking-tight text-[#14211c]">{title}</h3><p className="mt-3 max-w-xs text-sm leading-6 text-[#718077]">{text}</p></div>)}</div><div className="mt-12 text-center"><a href="#waitlist" className="inline-flex rounded-full border border-[#cbd8c7] bg-white px-6 py-3.5 text-sm font-bold text-[#14211c] shadow-sm hover:border-[#95bd3f]">Chcę dostać dostęp jako pierwszy <ArrowUpRight className="ml-1 inline" size={16} /></a></div></section>

      <section className="px-6 pb-24 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-[2rem] bg-[#f0d5b9] p-8 sm:p-12 lg:flex-row lg:items-end"><div><p className="kinvo-section-label mb-4 text-[#a7533d]">Startujemy wkrótce</p><h2 className="max-w-2xl text-4xl font-semibold leading-tight tracking-[-.055em] sm:text-5xl">Twoja następna<br /><span className="text-[#b6533d]">współpraca zaczyna się tutaj.</span></h2><p className="mt-4 max-w-xl text-sm leading-6 text-[#76584a]">Poznaj Kinvo — miejsce, w którym marki spotykają właściwych twórców. Dołącz jako pierwszy i zacznij korzystać za 0 zł.</p></div><a href="#waitlist" className="shrink-0 rounded-full bg-[#2b2420] px-6 py-4 text-sm font-semibold text-white hover:bg-[#4b3930]">Dołącz teraz <ArrowUpRight className="ml-1 inline" size={16} /></a></div></section>

      <footer id="footer" className="border-t border-[#dce5d8] px-6 py-10 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center"><div><div className="flex items-center gap-2 text-lg font-bold tracking-[-.06em]"><LogoMark size="sm" />kinvo<span className="text-[#95b14c]">.</span></div><p className="mt-2 text-xs text-[#8b9890]">Dobre współprace zaczynają się tutaj.</p></div><div className="flex items-center gap-4 text-xs font-semibold text-[#7e8d84]"><span>Instagram</span><span>LinkedIn</span><span className="ml-3">© 2025 Kinvo</span></div></div></footer>
    </main>
  );
}

function StrategyDemo() {
  const strategies = {
    "Premiera produktu": {
      prompt: "Wypuszczamy nowy produkt dla przedsiębiorców i marketerów",
      creators: [["Aakash Gupta", "AI · 180k", "96%"], ["Andrew Yeung", "Startups · 92k", "94%"], ["Elena's Growth Scoop", "Growth · 64k", "91%"], ["Ali Abdaal", "Produktywność · 1.2M", "89%"], ["Superhuman", "Tech · 420k", "87%"]],
      metrics: ["18", "82.4K", "3.1K", "25K zł"],
      icp: "Product managerzy i specjaliści tech w rozwijających się startupach",
      platforms: "Główne: LinkedIn, Instagram  ·  Dodatkowe: YouTube, Newsletter",
      budget: "25 000 zł na start kampanii · elastyczny pod najlepsze dopasowanie",
    },
    "Ogłoszenie rundy": {
      prompt: "Chcemy opowiedzieć o naszej nowej rundzie finansowania i dotrzeć do founderów",
      creators: [["SaaSFrame", "SaaS · 48k", "98%"], ["Michał Sadowski", "Biznes · 116k", "95%"], ["Startupem", "Startupy · 72k", "93%"], ["Kuba Klawiter", "Tech · 850k", "88%"], ["Growth Hacking PL", "Marketing · 39k", "86%"]],
      metrics: ["12", "64.8K", "2.7K", "18K zł"],
      icp: "Founderzy, inwestorzy i operatorzy budujący firmy technologiczne",
      platforms: "Główne: LinkedIn, Newsletter  ·  Dodatkowe: YouTube, Podcast",
      budget: "18 000 zł na komunikację rundy · priorytet: wiarygodność i jakość odbiorców",
    },
    "Budowanie rozpoznawalności": {
      prompt: "Chcemy być bardziej widoczni wśród młodych odbiorców zainteresowanych technologią",
      creators: [["Karolina Żebrowska", "Lifestyle · 210k", "97%"], ["TechWeek", "Technologia · 330k", "95%"], ["Kasia Gandor", "Nauka · 180k", "92%"], ["Nauka. To lubię", "Edukacja · 520k", "90%"], ["Kacper Masny", "Rozrywka · 740k", "88%"]],
      metrics: ["26", "146.2K", "8.4K", "32K zł"],
      icp: "Młodzi profesjonaliści i early adopters, którzy odkrywają nowe produkty online",
      platforms: "Główne: Instagram, TikTok  ·  Dodatkowe: YouTube, LinkedIn",
      budget: "32 000 zł na zasięg i świadomość · kampania rozłożona na 6 tygodni",
    },
  } as const;
  const scenarios = Object.keys(strategies) as Array<keyof typeof strategies>;
  const [active, setActive] = useState<keyof typeof strategies>("Premiera produktu");
  const [prompt, setPrompt] = useState<string>(strategies["Premiera produktu"].prompt);
  const [generated, setGenerated] = useState(true);
  const strategy = strategies[active];

  function selectScenario(scenario: keyof typeof strategies) {
    setActive(scenario);
    setPrompt(strategies[scenario].prompt);
    setGenerated(false);
  }

  function generateStrategy(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setGenerated(true);
  }

  return <section className="border-b border-[#e5e5de] bg-[#f2f5ef] px-5 py-20 sm:px-8 lg:px-14 lg:py-28"><div className="mx-auto max-w-6xl"><div className="mx-auto max-w-4xl text-center"><p className="kinvo-section-label">Kinvo AI · strategia kampanii</p><h2 className="mt-4 text-4xl font-semibold leading-[1.02] tracking-[-.06em] sm:text-6xl">Od pomysłu do kompletnej<br /><span className="text-[#8aaf34]">strategii w jednym promptcie.</span></h2><p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#718077] sm:text-lg">Opisz swój cel, a Kinvo przygotuje plan kampanii: właściwych twórców, kanały, budżet i kolejne kroki.</p></div><div className="mt-14 grid grid-cols-1 gap-8 border-b border-[#d8e1d4] pb-10 md:grid-cols-3 md:gap-10">{scenarios.map((scenario) => <button key={scenario} onClick={() => selectScenario(scenario)} className={`text-left text-[clamp(1.35rem,3vw,2.25rem)] font-semibold tracking-[-.045em] transition-colors ${active === scenario ? "text-[#20211e]" : "text-[#9b9e96] hover:text-[#4d554e]"}`}><span>{scenario}</span><span className="mt-4 block h-1.5 rounded-full bg-[#e1e6de]"><span className={`block h-full rounded-full bg-[#14211c] transition-all ${active === scenario ? "w-[98%]" : "w-0"}`} /></span></button>)}</div><div className="mx-auto max-w-5xl pt-12"><form onSubmit={generateStrategy} className="flex items-center gap-3 rounded-[1.35rem] border border-[#d2ded0] bg-white px-4 py-3 shadow-[0_14px_30px_rgba(35,57,43,.07)] sm:px-6 sm:py-4"><input value={prompt} onChange={(event) => { setPrompt(event.target.value); setGenerated(false); }} className="min-w-0 flex-1 bg-transparent text-base outline-none sm:text-xl" /><button aria-label="Generuj strategię" className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#14211c] text-white shadow-lg hover:bg-[#2a4034]"><ArrowUpRight size={22} /></button></form><p className="mt-14 text-xl tracking-[-.025em] sm:text-2xl">{generated ? "Na podstawie Twojego celu i grupy odbiorców, oto strategia:" : "Gotowy, by wygenerować strategię?"}</p>{generated && <><div className="kinvo-card mt-5 p-5 sm:p-7"><div className="flex items-center justify-between gap-4"><div className="flex items-center gap-3 text-xl font-medium"><span className="text-2xl text-[#9b9b91]">▤</span> {active}</div><button className="text-lg text-[#6f7d74] hover:text-[#14211c]">Otwórz <span className="ml-1">›</span></button></div><div className="mt-6 grid grid-cols-2 divide-x divide-[#e5e4dc] border-t border-[#ecebe5] pt-5 text-center sm:grid-cols-4">{["Twórcy", "Wyświetlenia", "Zaangażowanie", "Szac. budżet"].map((label, index) => <Metric key={label} label={label} value={strategy.metrics[index]} />)}</div></div><p className="mt-6 text-xl tracking-[-.025em] sm:text-2xl">Wybrani twórcy:</p><div className="mt-5 flex flex-wrap gap-3">{strategy.creators.map(([creator, niche, fit], index) => <span key={creator} title={`${niche} · dopasowanie ${fit}`} className="inline-flex items-center gap-2 rounded-full border border-[#d8d8d0] bg-white py-1.5 pl-1.5 pr-4 text-sm text-[#45463f] shadow-[0_5px_10px_rgba(50,53,42,.05)]"><span className={`grid h-8 w-8 place-items-center rounded-full text-[11px] font-bold ${index === 0 ? "bg-[#bfd2dc]" : index === 1 ? "bg-[#e4c493]" : index === 2 ? "bg-[#d6c5bf]" : index === 3 ? "bg-[#b9cad1]" : "bg-[#c4e7a5]"}`}>{creator.charAt(0)}</span>{creator}</span>)}</div><div className="mt-8 divide-y divide-[#ecebe5] text-lg"><Detail label="ICP" value={strategy.icp} /><Detail label="Platformy" value={strategy.platforms} /><Detail label="Budżet" value={strategy.budget} /></div></>}</div></div></section>;
}

function Metric({ label, value }: { label: string; value: string }) {
  return <div className="px-3 py-1"><p className="text-base text-[#7d8981] sm:text-lg">{label}</p><p className="mt-1 text-2xl font-semibold tracking-tight text-[#14211c] sm:text-3xl">{value}</p></div>;
}

function Detail({ label, value }: { label: string; value: string }) {
  return <div className="grid gap-2 py-4 sm:grid-cols-[220px_1fr]"><span className="text-[#7d8981]">{label}</span><span className="text-[#4f5e54]">{value}</span></div>;
}

function Feature({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return <div className="kinvo-card p-6 transition-transform"><div className="mb-12 grid h-10 w-10 place-items-center rounded-xl bg-[#eff8de] text-[#7da532]">{icon}</div><h3 className="text-lg font-semibold tracking-tight text-[#14211c]">{title}</h3><p className="mt-2 text-sm leading-6 text-[#718077]">{text}</p></div>;
}

function CreatorBenefit({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return <div className="kinvo-muted-card p-6"><div className="mb-8 grid h-10 w-10 place-items-center rounded-xl bg-[#dff5a7] text-[#6c9128]">{icon}</div><h3 className="text-lg font-semibold tracking-tight text-[#14211c]">{title}</h3><p className="mt-2 text-sm leading-6 text-[#718077]">{text}</p></div>;
}

function LogoMark({ size, dark = false }: { size: "sm" | "md"; dark?: boolean }) {
  return <span className={`relative inline-grid shrink-0 place-items-center rounded-[10px] bg-[#c9f65b] text-[#14211c] ${size === "md" ? "h-8 w-8" : "h-6 w-6 rounded-[7px]"}`} aria-label="Kinvo logo"><span className={`absolute rotate-45 rounded-[3px] border-[3px] ${dark ? "border-[#14211c]" : "border-[#14211c]"} border-l-transparent border-b-transparent ${size === "md" ? "h-3.5 w-3.5" : "h-2.5 w-2.5 border-2"}`} /><span className={`absolute rounded-full bg-[#14211c] ${size === "md" ? "h-1.5 w-1.5" : "h-1 w-1"}`} /></span>;
}

function WaitlistBar() {
  return <div className="fixed inset-x-3 bottom-3 z-50 mx-auto flex max-w-xl items-center justify-between gap-4 rounded-full border border-[#eadfd3] bg-[#fffdf9]/95 px-4 py-3 text-[#2b2420] shadow-[0_12px_35px_rgba(104,69,47,.18)] backdrop-blur-md sm:inset-x-auto sm:bottom-5 sm:px-5"><div className="hidden items-center gap-2 text-xs sm:flex"><span className="h-2 w-2 rounded-full bg-[#d96f4f]" /> Wskocz do pierwszej edycji · 0 zł na start</div><span className="text-xs font-medium sm:hidden">Pierwsza edycja · 0 zł</span><a href="#waitlist" className="shrink-0 rounded-full bg-[#d96f4f] px-4 py-2 text-xs font-bold text-white hover:bg-[#c85e40]">Zarezerwuj dostęp <ArrowUpRight className="ml-1 inline" size={13} /></a></div>;
}
