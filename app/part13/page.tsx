// Auto-generated from Stitch Part 13 - IranCoin Premium
// Source: IranCoin-premium/prompts Part 13
"use client";
import { useEffect } from "react";
const html = `
<!-- Background Pattern -->
<div class="fixed inset-0 pointer-events-none opacity-[0.03]" style="background-image: radial-gradient(#d4af37 1px, transparent 1px); background-size: 24px 24px;"></div>
<!-- Top Nav Container mapped from Shared Components JSON -->
<header class="bg-surface/60 dark:bg-surface/60 backdrop-blur-md full-width top-0 sticky z-50 border-b border-outline-variant/30 shadow-sm flex justify-between items-center px-margin-desktop py-base max-w-[1440px] mx-auto w-full">
<!-- Brand -->
<div class="flex items-center gap-sm">
<img alt="IranCoin Premium" class="w-10 h-10 object-contain rounded-sm" src="https://lh3.googleusercontent.com/aida/AEtjO1XYgPReCm5CsYIdl5kQll02COL7PPU0sjzGPgvAV0JN9BP5Ff5UEAtKWQVZMieAZtSX0cd62bKj_YeUpOrePc-OEf_y7Q9Slv879dO3-CahboOVkGRuiEmY4dNvD5OhUq4BMgsowAhZHetqUuOWe3dNddzMGZXqyAMschykM8U_pK7mbVPMdpGfH0Ek7OM0rFugkuX6_5BpnFIKAWmGVlXrHE5Qr7zGRLYtDi_kF6AvC0ZVS0BaXHCLROk"/>
<span class="font-display-lg text-display-lg font-bold text-primary dark:text-primary tracking-tight text-[24px]">IranCoin Premium</span>
</div>
<!-- Navigation Links (Explore would be active, but this is a docs page, so none is strictly active based on the array, we'll leave inactive styles) -->
<nav class="hidden md:flex items-center gap-md">
<a class="text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-variant/50 transition-all rounded px-3 py-1 font-body-lg text-body-lg" href="#">Home</a>
<a class="text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-variant/50 transition-all rounded px-3 py-1 font-body-lg text-body-lg" href="#">Markets</a>
<a class="text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-variant/50 transition-all rounded px-3 py-1 font-body-lg text-body-lg" href="#">Research</a>
<a class="text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-variant/50 transition-all rounded px-3 py-1 font-body-lg text-body-lg" href="#">Security</a>
<a class="text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-variant/50 transition-all rounded px-3 py-1 font-body-lg text-body-lg" href="#">Support</a>
</nav>
<!-- Actions -->
<div class="flex items-center gap-sm">
<button class="hidden md:flex items-center text-on-surface-variant hover:text-primary transition-colors scale-95 duration-200 ease-in-out font-label-caps text-label-caps">EN/FA</button>
<button class="bg-primary-container text-on-primary-container px-4 py-2 rounded font-label-caps text-label-caps hover:bg-primary transition-colors flex items-center gap-2">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">account_circle</span>
                Sign In
            </button>
</div>
</header>
<main class="flex-1 w-full max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-lg flex flex-col gap-xl">
<!-- Page Header -->
<section class="flex flex-col gap-sm border-l-2 border-primary pl-md">
<p class="font-label-caps text-label-caps text-primary tracking-widest uppercase">Documentation / Part 13</p>
<h1 class="font-display-lg text-display-lg text-on-surface">Frontend Architecture &amp; Design System Engineering</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Aureus Intelligence: Technical specifications for the premium interface layer, detailing semantic token structures, theme resolution, and kinetic motion states.</p>
</section>
<!-- Bento Grid Layout for Technical Specs -->
<div class="grid grid-cols-1 md:grid-cols-12 gap-gutter">
<!-- Semantic Token System (Spans 8 columns) -->
<section class="glass-panel rounded-xl p-md md:col-span-8 flex flex-col gap-md metallic-border relative overflow-hidden group hover:tech-glow transition-shadow duration-500">
<div class="absolute top-0 right-0 w-32 h-32 bg-primary-container opacity-[0.02] rounded-full blur-3xl group-hover:opacity-[0.05] transition-opacity"></div>
<div class="flex justify-between items-start">
<h2 class="font-title-md text-title-md text-primary flex items-center gap-2">
<span class="material-symbols-outlined">token</span>
                        Semantic Token System
                    </h2>
<span class="font-mono text-xs text-on-surface-variant bg-surface-container px-2 py-1 rounded">Req: 13.001 / 13.002</span>
</div>
<p class="font-body-sm text-body-sm text-on-surface-variant mb-2">Mapping of raw hex constraints to functional UI layers.</p>
<div class="grid grid-cols-2 md:grid-cols-4 gap-sm">
<!-- Token Swatch -->
<div class="bg-surface-container rounded border border-outline-variant/30 p-3 flex flex-col gap-2">
<div class="h-10 w-full rounded bg-surface-container-low border border-outline-variant/50"></div>
<div class="flex flex-col">
<span class="font-mono text-[10px] text-primary">surface-container-low</span>
<span class="font-mono text-[10px] text-on-surface-variant">#1f1b13</span>
</div>
</div>
<!-- Token Swatch -->
<div class="bg-surface-container rounded border border-outline-variant/30 p-3 flex flex-col gap-2">
<div class="h-10 w-full rounded bg-surface-container border border-outline-variant/50"></div>
<div class="flex flex-col">
<span class="font-mono text-[10px] text-primary">surface-container</span>
<span class="font-mono text-[10px] text-on-surface-variant">#231f17</span>
</div>
</div>
<!-- Token Swatch -->
<div class="bg-surface-container rounded border border-outline-variant/30 p-3 flex flex-col gap-2">
<div class="h-10 w-full rounded bg-primary-fixed border border-primary/20"></div>
<div class="flex flex-col">
<span class="font-mono text-[10px] text-primary">primary-fixed</span>
<span class="font-mono text-[10px] text-on-surface-variant">#ffe088</span>
</div>
</div>
<!-- Token Swatch -->
<div class="bg-surface-container rounded border border-outline-variant/30 p-3 flex flex-col gap-2">
<div class="h-10 w-full rounded bg-tech-blue border border-tech-blue/20 opacity-80"></div>
<div class="flex flex-col">
<span class="font-mono text-[10px] text-tech-blue">tech-blue (Logic)</span>
<span class="font-mono text-[10px] text-on-surface-variant">#0EA5E9</span>
</div>
</div>
</div>
</section>
<!-- Theme Engine Diagram (Spans 4 columns) -->
<section class="glass-panel rounded-xl p-md md:col-span-4 flex flex-col gap-md metallic-border relative">
<div class="flex justify-between items-start">
<h2 class="font-title-md text-title-md text-primary flex items-center gap-2">
<span class="material-symbols-outlined">contrast</span>
                        Theme Engine
                    </h2>
<span class="font-mono text-xs text-on-surface-variant bg-surface-container px-2 py-1 rounded">Req: 13.003</span>
</div>
<div class="flex-1 flex flex-col justify-center gap-4 py-4">
<!-- Minimalist Diagram -->
<div class="flex items-center justify-between border border-outline-variant/40 rounded p-2 bg-surface-container-lowest">
<span class="font-mono text-xs text-on-surface">Raw Tokens</span>
<span class="material-symbols-outlined text-outline text-sm">arrow_forward</span>
</div>
<div class="flex gap-2">
<div class="flex-1 border border-outline-variant/40 rounded p-2 bg-white flex flex-col items-center opacity-30 cursor-not-allowed">
<span class="material-symbols-outlined text-black text-sm">light_mode</span>
<span class="font-mono text-[10px] text-black">Light Res</span>
</div>
<div class="flex-1 border border-primary/50 rounded p-2 bg-canvas flex flex-col items-center tech-glow">
<span class="material-symbols-outlined text-primary text-sm" style="font-variation-settings: 'FILL' 1;">dark_mode</span>
<span class="font-mono text-[10px] text-primary">Dark Res</span>
</div>
</div>
<div class="flex items-center justify-between border border-tech-blue/30 rounded p-2 bg-surface-container-low">
<span class="material-symbols-outlined text-tech-blue text-sm">arrow_downward</span>
<span class="font-mono text-xs text-tech-blue">Tailwind DOM Injection</span>
</div>
</div>
</section>
<!-- Typography Matrix (Spans 6 columns) -->
<section class="glass-panel rounded-xl p-md md:col-span-6 flex flex-col gap-md metallic-border">
<div class="flex justify-between items-start mb-2">
<h2 class="font-title-md text-title-md text-primary flex items-center gap-2">
<span class="material-symbols-outlined">text_fields</span>
                        Typography Matrix
                    </h2>
<span class="font-mono text-xs text-on-surface-variant bg-surface-container px-2 py-1 rounded">Req: 13.004-6</span>
</div>
<div class="flex flex-col gap-4 border-l border-outline-variant/30 pl-4">
<div>
<div class="flex justify-between items-baseline mb-1">
<span class="font-mono text-xs text-primary">Display Large (Inter)</span>
<span class="font-mono text-[10px] text-on-surface-variant">48px / 700</span>
</div>
<p class="font-display-lg text-display-lg text-on-surface truncate">Aureus Intelligence</p>
</div>
<div>
<div class="flex justify-between items-baseline mb-1">
<span class="font-mono text-xs text-tech-blue">Headline Lg (Vazirmatn RTL)</span>
<span class="font-mono text-[10px] text-on-surface-variant">32px / 600</span>
</div>
<p class="font-headline-lg text-headline-lg text-on-surface text-right" dir="rtl">هوش طلايي آريوس</p>
</div>
<div>
<div class="flex justify-between items-baseline mb-1">
<span class="font-mono text-xs text-primary">Body Sm Monospace</span>
<span class="font-mono text-[10px] text-on-surface-variant">14px / 400</span>
</div>
<p class="font-mono text-body-sm text-on-surface-variant truncate">0x9f8F72aA9304c8B593d555F12eF6589C1a0</p>
</div>
</div>
</section>
<!-- Implementation Showcase (Spans 6 columns) -->
<section class="glass-panel rounded-xl p-md md:col-span-6 flex flex-col gap-md metallic-border">
<div class="flex justify-between items-start">
<h2 class="font-title-md text-title-md text-primary flex items-center gap-2">
<span class="material-symbols-outlined">code</span>
                        Implementation Showcase
                    </h2>
</div>
<div class="bg-[#0D0D0E] border border-outline-variant/20 rounded-lg p-4 font-mono text-xs text-on-surface-variant overflow-x-auto relative group">
<div class="absolute top-2 right-2 text-[10px] bg-surface-container px-2 py-1 rounded text-primary opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">COPY</div>
<pre><code class="language-jsx">
<span class="text-tech-blue">const</span> PremiumCard = () =&gt; (
  &lt;<span class="text-primary">div</span> <span class="text-secondary-fixed-dim">className</span>=<span class="text-on-surface">"bg-surface-container-low 
              border border-outline-variant/30 
              rounded-xl p-md backdrop-blur-md"</span>&gt;
    &lt;<span class="text-primary">h3</span> <span class="text-secondary-fixed-dim">className</span>=<span class="text-on-surface">"font-title-md text-primary"</span>&gt;
      BTC/USDT
    &lt;/<span class="text-primary">h3</span>&gt;
    &lt;<span class="text-primary">div</span> <span class="text-secondary-fixed-dim">className</span>=<span class="text-on-surface">"font-mono text-body-sm 
                text-on-surface-variant mt-sm"</span>&gt;
      Vol: 24.5K
    &lt;/<span class="text-primary">div</span>&gt;
  &lt;/<span class="text-primary">div</span>&gt;
);
</code></pre>
</div>
</section>
<!-- UX States & Motion Engineering (Spans 12 columns) -->
<section class="glass-panel rounded-xl p-md md:col-span-12 flex flex-col gap-md metallic-border">
<div class="flex justify-between items-start mb-4">
<h2 class="font-title-md text-title-md text-primary flex items-center gap-2">
<span class="material-symbols-outlined">animation</span>
                        UX States &amp; Motion Engineering
                    </h2>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-md">
<!-- Tier 0 -->
<div class="flex flex-col gap-3">
<div class="flex items-center gap-2 border-b border-outline-variant/30 pb-2">
<span class="font-mono text-xs text-tech-blue">Tier 0</span>
<span class="font-label-caps text-label-caps text-on-surface uppercase">Instant</span>
</div>
<p class="font-body-sm text-body-sm text-on-surface-variant">Hover states, color shifts, opacity changes. Must resolve in &lt; 150ms.</p>
<div class="h-8 w-full bg-surface-container border border-outline-variant/50 rounded hover:bg-surface-variant hover:border-primary/50 transition-all duration-150 cursor-pointer flex items-center justify-center">
<span class="font-mono text-[10px] text-on-surface-variant">Hover Me</span>
</div>
</div>
<!-- Tier 1 -->
<div class="flex flex-col gap-3">
<div class="flex items-center gap-2 border-b border-outline-variant/30 pb-2">
<span class="font-mono text-xs text-primary">Tier 1</span>
<span class="font-label-caps text-label-caps text-on-surface uppercase">Micro-Layout</span>
</div>
<p class="font-body-sm text-body-sm text-on-surface-variant">Dropdowns, accordions, toggles. Physics-based easing. ~250ms.</p>
<div class="h-8 w-16 bg-surface-container border border-outline-variant/50 rounded-full relative cursor-pointer overflow-hidden group">
<div class="absolute left-1 top-1 w-6 h-6 bg-outline-variant rounded-full group-hover:bg-primary group-hover:translate-x-8 transition-all duration-300 ease-in-out"></div>
</div>
</div>
<!-- Tier 2 -->
<div class="flex flex-col gap-3">
<div class="flex items-center gap-2 border-b border-outline-variant/30 pb-2">
<span class="font-mono text-xs text-secondary-fixed-dim">Tier 2</span>
<span class="font-label-caps text-label-caps text-on-surface uppercase">Macro-Context</span>
</div>
<p class="font-body-sm text-body-sm text-on-surface-variant">Page transitions, modal reveals. Staggered orchestration. ~400ms.</p>
<div class="h-8 w-full border border-tech-blue/30 rounded overflow-hidden flex">
<div class="h-full bg-tech-blue/20 w-0 hover:w-full transition-all duration-500 ease-in-out"></div>
</div>
</div>
</div>
</section>
</div>
</main>
<!-- Footer mapped from Shared Components JSON -->
<footer class="bg-surface-container-lowest dark:bg-surface-container-lowest w-full mt-lg border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-start px-margin-desktop py-lg gap-md max-w-[1440px] mx-auto w-full flat no shadows">
<div class="flex flex-col gap-sm">
<span class="font-title-md text-title-md font-bold text-on-surface">IranCoin Premium</span>
<p class="font-body-sm text-body-sm text-on-surface-variant max-w-sm">
                © 2024 IranCoin Premium. All rights reserved. Professional Trading Platform.
            </p>
</div>
<div class="flex flex-wrap gap-x-md gap-y-sm">
<a class="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface hover:text-secondary-fixed-dim transition-colors opacity-80 hover:opacity-100 transition-opacity" href="#">Security Audits</a>
<a class="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface hover:text-secondary-fixed-dim transition-colors opacity-80 hover:opacity-100 transition-opacity" href="#">Reserve Proofs</a>
<a class="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface hover:text-secondary-fixed-dim transition-colors opacity-80 hover:opacity-100 transition-opacity" href="#">Compliance</a>
<a class="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface hover:text-secondary-fixed-dim transition-colors opacity-80 hover:opacity-100 transition-opacity" href="#">Risk Disclosure</a>
<a class="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface hover:text-secondary-fixed-dim transition-colors opacity-80 hover:opacity-100 transition-opacity" href="#">Privacy Policy</a>
<a class="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface hover:text-secondary-fixed-dim transition-colors opacity-80 hover:opacity-100 transition-opacity" href="#">Terms of Service</a>
</div>
</footer>
`;
export default function Part13Page() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);
  return (
    <div className="min-h-screen bg-[#0A0A0B]">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
