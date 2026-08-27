// Auto-generated from Stitch Part 5 - IranCoin Premium
// Source: IranCoin-premium/prompts Part 5
"use client";
import { useEffect } from "react";
const html = `
<!-- TopNavBar (Shared Component) -->
<nav class="bg-surface/60 dark:bg-surface/60 backdrop-blur-md font-body-lg text-body-lg docked full-width top-0 sticky z-50 border-b border-outline-variant/30 shadow-sm flex justify-between items-center px-margin-desktop py-base max-w-[1440px] mx-auto w-full hidden md:flex">
<div class="font-display-lg text-display-lg font-bold text-primary dark:text-primary tracking-tight">
            IranCoin Premium
        </div>
<div class="flex gap-md">
<a class="text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-variant/50 transition-all px-3 py-2 rounded-md" href="#">Home</a>
<a class="text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-variant/50 transition-all px-3 py-2 rounded-md" href="#">Markets</a>
<a class="text-primary border-b-2 border-primary pb-1 px-3 py-2" href="#">Research</a>
<a class="text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-variant/50 transition-all px-3 py-2 rounded-md" href="#">Security</a>
<a class="text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-variant/50 transition-all px-3 py-2 rounded-md" href="#">Support</a>
</div>
<div class="flex items-center gap-sm">
<button class="text-on-surface-variant hover:text-primary transition-colors scale-95 duration-200 ease-in-out">
<span class="material-symbols-outlined">language</span>
</button>
<span class="text-on-surface-variant text-sm">EN/FA</span>
<button class="text-on-surface-variant hover:text-primary transition-colors scale-95 duration-200 ease-in-out ml-2">
<span class="material-symbols-outlined">account_circle</span>
</button>
<button class="bg-primary-container text-on-primary-container px-4 py-2 rounded-lg font-bold ml-4 scale-95 duration-200 ease-in-out hover:opacity-90">
                Sign In
            </button>
</div>
</nav>
<!-- Main Canvas -->
<main class="flex-grow w-full max-w-[1440px] mx-auto px-margin-desktop py-lg">
<header class="mb-lg">
<h1 class="font-headline-lg text-headline-lg text-on-surface mb-2">Product Engineering &amp; API Architecture</h1>
<p class="text-on-surface-variant font-body-sm">Aureus Intelligence Core Documentation</p>
</header>
<!-- 2x2 Grid Layout -->
<div class="grid grid-cols-1 lg:grid-cols-2 gap-lg">
<!-- 1. Top-Left: System Topology & Planes -->
<section class="glass-surface rounded-xl p-md flex flex-col gap-md h-full">
<div class="flex items-center gap-2 border-b border-outline-variant/30 pb-3">
<span class="material-symbols-outlined text-gold" style="font-variation-settings: 'FILL' 1;">schema</span>
<h2 class="font-title-md text-title-md text-gold">System Topology &amp; Planes</h2>
</div>
<div class="flex-grow flex flex-col gap-3 relative">
<!-- Connector Line -->
<div class="absolute left-[15px] top-8 bottom-8 w-[2px] bg-outline-variant/20 z-0"></div>
<!-- Planes -->
<div class="flex gap-4 items-start relative z-10 group">
<div class="w-8 h-8 rounded-full bg-surface-container border border-outline-variant flex items-center justify-center mt-1 group-hover:border-gold transition-colors">
<span class="material-symbols-outlined text-sm text-on-surface-variant">devices</span>
</div>
<div class="bg-surface-container/50 border border-outline-variant/50 rounded-lg p-3 flex-grow kinetic-border">
<h3 class="font-label-caps text-label-caps text-on-surface mb-1">Experience Plane</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant">Web, PWA, Marketing</p>
</div>
</div>
<div class="flex gap-4 items-start relative z-10 group">
<div class="w-8 h-8 rounded-full bg-surface-container border border-outline-variant flex items-center justify-center mt-1 group-hover:border-gold transition-colors">
<span class="material-symbols-outlined text-sm text-on-surface-variant">vpn_key</span>
</div>
<div class="bg-surface-container/50 border border-outline-variant/50 rounded-lg p-3 flex-grow kinetic-border">
<h3 class="font-label-caps text-label-caps text-on-surface mb-1">Application Plane</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant">Identity, Billing</p>
</div>
</div>
<div class="flex gap-4 items-start relative z-10 group">
<div class="w-8 h-8 rounded-full bg-surface-container border border-intelligence-blue flex items-center justify-center mt-1 intelligence-glow">
<span class="material-symbols-outlined text-sm text-intelligence-blue">psychology</span>
</div>
<div class="bg-[#001e2f]/30 border border-intelligence-blue/30 rounded-lg p-3 flex-grow kinetic-border relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-r from-transparent via-[#0EA5E9]/5 to-transparent -translate-x-full hover:animate-[shimmer_2s_infinite]"></div>
<h3 class="font-label-caps text-label-caps text-intelligence-blue mb-1 flex items-center gap-2">
                                Decision Plane
                                <span class="px-2 py-0.5 rounded text-[10px] bg-intelligence-blue/20 text-intelligence-blue">Active</span>
</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant">AI Agents: Alpha, Beta, Gamma</p>
</div>
</div>
<div class="flex gap-4 items-start relative z-10 group">
<div class="w-8 h-8 rounded-full bg-surface-container border border-outline-variant flex items-center justify-center mt-1 group-hover:border-gold transition-colors">
<span class="material-symbols-outlined text-sm text-on-surface-variant">account_tree</span>
</div>
<div class="bg-surface-container/50 border border-outline-variant/50 rounded-lg p-3 flex-grow kinetic-border">
<h3 class="font-label-caps text-label-caps text-on-surface mb-1">Execution Plane</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant">Venue Adapters, Connectivity</p>
</div>
</div>
<div class="flex gap-4 items-start relative z-10 group">
<div class="w-8 h-8 rounded-full bg-surface-container border border-gold flex items-center justify-center mt-1 shadow-[0_0_10px_rgba(212,175,55,0.2)]">
<span class="material-symbols-outlined text-sm text-gold">admin_panel_settings</span>
</div>
<div class="bg-primary-container/10 border border-gold/30 rounded-lg p-3 flex-grow kinetic-border">
<h3 class="font-label-caps text-label-caps text-gold mb-1">Control Plane</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant">Admin, Ops</p>
</div>
</div>
<div class="flex gap-4 items-start relative z-10 group">
<div class="w-8 h-8 rounded-full bg-surface-container border border-outline-variant flex items-center justify-center mt-1 group-hover:border-gold transition-colors">
<span class="material-symbols-outlined text-sm text-on-surface-variant">database</span>
</div>
<div class="bg-surface-container/50 border border-outline-variant/50 rounded-lg p-3 flex-grow kinetic-border">
<h3 class="font-label-caps text-label-caps text-on-surface mb-1">Data Plane</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant">Telemetry, Observability</p>
</div>
</div>
</div>
<div class="mt-4 p-3 bg-[#0A0A0B] border border-outline-variant/20 rounded text-center">
<span class="font-mono text-xs text-gold/80 block uppercase tracking-wider">Design Rule: Source-of-truth must reside in the Control Plane.</span>
</div>
</section>
<!-- 2. Top-Right: Database Schema & Entity Map -->
<section class="glass-surface rounded-xl p-md flex flex-col gap-md h-full">
<div class="flex items-center justify-between border-b border-outline-variant/30 pb-3">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-gold" style="font-variation-settings: 'FILL' 1;">table_chart</span>
<h2 class="font-title-md text-title-md text-gold">Database Schema &amp; Entity Map</h2>
</div>
<span class="material-symbols-outlined text-on-surface-variant text-sm cursor-pointer hover:text-gold transition-colors">open_in_new</span>
</div>
<div class="grid grid-cols-2 lg:grid-cols-3 gap-3 overflow-y-auto max-h-[400px] pr-2">
<!-- Entity Cards loop via HTML -->
<div class="bg-[#110e07] border border-[#27272A] rounded p-2 hover:bg-[#16130b] transition-colors group cursor-crosshair">
<div class="font-mono text-[11px] text-on-surface mb-2 pb-1 border-b border-outline-variant/20 group-hover:text-gold transition-colors">users</div>
<div class="flex justify-between font-mono text-[9px] text-on-surface-variant/70"><span class="truncate pr-1">created_at</span> <span>ts</span></div>
<div class="flex justify-between font-mono text-[9px] text-on-surface-variant/70"><span class="truncate pr-1">updated_at</span> <span>ts</span></div>
<div class="flex justify-between font-mono text-[9px] text-on-surface-variant/70"><span class="truncate pr-1">version</span> <span>int</span></div>
<div class="flex justify-between font-mono text-[9px] text-intelligence-blue"><span class="truncate pr-1">status</span> <span>enum</span></div>
</div>
<!-- Duplicate for visual density -->
<div class="bg-[#110e07] border border-[#27272A] rounded p-2 hover:bg-[#16130b] transition-colors group cursor-crosshair">
<div class="font-mono text-[11px] text-on-surface mb-2 pb-1 border-b border-outline-variant/20 group-hover:text-gold transition-colors">user_profiles</div>
<div class="flex justify-between font-mono text-[9px] text-on-surface-variant/70"><span class="truncate pr-1">created_at</span> <span>ts</span></div>
<div class="flex justify-between font-mono text-[9px] text-on-surface-variant/70"><span class="truncate pr-1">updated_at</span> <span>ts</span></div>
<div class="flex justify-between font-mono text-[9px] text-on-surface-variant/70"><span class="truncate pr-1">version</span> <span>int</span></div>
<div class="flex justify-between font-mono text-[9px] text-intelligence-blue"><span class="truncate pr-1">status</span> <span>enum</span></div>
</div>
<!-- Add a few more entities to show the grid -->
<div class="bg-[#110e07] border border-[#27272A] rounded p-2 hover:bg-[#16130b] transition-colors group cursor-crosshair">
<div class="font-mono text-[11px] text-on-surface mb-2 pb-1 border-b border-outline-variant/20 group-hover:text-gold transition-colors">strategies</div>
<div class="flex justify-between font-mono text-[9px] text-on-surface-variant/70"><span class="truncate pr-1">created_at</span> <span>ts</span></div>
<div class="flex justify-between font-mono text-[9px] text-on-surface-variant/70"><span class="truncate pr-1">updated_at</span> <span>ts</span></div>
<div class="flex justify-between font-mono text-[9px] text-on-surface-variant/70"><span class="truncate pr-1">version</span> <span>int</span></div>
<div class="flex justify-between font-mono text-[9px] text-[#22c55e]"><span class="truncate pr-1">status</span> <span>active</span></div>
</div>
</div>
</section>
</div>
</main>
<!-- Footer (Shared Component) -->
<footer class="bg-surface-container-lowest dark:bg-surface-container-lowest font-body-sm text-body-sm w-full mt-lg border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-start px-margin-desktop py-lg gap-md max-w-[1440px] mx-auto">
<div class="flex flex-col gap-2">
<span class="font-title-md text-title-md font-bold text-on-surface">IranCoin Premium</span>
<span class="text-on-surface-variant opacity-80">© 2024 IranCoin Premium. All rights reserved. Professional Trading Platform.</span>
</div>
<div class="flex flex-wrap gap-4 opacity-80 hover:opacity-100 transition-opacity">
<a class="text-primary font-bold hover:text-secondary-fixed-dim transition-colors" href="#">Security Audits</a>
<a class="text-on-surface-variant hover:text-on-surface hover:text-secondary-fixed-dim transition-colors" href="#">Reserve Proofs</a>
<a class="text-on-surface-variant hover:text-on-surface hover:text-secondary-fixed-dim transition-colors" href="#">Compliance</a>
<a class="text-on-surface-variant hover:text-on-surface hover:text-secondary-fixed-dim transition-colors" href="#">Risk Disclosure</a>
<a class="text-on-surface-variant hover:text-on-surface hover:text-secondary-fixed-dim transition-colors" href="#">Privacy Policy</a>
<a class="text-on-surface-variant hover:text-on-surface hover:text-secondary-fixed-dim transition-colors" href="#">Terms of Service</a>
</div>
</footer>
`;
export default function Part5Page() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);
  return (
    <div className="min-h-screen bg-[#0A0A0B]">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
