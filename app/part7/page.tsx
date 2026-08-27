// Auto-generated from Stitch Part 7 - IranCoin Premium
// Source: IranCoin-premium/prompts Part 7
"use client";
import { useEffect } from "react";
const html = `
<!-- TopNavBar -->
<nav class="bg-surface/60 dark:bg-surface/60 backdrop-blur-md font-body-lg text-body-lg docked full-width top-0 sticky z-50 border-b border-outline-variant/30 shadow-sm flex justify-between items-center px-margin-desktop py-base max-w-[1440px] mx-auto w-full">
<div class="flex items-center gap-md">
<span class="font-display-lg text-display-lg font-bold text-primary dark:text-primary">IranCoin Premium</span>
<div class="hidden md:flex gap-md ml-lg">
<a class="text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-variant/50 transition-all scale-95 duration-200 ease-in-out px-xs py-base rounded" href="#">Home</a>
<a class="text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-variant/50 transition-all scale-95 duration-200 ease-in-out px-xs py-base rounded" href="#">Markets</a>
<a class="text-primary border-b-2 border-primary pb-1 px-xs py-base" href="#">Research</a>
<a class="text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-variant/50 transition-all scale-95 duration-200 ease-in-out px-xs py-base rounded" href="#">Security</a>
<a class="text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-variant/50 transition-all scale-95 duration-200 ease-in-out px-xs py-base rounded" href="#">Support</a>
</div>
</div>
<div class="flex items-center gap-sm">
<button class="text-primary dark:text-primary hover:bg-surface-variant/50 p-xs rounded transition-all"><span class="material-symbols-outlined" data-weight="fill" style="font-variation-settings: 'FILL' 1;">language</span></button>
<span class="text-on-surface-variant text-label-caps">EN/FA</span>
<button class="text-primary dark:text-primary hover:bg-surface-variant/50 p-xs rounded transition-all"><span class="material-symbols-outlined" data-weight="fill" style="font-variation-settings: 'FILL' 1;">account_circle</span></button>
<button class="bg-primary-container text-on-primary-container px-md py-xs rounded font-title-md text-title-md ml-sm hover:opacity-90 transition-opacity">Sign In</button>
</div>
</nav>
<!-- Main Content Canvas -->
<main class="flex-grow flex flex-col p-margin-mobile md:p-margin-desktop gap-md max-w-[1440px] mx-auto w-full">
<!-- Top Header: Progress Indicator -->
<section class="glass-panel border-glow-primary rounded-xl p-md flex flex-col gap-sm overflow-x-auto w-full">
<h2 class="font-title-md text-title-md text-primary">Trading Core Pipeline</h2>
<div class="flex items-center gap-2 min-w-max">
<div class="flex items-center gap-xs"><span class="material-symbols-outlined text-secondary text-sm">check_circle</span> <span class="text-on-surface font-label-caps text-label-caps">BUY</span></div>
<div class="h-px bg-outline-variant w-8"></div>
<div class="flex items-center gap-xs"><span class="material-symbols-outlined text-secondary text-sm">check_circle</span> <span class="text-on-surface font-label-caps text-label-caps">CONNECT</span></div>
<div class="h-px bg-outline-variant w-8"></div>
<div class="flex items-center gap-xs"><span class="material-symbols-outlined text-secondary text-sm">check_circle</span> <span class="text-on-surface font-label-caps text-label-caps">CONFIGURE</span></div>
<div class="h-px bg-outline-variant w-8"></div>
<div class="flex items-center gap-xs"><span class="material-symbols-outlined text-primary text-sm pulse-glow rounded-full">sync</span> <span class="text-primary font-label-caps text-label-caps">ANALYZE</span></div>
<div class="h-px bg-outline-variant w-8"></div>
<div class="flex items-center gap-xs opacity-50"><span class="material-symbols-outlined text-sm">shield</span> <span class="text-on-surface-variant font-label-caps text-label-caps">RISK</span></div>
<div class="h-px bg-outline-variant w-8"></div>
<div class="flex items-center gap-xs opacity-50"><span class="material-symbols-outlined text-sm">bolt</span> <span class="text-on-surface-variant font-label-caps text-label-caps">SIGNAL</span></div>
<div class="h-px bg-outline-variant w-8"></div>
<div class="flex items-center gap-xs opacity-50"><span class="material-symbols-outlined text-sm">gavel</span> <span class="text-on-surface-variant font-label-caps text-label-caps">EXECUTE</span></div>
<div class="h-px bg-outline-variant w-8"></div>
<div class="flex items-center gap-xs opacity-50"><span class="material-symbols-outlined text-sm">monitoring</span> <span class="text-on-surface-variant font-label-caps text-label-caps">MONITOR</span></div>
</div>
<div class="flex justify-between text-xs text-on-surface-variant mt-1 px-1">
<span>IDENTITY</span> <span>NETWORK</span> <span>PREFS</span> <span>MODELS</span> <span>LIMITS</span> <span>QUEUE</span> <span>ROUTER</span> <span>AUDIT</span>
</div>
</section>
<!-- Main Bento Grid -->
<div class="grid grid-cols-1 lg:grid-cols-12 gap-md flex-grow">
<!-- Left Sidebar: Service Ownership -->
<aside class="lg:col-span-3 flex flex-col gap-md">
<div class="glass-panel rounded-xl p-md flex flex-col gap-sm flex-grow">
<h3 class="font-title-md text-title-md text-on-surface flex items-center gap-2 border-b border-outline-variant/30 pb-xs"><span class="material-symbols-outlined">account_tree</span> Service Ownership</h3>
<div class="flex flex-col gap-xs mt-sm">
<!-- Service Item -->
<div class="flex justify-between items-center p-2 rounded hover:bg-surface-variant/30 border border-transparent hover:border-outline-variant/20 transition-all">
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-secondary pulse-glow"></div>
<span class="text-on-surface">Auth Service</span>
</div>
<span class="bg-surface-container-high text-xs px-2 py-0.5 rounded text-on-surface-variant">ACTIVE</span>
</div>
<div class="flex justify-between items-center p-2 rounded hover:bg-surface-variant/30 border border-transparent hover:border-outline-variant/20 transition-all">
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-secondary"></div>
<span class="text-on-surface">Account Mapping</span>
</div>
<span class="bg-surface-container-high text-xs px-2 py-0.5 rounded text-on-surface-variant">ACTIVE</span>
</div>
<div class="flex justify-between items-center p-2 rounded bg-surface-variant/10 border border-outline-variant/20">
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-primary-container"></div>
<span class="text-primary font-medium">Entitlement</span>
</div>
<div class="flex items-center gap-1 text-xs">
<span class="material-symbols-outlined text-[14px] text-primary">verified</span>
<span class="text-primary">RESOLVED</span>
</div>
</div>
<div class="flex justify-between items-center p-2 rounded hover:bg-surface-variant/30 border border-transparent hover:border-outline-variant/20 transition-all">
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-outline"></div>
<span class="text-on-surface-variant">Compliance</span>
</div>
<span class="bg-surface-container-lowest border border-outline-variant/50 text-xs px-2 py-0.5 rounded text-outline">IDLE</span>
</div>
</div>
<div class="mt-auto pt-md border-t border-outline-variant/30">
<div class="text-label-caps text-on-surface-variant mb-2">STATE MACHINE</div>
<div class="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden flex">
<div class="h-full bg-secondary w-1/4"></div>
<div class="h-full bg-secondary w-1/4"></div>
<div class="h-full bg-primary-container w-1/4"></div>
</div>
<div class="flex justify-between text-[10px] text-on-surface-variant mt-1">
<span>PURCHASE</span><span>PROVISION</span><span>ACTIVATE</span>
</div>
</div>
</div>
</aside>
<!-- Center Panel: Connections & Data -->
<section class="lg:col-span-5 flex flex-col gap-md">
<!-- Provider Connection -->
<div class="glass-panel border-glow-primary rounded-xl p-md flex flex-col gap-sm">
<h3 class="font-title-md text-title-md text-on-surface flex items-center justify-between border-b border-outline-variant/30 pb-xs">
<div class="flex items-center gap-2"><span class="material-symbols-outlined">hub</span> Provider Data Flow</div>
<span class="text-xs bg-secondary-container/20 text-secondary px-2 py-1 rounded border border-secondary/30">VERIFIED</span>
</h3>
<div class="grid grid-cols-2 gap-sm mt-sm">
<div class="bg-surface-container-low border border-outline-variant/20 rounded p-sm flex flex-col gap-1">
<span class="text-label-caps text-on-surface-variant">MARKET DATA FEED</span>
<div class="flex items-center justify-between">
<span class="text-on-surface font-medium">Binance WS</span>
<span class="text-secondary text-xs flex items-center gap-1"><span class="material-symbols-outlined text-[14px]">wifi</span> 12ms</span>
</div>
<div class="text-[10px] text-outline mt-1">Contract Status: ACTIVE</div>
</div>
<div class="bg-surface-container-low border border-outline-variant/20 rounded p-sm flex flex-col gap-1">
<span class="text-label-caps text-on-surface-variant">FAILOVER FEED</span>
<div class="flex items-center justify-between">
<span class="text-on-surface font-medium">Kraken FIX</span>
<span class="text-outline text-xs flex items-center gap-1">STANDBY</span>
</div>
<div class="text-[10px] text-outline mt-1">Last Sync: 2s ago</div>
</div>
</div>
<!-- Secret Vault -->
<div class="mt-sm p-sm bg-[#000000] border border-outline-variant/30 rounded flex flex-col gap-2">
<div class="flex items-center justify-between">
<span class="text-label-caps text-on-surface-variant flex items-center gap-1"><span class="material-symbols-outlined text-[14px]">key</span> KMS ENVELOPE ENCRYPTION</span>
<span class="text-[10px] text-primary">SECURE</span>
</div>
<div class="font-mono text-xs text-outline bg-surface-container p-2 rounded flex justify-between items-center group cursor-pointer hover:border-secondary transition-colors border border-transparent">
<span>API_KEY: sk_live_••••••••••••••••8a9f</span>
<span class="material-symbols-outlined text-[14px] opacity-0 group-hover:opacity-100">visibility</span>
</div>
</div>
</div>
<!-- AI Ensemble Preview -->
<div class="glass-panel rounded-xl p-md flex-grow flex flex-col">
<h3 class="font-title-md text-title-md text-on-surface flex items-center justify-between border-b border-outline-variant/30 pb-xs">
<div class="flex items-center gap-2"><span class="material-symbols-outlined text-secondary">psychology</span> AI Ensemble Status</div>
<span class="text-xs bg-surface-container-high px-2 py-1 rounded text-on-surface-variant">16 AGENTS</span>
</h3>
<div class="flex-grow flex flex-col justify-center items-center mt-sm p-sm border border-outline-variant/10 rounded relative overflow-hidden bg-surface-container-lowest">
<!-- Abstract AI visual representation placeholder -->
<div class="absolute inset-0 opacity-20 pointer-events-none" style="background-image: radial-gradient(circle at 50% 50%, rgba(0, 162, 230, 0.2) 0%, transparent 70%);"></div>
<div class="grid grid-cols-4 gap-2 w-full max-w-[240px]">
<!-- Generating small dots to represent 16 agents -->
<script>
                                for(let i=0; i<16; i++) {
                                    let active = i % 3 !== 0;
                                    let color = active ? 'bg-secondary' : 'bg-outline-variant';
                                    let anim = active ? 'pulse-glow' : '';
                                    document.write(\`<div class="w-3 h-3 rounded-full \${color} mx-auto \${anim}"></div>\`);
                                }
                            </script>
</div>
<div class="mt-4 text-center">
<div class="text-on-surface font-medium text-sm">Consensus Reached</div>
<div class="text-xs text-on-surface-variant mt-1">Disagreement Handling: RESOLVED (Threshold &gt; 80%)</div>
</div>
</div>
</div>
</section>
<!-- Right Panel: Engines -->
<aside class="lg:col-span-4 flex flex-col gap-md">
<div class="glass-panel border-glow-primary rounded-xl p-md flex flex-col gap-sm flex-grow">
<div class="flex justify-between items-center border-b border-outline-variant/30 pb-xs mb-xs">
<h3 class="font-title-md text-title-md text-on-surface flex items-center gap-2"><span class="material-symbols-outlined">speed</span> Trading Engines</h3>
<div class="flex gap-1">
<button class="px-2 py-1 bg-surface-variant text-on-surface text-[10px] rounded">SPOT</button>
<button class="px-2 py-1 bg-primary-container text-on-primary-container text-[10px] rounded font-bold">PERP</button>
</div>
</div>
<div class="flex flex-col gap-sm">
<div class="bg-surface-container-low p-sm rounded border border-outline-variant/20">
<div class="flex justify-between items-center mb-2">
<span class="text-on-surface font-medium text-sm">BTC-USDT Perpetual</span>
<span class="text-primary font-mono text-xs">x10 LEV</span>
</div>
<div class="grid grid-cols-2 gap-2 text-xs">
<div class="flex flex-col"><span class="text-outline">Max Position</span><span class="text-on-surface font-mono">2.5 BTC</span></div>
<div class="flex flex-col"><span class="text-outline">Slippage Tol.</span><span class="text-on-surface font-mono">0.05%</span></div>
</div>
</div>
<div class="bg-surface-container-low p-sm rounded border border-outline-variant/20 opacity-60">
<div class="flex justify-between items-center mb-2">
<span class="text-on-surface font-medium text-sm">ETH-USDT Spot</span>
<span class="text-outline font-mono text-xs">IDLE</span>
</div>
<div class="grid grid-cols-2 gap-2 text-xs">
<div class="flex flex-col"><span class="text-outline">Max Position</span><span class="text-on-surface font-mono">50 ETH</span></div>
<div class="flex flex-col"><span class="text-outline">Order Type</span><span class="text-on-surface font-mono">TWAP</span></div>
</div>
</div>
</div>
<!-- Research Pipeline Mini -->
<div class="mt-auto pt-sm border-t border-outline-variant/30">
<h4 class="text-label-caps text-on-surface-variant flex items-center gap-1 mb-2"><span class="material-symbols-outlined text-[14px]">science</span> RESEARCH PIPELINE</h4>
<div class="flex items-center gap-2 text-xs text-on-surface">
<span class="w-1.5 h-1.5 rounded-full bg-secondary pulse-glow"></span>
<span>Ingesting sentiment data (X/Reddit)</span>
</div>
</div>
</div>
</aside>
</div>
<!-- Bottom Panel: Signal & Execution Log -->
<section class="glass-panel rounded-xl p-md flex flex-col gap-sm">
<h3 class="font-title-md text-title-md text-on-surface flex items-center gap-2 border-b border-outline-variant/30 pb-xs"><span class="material-symbols-outlined">receipt_long</span> Execution Log &amp; Order State</h3>
<div class="grid grid-cols-1 md:grid-cols-3 gap-md mt-xs">
<div class="md:col-span-2 overflow-x-auto">
<table class="w-full text-left border-collapse">
<thead>
<tr class="text-label-caps text-on-surface-variant border-b border-outline-variant/20">
<th class="pb-2 font-normal">TIME</th>
<th class="pb-2 font-normal">SIGNAL ID</th>
<th class="pb-2 font-normal">ACTION</th>
<th class="pb-2 font-normal">RISK CHECK</th>
<th class="pb-2 font-normal text-right">STATUS</th>
</tr>
</thead>
<tbody class="font-mono text-xs">
<tr class="border-b border-outline-variant/10 hover:bg-surface-variant/20 transition-colors">
<td class="py-2 text-outline">14:02:11.402</td>
<td class="py-2 text-primary">SIG-8A9F-22</td>
<td class="py-2 text-on-surface">BUY BTC-USDT</td>
<td class="py-2 text-secondary">PASS (0.5% SIZE)</td>
<td class="py-2 text-right"><span class="bg-surface-container-highest text-on-surface px-1.5 py-0.5 rounded">SUBMITTED</span></td>
</tr>
<tr class="border-b border-outline-variant/10 hover:bg-surface-variant/20 transition-colors opacity-70">
<td class="py-2 text-outline">13:45:00.120</td>
<td class="py-2 text-outline">SIG-8A9E-21</td>
<td class="py-2 text-on-surface">SELL ETH-USDT</td>
<td class="py-2 text-error">FAIL (LIMIT BREACH)</td>
<td class="py-2 text-right"><span class="bg-error-container/30 text-error px-1.5 py-0.5 rounded border border-error/30">REJECTED</span></td>
</tr>
</tbody>
</table>
</div>
<div class="bg-surface-container-lowest p-sm border border-outline-variant/20 rounded flex flex-col justify-center">
<div class="text-label-caps text-on-surface-variant text-center mb-2">IDEMPOTENT SUBMISSION FLOW</div>
<div class="flex items-center justify-center gap-1 text-[10px] text-outline font-mono">
<div class="bg-surface-container-high px-2 py-1 rounded">DRAFT</div>
<span class="material-symbols-outlined text-[12px]">arrow_forward</span>
<div class="bg-secondary/20 text-secondary px-2 py-1 rounded border border-secondary/30">PENDING</div>
<span class="material-symbols-outlined text-[12px]">arrow_forward</span>
<div class="bg-surface-container-high px-2 py-1 rounded border-dashed border border-outline">UNKNOWN</div>
</div>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="bg-surface-container-lowest dark:bg-surface-container-lowest font-body-sm text-body-sm w-full mt-lg border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-start px-margin-desktop py-lg gap-md max-w-[1440px] mx-auto">
<div class="font-title-md text-title-md font-bold text-on-surface">© 2024 IranCoin Premium. All rights reserved. Professional Trading Platform.</div>
<div class="flex flex-wrap gap-md opacity-80 hover:opacity-100 transition-opacity">
<a class="text-on-surface-variant hover:text-on-surface hover:text-secondary-fixed-dim transition-colors" href="#">Security Audits</a>
<a class="text-on-surface-variant hover:text-on-surface hover:text-secondary-fixed-dim transition-colors" href="#">Reserve Proofs</a>
<a class="text-on-surface-variant hover:text-on-surface hover:text-secondary-fixed-dim transition-colors" href="#">Compliance</a>
<a class="text-on-surface-variant hover:text-on-surface hover:text-secondary-fixed-dim transition-colors" href="#">Risk Disclosure</a>
<a class="text-on-surface-variant hover:text-on-surface hover:text-secondary-fixed-dim transition-colors" href="#">Privacy Policy</a>
<a class="text-on-surface-variant hover:text-on-surface hover:text-secondary-fixed-dim transition-colors" href="#">Terms of Service</a>
</div>
</footer>
`;
export default function Part7Page() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);
  return (
    <div className="min-h-screen bg-[#0A0A0B]">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
