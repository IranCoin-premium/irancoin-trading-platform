// Auto-generated from Stitch Part 3 - IranCoin Premium
// Source: IranCoin-premium/prompts Part 3
"use client";
import { useEffect } from "react";
const html = `
<!-- Top Navigation -->
<header class="bg-surface/60 dark:bg-surface/60 backdrop-blur-md text-primary dark:text-primary font-body-lg text-body-lg docked full-width top-0 sticky z-50 border-b border-outline-variant/30 shadow-sm flex justify-between items-center px-margin-desktop py-base max-w-[1440px] mx-auto w-full">
<div class="flex items-center gap-sm">
<img alt="IranCoin Premium Logo" class="h-8 w-auto" src="https://lh3.googleusercontent.com/aida/AEtjO1XYgPReCm5CsYIdl5kQll02COL7PPU0sjzGPgvAV0JN9BP5Ff5UEAtKWQVZMieAZtSX0cd62bKj_YeUpOrePc-OEf_y7Q9Slv879dO3-CahboOVkGRuiEmY4dNvD5OhUq4BMgsowAhZHetqUuOWe3dNddzMGZXqyAMschykM8U_pK7mbVPMdpGfH0Ek7OM0rFugkuX6_5BpnFIKAWmGVlXrHE5Qr7zGRLYtDi_kF6AvC0ZVS0BaXHCLROk"/>
<span class="font-display-lg text-display-lg font-bold text-primary dark:text-primary hidden md:block" style="font-size: 24px; line-height: 32px;">IranCoin Premium</span>
</div>
<nav class="hidden md:flex items-center gap-md">
<a class="text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-variant/50 transition-all scale-95 duration-200 ease-in-out px-2 py-1 rounded" href="#">Home</a>
<a class="text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-variant/50 transition-all scale-95 duration-200 ease-in-out px-2 py-1 rounded" href="#">Markets</a>
<a class="text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-variant/50 transition-all scale-95 duration-200 ease-in-out px-2 py-1 rounded" href="#">Research</a>
<a class="text-primary border-b-2 border-primary pb-1 hover:bg-surface-variant/50 transition-all scale-95 duration-200 ease-in-out px-2" href="#">Design System</a>
<a class="text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-variant/50 transition-all scale-95 duration-200 ease-in-out px-2 py-1 rounded" href="#">Support</a>
</nav>
<div class="flex items-center gap-sm">
<button class="text-on-surface-variant hover:text-primary transition-colors p-1">
<span class="material-symbols-outlined">language</span>
</button>
<span class="text-body-sm text-on-surface-variant hidden md:block">EN/FA</span>
<button class="text-on-surface-variant hover:text-primary transition-colors p-1">
<span class="material-symbols-outlined">account_circle</span>
</button>
<button class="bg-primary text-on-primary font-title-md text-title-md px-4 py-2 rounded-DEFAULT hover:bg-primary-fixed-dim transition-colors hidden md:block text-sm">Sign In</button>
</div>
</header>
<main class="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-xl space-y-xl">
<!-- Header -->
<section class="space-y-sm">
<h1 class="font-display-lg text-display-lg text-on-surface">Design System <span class="text-primary">Aureus Intelligence</span></h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">The foundational visual language and components for the IranCoin Premium platform. Designed for precision, speed, and trust in elite digital asset trading.</p>
</section>
<!-- Color Architecture -->
<section class="space-y-md">
<h2 class="font-headline-lg text-headline-lg text-on-surface border-b border-outline-variant/30 pb-2">Color Architecture</h2>
<div class="grid grid-cols-1 md:grid-cols-4 gap-md">
<!-- Swatch: Surface -->
<div class="glass-panel p-sm rounded-lg flex flex-col gap-sm">
<div class="h-24 rounded bg-[#0A0A0B] border border-outline-variant/30 w-full"></div>
<div>
<div class="font-title-md text-title-md text-on-surface">Canvas / Level 0</div>
<div class="font-body-sm text-body-sm text-on-surface-variant">#0A0A0B • bg-background</div>
</div>
</div>
<!-- Swatch: Surface 1 -->
<div class="glass-panel p-sm rounded-lg flex flex-col gap-sm">
<div class="h-24 rounded bg-surface border border-outline-variant/30 w-full"></div>
<div>
<div class="font-title-md text-title-md text-on-surface">Surface / Level 1</div>
<div class="font-body-sm text-body-sm text-on-surface-variant">#16130B • bg-surface</div>
</div>
</div>
<!-- Swatch: Gold Accent -->
<div class="glass-panel p-sm rounded-lg flex flex-col gap-sm">
<div class="h-24 rounded bg-primary w-full"></div>
<div>
<div class="font-title-md text-title-md text-on-surface">Gold Accent</div>
<div class="font-body-sm text-body-sm text-on-surface-variant">#D4AF37 • bg-primary-container</div>
</div>
</div>
<!-- Swatch: Tech Blue -->
<div class="glass-panel p-sm rounded-lg flex flex-col gap-sm">
<div class="h-24 rounded bg-[#0EA5E9] w-full"></div>
<div>
<div class="font-title-md text-title-md text-on-surface">Interactive / Action</div>
<div class="font-body-sm text-body-sm text-on-surface-variant">#0EA5E9 • Tech Blue</div>
</div>
</div>
</div>
</section>
<!-- Typography -->
<section class="space-y-md">
<h2 class="font-headline-lg text-headline-lg text-on-surface border-b border-outline-variant/30 pb-2">Typography &amp; BiDi</h2>
<div class="grid grid-cols-1 lg:grid-cols-2 gap-lg">
<div class="glass-panel p-md rounded-lg space-y-md">
<div class="space-y-1">
<div class="font-label-caps text-label-caps text-primary">Display Large</div>
<div class="font-display-lg text-display-lg">Precision Trading</div>
</div>
<div class="space-y-1">
<div class="font-label-caps text-label-caps text-primary">Headline Large</div>
<div class="font-headline-lg text-headline-lg">Market Overview</div>
</div>
<div class="space-y-1">
<div class="font-label-caps text-label-caps text-primary">Title Medium</div>
<div class="font-title-md text-title-md">BTC/USDT Volume</div>
</div>
<div class="space-y-1">
<div class="font-label-caps text-label-caps text-primary">Body Large</div>
<div class="font-body-lg text-body-lg text-on-surface-variant">Advanced algorithms process market data in real-time to provide actionable insights for premium accounts.</div>
</div>
</div>
<div class="glass-panel p-md rounded-lg space-y-md flex flex-col justify-center bg-surface-container-low">
<div class="font-label-caps text-label-caps text-primary mb-2">BiDi Isolation Example</div>
<div class="flex justify-between items-center p-sm bg-surface rounded border border-outline-variant/20">
<div class="flex flex-col">
<span class="font-title-md text-title-md" dir="ltr"><bdi>BTC/USDT</bdi></span>
<span class="font-body-sm text-body-sm text-on-surface-variant" dir="rtl">بیت‌کوین / تتر</span>
</div>
<div class="flex flex-col items-end">
<span class="font-title-md text-title-md text-[#22c55e]" dir="ltr">$64,230.50</span>
<span class="font-body-sm text-body-sm text-[#22c55e]" dir="ltr">+2.4%</span>
</div>
</div>
<div class="flex justify-between items-center p-sm bg-surface rounded border border-outline-variant/20 mt-2">
<div class="flex flex-col">
<span class="font-title-md text-title-md" dir="ltr"><bdi>ETH/USDT</bdi></span>
<span class="font-body-sm text-body-sm text-on-surface-variant" dir="rtl">اتریوم / تتر</span>
</div>
<div class="flex flex-col items-end">
<span class="font-title-md text-title-md text-error" dir="ltr">$3,450.10</span>
<span class="font-body-sm text-body-sm text-error" dir="ltr">-0.8%</span>
</div>
</div>
</div>
</div>
</section>
<!-- Spacing, Elevation & Motion -->
<section class="space-y-md">
<h2 class="font-headline-lg text-headline-lg text-on-surface border-b border-outline-variant/30 pb-2">Layout &amp; Motion</h2>
<div class="grid grid-cols-1 lg:grid-cols-3 gap-md">
<!-- Spacing -->
<div class="glass-panel p-md rounded-lg space-y-sm">
<div class="font-title-md text-title-md text-primary">Grid &amp; Spacing</div>
<p class="font-body-sm text-body-sm text-on-surface-variant mb-4">Base 4px rhythmic spacing. Standard radius is 4px (rounded-lg).</p>
<div class="flex gap-2 items-end">
<div class="w-8 bg-surface-variant flex items-center justify-center text-xs" style="height: 16px;">16</div>
<div class="w-8 bg-surface-variant flex items-center justify-center text-xs" style="height: 24px;">24</div>
<div class="w-8 bg-surface-variant flex items-center justify-center text-xs" style="height: 40px;">40</div>
<div class="w-8 bg-surface-variant flex items-center justify-center text-xs" style="height: 48px;">48</div>
<div class="w-8 bg-surface-variant flex items-center justify-center text-xs" style="height: 64px;">64</div>
</div>
</div>
<!-- Elevation -->
<div class="glass-panel p-md rounded-lg space-y-sm relative overflow-hidden">
<div class="font-title-md text-title-md text-primary">Tonal Layering</div>
<div class="absolute inset-0 z-0 opacity-20" data-alt="Abstract dark metallic background with subtle reflections, very minimalist, high quality, dark mode, no text." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCWtXyYfxSxtutoteFWb60szDAlUMiAK-0Sny5yJqPIuOMiR5PTv3C6uAjpjo1H3XSq-1_ubRuyB5GDf4sdDoCiafExv3om7n5XodPQK5Qq8UHaFqD0_sMz1FWKBxLjUTvZucA9bV21ry3-Hv3s1mjI9W3ByeadTcP0KPE0t_xdwoODLp00fMZdl8-O0kbJWphT7W5YlKmZpfj6eI2N9iPJuuy6SHJjIZS49NtJmc3v54k_RxhhXoL4sTbY98SGUX7mdT2uZw1HM2Fa')"></div>
<div class="relative z-10 space-y-2 mt-4">
<div class="bg-background p-2 rounded border border-outline-variant/10 text-center font-body-sm text-body-sm">Level 0 Canvas</div>
<div class="bg-surface p-2 rounded border border-outline-variant/30 text-center font-body-sm text-body-sm ml-4 shadow-sm">Level 1 Surface</div>
<div class="glass-panel p-2 rounded text-center font-body-sm text-body-sm ml-8 shadow-md">Level 2 Glass</div>
</div>
</div>
<!-- Motion -->
<div class="glass-panel p-md rounded-lg space-y-sm">
<div class="font-title-md text-title-md text-primary">Motion Tiers</div>
<div class="space-y-3 mt-4">
<div class="flex justify-between items-center group cursor-pointer">
<span class="font-body-sm text-body-sm text-on-surface-variant">Tier 0 (Instant)</span>
<div class="w-4 h-4 bg-primary rounded-full group-hover:bg-[#0EA5E9] transition-none"></div>
</div>
<div class="flex justify-between items-center group cursor-pointer">
<span class="font-body-sm text-body-sm text-on-surface-variant">Tier 1 (Micro)</span>
<div class="w-4 h-4 bg-primary rounded-full group-hover:scale-125 transition-transform duration-200"></div>
</div>
<div class="flex justify-between items-center group cursor-pointer">
<span class="font-body-sm text-body-sm text-on-surface-variant">Tier 2 (Stately)</span>
<div class="w-8 h-4 bg-surface-variant rounded flex items-center p-1 group-hover:bg-primary-container transition-colors duration-500 ease-in-out">
<div class="w-2 h-2 bg-on-surface rounded-full group-hover:translate-x-4 transition-transform duration-500 ease-in-out"></div>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- Components -->
<section class="space-y-md">
<h2 class="font-headline-lg text-headline-lg text-on-surface border-b border-outline-variant/30 pb-2">UI Component Library</h2>
<div class="grid grid-cols-1 md:grid-cols-2 gap-lg">
<!-- Controls -->
<div class="glass-panel p-md rounded-lg space-y-md">
<h3 class="font-title-md text-title-md text-primary mb-4">Controls &amp; Inputs</h3>
<div class="space-y-4">
<div class="flex gap-4">
<button class="bg-primary-container text-on-primary-container font-title-md text-title-md px-6 py-2 rounded-DEFAULT hover:bg-primary transition-colors flex-1 text-center">Execute Trade</button>
<button class="bg-transparent border border-primary text-primary font-title-md text-title-md px-6 py-2 rounded-DEFAULT hover:bg-primary/10 transition-colors flex-1 text-center">Cancel</button>
</div>
<div class="relative">
<input class="w-full bg-[#000000] border border-outline-variant/50 rounded-DEFAULT px-4 py-3 text-on-surface font-body-lg focus:outline-none focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] transition-all" placeholder="Enter amount..." type="text"/>
<span class="absolute right-3 top-3 text-on-surface-variant font-label-caps">USDT</span>
</div>
<div class="bg-[#000000] rounded-DEFAULT border border-outline-variant/30 p-1 flex">
<button class="flex-1 py-1 px-2 text-center text-sm font-title-md rounded bg-surface text-primary shadow">Market</button>
<button class="flex-1 py-1 px-2 text-center text-sm font-title-md text-on-surface-variant hover:text-on-surface transition-colors">Limit</button>
<button class="flex-1 py-1 px-2 text-center text-sm font-title-md text-on-surface-variant hover:text-on-surface transition-colors">Stop</button>
</div>
</div>
</div>
<!-- Cards -->
<div class="glass-panel p-md rounded-lg space-y-md">
<h3 class="font-title-md text-title-md text-primary mb-4">AI Agent Card</h3>
<div class="bg-surface/40 backdrop-blur-md border border-outline-variant/20 rounded-xl p-md relative overflow-hidden pulse-border">
<div class="absolute top-0 right-0 p-3">
<span class="flex h-2 w-2 relative">
<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0EA5E9] opacity-75"></span>
<span class="relative inline-flex rounded-full h-2 w-2 bg-[#0EA5E9]"></span>
</span>
</div>
<div class="flex items-start gap-sm mb-4">
<span class="material-symbols-outlined text-[#0EA5E9] text-3xl">smart_toy</span>
<div>
<h4 class="font-title-md text-title-md text-on-surface">Aureus Sentinel</h4>
<p class="font-body-sm text-body-sm text-on-surface-variant">Active monitoring &amp; execution</p>
</div>
</div>
<div class="bg-[#000000] rounded p-sm border border-outline-variant/30 font-mono text-xs text-on-surface-variant space-y-1">
<div>&gt; Analyzing pattern: Head &amp; Shoulders (87% conf)</div>
<div>&gt; Monitoring support level: $63,800</div>
<div class="text-[#0EA5E9]">&gt; Awaiting confirmation signal...</div>
</div>
</div>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="bg-surface-container-lowest dark:bg-surface-container-lowest text-primary dark:text-primary font-body-sm text-body-sm w-full mt-lg border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-start px-margin-desktop py-lg gap-md max-w-[1440px] mx-auto">
<div class="flex flex-col gap-2">
<span class="font-title-md text-title-md font-bold text-on-surface opacity-80 hover:opacity-100 transition-opacity">IranCoin Premium</span>
<p class="text-on-surface-variant">© 2024 IranCoin Premium. All rights reserved. Professional Trading Platform.</p>
</div>
<div class="flex flex-wrap gap-4 justify-start md:justify-end">
<a class="text-primary font-bold hover:text-secondary-fixed-dim transition-colors opacity-80 hover:opacity-100" href="#">Security Audits</a>
<a class="text-on-surface-variant hover:text-on-surface hover:text-secondary-fixed-dim transition-colors opacity-80 hover:opacity-100" href="#">Reserve Proofs</a>
<a class="text-on-surface-variant hover:text-on-surface hover:text-secondary-fixed-dim transition-colors opacity-80 hover:opacity-100" href="#">Compliance</a>
<a class="text-on-surface-variant hover:text-on-surface hover:text-secondary-fixed-dim transition-colors opacity-80 hover:opacity-100" href="#">Risk Disclosure</a>
<a class="text-on-surface-variant hover:text-on-surface hover:text-secondary-fixed-dim transition-colors opacity-80 hover:opacity-100" href="#">Privacy Policy</a>
<a class="text-on-surface-variant hover:text-on-surface hover:text-secondary-fixed-dim transition-colors opacity-80 hover:opacity-100" href="#">Terms of Service</a>
</div>
</footer>
`;
export default function Part3Page() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);
  return (
    <div className="min-h-screen bg-[#0A0A0B]">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
