import Link from "next/link";
const parts = [
  ["part1","Flagship Landing Page"],
  ["part2","Admin Control Plane & Backend"],
  ["part3","Design System & UX Showcase"],
  ["part4","Security, Trust & Compliance Center"],
  ["part5","Product Engineering & API"],
  ["part6","Frontend Architecture & Design System"],
  ["part7","Trading Core & Signal Pipeline"],
  ["part8","Database Schema & API Contracts"],
  ["part9","Cloud Infra & DevOps"],
  ["part10","Security Architecture & Threat Model"],
  ["part11","Revenue & Commercial Operations"],
  ["part12","AI Intelligence & Model Governance"],
  ["part13","Frontend Architecture & Design System Engineering"],
  ["part14","Cross-Platform Distribution & Billing"],
  ["part15","Content Engine & International SEO"],
  ["part16","Compliance, Jurisdiction & Governance"],
  ["part17","Exchange, Broker & Execution Adapter"],
  ["part18","Quality Engineering & Release Gates"],
  ["part19","Analytics, Growth & Monetization"],
  ["part20","Master Launch Plan & Governance"],
  ["review","Master Audit - 20 Parts Mu Be Mu Review"],
];
export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-[#eae1d4] p-8">
      <header className="max-w-6xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-[#D4AF37]">IranCoin Premium Trading Platform</h1>
        <p className="text-[#0EA5E9] mt-2">Stitch Project: projects/13472457734608405708 — 20 Parts → React/Next.js (Web)</p>
        <p className="text-sm text-gray-400 mt-1">Dark luxury #0A0A0B + gold #D4AF37 + blue #0EA5E9 + Inter/Vazirmatn + RTL/LTR</p>
        <div className="mt-4 p-4 rounded-lg" style={{background:"rgba(22,22,24,0.6)", backdropFilter:"blur(20px)", border:"1px solid rgba(212,175,55,0.1)"}}>
          <p className="text-sm">لینک Stitch: <a href="https://stitch.withgoogle.com/projects/13472457734608405708" className="text-[#D4AF37] underline">stitch.withgoogle.com/projects/13472457734608405708</a></p>
          <p className="text-xs text-gray-400">Gmail: ali.khani0916@gmail.com — تمام ۲۰ پارت به Stitch منتقل شد</p>
        </div>
      </header>
      <main className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {parts.map(([slug,title])=>(
          <Link key={slug} href={`/${slug}`} className="p-6 rounded-xl hover:border-[#D4AF37]/50 transition border border-transparent" style={{background:"rgba(22,22,24,0.6)", backdropFilter:"blur(20px)", border:"1px solid rgba(212,175,55,0.1)"}}>
            <div className="text-xs text-[#0EA5E9]">{slug}</div>
            <div className="font-semibold mt-1">{title}</div>
            <div className="text-xs text-gray-400 mt-2">→ مشاهده React Page</div>
          </Link>
        ))}
      </main>
      <footer className="max-w-6xl mx-auto mt-12 text-center text-xs text-gray-500">
        <p>npm install && npm run dev → http://localhost:3000 — هر part در /part1 ... /part20</p>
      </footer>
    </div>
  )
}
