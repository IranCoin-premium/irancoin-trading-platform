// Auto-generated from Stitch Part 2 - IranCoin Premium
// Source: IranCoin-premium/prompts Part 2
"use client";
import { useEffect } from "react";
const html = `
<!-- Top Navigation (Generated from JSON guidance) -->
<nav class="bg-surface/60 dark:bg-surface/60 backdrop-blur-md font-body-lg text-body-lg docked full-width top-0 sticky z-50 border-b border-outline-variant/30 shadow-sm flex justify-between items-center px-margin-desktop py-base w-full h-[80px]">
<div class="flex items-center gap-md">
<div class="font-display-lg text-display-lg font-bold text-primary dark:text-primary flex items-center gap-2" style="font-size: 24px; line-height: 32px;">
<span class="material-symbols-outlined text-primary" style="font-size: 28px;">diamond</span>
                IranCoin Premium
            </div>
<div class="h-6 w-px bg-outline-variant/50 mx-2 hidden md:block"></div>
<span class="font-label-caps text-on-surface-variant bg-surface-container px-2 py-1 rounded border border-outline-variant/30 hidden md:inline-block">ADMIN CONTROL PLANE</span>
</div>
<div class="flex items-center gap-md">
<div class="flex gap-2">
<button class="px-3 py-1.5 rounded-DEFAULT text-on-surface-variant hover:text-primary hover:bg-surface-variant/50 transition-all border border-outline-variant/30 flex items-center gap-2">
<span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span class="font-label-caps">SYS: HEALTHY</span>
</button>
</div>
<div class="flex items-center gap-2 ml-4">
<button class="p-2 text-on-surface-variant hover:text-primary hover:bg-surface-variant/50 transition-all rounded-DEFAULT">
<span class="material-symbols-outlined">language</span>
</button>
<div class="h-8 w-px bg-outline-variant/50"></div>
<div class="flex items-center gap-2 ml-2 cursor-pointer hover:bg-surface-variant/50 p-1.5 rounded transition-all">
<div class="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-bold text-sm">
                        AD
                    </div>
<div class="hidden md:block">
<div class="font-body-sm text-on-surface leading-tight">Admin User</div>
<div class="font-label-caps text-primary leading-tight">Super Admin</div>
</div>
</div>
</div>
</div>
</nav>
<!-- Main Layout -->
<main class="grid-layout">
<!-- Left Sidebar: Navigation -->
<aside class="glass-surface rounded-xl flex flex-col h-full overflow-y-auto custom-scrollbar">
<div class="p-4 border-b border-outline-variant/20">
<div class="relative">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/50 text-sm">search</span>
<input class="w-full bg-[#000000] border border-[#27272A] rounded-DEFAULT py-2 pl-9 pr-3 text-body-sm text-on-surface focus:outline-none focus:border-[#0EA5E9] transition-colors placeholder:text-on-surface-variant/40" placeholder="Search resources..." type="text"/>
</div>
</div>
<nav class="flex-1 p-2 space-y-1">
<div class="px-3 py-2 mt-2">
<span class="font-label-caps text-on-surface-variant/60">CORE</span>
</div>
<a class="flex items-center gap-3 px-3 py-2 rounded-DEFAULT bg-surface-variant/50 text-primary border-l-2 border-primary" href="#">
<span class="material-symbols-outlined text-[20px]">dashboard</span>
<span class="font-body-sm font-medium flex-1">Dashboard</span>
</a>
<a class="flex items-center gap-3 px-3 py-2 rounded-DEFAULT text-on-surface-variant hover:text-primary hover:bg-surface-variant/30 transition-colors" href="#">
<span class="material-symbols-outlined text-[20px]">group</span>
<span class="font-body-sm font-medium flex-1">Users</span>
</a>
<a class="flex items-center gap-3 px-3 py-2 rounded-DEFAULT text-on-surface-variant hover:text-primary hover:bg-surface-variant/30 transition-colors" href="#">
<span class="material-symbols-outlined text-[20px]">card_membership</span>
<span class="font-body-sm font-medium flex-1">Subscriptions</span>
</a>
<div class="px-3 py-2 mt-4">
<span class="font-label-caps text-on-surface-variant/60">MARKET OPS</span>
</div>
<a class="flex items-center gap-3 px-3 py-2 rounded-DEFAULT text-on-surface-variant hover:text-primary hover:bg-surface-variant/30 transition-colors" href="#">
<span class="material-symbols-outlined text-[20px]">candlestick_chart</span>
<span class="font-body-sm font-medium flex-1">Trading Operations</span>
<span class="font-label-caps bg-[#27272A] text-on-surface-variant px-1.5 py-0.5 rounded text-[10px]">RISK MGR</span>
</a>
<a class="flex items-center gap-3 px-3 py-2 rounded-DEFAULT text-on-surface-variant hover:text-primary hover:bg-surface-variant/30 transition-colors" href="#">
<span class="material-symbols-outlined text-[20px]">smart_toy</span>
<span class="font-body-sm font-medium flex-1">AI Operations</span>
<span class="w-1.5 h-1.5 rounded-full bg-[#0EA5E9] shadow-[0_0_8px_#0EA5E9]"></span>
</a>
<a class="flex items-center gap-3 px-3 py-2 rounded-DEFAULT text-on-surface-variant hover:text-primary hover:bg-surface-variant/30 transition-colors" href="#">
<span class="material-symbols-outlined text-[20px]">gavel</span>
<span class="font-body-sm font-medium flex-1">Risk Rules</span>
</a>
<div class="px-3 py-2 mt-4">
<span class="font-label-caps text-on-surface-variant/60">SYSTEM</span>
</div>
<a class="flex items-center gap-3 px-3 py-2 rounded-DEFAULT text-on-surface-variant hover:text-primary hover:bg-surface-variant/30 transition-colors" href="#">
<span class="material-symbols-outlined text-[20px]">list_alt</span>
<span class="font-body-sm font-medium flex-1">Audit Logs</span>
</a>
<a class="flex items-center gap-3 px-3 py-2 rounded-DEFAULT text-on-surface-variant hover:text-primary hover:bg-surface-variant/30 transition-colors" href="#">
<span class="material-symbols-outlined text-[20px]">monitor_heart</span>
<span class="font-body-sm font-medium flex-1">System Health</span>
<span class="font-label-caps bg-[#27272A] text-on-surface-variant px-1.5 py-0.5 rounded text-[10px]">DEV</span>
</a>
</nav>
<div class="p-4 border-t border-outline-variant/20 mt-auto">
<div class="bg-error-container/20 border border-error/30 rounded-DEFAULT p-3">
<div class="flex items-center justify-between mb-2">
<span class="font-label-caps text-error flex items-center gap-1">
<span class="material-symbols-outlined text-[16px]">warning</span>
                            EMERGENCY MODE
                        </span>
<div class="w-8 h-4 bg-surface-container-highest rounded-full relative cursor-pointer border border-outline-variant/50">
<div class="w-3 h-3 bg-on-surface-variant rounded-full absolute left-0.5 top-0.5"></div>
</div>
</div>
<p class="text-[11px] text-on-surface-variant leading-tight">Halt all non-admin trading activity instantly.</p>
</div>
</div>
</aside>
<!-- Center Column: Architecture Diagram -->
<section class="flex flex-col h-full gap-4 overflow-hidden">
<!-- Header -->
<div class="glass-surface rounded-xl p-4 flex justify-between items-center shrink-0">
<div>
<h1 class="font-title-md text-on-surface">System Architecture &amp; Flow</h1>
<p class="font-body-sm text-on-surface-variant">Real-time telemetry and infrastructure topology.</p>
</div>
<div class="flex gap-2">
<div class="flex items-center gap-1.5 px-2 py-1 rounded bg-surface-container border border-outline-variant/30">
<span class="w-2 h-2 rounded-full bg-emerald-500"></span>
<span class="font-label-caps text-on-surface-variant text-[10px]">SEV 0 (NORMAL)</span>
</div>
<button class="px-3 py-1 rounded bg-[#D4AF37] text-black font-label-caps hover:bg-[#ffe088] transition-colors flex items-center gap-1">
<span class="material-symbols-outlined text-[16px]">refresh</span>
                        SYNC TOPOLOGY
                    </button>
</div>
</div>
<!-- Canvas Area for Diagram -->
<div class="glass-surface rounded-xl flex-1 relative overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-surface-container-highest/20 via-background to-background p-6">
<!-- Background Grid -->
<div class="absolute inset-0 opacity-[0.03] pointer-events-none" style="background-image: linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px); background-size: 40px 40px;"></div>
<!-- Architecture Diagram Content -->
<div class="relative w-full h-full flex flex-col items-center justify-center gap-8">
<!-- Layer 1: Edge -->
<div class="w-full flex justify-center node-connector">
<div class="bg-surface-container-highest border border-outline-variant/50 rounded-DEFAULT p-3 w-64 text-center shadow-[0_4px_24px_rgba(0,0,0,0.4)] relative">
<div class="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center">
<span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
</div>
<span class="material-symbols-outlined text-on-surface-variant mb-1">cloud</span>
<div class="font-label-caps text-primary">CDN / WAF</div>
<div class="font-body-sm text-on-surface-variant text-[11px] monospaced mt-1">req/s: 14,205</div>
</div>
</div>
<!-- Layer 2: Gateway & Identity -->
<div class="w-full flex justify-center gap-12 relative">
<div class="bg-surface-container border border-[#0EA5E9]/30 rounded-DEFAULT p-3 w-48 text-center node-connector">
<span class="material-symbols-outlined text-[#0EA5E9] mb-1">api</span>
<div class="font-label-caps text-on-surface">API GATEWAY</div>
<div class="font-body-sm text-on-surface-variant text-[11px] monospaced mt-1">Latency: 12ms</div>
</div>
<div class="bg-surface-container border border-outline-variant/50 rounded-DEFAULT p-3 w-48 text-center node-connector">
<span class="material-symbols-outlined text-primary mb-1">key</span>
<div class="font-label-caps text-on-surface">IDENTITY / ENTL</div>
<div class="font-body-sm text-on-surface-variant text-[11px] monospaced mt-1">Active Sess: 8.4k</div>
</div>
</div>
<!-- Layer 3: Core Domains -->
<div class="w-full flex justify-center gap-6 relative p-4 border border-outline-variant/20 rounded-xl bg-surface/40">
<div class="absolute -top-3 left-4 font-label-caps text-on-surface-variant/50 bg-background px-2 text-[10px]">INTERNAL NETWORK</div>
<div class="bg-surface-container border border-[#D4AF37]/40 rounded-DEFAULT p-3 w-40 text-center relative overflow-hidden">
<div class="absolute inset-0 bg-[#D4AF37]/5 opacity-0 hover:opacity-100 transition-opacity"></div>
<span class="material-symbols-outlined text-[#D4AF37] mb-1">swap_horiz</span>
<div class="font-label-caps text-on-surface">TRADING ENGINE</div>
</div>
<div class="bg-surface-container border border-[#0EA5E9]/40 rounded-DEFAULT p-3 w-40 text-center relative overflow-hidden">
<div class="absolute inset-0 bg-[#0EA5E9]/5 opacity-0 hover:opacity-100 transition-opacity"></div>
<div class="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#0EA5E9] animate-pulse"></div>
<span class="material-symbols-outlined text-[#0EA5E9] mb-1">psychology</span>
<div class="font-label-caps text-on-surface">AI ORCHESTRATOR</div>
</div>
<div class="bg-surface-container border border-outline-variant/50 rounded-DEFAULT p-3 w-40 text-center">
<span class="material-symbols-outlined text-error mb-1">shield</span>
<div class="font-label-caps text-on-surface">RISK GATE</div>
</div>
</div>
<!-- Layer 4: Adapters & External -->
<div class="w-full flex justify-center gap-16 relative">
<div class="bg-surface-container-highest border border-outline-variant/30 rounded-DEFAULT p-3 w-32 text-center border-dashed">
<div class="font-label-caps text-on-surface-variant text-[10px]">VENUE ADAPTER</div>
<div class="font-body-sm text-on-surface mt-1">Binance</div>
</div>
<div class="bg-surface-container-highest border border-outline-variant/30 rounded-DEFAULT p-3 w-32 text-center border-dashed">
<div class="font-label-caps text-on-surface-variant text-[10px]">VENUE ADAPTER</div>
<div class="font-body-sm text-on-surface mt-1">Nobitex</div>
</div>
</div>
<!-- Event Bus Connector (Horizontal) -->
<div class="absolute bottom-10 w-3/4 h-px bg-gradient-to-r from-transparent via-[#0EA5E9]/50 to-transparent"></div>
<div class="absolute bottom-6 right-10 bg-surface-container border border-[#0EA5E9]/30 rounded-DEFAULT p-2 flex items-center gap-2">
<span class="material-symbols-outlined text-[#0EA5E9] text-[16px]">analytics</span>
<div class="font-label-caps text-on-surface text-[10px]">OBSERVABILITY BUS</div>
</div>
</div>
</div>
</section>
<!-- Right Sidebar: State Machines -->
<aside class="flex flex-col gap-4 h-full overflow-y-auto custom-scrollbar pr-2">
<!-- Entitlement State -->
<div class="glass-surface rounded-xl p-4">
<h3 class="font-title-md text-body-sm font-medium text-on-surface mb-3 flex items-center gap-2">
<span class="material-symbols-outlined text-[18px] text-primary">verified_user</span>
                    Entitlement State
                </h3>
<div class="flex flex-col gap-2">
<div class="flex items-center justify-between p-2 rounded bg-surface-container-highest border border-outline-variant/20">
<span class="font-body-sm text-on-surface-variant">Pending</span>
<span class="font-label-caps text-on-surface monospaced">142</span>
</div>
<div class="flex items-center justify-between p-2 rounded bg-primary/10 border border-primary/30">
<span class="font-body-sm text-primary flex items-center gap-1"><span class="w-1.5 h-1.5 rounded-full bg-primary"></span> Active</span>
<span class="font-label-caps text-primary monospaced">8,241</span>
</div>
<div class="flex items-center justify-between p-2 rounded bg-surface-container-highest border border-outline-variant/20">
<span class="font-body-sm text-on-surface-variant">Grace Period</span>
<span class="font-label-caps text-on-surface monospaced">38</span>
</div>
<div class="flex items-center justify-between p-2 rounded bg-surface-container-highest border border-outline-variant/20">
<span class="font-body-sm text-on-surface-variant">Expired</span>
<span class="font-label-caps text-on-surface monospaced">1,105</span>
</div>
</div>
</div>
<!-- Order Lifecycle -->
<div class="glass-surface rounded-xl p-4">
<h3 class="font-title-md text-body-sm font-medium text-on-surface mb-3 flex items-center gap-2">
<span class="material-symbols-outlined text-[18px] text-[#0EA5E9]">cycle</span>
                    Order Lifecycle (1m)
                </h3>
<div class="space-y-1 relative before:absolute before:inset-y-2 before:left-2.5 before:w-px before:bg-outline-variant/30">
<div class="flex items-center gap-3 relative z-10">
<div class="w-5 h-5 rounded-full bg-surface border border-outline-variant/50 flex items-center justify-center shrink-0"><div class="w-1.5 h-1.5 rounded-full bg-on-surface-variant"></div></div>
<div class="flex-1 flex justify-between items-center py-1">
<span class="font-body-sm text-on-surface-variant text-[12px]">Drafted</span>
<span class="font-label-caps monospaced text-on-surface">450</span>
</div>
</div>
<div class="flex items-center gap-3 relative z-10">
<div class="w-5 h-5 rounded-full bg-surface border border-[#0EA5E9]/50 flex items-center justify-center shrink-0"><div class="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]"></div></div>
<div class="flex-1 flex justify-between items-center py-1">
<span class="font-body-sm text-[#0EA5E9] text-[12px]">Validated</span>
<span class="font-label-caps monospaced text-[#0EA5E9]">412</span>
</div>
</div>
<div class="flex items-center gap-3 relative z-10">
<div class="w-5 h-5 rounded-full bg-surface border border-outline-variant/50 flex items-center justify-center shrink-0"><div class="w-1.5 h-1.5 rounded-full bg-on-surface-variant"></div></div>
<div class="flex-1 flex justify-between items-center py-1">
<span class="font-body-sm text-on-surface-variant text-[12px]">Submitted</span>
<span class="font-label-caps monospaced text-on-surface">390</span>
</div>
</div>
<div class="flex items-center gap-3 relative z-10">
<div class="w-5 h-5 rounded-full bg-surface border border-emerald-500/50 flex items-center justify-center shrink-0"><div class="w-1.5 h-1.5 rounded-full bg-emerald-500"></div></div>
<div class="flex-1 flex justify-between items-center py-1">
<span class="font-body-sm text-emerald-500 text-[12px]">Filled</span>
<span class="font-label-caps monospaced text-emerald-500">385</span>
</div>
</div>
</div>
</div>
<!-- Risk Gate Logic -->
<div class="glass-surface rounded-xl p-4">
<h3 class="font-title-md text-body-sm font-medium text-on-surface mb-3 flex items-center gap-2">
<span class="material-symbols-outlined text-[18px] text-error">policy</span>
                    Risk Gate Evaluation
                </h3>
<div class="bg-[#000000] border border-[#27272A] rounded p-3 font-mono text-[11px] leading-relaxed overflow-x-auto text-on-surface-variant">
<span class="text-[#D4AF37]">ALLOW IF</span> (<br/>
                      <span class="text-[#0EA5E9]">user.active</span> == true &amp;&amp;<br/>
                      <span class="text-[#0EA5E9]">entitlement.tier</span> &gt;= 'PREMIUM' &amp;&amp;<br/>
                      <span class="text-[#0EA5E9]">venue.verified</span> == true &amp;&amp;<br/>
                      <span class="text-error">risk.score</span> &lt; 85<br/>
                    );
                </div>
<div class="mt-3 flex justify-between items-center border-t border-outline-variant/20 pt-2">
<span class="font-label-caps text-on-surface-variant text-[10px]">EVAL RATE</span>
<span class="font-label-caps text-on-surface monospaced">2.4ms avg</span>
</div>
</div>
<!-- Subscription Engine Widget -->
<div class="glass-surface rounded-xl p-4 mt-auto">
<div class="flex justify-between items-center mb-3">
<h3 class="font-label-caps text-on-surface-variant">SUB ENGINE</h3>
<span class="text-[10px] font-mono text-[#0EA5E9]">StoreKit/Play Ready</span>
</div>
<div class="flex bg-surface-container rounded-lg p-1 border border-outline-variant/30 text-[11px] font-medium text-on-surface-variant">
<div class="flex-1 text-center py-1 rounded bg-surface border border-outline-variant/50 text-on-surface shadow-sm cursor-pointer">7d</div>
<div class="flex-1 text-center py-1 rounded hover:text-on-surface cursor-pointer transition-colors">1m</div>
<div class="flex-1 text-center py-1 rounded hover:text-on-surface cursor-pointer transition-colors">3m</div>
<div class="flex-1 text-center py-1 rounded hover:text-on-surface cursor-pointer transition-colors">6m</div>
<div class="flex-1 text-center py-1 rounded hover:text-on-surface cursor-pointer transition-colors">1y</div>
</div>
</div>
</aside>
</main>
<!-- Footer (Generated from JSON guidance - simplified for app shell context) -->
<footer class="bg-surface-container-lowest dark:bg-surface-container-lowest border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center px-margin-desktop py-4 gap-md w-full text-body-sm">
<div class="font-title-md text-[14px] font-bold text-on-surface">© 2024 IranCoin Premium. Control Plane.</div>
<div class="flex gap-4">
<a class="text-on-surface-variant hover:text-on-surface transition-colors font-body-sm text-[12px]" href="#">Audit Logs</a>
<a class="text-on-surface-variant hover:text-on-surface transition-colors font-body-sm text-[12px]" href="#">Compliance</a>
<a class="text-on-surface-variant hover:text-on-surface transition-colors font-body-sm text-[12px]" href="#">System Status</a>
</div>
</footer>
<style>
        /* Custom scrollbar for a cleaner look in the app */
        .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #27272A;
            border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #38342b;
        }
    </style>
`;
export default function Part2Page() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);
  return (
    <div className="min-h-screen bg-[#0A0A0B]">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
