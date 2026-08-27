// Master Audit Review - All 20 Parts Mu Be Mu
"use client";
import { useEffect } from "react";
const html = `
<!-- Top Navigation (Shared Component) -->
<nav class="docked full-width top-0 sticky z-50 bg-surface/60 dark:bg-surface/60 backdrop-blur-md border-b border-outline-variant/30 shadow-sm">
<div class="flex justify-between items-center px-margin-desktop py-base max-w-[1440px] mx-auto w-full">
<div class="flex items-center gap-lg">
<a class="font-display-lg text-display-lg font-bold text-primary dark:text-primary tracking-tight" href="#">
                    IranCoin Premium
                </a>
<!-- Web Navigation Links -->
<div class="hidden md:flex items-center gap-md ml-lg">
<a class="text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-variant/50 px-3 py-1 rounded" href="#">Home</a>
<a class="text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-variant/50 px-3 py-1 rounded" href="#">Markets</a>
<a class="text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-variant/50 px-3 py-1 rounded" href="#">Research</a>
<a class="text-primary border-b-2 border-primary pb-1 px-3 py-1" href="#">Security</a>
<a class="text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-variant/50 px-3 py-1 rounded" href="#">Support</a>
</div>
</div>
<!-- Actions -->
<div class="flex items-center gap-sm">
<button class="text-on-surface-variant hover:text-primary transition-colors p-2 rounded-full hover:bg-surface-variant/50 scale-95 duration-200 ease-in-out">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 0;">language</span>
</button>
<span class="text-body-sm text-on-surface-variant hidden md:block">EN/FA</span>
<button class="text-on-surface-variant hover:text-primary transition-colors p-2 rounded-full hover:bg-surface-variant/50 scale-95 duration-200 ease-in-out">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 0;">account_circle</span>
</button>
<button class="bg-primary-container text-on-primary-container font-body-sm font-semibold px-4 py-2 rounded-lg ml-xs scale-95 duration-200 ease-in-out hover:opacity-90 transition-opacity">
                    Sign In
                </button>
</div>
</div>
</nav>
<!-- Main Canvas -->
<main class="flex-grow w-full max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-lg flex flex-col gap-lg">
<!-- Dashboard Header -->
<header class="flex flex-col md:flex-row justify-between items-start md:items-end gap-md pb-md border-b border-surface-variant">
<div class="flex flex-col gap-sm">
<div class="flex items-center gap-sm text-on-surface-variant font-label-caps text-label-caps">
<span class="material-symbols-outlined text-tech-blue text-[16px]">verified</span>
                    PRODUCTION VERIFICATION
                    <span class="mx-2 text-outline-variant">|</span>
                    DATE: 2026-08-27
                </div>
<h1 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-semibold tracking-tight">
                    Master Audit - 20 Parts Mu Be Mu Review
                </h1>
<p class="text-body-sm text-on-surface-variant max-w-2xl">
                    Maximize policy fit, transparency, and compliance readiness while preserving lawful PWA status. High-fidelity systems check across all domains.
                </p>
</div>
<div class="flex flex-wrap gap-xs">
<span class="px-3 py-1 rounded-full bg-surface-container border border-primary-container/30 text-primary-container font-label-caps text-label-caps flex items-center gap-xs">
<span class="material-symbols-outlined text-[14px]">shield</span> Security-First
                </span>
<span class="px-3 py-1 rounded-full bg-surface-container border border-tech-blue/30 text-tech-blue font-label-caps text-label-caps flex items-center gap-xs">
<span class="material-symbols-outlined text-[14px]">policy</span> Compliance-Aware
                </span>
<span class="px-3 py-1 rounded-full bg-surface-container border border-outline/30 text-on-surface font-label-caps text-label-caps flex items-center gap-xs">
<span class="material-symbols-outlined text-[14px]">fact_check</span> Audit-Ready
                </span>
</div>
</header>
<!-- 3-Column Layout -->
<div class="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
<!-- Left Column: Review Inventory (25% ~ 3 cols) -->
<div class="md:col-span-3 flex flex-col gap-md">
<div class="glass-panel rounded-xl p-md border-metallic">
<h2 class="font-title-md text-title-md text-on-surface mb-sm flex items-center gap-xs">
<span class="material-symbols-outlined text-primary-container">list_alt</span> Review Inventory
                    </h2>
<div class="flex flex-col gap-sm overflow-y-auto max-h-[600px] pr-2">
<!-- Inventory Item 1 -->
<div class="bg-surface-container-highest p-sm rounded-lg border border-surface-variant hover:border-outline/50 transition-colors cursor-default group">
<div class="flex justify-between items-start mb-xs">
<span class="font-body-sm text-body-sm font-semibold text-on-surface group-hover:text-primary transition-colors">Part 1: Core UX/UI</span>
<span class="px-2 py-0.5 rounded bg-[#162B1D] text-[#4ADE80] font-label-caps text-[10px] border border-[#22543D]">DONE</span>
</div>
<div class="text-[12px] text-on-surface-variant mb-2">5260 lines • 786KB</div>
<div class="flex flex-wrap gap-1">
<span class="text-[10px] bg-surface-container px-1.5 py-0.5 rounded text-outline">Frontend</span>
<span class="text-[10px] bg-surface-container px-1.5 py-0.5 rounded text-outline">Design System</span>
</div>
</div>
<!-- Inventory Item 2 -->
<div class="bg-surface-container-highest p-sm rounded-lg border border-surface-variant hover:border-outline/50 transition-colors cursor-default group">
<div class="flex justify-between items-start mb-xs">
<span class="font-body-sm text-body-sm font-semibold text-on-surface group-hover:text-primary transition-colors">Part 2: Entitlements</span>
<span class="px-2 py-0.5 rounded bg-[#2B2216] text-[#FBBF24] font-label-caps text-[10px] border border-[#544222]">REVIEW</span>
</div>
<div class="text-[12px] text-on-surface-variant mb-2">3120 lines • 412KB</div>
<div class="flex flex-wrap gap-1">
<span class="text-[10px] bg-surface-container px-1.5 py-0.5 rounded text-outline">7d/1m/3m/6m/1y</span>
<span class="text-[10px] bg-surface-container px-1.5 py-0.5 rounded text-outline">Compliance</span>
</div>
</div>
<!-- Inventory Item 3 -->
<div class="bg-surface-container-highest p-sm rounded-lg border border-surface-variant hover:border-outline/50 transition-colors cursor-default group">
<div class="flex justify-between items-start mb-xs">
<span class="font-body-sm text-body-sm font-semibold text-on-surface group-hover:text-primary transition-colors">Part 3: AI Ensemble</span>
<span class="px-2 py-0.5 rounded bg-[#162B1D] text-[#4ADE80] font-label-caps text-[10px] border border-[#22543D]">DONE</span>
</div>
<div class="text-[12px] text-on-surface-variant mb-2">8450 lines • 1.2MB</div>
<div class="flex flex-wrap gap-1">
<span class="text-[10px] bg-surface-container px-1.5 py-0.5 rounded text-tech-blue">3 AI Agents</span>
<span class="text-[10px] bg-surface-container px-1.5 py-0.5 rounded text-outline">Admin Plane</span>
</div>
</div>
<!-- Inventory Item 4 -->
<div class="bg-surface-container-highest p-sm rounded-lg border border-surface-variant hover:border-outline/50 transition-colors cursor-default group">
<div class="flex justify-between items-start mb-xs">
<span class="font-body-sm text-body-sm font-semibold text-on-surface group-hover:text-primary transition-colors">Part 4: Security Vault</span>
<span class="px-2 py-0.5 rounded bg-[#162B1D] text-[#4ADE80] font-label-caps text-[10px] border border-[#22543D]">DONE</span>
</div>
<div class="text-[12px] text-on-surface-variant mb-2">6100 lines • 950KB</div>
<div class="flex flex-wrap gap-1">
<span class="text-[10px] bg-surface-container px-1.5 py-0.5 rounded text-primary-container">KMS</span>
<span class="text-[10px] bg-surface-container px-1.5 py-0.5 rounded text-outline">RBAC/ABAC</span>
</div>
</div>
<!-- Placeholder for remaining 16 parts to imply scale without bloating HTML -->
<div class="flex items-center justify-center py-sm border-t border-dashed border-surface-variant mt-xs">
<span class="text-label-caps text-outline font-label-caps">+ 16 Additional Modules Audited</span>
</div>
</div>
</div>
</div>
<!-- Center Column: Cross-Reference Matrix (50% ~ 6 cols) -->
<div class="md:col-span-6 flex flex-col gap-md">
<div class="glass-panel rounded-xl p-md border-metallic h-full">
<h2 class="font-title-md text-title-md text-on-surface mb-md flex items-center gap-xs">
<span class="material-symbols-outlined text-tech-blue">account_tree</span> Cross-Reference Matrix
                    </h2>
<div class="overflow-x-auto">
<table class="w-full text-left border-collapse">
<thead>
<tr class="border-b border-outline-variant/50 text-label-caps font-label-caps text-on-surface-variant">
<th class="pb-sm font-semibold">System Component</th>
<th class="pb-sm font-semibold text-center w-24">Status</th>
<th class="pb-sm font-semibold text-right w-48">Verification Note</th>
</tr>
</thead>
<tbody class="text-body-sm font-body-sm">
<tr class="border-b border-surface-variant hover:bg-surface-bright/20 transition-colors">
<td class="py-sm font-medium text-on-surface flex items-center gap-xs">
<div class="w-2 h-2 rounded-full bg-primary-container"></div>
                                        Design System (Gold/Blue)
                                    </td>
<td class="py-sm text-center">
<span class="material-symbols-outlined text-[#4ADE80] text-[18px]">check_circle</span>
</td>
<td class="py-sm text-right text-outline text-[12px]">No conflict - All parts aligned</td>
</tr>
<tr class="border-b border-surface-variant hover:bg-surface-bright/20 transition-colors">
<td class="py-sm font-medium text-on-surface flex items-center gap-xs">
<div class="w-2 h-2 rounded-full bg-tech-blue"></div>
                                        Entitlement State Machine
                                    </td>
<td class="py-sm text-center">
<span class="material-symbols-outlined text-[#4ADE80] text-[18px]">check_circle</span>
</td>
<td class="py-sm text-right text-outline text-[12px]">No conflict - All parts aligned</td>
</tr>
<tr class="border-b border-surface-variant hover:bg-surface-bright/20 transition-colors">
<td class="py-sm font-medium text-on-surface flex items-center gap-xs">
<span class="material-symbols-outlined text-on-surface-variant text-[16px]">key</span>
                                        Secret Vault (KMS)
                                    </td>
<td class="py-sm text-center">
<span class="material-symbols-outlined text-[#4ADE80] text-[18px]">check_circle</span>
</td>
<td class="py-sm text-right text-outline text-[12px]">No conflict - All parts aligned</td>
</tr>
<tr class="border-b border-surface-variant hover:bg-surface-bright/20 transition-colors">
<td class="py-sm font-medium text-on-surface flex items-center gap-xs">
<span class="material-symbols-outlined text-on-surface-variant text-[16px]">admin_panel_settings</span>
                                        RBAC/ABAC
                                    </td>
<td class="py-sm text-center">
<span class="material-symbols-outlined text-[#4ADE80] text-[18px]">check_circle</span>
</td>
<td class="py-sm text-right text-outline text-[12px]">No conflict - All parts aligned</td>
</tr>
<tr class="border-b border-surface-variant hover:bg-surface-bright/20 transition-colors">
<td class="py-sm font-medium text-on-surface flex items-center gap-xs">
<span class="material-symbols-outlined text-on-surface-variant text-[16px]">swap_horiz</span>
                                        Order State Machine
                                    </td>
<td class="py-sm text-center">
<span class="material-symbols-outlined text-[#4ADE80] text-[18px]">check_circle</span>
</td>
<td class="py-sm text-right text-outline text-[12px]">No conflict - All parts aligned</td>
</tr>
<tr class="border-b border-surface-variant hover:bg-surface-bright/20 transition-colors">
<td class="py-sm font-medium text-on-surface flex items-center gap-xs">
<span class="material-symbols-outlined text-tech-blue text-[16px]">smart_toy</span>
                                        AI Ensemble (16 analysts)
                                    </td>
<td class="py-sm text-center">
<span class="material-symbols-outlined text-[#FBBF24] text-[18px]">warning</span>
</td>
<td class="py-sm text-right text-outline text-[12px]">Reviewing prompt isolation</td>
</tr>
<tr class="border-b border-surface-variant hover:bg-surface-bright/20 transition-colors">
<td class="py-sm font-medium text-on-surface flex items-center gap-xs">
<span class="material-symbols-outlined text-on-surface-variant text-[16px]">gavel</span>
                                        Compliance Gating
                                    </td>
<td class="py-sm text-center">
<span class="material-symbols-outlined text-[#4ADE80] text-[18px]">check_circle</span>
</td>
<td class="py-sm text-right text-outline text-[12px]">No conflict - All parts aligned</td>
</tr>
<tr class="border-b-0 hover:bg-surface-bright/20 transition-colors">
<td class="py-sm font-medium text-on-surface flex items-center gap-xs">
<span class="material-symbols-outlined text-on-surface-variant text-[16px]">translate</span>
                                        RTL/Accessibility
                                    </td>
<td class="py-sm text-center">
<span class="material-symbols-outlined text-[#4ADE80] text-[18px]">check_circle</span>
</td>
<td class="py-sm text-right text-outline text-[12px]">No conflict - All parts aligned</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
<!-- Right Column: Guardrails & Compliance (25% ~ 3 cols) -->
<div class="md:col-span-3 flex flex-col gap-md">
<!-- Store Policy Check -->
<div class="glass-panel rounded-xl p-md border-metallic">
<h2 class="font-title-md text-title-md text-on-surface mb-sm flex items-center gap-xs text-[16px]">
<span class="material-symbols-outlined text-primary-container text-[18px]">storefront</span> Store Policy Check
                    </h2>
<ul class="space-y-2">
<li class="flex items-start gap-xs">
<span class="material-symbols-outlined text-[#4ADE80] text-[16px] mt-0.5">done</span>
<div class="flex flex-col">
<span class="font-body-sm text-body-sm text-on-surface">Apple IAP Constraints</span>
<span class="text-[11px] text-outline">Bypassed via Web PWA model</span>
</div>
</li>
<li class="flex items-start gap-xs">
<span class="material-symbols-outlined text-[#4ADE80] text-[16px] mt-0.5">done</span>
<div class="flex flex-col">
<span class="font-body-sm text-body-sm text-on-surface">Google Play Financials</span>
<span class="text-[11px] text-outline">Compliant disclosure verified</span>
</div>
</li>
</ul>
</div>
<!-- Security Checklist -->
<div class="glass-panel rounded-xl p-md border-metallic glow-blue">
<h2 class="font-title-md text-title-md text-on-surface mb-sm flex items-center gap-xs text-[16px]">
<span class="material-symbols-outlined text-tech-blue text-[18px]">security</span> Security Checklist
                    </h2>
<ul class="space-y-2">
<li class="flex items-center justify-between">
<span class="font-body-sm text-body-sm text-on-surface-variant">Passkeys Auth</span>
<div class="w-8 h-4 bg-surface rounded-full p-0.5 border border-primary-container relative">
<div class="w-3 h-3 bg-primary-container rounded-full absolute right-0.5"></div>
</div>
</li>
<li class="flex items-center justify-between">
<span class="font-body-sm text-body-sm text-on-surface-variant">Audit Logs WORM</span>
<div class="w-8 h-4 bg-surface rounded-full p-0.5 border border-primary-container relative">
<div class="w-3 h-3 bg-primary-container rounded-full absolute right-0.5"></div>
</div>
</li>
<li class="flex items-center justify-between">
<span class="font-body-sm text-body-sm text-on-surface-variant">CorrelationID Tracing</span>
<div class="w-8 h-4 bg-surface rounded-full p-0.5 border border-primary-container relative">
<div class="w-3 h-3 bg-primary-container rounded-full absolute right-0.5"></div>
</div>
</li>
</ul>
</div>
<!-- QA Pyramid -->
<div class="glass-panel rounded-xl p-md border-metallic">
<h2 class="font-title-md text-title-md text-on-surface mb-sm flex items-center gap-xs text-[16px]">
<span class="material-symbols-outlined text-outline text-[18px]">architecture</span> QA Pyramid Status
                    </h2>
<div class="flex flex-col gap-1 mt-2">
<!-- Top: E2E -->
<div class="w-full flex justify-center">
<div class="bg-surface-container border border-surface-variant text-center py-1 w-1/3 rounded-t-md text-[10px] font-label-caps text-on-surface-variant">
                                E2E: 100%
                            </div>
</div>
<!-- Middle: Integration -->
<div class="w-full flex justify-center">
<div class="bg-surface-container border border-surface-variant text-center py-1 w-2/3 text-[10px] font-label-caps text-on-surface-variant">
                                Integration: 100%
                            </div>
</div>
<!-- Bottom: Unit -->
<div class="w-full flex justify-center">
<div class="bg-surface-container border border-surface-variant text-center py-1 w-full rounded-b-md text-[10px] font-label-caps text-on-surface-variant">
                                Unit Tests: 100% Cov.
                            </div>
</div>
</div>
</div>
</div>
</div>
<!-- Bottom Section: Production Verification Log -->
<div class="bg-[#050505] border border-surface-variant rounded-xl p-md font-mono mt-md overflow-hidden relative">
<div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-container to-transparent opacity-50"></div>
<div class="flex items-center gap-sm mb-4 border-b border-surface-variant pb-2">
<span class="material-symbols-outlined text-outline text-[18px]">terminal</span>
<span class="text-body-sm font-semibold text-outline tracking-wider">PRODUCTION_LOG_VERIFICATION_TTY1</span>
</div>
<div class="text-[13px] text-secondary-fixed-dim leading-relaxed space-y-1">
<div class="flex gap-4">
<span class="text-outline-variant select-none">01</span>
<span class="text-on-surface">&gt; Initiating final system sweep...</span>
</div>
<div class="flex gap-4">
<span class="text-outline-variant select-none">02</span>
<span class="text-[#4ADE80]">[OK] Checksum validation passed for all 20 modules.</span>
</div>
<div class="flex gap-4">
<span class="text-outline-variant select-none">03</span>
<span class="text-primary-container">&gt; ACTION REQUIRED: <span class="text-on-surface">Re-check exchange APIs rate limits before flip.</span></span>
</div>
<div class="flex gap-4">
<span class="text-outline-variant select-none">04</span>
<span class="text-primary-container">&gt; ACTION REQUIRED: <span class="text-on-surface">Verify regulator rules (MiCA/ESMA) routing logic.</span></span>
</div>
<div class="flex gap-4">
<span class="text-outline-variant select-none">05</span>
<span class="text-[#4ADE80]">[LOG] Verification recorded. Owner: SYS_ADMIN_01. Date: 2026-08-27T14:32:01Z</span>
</div>
<div class="flex gap-4 mt-2">
<span class="text-outline-variant select-none">06</span>
<span class="text-tech-blue animate-pulse">_</span>
</div>
</div>
</div>
</main>
<!-- Footer (Shared Component) -->
<footer class="bg-surface-container-lowest dark:bg-surface-container-lowest w-full mt-lg border-t border-outline-variant/20 flat no shadows opacity-80 hover:opacity-100 transition-opacity">
<div class="flex flex-col md:flex-row justify-between items-start px-margin-desktop py-lg gap-md max-w-[1440px] mx-auto w-full">
<div class="flex flex-col gap-sm">
<span class="font-title-md text-title-md font-bold text-on-surface">IranCoin Premium</span>
<span class="font-body-sm text-body-sm text-primary dark:text-primary">
                    © 2024 IranCoin Premium. All rights reserved. Professional Trading Platform.
                </span>
</div>
<div class="flex flex-wrap gap-md font-body-sm text-body-sm">
<!-- Using exact strings from JSON -->
<a class="text-primary font-bold hover:text-secondary-fixed-dim transition-colors" href="#">Security Audits</a>
<a class="text-on-surface-variant hover:text-on-surface hover:text-secondary-fixed-dim transition-colors" href="#">Reserve Proofs</a>
<a class="text-on-surface-variant hover:text-on-surface hover:text-secondary-fixed-dim transition-colors" href="#">Compliance</a>
<a class="text-on-surface-variant hover:text-on-surface hover:text-secondary-fixed-dim transition-colors" href="#">Risk Disclosure</a>
<a class="text-on-surface-variant hover:text-on-surface hover:text-secondary-fixed-dim transition-colors" href="#">Privacy Policy</a>
<a class="text-on-surface-variant hover:text-on-surface hover:text-secondary-fixed-dim transition-colors" href="#">Terms of Service</a>
</div>
</div>
</footer>
`;
export default function ReviewPage() {
  useEffect(() => { document.documentElement.classList.add("dark"); }, []);
  return <div className="min-h-screen bg-[#0A0A0B]"><div dangerouslySetInnerHTML={{__html: html}} /></div>;
}
