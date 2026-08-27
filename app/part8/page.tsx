// Auto-generated from Stitch Part 8 - IranCoin Premium
// Source: IranCoin-premium/prompts Part 8
"use client";
import { useEffect } from "react";
const html = `
<!-- TopNavBar -->
<nav class="bg-surface/60 dark:bg-surface/60 backdrop-blur-md docked full-width top-0 sticky z-50 border-b border-outline-variant/30 shadow-sm flex justify-between items-center px-margin-desktop py-base max-w-[1440px] mx-auto w-full">
<div class="font-display-lg text-display-lg font-bold text-primary dark:text-primary">IranCoin Premium</div>
<ul class="hidden md:flex gap-md font-body-lg text-body-lg">
<li class="text-on-surface-variant hover:text-primary transition-colors cursor-pointer hover:bg-surface-variant/50 transition-all scale-95 duration-200 ease-in-out px-2 py-1 rounded">Home</li>
<li class="text-on-surface-variant hover:text-primary transition-colors cursor-pointer hover:bg-surface-variant/50 transition-all scale-95 duration-200 ease-in-out px-2 py-1 rounded">Markets</li>
<li class="text-on-surface-variant hover:text-primary transition-colors cursor-pointer hover:bg-surface-variant/50 transition-all scale-95 duration-200 ease-in-out px-2 py-1 rounded">Research</li>
<li class="text-primary border-b-2 border-primary pb-1 cursor-pointer px-2 py-1">Security</li>
<li class="text-on-surface-variant hover:text-primary transition-colors cursor-pointer hover:bg-surface-variant/50 transition-all scale-95 duration-200 ease-in-out px-2 py-1 rounded">Support</li>
</ul>
<div class="flex items-center gap-sm">
<button class="bg-primary-container text-black font-semibold px-4 py-2 rounded-lg hover:bg-primary transition-colors">Sign In</button>
<span class="text-primary font-bold cursor-pointer">EN/FA</span>
<span class="material-symbols-outlined text-primary cursor-pointer">language</span>
<span class="material-symbols-outlined text-primary cursor-pointer">account_circle</span>
</div>
</nav>
<!-- Main Content Canvas -->
<main class="flex-grow w-full max-w-[1440px] mx-auto px-margin-desktop py-lg flex flex-col gap-lg">
<!-- Header Section -->
<header class="flex flex-col gap-sm border-b border-outline-variant/30 pb-md">
<h1 class="font-display-lg text-display-lg text-gradient-gold">Database Schema &amp; API Contracts</h1>
<p class="font-title-md text-title-md text-on-surface-variant">Aureus Intelligence: Contract-First Architecture. Frontend never trust boundary, Backend authoritative.</p>
</header>
<!-- 2x2 Bento Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-md">
<!-- Section 1: API Principles -->
<section class="glass-panel rounded-xl p-md flex flex-col gap-md">
<div class="flex items-center gap-sm border-b border-outline-variant/30 pb-sm">
<span class="material-symbols-outlined text-gold">api</span>
<h2 class="font-headline-lg text-headline-lg text-on-surface">API Principles &amp; Versioning</h2>
</div>
<div class="flex flex-col gap-sm">
<div class="flex justify-between items-center bg-surface-container-low p-sm rounded-lg gold-border">
<span class="font-label-caps text-label-caps text-on-surface-variant">STRATEGY</span>
<span class="font-body-sm text-primary font-mono bg-surface px-2 py-1 rounded">/api/v1/</span>
</div>
<p class="font-body-sm text-on-surface-variant text-body-sm">Strict breaking change policy enforced. Endpoints decorated with owner, version, and deprecation tags.</p>
<h3 class="font-title-md text-title-md text-secondary mt-sm">Response Envelope</h3>
<div class="code-block text-sm">
{
  "data": { ... },
  "meta": {
    "pagination": { ... },
    "cursor": "xyz"
  },
  "error": null,
  "code": 200
}
                    </div>
<h3 class="font-title-md text-title-md text-secondary mt-sm">Request Identifiers</h3>
<ul class="list-disc pl-md font-body-sm text-on-surface-variant space-y-1">
<li><span class="font-mono text-tertiary-fixed-dim">X-Request-Id</span>: Tracing boundary</li>
<li><span class="font-mono text-tertiary-fixed-dim">X-Correlation-Id</span>: Cross-service sync</li>
<li><span class="font-mono text-tertiary-fixed-dim">Idempotency-Key</span>: Mutation safety</li>
</ul>
</div>
</section>
<!-- Section 2: Standard Policies -->
<section class="glass-panel rounded-xl p-md flex flex-col gap-md">
<div class="flex items-center gap-sm border-b border-outline-variant/30 pb-sm">
<span class="material-symbols-outlined text-gold">policy</span>
<h2 class="font-headline-lg text-headline-lg text-on-surface">Standard Policies &amp; Base Entities</h2>
</div>
<div class="flex flex-col gap-sm">
<div class="grid grid-cols-2 gap-sm">
<div class="bg-surface-container-low p-sm rounded-lg">
<span class="font-label-caps text-label-caps text-on-surface-variant block mb-1">HTTP STATUS</span>
<span class="font-body-sm text-secondary">Strict RESTful mapping</span>
</div>
<div class="bg-surface-container-low p-sm rounded-lg">
<span class="font-label-caps text-label-caps text-on-surface-variant block mb-1">PAGINATION</span>
<span class="font-body-sm text-secondary">Cursor-based (ULID)</span>
</div>
</div>
<div class="bg-surface-container-lowest p-sm rounded-lg border border-outline-variant/30 mt-sm">
<span class="font-label-caps text-label-caps text-on-surface-variant block mb-2">DB CONVENTIONS</span>
<div class="flex gap-4 font-mono text-sm text-tertiary-fixed-dim">
<span class="bg-surface px-2 py-1 rounded">snake_case</span>
<span class="bg-surface px-2 py-1 rounded">UUID/ULID PKs</span>
</div>
</div>
<h3 class="font-title-md text-title-md text-secondary mt-sm border-b border-outline-variant/30 pb-1">Core Identity Entities</h3>
<div class="grid grid-cols-2 gap-2 mt-2">
<div class="bg-surface-container-low p-2 rounded text-sm font-mono text-primary card-hover transition-colors">users</div>
<div class="bg-surface-container-low p-2 rounded text-sm font-mono text-primary card-hover transition-colors">user_security</div>
<div class="bg-surface-container-low p-2 rounded text-sm font-mono text-primary card-hover transition-colors">passkey_credentials</div>
<div class="bg-surface-container-low p-2 rounded text-sm font-mono text-primary card-hover transition-colors">sessions</div>
<div class="bg-surface-container-low p-2 rounded text-sm font-mono text-primary card-hover transition-colors">devices</div>
<div class="bg-surface-container-low p-2 rounded text-sm font-mono text-primary card-hover transition-colors">organizations</div>
</div>
</div>
</section>
<!-- Section 3: Core Commerce & Trading -->
<section class="glass-panel rounded-xl p-md flex flex-col gap-md">
<div class="flex items-center gap-sm border-b border-outline-variant/30 pb-sm">
<span class="material-symbols-outlined text-electric-blue">account_balance</span>
<h2 class="font-headline-lg text-headline-lg text-on-surface">Core Commerce &amp; Trading Schema</h2>
</div>
<div class="flex flex-col gap-sm h-full">
<div class="flex-grow flex flex-col gap-md">
<div>
<h3 class="font-label-caps text-label-caps text-on-surface-variant mb-2">COMMERCE DOMAIN</h3>
<div class="flex flex-wrap gap-2 text-sm font-mono">
<span class="bg-surface-container px-2 py-1 rounded border border-outline-variant/50 text-tertiary">product_catalog</span>
<span class="bg-surface-container px-2 py-1 rounded border border-outline-variant/50 text-tertiary">market_modes</span>
<span class="bg-surface-container px-2 py-1 rounded border border-outline-variant/50 text-tertiary">subscriptions</span>
<span class="bg-surface-container px-2 py-1 rounded border border-outline-variant/50 text-tertiary">entitlements</span>
</div>
</div>
<div>
<h3 class="font-label-caps text-label-caps text-on-surface-variant mb-2">TRADING ENGINE</h3>
<div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm font-mono">
<div class="bg-[#111] p-2 rounded border-l-2 border-electric-blue text-secondary">exchange_connections</div>
<div class="bg-[#111] p-2 rounded border-l-2 border-electric-blue text-secondary">provider_capabilities</div>
<div class="bg-[#111] p-2 rounded border-l-2 border-electric-blue text-secondary">strategies &amp; signals</div>
<div class="bg-[#111] p-2 rounded border-l-2 border-electric-blue text-secondary">orders_fills_positions</div>
</div>
</div>
</div>
<div class="mt-auto bg-surface-container-lowest p-sm rounded-lg border border-outline-variant/20">
<span class="font-label-caps text-label-caps text-primary block mb-1">ARCHITECTURE NOTES</span>
<p class="text-sm text-on-surface-variant">Strict transaction boundaries. Outbox pattern utilized for distributed state sync. All financial records are audit-ready (append-only logs).</p>
</div>
</div>
</section>
<!-- Section 4: Real-time & Integration -->
<section class="glass-panel rounded-xl p-md flex flex-col gap-md">
<div class="flex items-center gap-sm border-b border-outline-variant/30 pb-sm">
<span class="material-symbols-outlined text-electric-blue">bolt</span>
<h2 class="font-headline-lg text-headline-lg text-on-surface">Real-time &amp; Integration</h2>
</div>
<div class="flex flex-col gap-md">
<div>
<h3 class="font-title-md text-title-md text-secondary mb-sm">Event &amp; Streaming Schemas</h3>
<div class="space-y-2">
<div class="flex justify-between items-center p-2 bg-surface-container rounded border border-outline-variant/30">
<span class="font-mono text-sm text-tertiary-fixed-dim">WebSocket (Pub/Sub)</span>
<span class="material-symbols-outlined text-sm text-primary">check_circle</span>
</div>
<div class="flex justify-between items-center p-2 bg-surface-container rounded border border-outline-variant/30">
<span class="font-mono text-sm text-tertiary-fixed-dim">Webhook Validation (Sig)</span>
<span class="material-symbols-outlined text-sm text-primary">check_circle</span>
</div>
<div class="flex justify-between items-center p-2 bg-surface-container rounded border border-outline-variant/30">
<span class="font-mono text-sm text-tertiary-fixed-dim">Replay Protection</span>
<span class="material-symbols-outlined text-sm text-primary">check_circle</span>
</div>
</div>
</div>
<div class="bg-surface-container-low p-sm rounded-lg border border-outline-variant/30 relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-r from-electric-blue/10 to-transparent pointer-events-none"></div>
<h3 class="font-label-caps text-label-caps text-primary relative z-10 mb-2">OBSERVABILITY &amp; COMPATIBILITY</h3>
<p class="text-sm text-on-surface-variant relative z-10">All real-time streams enforce backward compatibility rules. Metrics emitted per event schema version. Distributed tracing tied to <span class="font-mono text-xs text-secondary">X-Correlation-Id</span>.</p>
</div>
</div>
</section>
</div>
</main>
<!-- Footer -->
<footer class="bg-surface-container-lowest dark:bg-surface-container-lowest border-t border-outline-variant/20 flat no shadows w-full mt-lg flex flex-col md:flex-row justify-between items-start px-margin-desktop py-lg gap-md max-w-[1440px] mx-auto w-full">
<div class="flex flex-col gap-sm">
<span class="font-title-md text-title-md font-bold text-on-surface">IranCoin Premium</span>
<span class="font-body-sm text-body-sm text-on-surface-variant">© 2024 IranCoin Premium. All rights reserved. Professional Trading Platform.</span>
</div>
<ul class="flex flex-wrap gap-md font-body-sm text-body-sm">
<li class="text-on-surface-variant hover:text-on-surface hover:text-secondary-fixed-dim transition-colors opacity-80 hover:opacity-100 transition-opacity cursor-pointer">Security Audits</li>
<li class="text-on-surface-variant hover:text-on-surface hover:text-secondary-fixed-dim transition-colors opacity-80 hover:opacity-100 transition-opacity cursor-pointer">Reserve Proofs</li>
<li class="text-on-surface-variant hover:text-on-surface hover:text-secondary-fixed-dim transition-colors opacity-80 hover:opacity-100 transition-opacity cursor-pointer">Compliance</li>
<li class="text-on-surface-variant hover:text-on-surface hover:text-secondary-fixed-dim transition-colors opacity-80 hover:opacity-100 transition-opacity cursor-pointer">Risk Disclosure</li>
<li class="text-on-surface-variant hover:text-on-surface hover:text-secondary-fixed-dim transition-colors opacity-80 hover:opacity-100 transition-opacity cursor-pointer">Privacy Policy</li>
<li class="text-on-surface-variant hover:text-on-surface hover:text-secondary-fixed-dim transition-colors opacity-80 hover:opacity-100 transition-opacity cursor-pointer">Terms of Service</li>
</ul>
</footer>
`;
export default function Part8Page() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);
  return (
    <div className="min-h-screen bg-[#0A0A0B]">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
