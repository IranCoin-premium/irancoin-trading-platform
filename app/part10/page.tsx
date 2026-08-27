// Auto-generated from Stitch Part 10 - IranCoin Premium
// Source: IranCoin-premium/prompts Part 10
"use client";
import { useEffect } from "react";
const html = `
<!-- TopNavBar -->
<nav class="bg-surface/60 dark:bg-surface/60 backdrop-blur-md docked full-width top-0 sticky z-50 border-b border-outline-variant/30 shadow-sm transition-all">
<div class="flex justify-between items-center px-margin-desktop py-base max-w-[1440px] mx-auto w-full">
<div class="font-display-lg text-display-lg font-bold text-primary dark:text-primary tracking-tight">
                IranCoin Premium
            </div>
<div class="hidden md:flex items-center space-x-md">
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-lg text-body-lg py-xs hover:bg-surface-variant/50 rounded-DEFAULT px-sm" href="#">Home</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-lg text-body-lg py-xs hover:bg-surface-variant/50 rounded-DEFAULT px-sm" href="#">Markets</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-lg text-body-lg py-xs hover:bg-surface-variant/50 rounded-DEFAULT px-sm" href="#">Research</a>
<a class="text-primary border-b-2 border-primary pb-1 font-body-lg text-body-lg py-xs hover:bg-surface-variant/50 rounded-DEFAULT px-sm" href="#">Security</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-lg text-body-lg py-xs hover:bg-surface-variant/50 rounded-DEFAULT px-sm" href="#">Support</a>
</div>
<div class="flex items-center space-x-sm">
<button aria-label="language" class="text-primary dark:text-primary hover:bg-surface-variant/50 transition-all p-xs rounded-full flex items-center justify-center scale-95 hover:scale-100 duration-200 ease-in-out">
<span class="material-symbols-outlined">language</span>
</button>
<button aria-label="account_circle" class="text-primary dark:text-primary hover:bg-surface-variant/50 transition-all p-xs rounded-full flex items-center justify-center scale-95 hover:scale-100 duration-200 ease-in-out">
<span class="material-symbols-outlined">account_circle</span>
</button>
<div class="text-on-surface-variant font-label-caps text-label-caps ml-xs hidden sm:block">EN/FA</div>
<button class="bg-primary-container text-on-primary font-body-sm text-body-sm px-md py-xs rounded-full font-bold ml-md hover:opacity-90 transition-opacity">
                    Sign In
                </button>
</div>
</div>
</nav>
<!-- Main Content -->
<main class="flex-grow w-full max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-xl space-y-xl">
<!-- Hero Section -->
<header class="text-center space-y-sm py-lg">
<div class="inline-flex items-center justify-center space-x-xs px-sm py-base rounded-full border border-primary/30 bg-primary/10 text-primary mb-md">
<span class="material-symbols-outlined text-sm">shield</span>
<span class="font-label-caps text-label-caps">System Status: Secure</span>
</div>
<h1 class="font-display-lg text-display-lg md:text-[64px] leading-tight font-bold text-on-surface">Security Architecture &amp; Threat Model</h1>
<p class="font-title-md text-title-md text-on-surface-variant max-w-3xl mx-auto">Aureus Intelligence: Security-First Architecture</p>
</header>
<!-- Section 1: Zero-Trust Model -->
<section class="space-y-md">
<div class="flex items-center justify-between border-b border-outline-variant/30 pb-sm">
<h2 class="font-headline-lg text-headline-lg text-on-surface">Zero-Trust Model &amp; Security Boundaries</h2>
<div class="text-right">
<span class="persian-text text-on-surface-variant text-lg">اعتماد صفر / مرز امنیتی</span>
</div>
</div>
<div class="grid grid-cols-1 lg:grid-cols-4 gap-md">
<!-- Identity -->
<div class="glass-panel p-md rounded-xl space-y-sm flex flex-col items-center text-center">
<div class="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center border border-outline-variant/50 text-secondary">
<span class="material-symbols-outlined text-[32px]">fingerprint</span>
</div>
<h3 class="font-title-md text-title-md text-on-surface">Identity</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant">Continuous authentication &amp; IAM policies.</p>
</div>
<!-- Device -->
<div class="glass-panel p-md rounded-xl space-y-sm flex flex-col items-center text-center">
<div class="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center border border-outline-variant/50 text-secondary">
<span class="material-symbols-outlined text-[32px]">devices</span>
</div>
<h3 class="font-title-md text-title-md text-on-surface">Device</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant">Endpoint posture &amp; telemetry checks.</p>
</div>
<!-- Network -->
<div class="glass-panel p-md rounded-xl space-y-sm flex flex-col items-center text-center tech-blue-glow">
<div class="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center border border-outline-variant/50 text-[#0EA5E9]">
<span class="material-symbols-outlined text-[32px]">router</span>
</div>
<h3 class="font-title-md text-title-md text-on-surface">Network</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant">mTLS &amp; micro-segmentation active.</p>
</div>
<!-- Application -->
<div class="glass-panel p-md rounded-xl space-y-sm flex flex-col items-center text-center">
<div class="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center border border-outline-variant/50 text-secondary">
<span class="material-symbols-outlined text-[32px]">terminal</span>
</div>
<h3 class="font-title-md text-title-md text-on-surface">Application</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant">Per-request authorization envelopes.</p>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="bg-surface-container-lowest dark:bg-surface-container-lowest w-full mt-lg border-t border-outline-variant/20 py-lg">
<div class="flex flex-col md:flex-row justify-between items-start px-margin-desktop gap-md max-w-[1440px] mx-auto w-full">
<div class="space-y-sm max-w-md">
<div class="font-title-md text-title-md font-bold text-on-surface">IranCoin Premium</div>
<p class="font-body-sm text-body-sm text-on-surface-variant">© 2024 IranCoin Premium. All rights reserved. Professional Trading Platform.</p>
</div>
<div class="grid grid-cols-2 md:grid-cols-3 gap-lg text-body-sm font-body-sm">
<div class="space-y-sm">
<a class="block text-primary font-bold hover:text-secondary-fixed-dim transition-colors opacity-80 hover:opacity-100" href="#">Security Audits</a>
<a class="block text-on-surface-variant hover:text-on-surface hover:text-secondary-fixed-dim transition-colors opacity-80 hover:opacity-100" href="#">Reserve Proofs</a>
</div>
<div class="space-y-sm">
<a class="block text-on-surface-variant hover:text-on-surface hover:text-secondary-fixed-dim transition-colors opacity-80 hover:opacity-100" href="#">Compliance</a>
<a class="block text-on-surface-variant hover:text-on-surface hover:text-secondary-fixed-dim transition-colors opacity-80 hover:opacity-100" href="#">Risk Disclosure</a>
</div>
<div class="space-y-sm">
<a class="block text-on-surface-variant hover:text-on-surface hover:text-secondary-fixed-dim transition-colors opacity-80 hover:opacity-100" href="#">Privacy Policy</a>
<a class="block text-on-surface-variant hover:text-on-surface hover:text-secondary-fixed-dim transition-colors opacity-80 hover:opacity-100" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>
`;
export default function Part10Page() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);
  return (
    <div className="min-h-screen bg-[#0A0A0B]">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
