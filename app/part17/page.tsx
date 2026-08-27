// Auto-generated from Stitch Part 17 - IranCoin Premium
// Source: IranCoin-premium/prompts Part 17
"use client";
import { useEffect } from "react";
const html = `
<!-- Top Navigation -->
<nav class="bg-surface/60 dark:bg-surface/60 backdrop-blur-md text-primary dark:text-primary font-body-lg text-body-lg docked full-width top-0 sticky z-50 border-b border-outline-variant/30 shadow-sm">
<div class="flex justify-between items-center px-margin-desktop py-base max-w-[1440px] mx-auto w-full">
<div class="flex items-center gap-md">
<span class="font-display-lg text-display-lg font-bold text-primary dark:text-primary tracking-tight">IranCoin Premium</span>
</div>
<div class="hidden md:flex items-center gap-lg">
<a class="text-on-surface-variant hover:text-primary transition-colors py-2" href="#">Home</a>
<a class="text-on-surface-variant hover:text-primary transition-colors py-2" href="#">Markets</a>
<a class="text-primary border-b-2 border-primary pb-1 py-2 font-bold" href="#">Research</a>
<a class="text-on-surface-variant hover:text-primary transition-colors py-2" href="#">Security</a>
<a class="text-on-surface-variant hover:text-primary transition-colors py-2" href="#">Support</a>
</div>
<div class="flex items-center gap-md">
<button class="hover:bg-surface-variant/50 transition-all scale-95 duration-200 ease-in-out p-2 rounded-full">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 0;">language</span>
</button>
<span class="text-label-caps text-on-surface-variant">EN/FA</span>
<button class="hover:bg-surface-variant/50 transition-all scale-95 duration-200 ease-in-out p-2 rounded-full">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 0;">account_circle</span>
</button>
<button class="bg-primary-container text-on-primary-container px-sm py-2 rounded-lg font-label-caps hover:bg-primary transition-colors">Sign In</button>
</div>
</div>
</nav>
<main class="max-w-[1440px] mx-auto px-margin-desktop py-lg space-y-lg relative z-10">
<!-- Section 1: Header -->
<header class="flex flex-col md:flex-row justify-between items-start md:items-end gap-md border-b border-outline-variant/30 pb-md">
<div>
<div class="flex items-center gap-sm mb-xs">
<span class="bg-surface-variant text-on-surface px-2 py-1 rounded text-label-caps font-mono border border-outline-variant/50">ARCH-DOC-17</span>
<span class="bg-emerald-900/30 text-emerald-400 px-2 py-1 rounded text-label-caps border border-emerald-800/50 flex items-center gap-1">
<span class="material-symbols-outlined text-[14px]">verified</span> AUDIT READY
                    </span>
</div>
<h1 class="font-headline-lg text-headline-lg text-on-surface">Exchange, Broker &amp; Execution Adapter Engineering</h1>
<p class="font-persian text-on-surface-variant mt-2 text-sm opacity-80">مهندسی آداپتور اجرا، کارگزار و صرافی</p>
</div>
<div class="text-right">
<p class="font-body-sm text-body-sm text-on-surface-variant">Last Updated: <span class="text-on-surface">Oct 24, 2024</span></p>
<p class="font-body-sm text-body-sm text-on-surface-variant">Author: <span class="text-on-surface">Aureus Core Team</span></p>
</div>
</header>
<div class="grid grid-cols-1 lg:grid-cols-12 gap-lg">
<!-- Left Column: Diagrams & Tables -->
<div class="lg:col-span-8 space-y-lg">
<!-- Section 2: Adapter Isolation -->
<section class="glass-panel p-md rounded-xl relative overflow-hidden">
<div class="absolute top-0 right-0 p-sm text-tech-blue opacity-20 pointer-events-none">
<span class="material-symbols-outlined text-6xl">account_tree</span>
</div>
<div class="flex justify-between items-center mb-md border-b border-outline-variant/30 pb-xs">
<h2 class="font-title-md text-title-md text-primary">Adapter Isolation Topology</h2>
<span class="text-label-caps text-on-surface-variant bg-surface px-2 py-1 rounded border border-outline-variant/50">REQ 17.001</span>
</div>
<div class="flex flex-col md:flex-row items-center justify-between gap-md py-md">
<!-- Trading Core -->
<div class="flex-1 flex flex-col items-center gap-2 z-10">
<div class="w-24 h-24 rounded-full border-2 border-primary bg-surface flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.1)]">
<span class="material-symbols-outlined text-4xl text-primary">memory</span>
</div>
<span class="font-label-caps text-on-surface">Trading Core</span>
<span class="font-persian text-xs text-on-surface-variant">هسته معاملات</span>
</div>
<!-- Connectors -->
<div class="hidden md:flex flex-1 items-center justify-center relative h-full">
<div class="h-px bg-gradient-to-r from-primary via-tech-blue to-outline-variant w-full absolute"></div>
<div class="absolute animate-pulse bg-tech-blue w-2 h-2 rounded-full left-1/4"></div>
<div class="absolute animate-pulse bg-tech-blue w-2 h-2 rounded-full right-1/4 delay-75"></div>
</div>
<!-- Adapter Layer -->
<div class="flex-1 flex flex-col items-center gap-2 z-10 w-full md:w-auto">
<div class="w-full bg-surface-container-high border border-outline-variant p-sm rounded-lg flex flex-col items-center gap-3">
<span class="font-label-caps text-tech-blue">Adapter Layer</span>
<div class="grid grid-cols-1 gap-2 w-full">
<div class="bg-surface border border-outline-variant/50 p-2 rounded text-center text-xs text-on-surface font-mono">BinanceAdapter</div>
<div class="bg-surface border border-outline-variant/50 p-2 rounded text-center text-xs text-on-surface font-mono">MT5Bridge</div>
<div class="bg-surface border border-outline-variant/50 p-2 rounded text-center text-xs text-on-surface font-mono">IBKRConnector</div>
</div>
</div>
</div>
<!-- Connectors -->
<div class="hidden md:flex flex-1 items-center justify-center relative h-full">
<div class="h-px bg-gradient-to-r from-outline-variant via-tech-blue to-outline-variant w-full absolute"></div>
</div>
<!-- External Providers -->
<div class="flex-1 flex flex-col gap-3 z-10">
<div class="flex items-center gap-2 bg-surface-container border border-outline-variant/50 p-2 rounded">
<span class="material-symbols-outlined text-on-surface-variant text-sm">cloud</span>
<span class="text-xs text-on-surface">Binance (REST/WS)</span>
</div>
<div class="flex items-center gap-2 bg-surface-container border border-outline-variant/50 p-2 rounded">
<span class="material-symbols-outlined text-on-surface-variant text-sm">dns</span>
<span class="text-xs text-on-surface">MetaTrader 5</span>
</div>
<div class="flex items-center gap-2 bg-surface-container border border-outline-variant/50 p-2 rounded">
<span class="material-symbols-outlined text-on-surface-variant text-sm">hub</span>
<span class="text-xs text-on-surface">Interactive Brokers</span>
</div>
</div>
</div>
</section>
<!-- Section 3: Provider Capabilities -->
<section class="glass-panel p-md rounded-xl">
<div class="flex justify-between items-center mb-md border-b border-outline-variant/30 pb-xs">
<h2 class="font-title-md text-title-md text-primary">Provider Capabilities Matrix</h2>
<span class="text-label-caps text-on-surface-variant bg-surface px-2 py-1 rounded border border-outline-variant/50">REQ 17.002</span>
</div>
<div class="overflow-x-auto">
<table class="w-full text-left border-collapse">
<thead>
<tr class="border-b border-outline-variant/50 text-label-caps text-on-surface-variant">
<th class="py-3 px-2 font-normal">Provider</th>
<th class="py-3 px-2 font-normal text-center">Spot</th>
<th class="py-3 px-2 font-normal text-center">Margin</th>
<th class="py-3 px-2 font-normal text-center">Futures</th>
<th class="py-3 px-2 font-normal text-center">Webhooks</th>
<th class="py-3 px-2 font-normal text-center">WS Feed</th>
</tr>
</thead>
<tbody class="font-body-sm text-on-surface divide-y divide-outline-variant/20">
<tr class="hover:bg-surface-variant/30 transition-colors">
<td class="py-3 px-2 font-medium">Binance Global</td>
<td class="py-3 px-2 text-center text-primary"><span class="material-symbols-outlined text-[18px]">check_circle</span></td>
<td class="py-3 px-2 text-center text-primary"><span class="material-symbols-outlined text-[18px]">check_circle</span></td>
<td class="py-3 px-2 text-center text-primary"><span class="material-symbols-outlined text-[18px]">check_circle</span></td>
<td class="py-3 px-2 text-center text-outline-variant"><span class="material-symbols-outlined text-[18px]">cancel</span></td>
<td class="py-3 px-2 text-center text-primary"><span class="material-symbols-outlined text-[18px]">check_circle</span></td>
</tr>
<tr class="hover:bg-surface-variant/30 transition-colors">
<td class="py-3 px-2 font-medium">MT5 Bridge</td>
<td class="py-3 px-2 text-center text-primary"><span class="material-symbols-outlined text-[18px]">check_circle</span></td>
<td class="py-3 px-2 text-center text-primary"><span class="material-symbols-outlined text-[18px]">check_circle</span></td>
<td class="py-3 px-2 text-center text-outline-variant"><span class="material-symbols-outlined text-[18px]">cancel</span></td>
<td class="py-3 px-2 text-center text-primary"><span class="material-symbols-outlined text-[18px]">check_circle</span></td>
<td class="py-3 px-2 text-center text-outline-variant"><span class="material-symbols-outlined text-[18px]">cancel</span></td>
</tr>
<tr class="hover:bg-surface-variant/30 transition-colors">
<td class="py-3 px-2 font-medium">Interactive Brokers</td>
<td class="py-3 px-2 text-center text-primary"><span class="material-symbols-outlined text-[18px]">check_circle</span></td>
<td class="py-3 px-2 text-center text-primary"><span class="material-symbols-outlined text-[18px]">check_circle</span></td>
<td class="py-3 px-2 text-center text-primary"><span class="material-symbols-outlined text-[18px]">check_circle</span></td>
<td class="py-3 px-2 text-center text-outline-variant"><span class="material-symbols-outlined text-[18px]">cancel</span></td>
<td class="py-3 px-2 text-center text-primary"><span class="material-symbols-outlined text-[18px]">check_circle</span></td>
</tr>
</tbody>
</table>
</div>
</section>
<!-- Section 5: Instrument Normalization -->
<section class="glass-panel p-md rounded-xl">
<div class="flex justify-between items-center mb-md border-b border-outline-variant/30 pb-xs">
<h2 class="font-title-md text-title-md text-primary">Instrument Normalization</h2>
<span class="text-label-caps text-on-surface-variant bg-surface px-2 py-1 rounded border border-outline-variant/50">REQ 17.004-10</span>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-sm">
<div class="bg-surface border border-outline-variant/30 p-sm rounded-lg">
<h3 class="font-label-caps text-tech-blue mb-2 flex items-center gap-1"><span class="material-symbols-outlined text-[16px]">currency_bitcoin</span> Crypto Assets</h3>
<ul class="space-y-2 text-xs font-mono text-on-surface-variant">
<li class="flex justify-between border-b border-outline-variant/20 pb-1"><span>Base Precision</span> <span class="text-on-surface">8 Decimals</span></li>
<li class="flex justify-between border-b border-outline-variant/20 pb-1"><span>Quote Precision</span> <span class="text-on-surface">Dynamic (2-8)</span></li>
<li class="flex justify-between pb-1"><span>Contract Multiplier</span> <span class="text-on-surface">1.0 (Standard)</span></li>
</ul>
</div>
<div class="bg-surface border border-outline-variant/30 p-sm rounded-lg">
<h3 class="font-label-caps text-tech-blue mb-2 flex items-center gap-1"><span class="material-symbols-outlined text-[16px]">currency_exchange</span> Forex Assets</h3>
<ul class="space-y-2 text-xs font-mono text-on-surface-variant">
<li class="flex justify-between border-b border-outline-variant/20 pb-1"><span>Base Precision</span> <span class="text-on-surface">5 Decimals (Pipettes)</span></li>
<li class="flex justify-between border-b border-outline-variant/20 pb-1"><span>Quote Precision</span> <span class="text-on-surface">5 Decimals</span></li>
<li class="flex justify-between pb-1"><span>Contract Multiplier</span> <span class="text-on-surface">100,000 (1 Lot)</span></li>
</ul>
</div>
</div>
</section>
</div>
<!-- Right Column: Code & Specs -->
<div class="lg:col-span-4 space-y-lg">
<!-- Section 4: Canonicalization Engine -->
<section class="glass-panel rounded-xl overflow-hidden flex flex-col h-full">
<div class="p-md border-b border-outline-variant/30 flex justify-between items-center bg-surface-container-low/50">
<h2 class="font-title-md text-title-md text-primary">Canonicalization Engine</h2>
<span class="text-label-caps text-on-surface-variant bg-surface px-2 py-1 rounded border border-outline-variant/50">REQ 17.003</span>
</div>
<div class="p-md space-y-4 flex-1">
<p class="font-body-sm text-body-sm text-on-surface-variant mb-4">Normalizing vendor-specific ticker symbols into a unified internal representation.</p>
<div class="bg-surface-container border border-outline-variant/40 rounded-lg p-3 relative glow-border transition-all">
<span class="absolute -top-2 left-3 bg-surface px-1 text-[10px] text-tech-blue font-mono border border-outline-variant/50 rounded">Binance Input</span>
<div class="font-mono text-sm text-on-surface">
<span class="text-emerald-400">"symbol"</span>: <span class="text-amber-200">"BTCUSDT"</span>,<br/>
<span class="text-emerald-400">"type"</span>: <span class="text-amber-200">"SPOT"</span>
</div>
</div>
<div class="flex justify-center text-outline-variant">
<span class="material-symbols-outlined animate-bounce">arrow_downward</span>
</div>
<div class="bg-surface-container border border-outline-variant/40 rounded-lg p-3 relative glow-border transition-all">
<span class="absolute -top-2 left-3 bg-surface px-1 text-[10px] text-tech-blue font-mono border border-outline-variant/50 rounded">Kraken Input</span>
<div class="font-mono text-sm text-on-surface">
<span class="text-emerald-400">"pair"</span>: <span class="text-amber-200">"XBTUSD"</span>,<br/>
<span class="text-emerald-400">"class"</span>: <span class="text-amber-200">"currency"</span>
</div>
</div>
<div class="flex justify-center text-tech-blue">
<span class="material-symbols-outlined">filter_alt</span>
</div>
<div class="code-bg rounded-lg p-4 relative shadow-[0_0_15px_rgba(14,165,233,0.15)] border-tech-blue/30">
<span class="absolute top-2 right-2 flex h-2 w-2">
<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-tech-blue opacity-75"></span>
<span class="relative inline-flex rounded-full h-2 w-2 bg-tech-blue"></span>
</span>
<div class="font-mono text-xs leading-relaxed text-on-surface">
<span class="text-purple-400">struct</span> <span class="text-blue-300">CanonicalInstrument</span> {<br/>
                                  <span class="text-tech-blue">canonical_id:</span> <span class="text-amber-200">"BTC-USDT"</span>,<br/>
                                  <span class="text-tech-blue">base_asset:</span> <span class="text-amber-200">"BTC"</span>,<br/>
                                  <span class="text-tech-blue">quote_asset:</span> <span class="text-amber-200">"USDT"</span>,<br/>
                                  <span class="text-tech-blue">asset_class:</span> <span class="text-purple-400">AssetClass::CryptoSpot</span>,<br/>
                                  <span class="text-tech-blue">status:</span> <span class="text-emerald-400">Status::Active</span><br/>
                                }
                            </div>
</div>
</div>
</section>
</div>
</div>
</main>
<!-- Footer -->
<footer class="bg-surface-container-lowest dark:bg-surface-container-lowest text-primary dark:text-primary font-body-sm text-body-sm w-full mt-lg border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-start px-margin-desktop py-lg gap-md max-w-[1440px] mx-auto z-10 relative">
<div class="flex flex-col gap-sm">
<span class="font-title-md text-title-md font-bold text-on-surface">IranCoin Premium</span>
<span class="text-on-surface-variant opacity-80">© 2024 IranCoin Premium. All rights reserved. Professional Trading Platform.</span>
</div>
<div class="grid grid-cols-2 gap-x-xl gap-y-2">
<a class="text-primary font-bold hover:text-secondary-fixed-dim transition-colors opacity-80 hover:opacity-100" href="#">Security Audits</a>
<a class="text-on-surface-variant hover:text-on-surface hover:text-secondary-fixed-dim transition-colors opacity-80 hover:opacity-100" href="#">Reserve Proofs</a>
<a class="text-on-surface-variant hover:text-on-surface hover:text-secondary-fixed-dim transition-colors opacity-80 hover:opacity-100" href="#">Compliance</a>
<a class="text-on-surface-variant hover:text-on-surface hover:text-secondary-fixed-dim transition-colors opacity-80 hover:opacity-100" href="#">Risk Disclosure</a>
<a class="text-on-surface-variant hover:text-on-surface hover:text-secondary-fixed-dim transition-colors opacity-80 hover:opacity-100" href="#">Privacy Policy</a>
<a class="text-on-surface-variant hover:text-on-surface hover:text-secondary-fixed-dim transition-colors opacity-80 hover:opacity-100" href="#">Terms of Service</a>
</div>
</footer>
`;
export default function Part17Page() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);
  return (
    <div className="min-h-screen bg-[#0A0A0B]">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
