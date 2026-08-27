// Auto-generated from Stitch Part 11 - IranCoin Premium
// Source: IranCoin-premium/prompts Part 11
"use client";
import { useEffect } from "react";
const html = `
<!-- TopNavBar -->
<nav class="bg-surface/60 dark:bg-surface/60 backdrop-blur-md font-body-lg text-body-lg docked full-width top-0 sticky z-50 border-b border-outline-variant/30 shadow-sm">
<div class="flex justify-between items-center px-margin-desktop py-base max-w-[1440px] mx-auto w-full">
<div class="font-display-lg text-display-lg font-bold text-primary dark:text-primary mr-md">
                IranCoin Premium
            </div>
<div class="hidden md:flex flex-1 items-center gap-md ml-lg">
<a class="text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-variant/50 transition-all px-xs py-base rounded scale-95 duration-200 ease-in-out" href="#">Home</a>
<a class="text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-variant/50 transition-all px-xs py-base rounded scale-95 duration-200 ease-in-out" href="#">Markets</a>
<a class="text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-variant/50 transition-all px-xs py-base rounded scale-95 duration-200 ease-in-out" href="#">Research</a>
<a class="text-primary border-b-2 border-primary pb-1 hover:bg-surface-variant/50 transition-all px-xs py-base rounded scale-95 duration-200 ease-in-out" href="#">Security</a>
<a class="text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-variant/50 transition-all px-xs py-base rounded scale-95 duration-200 ease-in-out" href="#">Support</a>
</div>
<div class="flex items-center gap-sm">
<button class="text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-variant/50 transition-all p-xs rounded scale-95 duration-200 ease-in-out">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 0;">language</span>
</button>
<div class="text-on-surface-variant text-body-sm mr-sm">EN/FA</div>
<button class="text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-variant/50 transition-all p-xs rounded scale-95 duration-200 ease-in-out mr-sm">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 0;">account_circle</span>
</button>
<button class="primary-action-btn font-label-caps px-sm py-xs rounded hover:opacity-90 transition-opacity">
                    Sign In
                </button>
</div>
</div>
</nav>
<!-- Main Content -->
<main class="flex-1 w-full max-w-[1440px] mx-auto px-margin-desktop py-lg">
<!-- Header Section -->
<header class="mb-xl">
<h1 class="font-display-lg text-on-surface mb-xs">Commercial &amp; Revenue Operations</h1>
<p class="font-title-md text-on-surface-variant">Sub-system Part 11: Billing, Entitlements &amp; Fiscal Compliance</p>
</header>
<div class="grid grid-cols-12 gap-md">
<!-- Section 1: Commercial North Star -->
<section class="col-span-12 md:col-span-8 glass-surface rounded-xl p-md metallic-border relative overflow-hidden group">
<div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div class="flex items-start justify-between mb-sm relative z-10">
<h2 class="font-headline-lg text-primary">Commercial North Star <span class="text-on-surface-variant font-body-sm ml-xs opacity-60">| اصول تجاری</span></h2>
<span class="material-symbols-outlined text-primary text-3xl" style="font-variation-settings: 'FILL' 1;">assured_workload</span>
</div>
<p class="font-body-lg text-on-surface-variant mb-md relative z-10 max-w-2xl">
                    Strict separation of 'Payment Event' from 'Service Entitlement'. The backend ledger is the singular authoritative source of truth. UI state is deterministic and derivative.
                </p>
<div class="grid grid-cols-1 md:grid-cols-2 gap-sm relative z-10">
<div class="bg-surface/40 p-sm rounded border border-outline-variant/30 flex items-center gap-sm">
<span class="material-symbols-outlined tech-blue-text">account_balance</span>
<div>
<div class="font-label-caps text-on-surface">Payment Resolution</div>
<div class="font-body-sm text-on-surface-variant">Async Webhook ➔ Ledger Entry</div>
</div>
</div>
<div class="bg-surface/40 p-sm rounded border border-outline-variant/30 flex items-center gap-sm">
<span class="material-symbols-outlined text-primary">key</span>
<div>
<div class="font-label-caps text-on-surface">Entitlement Grant</div>
<div class="font-body-sm text-on-surface-variant">Ledger Confirmed ➔ Access Token</div>
</div>
</div>
</div>
</section>
<!-- Section 3: Checkout Flow Mini -->
<section class="col-span-12 md:col-span-4 glass-surface rounded-xl p-md metallic-border flex flex-col justify-between">
<h3 class="font-title-md text-on-surface mb-sm flex items-center gap-xs">
<span class="material-symbols-outlined text-on-surface-variant text-sm">sync_alt</span>
                    Transaction Pipeline
                </h3>
<div class="space-y-sm flex-1 flex flex-col justify-center font-mono text-body-sm">
<div class="flex items-center gap-sm text-on-surface-variant">
<span class="w-2 h-2 rounded-full bg-secondary-container"></span>
                        Init_Checkout (Web)
                    </div>
<div class="ml-xs border-l border-outline-variant/50 pl-md py-xs text-outline">
                        ↓
                    </div>
<div class="flex items-center gap-sm text-on-surface-variant">
<span class="w-2 h-2 rounded-full bg-surface-tint"></span>
                        Provider_Hook (PGW)
                    </div>
<div class="ml-xs border-l border-outline-variant/50 pl-md py-xs text-outline">
                        ↓
                    </div>
<div class="flex items-center gap-sm text-primary font-medium">
<span class="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_#D4AF37]"></span>
                        Activate_Entitlement (Core)
                    </div>
</div>
</section>
<!-- Section 2: Product Catalog -->
<section class="col-span-12 glass-surface rounded-xl p-md metallic-border mt-md">
<div class="flex items-center justify-between mb-md border-b border-outline-variant/20 pb-sm">
<h2 class="font-headline-lg text-on-surface">Service Tiers <span class="text-on-surface-variant font-body-sm ml-xs opacity-60">| سطوح خدمات</span></h2>
<div class="flex gap-sm">
<span class="px-xs py-base bg-surface-container rounded text-body-sm text-on-surface-variant border border-outline-variant/30">Signal-Only</span>
<span class="px-xs py-base bg-secondary-container/10 text-secondary-container rounded text-body-sm border border-secondary-container/30 tech-blue-border">Auto-Trading</span>
</div>
</div>
<div class="grid grid-cols-1 md:grid-cols-4 gap-md">
<!-- Tier Card -->
<div class="bg-surface/50 border border-outline-variant/20 rounded-lg p-sm hover:border-outline-variant/50 transition-colors">
<div class="font-label-caps text-on-surface-variant mb-xs">MONTHLY | ماهیانه</div>
<div class="font-display-lg text-on-surface mb-base">$199<span class="text-title-md text-on-surface-variant">/mo</span></div>
<div class="font-body-sm text-outline mb-sm">~ 11.9M IRT</div>
<ul class="space-y-xs font-body-sm text-on-surface-variant mb-md">
<li class="flex items-center gap-xs"><span class="material-symbols-outlined text-primary text-sm">check</span> Real-time Signals</li>
<li class="flex items-center gap-xs"><span class="material-symbols-outlined text-outline text-sm">close</span> API Trading</li>
</ul>
<button class="w-full py-xs border border-primary/50 text-primary rounded font-label-caps hover:bg-primary/10 transition-colors">Configure</button>
</div>
<!-- Tier Card -->
<div class="bg-surface/50 border border-outline-variant/20 rounded-lg p-sm hover:border-outline-variant/50 transition-colors relative">
<div class="absolute top-0 right-0 bg-primary text-on-primary font-label-caps px-xs py-base rounded-bl-lg rounded-tr-lg text-[10px]">POPULAR</div>
<div class="font-label-caps text-on-surface-variant mb-xs">QUARTERLY | سه‌ماهه</div>
<div class="font-display-lg text-on-surface mb-base">$499<span class="text-title-md text-on-surface-variant">/3mo</span></div>
<div class="font-body-sm text-outline mb-sm">~ 29.9M IRT (Save 15%)</div>
<ul class="space-y-xs font-body-sm text-on-surface-variant mb-md">
<li class="flex items-center gap-xs"><span class="material-symbols-outlined text-primary text-sm">check</span> Real-time Signals</li>
<li class="flex items-center gap-xs"><span class="material-symbols-outlined text-secondary-container text-sm">check</span> Basic Auto-Trading</li>
</ul>
<button class="w-full py-xs bg-surface-container text-on-surface border border-outline-variant/50 rounded font-label-caps hover:bg-surface-variant transition-colors">Configure</button>
</div>
</div>
</section>
<!-- Section 4: Revenue Ops & Compliance -->
<section class="col-span-12 glass-surface rounded-xl p-md metallic-border mt-md">
<h2 class="font-headline-lg text-on-surface mb-md">Fiscal Audit Log <span class="text-on-surface-variant font-body-sm ml-xs opacity-60">| گزارش مالی</span></h2>
<div class="overflow-x-auto">
<table class="w-full text-left border-collapse">
<thead>
<tr class="border-b border-outline-variant/30 font-label-caps text-on-surface-variant">
<th class="pb-xs font-medium">TxID / Date</th>
<th class="pb-xs font-medium">Service / Product</th>
<th class="pb-xs font-medium">Gross Amount</th>
<th class="pb-xs font-medium">VAT/Tax</th>
<th class="pb-xs font-medium text-right">Status</th>
</tr>
</thead>
<tbody class="font-body-sm text-on-surface">
<tr class="border-b border-outline-variant/10 hover:bg-surface-bright/5 transition-colors group">
<td class="py-sm font-mono text-outline group-hover:text-on-surface transition-colors">TX-892A... <br/><span class="text-xs">2024-10-27 14:32</span></td>
<td class="py-sm">BTC-USDT Algo<br/><span class="text-xs text-on-surface-variant">Monthly Auto-Trade</span></td>
<td class="py-sm font-mono">$199.00</td>
<td class="py-sm font-mono text-on-surface-variant">$17.91 (9%)</td>
<td class="py-sm text-right">
<span class="inline-flex items-center gap-xs px-2 py-1 rounded bg-green-900/20 text-emerald-400 border border-green-900/50 text-[11px] font-mono tracking-wider">
<span class="material-symbols-outlined text-[14px]">check_circle</span> PAID
                                    </span>
</td>
</tr>
<tr class="border-b border-outline-variant/10 hover:bg-surface-bright/5 transition-colors group">
<td class="py-sm font-mono text-outline group-hover:text-on-surface transition-colors">TX-891B... <br/><span class="text-xs">2024-10-27 12:15</span></td>
<td class="py-sm">ETH-PERP Signal<br/><span class="text-xs text-on-surface-variant">Weekly Basic</span></td>
<td class="py-sm font-mono">$49.00</td>
<td class="py-sm font-mono text-on-surface-variant">$4.41 (9%)</td>
<td class="py-sm text-right">
<span class="inline-flex items-center gap-xs px-2 py-1 rounded bg-amber-900/20 text-amber-400 border border-amber-900/50 text-[11px] font-mono tracking-wider">
<span class="material-symbols-outlined text-[14px]">pending</span> PEND
                                    </span>
</td>
</tr>
</tbody>
</table>
</div>
</section>
</div>
<!-- Compliance Footer Note -->
<div class="mt-xl text-center border-t border-outline-variant/20 pt-md">
<p class="font-body-sm text-outline">
<span class="material-symbols-outlined text-[14px] align-middle mr-xs">gavel</span>
                Compliance Disclaimer: No guaranteed profit. Server-side truth authoritative for all entitlements and billing events. All financial transactions are subject to regional VAT regulations.
            </p>
</div>
</main>
`;
export default function Part11Page() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);
  return (
    <div className="min-h-screen bg-[#0A0A0B]">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
