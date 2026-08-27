// Auto-generated from Stitch Part 6 - IranCoin Premium
// Source: IranCoin-premium/prompts Part 6
"use client";
import { useEffect } from "react";
const html = `
<!-- TopNavBar -->
<header class="bg-surface/60 dark:bg-surface/60 backdrop-blur-md font-body-lg text-body-lg docked full-width top-0 sticky z-50 border-b border-outline-variant/30 shadow-sm transition-all duration-200">
<div class="flex justify-between items-center px-margin-desktop py-base max-w-[1440px] mx-auto w-full">
<div class="font-display-lg text-display-lg font-bold text-primary dark:text-primary tracking-tight">IranCoin Premium</div>
<nav class="hidden md:flex gap-md items-center">
<a class="text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-variant/50 px-xs py-base rounded scale-95 duration-200 ease-in-out" href="#">Home</a>
<a class="text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-variant/50 px-xs py-base rounded scale-95 duration-200 ease-in-out" href="#">Markets</a>
<a class="text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-variant/50 px-xs py-base rounded scale-95 duration-200 ease-in-out" href="#">Research</a>
<a class="text-primary border-b-2 border-primary pb-1 px-xs py-base scale-95 duration-200 ease-in-out" href="#">Security</a>
<a class="text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-variant/50 px-xs py-base rounded scale-95 duration-200 ease-in-out" href="#">Support</a>
</nav>
<div class="flex items-center gap-sm">
<button class="text-primary dark:text-primary hover:bg-surface-variant/50 p-xs rounded transition-all">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 0;">language</span>
</button>
<div class="text-body-sm text-on-surface-variant hidden md:block">EN/FA</div>
<button class="text-primary dark:text-primary hover:bg-surface-variant/50 p-xs rounded transition-all">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 0;">account_circle</span>
</button>
<button class="btn-gold font-label-caps px-sm py-xs rounded uppercase tracking-wider hidden md:block">Sign In</button>
</div>
</div>
</header>
<main class="flex-grow max-w-[1440px] mx-auto w-full px-margin-mobile md:px-margin-desktop py-xl space-y-xl">
<!-- Header Title -->
<div class="space-y-sm">
<h1 class="font-display-lg text-display-lg md:text-[64px] md:leading-[72px] text-on-surface">Frontend Architecture <br/><span class="text-primary-container">&amp; Design System</span></h1>
<p class="text-on-surface-variant max-w-2xl text-body-lg">A comprehensive overview of the Aureus Intelligence platform architecture, visual tokens, and core UI components designed for high-frequency trading environments.</p>
</div>
<!-- Section 1: Application Route Map -->
<section class="space-y-md relative">
<h2 class="font-headline-lg text-headline-lg text-on-surface border-b border-surface-container-high pb-xs">Application Route Map</h2>
<div class="glass-panel p-lg rounded-xl overflow-x-auto">
<div class="min-w-[1000px] relative font-label-caps text-on-surface-variant flex flex-col gap-xl">
<!-- Root -->
<div class="flex justify-center relative">
<div class="bg-surface px-sm py-xs border border-outline-variant rounded z-10">/ (Root)</div>
<div class="absolute w-[80%] h-px bg-surface-container-high top-[40px] left-[10%]"></div>
<div class="absolute w-px h-[40px] bg-surface-container-high top-[100%] left-1/2"></div>
</div>
<!-- L1 Routes -->
<div class="flex justify-between relative mt-sm">
<div class="flex flex-col items-center gap-sm relative w-1/5">
<div class="absolute w-px h-[40px] bg-surface-container-high bottom-[100%] left-1/2"></div>
<div class="bg-surface px-sm py-xs border border-outline-variant rounded z-10 w-full text-center">Marketing</div>
<div class="flex flex-col gap-xs text-[10px] w-full items-center text-on-surface-variant/70 border-l border-surface-container-high pl-xs">
<div>/pricing</div>
<div>/features</div>
<div>/technology</div>
<div>/security</div>
<div>/how-it-works</div>
</div>
</div>
<div class="flex flex-col items-center gap-sm relative w-1/5">
<div class="absolute w-px h-[40px] bg-surface-container-high bottom-[100%] left-1/2"></div>
<div class="bg-surface px-sm py-xs border border-outline-variant rounded z-10 w-full text-center">Company</div>
<div class="flex flex-col gap-xs text-[10px] w-full items-center text-on-surface-variant/70 border-l border-surface-container-high pl-xs">
<div>/about</div>
<div>/blog</div>
<div>/docs</div>
<div>/faq</div>
<div>/legal</div>
</div>
</div>
<div class="flex flex-col items-center gap-sm relative w-1/5">
<div class="absolute w-px h-[40px] bg-surface-container-high bottom-[100%] left-1/2"></div>
<div class="bg-primary/10 px-sm py-xs border border-primary/30 text-primary rounded z-10 w-full text-center pulse-blue">Auth</div>
<div class="flex flex-col gap-xs text-[10px] w-full items-center text-on-surface-variant/70 border-l border-surface-container-high pl-xs">
<div>/login</div>
<div>/register</div>
</div>
</div>
<div class="flex flex-col items-center gap-sm relative w-1/5">
<div class="absolute w-px h-[40px] bg-surface-container-high bottom-[100%] left-1/2"></div>
<div class="bg-surface px-sm py-xs border border-outline-variant rounded z-10 w-full text-center">App / Dashboard</div>
<div class="flex flex-col gap-xs text-[10px] w-full items-center text-on-surface-variant/70 border-l border-surface-container-high pl-xs">
<div>/dashboard</div>
<div>/dashboard/signals</div>
<div>/automation</div>
<div>/connections</div>
<div>/orders</div>
<div>/positions</div>
<div>/journal</div>
</div>
</div>
<div class="flex flex-col items-center gap-sm relative w-1/5">
<div class="absolute w-px h-[40px] bg-surface-container-high bottom-[100%] left-1/2"></div>
<div class="bg-surface px-sm py-xs border border-outline-variant rounded z-10 w-full text-center">Billing &amp; Support</div>
<div class="flex flex-col gap-xs text-[10px] w-full items-center text-on-surface-variant/70 border-l border-surface-container-high pl-xs">
<div>/subscription</div>
<div>/checkout</div>
<div>/support</div>
<div>/admin</div>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- Section 2: Visual Direction & Component Gallery -->
<section class="grid grid-cols-1 lg:grid-cols-12 gap-lg">
<!-- Left Column: Visual Direction -->
<div class="lg:col-span-4 space-y-md">
<h2 class="font-headline-lg text-headline-lg text-on-surface border-b border-surface-container-high pb-xs">Visual Direction</h2>
<div class="glass-panel p-md rounded-xl space-y-lg">
<!-- Typography -->
<div>
<h3 class="font-title-md text-title-md text-on-surface-variant mb-sm">Typography Scale</h3>
<div class="space-y-xs">
<div class="flex justify-between items-baseline border-b border-surface-container-highest pb-xs">
<span class="font-display-lg text-display-lg truncate max-w-[200px]">Display Lg</span>
<span class="font-body-sm text-on-surface-variant/50 mono-num">48px/700</span>
</div>
<div class="flex justify-between items-baseline border-b border-surface-container-highest pb-xs">
<span class="font-headline-lg text-headline-lg truncate max-w-[200px]">Headline Lg</span>
<span class="font-body-sm text-on-surface-variant/50 mono-num">32px/600</span>
</div>
<div class="flex justify-between items-baseline border-b border-surface-container-highest pb-xs">
<span class="font-title-md text-title-md truncate max-w-[200px]">Title Md</span>
<span class="font-body-sm text-on-surface-variant/50 mono-num">20px/500</span>
</div>
<div class="flex justify-between items-baseline border-b border-surface-container-highest pb-xs">
<span class="font-body-lg text-body-lg truncate max-w-[200px]">Body Lg</span>
<span class="font-body-sm text-on-surface-variant/50 mono-num">16px/400</span>
</div>
<div class="flex justify-between items-baseline border-b border-surface-container-highest pb-xs">
<span class="font-label-caps text-label-caps uppercase truncate max-w-[200px]">Label Caps</span>
<span class="font-body-sm text-on-surface-variant/50 mono-num">12px/600</span>
</div>
</div>
</div>
<!-- Colors -->
<div>
<h3 class="font-title-md text-title-md text-on-surface-variant mb-sm">Core Palette</h3>
<div class="grid grid-cols-2 gap-sm">
<div class="flex items-center gap-xs">
<div class="w-8 h-8 rounded bg-[#0A0A0B] border border-surface-container-highest"></div>
<div class="font-label-caps text-[10px]">Level 0<br/>#0A0A0B</div>
</div>
<div class="flex items-center gap-xs">
<div class="w-8 h-8 rounded bg-surface border border-surface-container-highest"></div>
<div class="font-label-caps text-[10px]">Level 1<br/>#161618</div>
</div>
<div class="flex items-center gap-xs">
<div class="w-8 h-8 rounded bg-primary-container border border-surface-container-highest"></div>
<div class="font-label-caps text-[10px]">Gold<br/>#D4AF37</div>
</div>
<div class="flex items-center gap-xs">
<div class="w-8 h-8 rounded bg-[#0EA5E9] border border-surface-container-highest"></div>
<div class="font-label-caps text-[10px]">Blue<br/>#0EA5E9</div>
</div>
</div>
</div>
<!-- Motion -->
<div>
<h3 class="font-title-md text-title-md text-on-surface-variant mb-sm">Cinematic Motion</h3>
<div class="space-y-xs font-body-sm text-on-surface-variant">
<div class="flex justify-between"><span>Tier 0 (Micro)</span> <span class="mono-num">200ms</span></div>
<div class="flex justify-between"><span>Tier 1 (Layout)</span> <span class="mono-num">400ms</span></div>
<div class="flex justify-between"><span>Tier 2 (Modal)</span> <span class="mono-num">600ms</span></div>
<div class="flex justify-between"><span>Easing</span> <span>ease-out-expo</span></div>
</div>
</div>
</div>
</div>
<!-- Right Column: Component Gallery -->
<div class="lg:col-span-8 space-y-md">
<h2 class="font-headline-lg text-headline-lg text-on-surface border-b border-surface-container-high pb-xs">Component Gallery</h2>
<div class="grid grid-cols-1 md:grid-cols-2 gap-md">
<!-- Signal Card -->
<div class="glass-panel p-md rounded-xl space-y-sm hover:border-outline-variant transition-colors">
<div class="flex justify-between items-start">
<div class="flex items-center gap-xs">
<span class="material-symbols-outlined text-error" style="font-variation-settings: 'FILL' 1;">trending_down</span>
<span class="font-title-md text-title-md font-bold text-on-surface">BTC/USDT</span>
</div>
<span class="font-label-caps text-on-surface-variant mono-num">14:02:45 UTC</span>
</div>
<div class="flex gap-sm items-end">
<div class="font-display-lg text-display-lg text-error mono-num">SHORT</div>
<div class="font-body-sm text-on-surface-variant pb-2">Entry: <span class="text-on-surface mono-num">64,230.50</span></div>
</div>
<div class="flex justify-between items-center border-t border-surface-container-highest pt-sm">
<div class="font-label-caps text-on-surface-variant">Risk: High</div>
<div class="font-label-caps text-primary-container">Confidence: 87%</div>
</div>
</div>
<!-- AI Analysis UI -->
<div class="glass-panel p-md rounded-xl space-y-sm relative overflow-hidden">
<div class="absolute inset-0 bg-[#0EA5E9]/5 pulse-blue pointer-events-none"></div>
<div class="flex items-center gap-xs text-[#0EA5E9] font-label-caps mb-sm">
<span class="material-symbols-outlined text-[16px]">memory</span>
                            Consensus Engine Active
                        </div>
<div class="space-y-xs">
<div class="flex justify-between items-center text-body-sm">
<span class="text-on-surface-variant">Agent Alpha (Momentum)</span>
<span class="text-secondary mono-num">Bullish</span>
</div>
<div class="sparkline mb-xs"></div>
<div class="flex justify-between items-center text-body-sm">
<span class="text-on-surface-variant">Agent Beta (Order Flow)</span>
<span class="text-error mono-num">Bearish</span>
</div>
<div class="sparkline mb-xs" style="background: linear-gradient(90deg, transparent, rgba(255,180,171,0.5), transparent);"></div>
<div class="flex justify-between items-center text-body-sm">
<span class="text-on-surface-variant">Agent Gamma (Sentiment)</span>
<span class="text-secondary mono-num">Neutral</span>
</div>
</div>
</div>
<!-- Button & Form System -->
<div class="glass-panel p-md rounded-xl space-y-md md:col-span-2">
<h3 class="font-title-md text-title-md text-on-surface-variant">Controls &amp; Inputs</h3>
<div class="flex flex-wrap gap-sm">
<button class="btn-gold font-label-caps px-md py-sm rounded uppercase tracking-wider">Primary Action</button>
<button class="btn-ghost font-label-caps px-md py-sm rounded uppercase tracking-wider">Secondary Action</button>
<button class="bg-surface-container-highest text-on-surface-variant font-label-caps px-md py-sm rounded uppercase tracking-wider cursor-not-allowed opacity-50">Disabled</button>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-sm pt-sm border-t border-surface-container-highest">
<div class="space-y-xs glow-blue">
<label class="font-label-caps text-on-surface-variant">API Key</label>
<input class="w-full bg-[#000000] border border-surface-container-highest rounded p-sm text-on-surface focus:outline-none focus:border-[#0EA5E9] transition-colors mono-num" readonly="" type="password" value="********************"/>
</div>
<div class="flex items-end">
<button class="btn-ghost w-full font-label-caps px-md py-[14px] rounded uppercase tracking-wider flex items-center justify-center gap-xs">
<span class="material-symbols-outlined text-[18px]">fingerprint</span>
                                    Authenticate via Passkey
                                </button>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- Section 3: Interactive Flows Showcase -->
<section class="space-y-md pt-lg">
<h2 class="font-headline-lg text-headline-lg text-on-surface border-b border-surface-container-high pb-xs">Interactive Flows Showcase</h2>
<div class="grid grid-cols-1 lg:grid-cols-3 gap-md">
<!-- Product Wizard -->
<div class="glass-panel p-md rounded-xl space-y-md col-span-1 lg:col-span-2">
<h3 class="font-title-md text-title-md text-on-surface">Configuration Wizard</h3>
<div class="flex gap-xs items-center mb-md">
<div class="h-1 flex-grow bg-primary-container rounded-full"></div>
<div class="h-1 flex-grow bg-primary-container rounded-full"></div>
<div class="h-1 flex-grow bg-surface-container-highest rounded-full"></div>
<div class="h-1 flex-grow bg-surface-container-highest rounded-full"></div>
</div>
<div class="grid grid-cols-2 gap-sm">
<div class="border border-primary-container bg-primary-container/5 rounded p-sm cursor-pointer transition-all">
<span class="material-symbols-outlined text-primary-container mb-xs">rocket_launch</span>
<div class="font-title-md text-on-surface">Auto-Trading</div>
<div class="font-body-sm text-on-surface-variant text-xs">AI executes directly.</div>
</div>
<div class="border border-surface-container-highest hover:border-outline-variant bg-surface rounded p-sm cursor-pointer transition-all">
<span class="material-symbols-outlined text-on-surface-variant mb-xs">notifications_active</span>
<div class="font-title-md text-on-surface">Signal Only</div>
<div class="font-body-sm text-on-surface-variant text-xs">Manual execution required.</div>
</div>
</div>
</div>
<!-- Pricing / Term Selector -->
<div class="glass-panel p-md rounded-xl space-y-md flex flex-col justify-between">
<div>
<h3 class="font-title-md text-title-md text-on-surface mb-xs">Subscription Term</h3>
<div class="flex bg-[#000000] border border-surface-container-highest rounded p-1 font-label-caps text-on-surface-variant relative">
<!-- Glass slider bg -->
<div class="absolute left-1 top-1 bottom-1 w-[20%] bg-surface-variant rounded border border-outline-variant/30 shadow-sm z-0"></div>
<button class="flex-1 py-xs z-10 text-on-surface">7D</button>
<button class="flex-1 py-xs z-10 hover:text-on-surface">1M</button>
<button class="flex-1 py-xs z-10 hover:text-on-surface">3M</button>
<button class="flex-1 py-xs z-10 hover:text-on-surface">6M</button>
<button class="flex-1 py-xs z-10 hover:text-on-surface">1Y</button>
</div>
</div>
<div>
<div class="font-display-lg text-display-lg text-on-surface">$2,499<span class="font-body-sm text-on-surface-variant">/mo</span></div>
<button class="btn-gold w-full font-label-caps px-md py-sm rounded uppercase tracking-wider mt-sm">Confirm Selection</button>
</div>
</div>
<!-- Market Cards Grid -->
<div class="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-sm">
<div class="glass-panel p-sm rounded text-center cursor-pointer hover:bg-surface-variant/30 transition-colors">
<span class="material-symbols-outlined text-on-surface-variant text-[32px] mb-xs">currency_exchange</span>
<div class="font-label-caps text-on-surface">Spot Market</div>
</div>
<div class="glass-panel p-sm rounded border-primary-container/50 bg-primary-container/5 text-center cursor-pointer transition-colors">
<span class="material-symbols-outlined text-primary-container text-[32px] mb-xs">query_stats</span>
<div class="font-label-caps text-primary-container">Futures (Active)</div>
</div>
<div class="glass-panel p-sm rounded text-center cursor-pointer hover:bg-surface-variant/30 transition-colors">
<span class="material-symbols-outlined text-on-surface-variant text-[32px] mb-xs">mediation</span>
<div class="font-label-caps text-on-surface">Hybrid</div>
</div>
<div class="glass-panel p-sm rounded text-center cursor-pointer hover:bg-surface-variant/30 transition-colors">
<span class="material-symbols-outlined text-on-surface-variant text-[32px] mb-xs">dashboard_customize</span>
<div class="font-label-caps text-on-surface">Custom Synth</div>
</div>
</div>
</div>
</section>
<!-- Technical Specs Appendix -->
<section class="grid grid-cols-1 md:grid-cols-2 gap-md border-t border-surface-container-high pt-lg text-body-sm text-on-surface-variant">
<div>
<h4 class="font-title-md text-on-surface mb-xs">Responsive Breakpoints</h4>
<ul class="space-y-xs mono-num">
<li><span class="text-on-surface w-16 inline-block">Mobile:</span> 320px - 767px (4 cols)</li>
<li><span class="text-on-surface w-16 inline-block">Tablet:</span> 768px - 1023px (8 cols)</li>
<li><span class="text-on-surface w-16 inline-block">Desktop:</span> 1024px+ (12 cols, max-w 1440px)</li>
</ul>
</div>
<div>
<h4 class="font-title-md text-on-surface mb-xs">Reduced Motion Fallbacks</h4>
<p>When user prefers reduced motion (<code>@media (prefers-reduced-motion: reduce)</code>), cinematic easing tokens revert to 0ms instant transitions. Sparklines and pulse borders degrade gracefully to static active states.</p>
</div>
</section>
</main>
<!-- Footer -->
<footer class="bg-surface-container-lowest dark:bg-surface-container-lowest font-body-sm text-body-sm text-primary dark:text-primary w-full mt-lg border-t border-outline-variant/20 flat no shadows opacity-80 hover:opacity-100 transition-opacity">
<div class="flex flex-col md:flex-row justify-between items-start px-margin-desktop py-lg gap-md max-w-[1440px] mx-auto w-full">
<div class="font-title-md text-title-md font-bold text-on-surface">© 2024 IranCoin Premium. All rights reserved. Professional Trading Platform.</div>
<nav class="flex flex-wrap gap-md">
<a class="text-on-surface-variant hover:text-on-surface hover:text-secondary-fixed-dim transition-colors" href="#">Security Audits</a>
<a class="text-on-surface-variant hover:text-on-surface hover:text-secondary-fixed-dim transition-colors" href="#">Reserve Proofs</a>
<a class="text-on-surface-variant hover:text-on-surface hover:text-secondary-fixed-dim transition-colors" href="#">Compliance</a>
<a class="text-on-surface-variant hover:text-on-surface hover:text-secondary-fixed-dim transition-colors" href="#">Risk Disclosure</a>
<a class="text-on-surface-variant hover:text-on-surface hover:text-secondary-fixed-dim transition-colors" href="#">Privacy Policy</a>
<a class="text-on-surface-variant hover:text-on-surface hover:text-secondary-fixed-dim transition-colors" href="#">Terms of Service</a>
</nav>
</div>
</footer>
`;
export default function Part6Page() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);
  return (
    <div className="min-h-screen bg-[#0A0A0B]">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
