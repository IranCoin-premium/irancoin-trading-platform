// Auto-generated from Stitch Part 4 - IranCoin Premium
// Source: IranCoin-premium/prompts Part 4
"use client";
import { useEffect } from "react";
const html = `
<!-- TopNavBar -->
<nav class="bg-surface/60 dark:bg-surface/60 backdrop-blur-md font-body-lg text-body-lg docked full-width top-0 sticky z-50 border-b border-outline-variant/30 shadow-sm">
<div class="flex justify-between items-center px-margin-desktop py-base max-w-[1440px] mx-auto w-full">
<div class="flex items-center gap-xl">
<a class="font-display-lg text-display-lg font-bold text-primary dark:text-primary tracking-tight" href="#">IranCoin Premium</a>
<div class="hidden md:flex gap-md items-center">
<a class="text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-variant/50 transition-all rounded px-sm py-xs scale-95 duration-200 ease-in-out" href="#">Home</a>
<a class="text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-variant/50 transition-all rounded px-sm py-xs scale-95 duration-200 ease-in-out" href="#">Markets</a>
<a class="text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-variant/50 transition-all rounded px-sm py-xs scale-95 duration-200 ease-in-out" href="#">Research</a>
<a class="text-primary border-b-2 border-primary pb-1 hover:bg-surface-variant/50 transition-all rounded px-sm py-xs scale-95 duration-200 ease-in-out" href="#">Security</a>
<a class="text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-variant/50 transition-all rounded px-sm py-xs scale-95 duration-200 ease-in-out" href="#">Support</a>
</div>
</div>
<div class="flex items-center gap-md">
<button class="text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-variant/50 transition-all rounded p-xs scale-95 duration-200 ease-in-out flex items-center justify-center">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 0;">language</span>
</button>
<button class="text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-variant/50 transition-all rounded p-xs scale-95 duration-200 ease-in-out flex items-center justify-center">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 0;">account_circle</span>
</button>
<button class="text-on-surface-variant text-body-sm hover:text-primary transition-colors">EN/FA</button>
<button class="bg-primary-container text-on-primary-container hover:bg-primary-fixed px-md py-xs rounded font-medium transition-colors ml-sm">Sign In</button>
</div>
</div>
</nav>
<!-- Main Content -->
<main class="flex-grow w-full max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-lg flex flex-col gap-lg">
<!-- Header -->
<header class="flex flex-col md:flex-row justify-between items-start md:items-end gap-sm border-b border-outline-variant/30 pb-md">
<div>
<h1 class="font-headline-lg text-headline-lg md:font-display-lg md:text-display-lg text-on-surface mb-xs">Trust Center</h1>
<p class="text-on-surface-variant font-body-sm text-body-sm max-w-2xl">Real-time telemetry, compliance posture, and security orchestration for high-net-worth digital asset operations.</p>
</div>
<div class="flex flex-wrap gap-xs items-center">
<span class="inline-flex items-center gap-xs px-2 py-1 rounded bg-surface-container-high border border-outline-variant/50 text-on-surface text-label-caps font-label-caps">
<span class="w-2 h-2 rounded-full tech-blue-bg"></span> Audited
                </span>
<span class="inline-flex items-center gap-xs px-2 py-1 rounded bg-surface-container-high border border-outline-variant/50 text-on-surface text-label-caps font-label-caps">
<span class="w-2 h-2 rounded-full tech-blue-bg"></span> Secure
                </span>
<span class="inline-flex items-center gap-xs px-2 py-1 rounded bg-surface-container-high border border-outline-variant/50 text-on-surface text-label-caps font-label-caps">
<span class="w-2 h-2 rounded-full bg-primary-container"></span> Compliant
                </span>
<div class="h-4 w-[1px] bg-outline-variant mx-xs"></div>
<span class="inline-flex items-center gap-xs px-2 py-1 rounded glass-panel text-on-surface text-label-caps font-label-caps">
<span class="material-symbols-outlined text-[14px]">public</span> Region: Global
                </span>
</div>
</header>
<!-- Bento Grid Layout -->
<div class="grid grid-cols-1 md:grid-cols-12 gap-gutter">
<!-- Left Column: Threat & Identity (3 columns) -->
<div class="md:col-span-3 flex flex-col gap-gutter">
<!-- Threat Model Matrix -->
<div class="glass-panel rounded-xl p-md flex flex-col h-full relative overflow-hidden">
<div class="absolute top-0 right-0 p-2 opacity-10 pointer-events-none">
<span class="material-symbols-outlined text-[120px]">shield</span>
</div>
<h2 class="font-title-md text-title-md text-on-surface mb-sm flex items-center gap-xs">
<span class="material-symbols-outlined text-primary text-[20px]">security</span>
                        Threat Model
                    </h2>
<div class="grid grid-cols-2 gap-xs mt-sm flex-grow">
<!-- Matrix Cells -->
<div class="bg-surface-container p-xs rounded border border-outline-variant/30 flex flex-col items-center justify-center text-center">
<span class="material-symbols-outlined text-primary text-[18px] mb-1">wifi_tethering</span>
<span class="font-label-caps text-label-caps text-on-surface-variant">DDoS Mitigated</span>
</div>
<div class="bg-surface-container p-xs rounded border border-outline-variant/30 flex flex-col items-center justify-center text-center">
<span class="material-symbols-outlined text-primary text-[18px] mb-1">fingerprint</span>
<span class="font-label-caps text-label-caps text-on-surface-variant">Biometrics</span>
</div>
<div class="bg-surface-container p-xs rounded border border-outline-variant/30 flex flex-col items-center justify-center text-center">
<span class="material-symbols-outlined text-primary text-[18px] mb-1">dns</span>
<span class="font-label-caps text-label-caps text-on-surface-variant">WAF Active</span>
</div>
<div class="bg-surface-container p-xs rounded border tech-blue-border/50 agent-active flex flex-col items-center justify-center text-center relative">
<div class="absolute top-1 right-1 w-1.5 h-1.5 rounded-full tech-blue-bg"></div>
<span class="material-symbols-outlined tech-blue-text text-[18px] mb-1">smart_toy</span>
<span class="font-label-caps text-label-caps text-on-surface-variant">AI Heuristics</span>
</div>
</div>
</div>
<!-- Identity & Access -->
<div class="glass-panel rounded-xl p-md flex flex-col">
<h2 class="font-title-md text-title-md text-on-surface mb-md flex items-center gap-xs">
<span class="material-symbols-outlined text-primary text-[20px]">passkey</span>
                        Identity &amp; Access
                    </h2>
<ul class="flex flex-col gap-sm">
<li class="flex justify-between items-center border-b border-outline-variant/20 pb-sm">
<div class="flex items-center gap-sm">
<span class="material-symbols-outlined text-on-surface-variant text-[18px]">key</span>
<span class="font-body-sm text-body-sm text-on-surface">WebAuthn</span>
</div>
<span class="text-primary font-label-caps text-label-caps">Enforced</span>
</li>
<li class="flex justify-between items-center border-b border-outline-variant/20 pb-sm">
<div class="flex items-center gap-sm">
<span class="material-symbols-outlined text-on-surface-variant text-[18px]">phonelink_lock</span>
<span class="font-body-sm text-body-sm text-on-surface">TOTP MFA</span>
</div>
<span class="text-primary font-label-caps text-label-caps">Configured</span>
</li>
<li class="flex justify-between items-center border-b border-outline-variant/20 pb-sm">
<div class="flex items-center gap-sm">
<span class="material-symbols-outlined text-on-surface-variant text-[18px]">devices</span>
<span class="font-body-sm text-body-sm text-on-surface">Trusted Devices</span>
</div>
<span class="text-on-surface font-body-sm text-body-sm">3 Active</span>
</li>
<li class="flex justify-between items-center pt-xs">
<div class="flex items-center gap-sm">
<span class="material-symbols-outlined tech-blue-text text-[18px]">policy</span>
<span class="font-body-sm text-body-sm text-on-surface">Risk-based Auth</span>
</div>
<span class="tech-blue-text font-label-caps text-label-caps">Monitoring</span>
</li>
</ul>
<button class="mt-md w-full bg-transparent border border-primary text-primary hover:bg-primary hover:text-on-primary transition-colors py-xs rounded font-body-sm text-body-sm">
                        Revoke All Sessions
                    </button>
</div>
</div>
<!-- Center Column: Vault & Architecture (5 columns) -->
<div class="md:col-span-5 flex flex-col gap-gutter">
<!-- Envelope Encryption Arch -->
<div class="glass-panel rounded-xl p-md">
<h2 class="font-title-md text-title-md text-on-surface mb-sm flex items-center gap-xs">
<span class="material-symbols-outlined text-primary text-[20px]">enhanced_encryption</span>
                        KMS Architecture
                    </h2>
<!-- Diagram Placeholder (CSS based) -->
<div class="mt-md bg-surface-container-low border border-outline-variant/30 rounded p-md flex flex-col items-center gap-md relative">
<div class="flex w-full justify-between items-center relative z-10">
<div class="bg-surface-container border border-outline-variant p-sm rounded text-center min-w-[80px]">
<span class="material-symbols-outlined text-on-surface-variant">person</span>
<div class="text-[10px] text-on-surface-variant mt-1">Client</div>
</div>
<div class="flex-grow h-[1px] bg-outline-variant relative">
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-surface-container-low px-1 text-[10px] text-on-surface-variant">TLS 1.3</div>
</div>
<div class="bg-surface-container border tech-blue-border p-sm rounded text-center min-w-[80px] shadow-[0_0_10px_rgba(14,165,233,0.2)]">
<span class="material-symbols-outlined tech-blue-text">memory</span>
<div class="text-[10px] tech-blue-text mt-1">Enclave</div>
</div>
</div>
<div class="h-8 w-[1px] bg-outline-variant"></div>
<div class="bg-surface-container border border-primary/50 p-sm rounded-lg text-center w-full max-w-[200px]">
<span class="material-symbols-outlined text-primary mb-1">lock</span>
<div class="font-label-caps text-label-caps text-on-surface">HSM Vault</div>
<div class="text-[10px] text-on-surface-variant mt-1">Envelope Encryption</div>
</div>
</div>
</div>
<!-- Secret Management & RBAC -->
<div class="glass-panel rounded-xl p-md flex-grow flex flex-col">
<div class="flex justify-between items-center mb-md">
<h2 class="font-title-md text-title-md text-on-surface flex items-center gap-xs">
<span class="material-symbols-outlined text-primary text-[20px]">vpn_key</span>
                            API Credentials
                        </h2>
<span class="bg-surface-container px-2 py-1 rounded text-[10px] text-on-surface-variant border border-outline-variant/30">RBAC: Admin</span>
</div>
<div class="bg-surface-container-lowest border border-outline-variant/30 rounded p-sm flex justify-between items-center mb-md">
<div>
<div class="text-on-surface-variant font-label-caps text-label-caps mb-1">Production Trading Key</div>
<div class="font-mono text-body-sm text-on-surface tracking-widest">sk_live_••••••••••••••••</div>
</div>
<button class="text-on-surface-variant hover:text-primary transition-colors p-1" title="Reveal">
<span class="material-symbols-outlined">visibility</span>
</button>
</div>
<h3 class="font-title-md text-title-md text-on-surface mb-sm mt-sm flex items-center gap-xs text-[16px]">
<span class="material-symbols-outlined text-on-surface-variant text-[18px]">history</span>
                        Audit Log
                    </h3>
<div class="overflow-x-auto">
<table class="w-full text-left border-collapse">
<thead>
<tr class="border-b border-outline-variant/30 text-on-surface-variant font-label-caps text-label-caps">
<th class="py-2 font-normal">Timestamp</th>
<th class="py-2 font-normal">Action</th>
<th class="py-2 font-normal">Corr ID</th>
</tr>
</thead>
<tbody class="font-body-sm text-body-sm text-on-surface">
<tr class="border-b border-outline-variant/10 hover:bg-surface-variant/20 transition-colors">
<td class="py-2 font-mono text-[12px] text-on-surface-variant">2024-05-20T14:32:01Z</td>
<td class="py-2">Key Revealed</td>
<td class="py-2 font-mono text-[10px] text-on-surface-variant truncate max-w-[80px]">req_8f7d9a</td>
</tr>
<tr class="border-b border-outline-variant/10 hover:bg-surface-variant/20 transition-colors">
<td class="py-2 font-mono text-[12px] text-on-surface-variant">2024-05-19T09:15:22Z</td>
<td class="py-2">Policy Updated</td>
<td class="py-2 font-mono text-[10px] text-on-surface-variant truncate max-w-[80px]">req_2b4c1e</td>
</tr>
<tr class="hover:bg-surface-variant/20 transition-colors">
<td class="py-2 font-mono text-[12px] text-on-surface-variant">2024-05-18T18:45:00Z</td>
<td class="py-2">Login (MFA)</td>
<td class="py-2 font-mono text-[10px] text-on-surface-variant truncate max-w-[80px]">req_9x3m5p</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
<!-- Right Column: AI & Engine (4 columns) -->
<div class="md:col-span-4 flex flex-col gap-gutter">
<!-- Trading Safety State Machine -->
<div class="glass-panel rounded-xl p-md">
<h2 class="font-title-md text-title-md text-on-surface mb-md flex items-center gap-xs">
<span class="material-symbols-outlined text-primary text-[20px]">account_tree</span>
                        Execution State
                    </h2>
<div class="flex flex-col gap-2 relative timeline-line pl-[11px]">
<div class="flex items-start gap-sm relative z-10">
<div class="w-2 h-2 rounded-full bg-primary-container mt-2 ring-4 ring-surface"></div>
<div class="bg-surface-container border border-outline-variant/30 rounded p-sm flex-grow">
<div class="font-label-caps text-label-caps text-on-surface">Validated</div>
<div class="text-[11px] text-on-surface-variant mt-1">Pre-trade risk checks passed</div>
</div>
</div>
<div class="flex items-start gap-sm relative z-10">
<div class="w-2 h-2 rounded-full bg-primary-container mt-2 ring-4 ring-surface"></div>
<div class="bg-surface-container border border-outline-variant/30 rounded p-sm flex-grow">
<div class="font-label-caps text-label-caps text-on-surface">Signed</div>
<div class="text-[11px] text-on-surface-variant mt-1">Cryptographic signature verified</div>
</div>
</div>
<div class="flex items-start gap-sm relative z-10 opacity-50">
<div class="w-2 h-2 rounded-full bg-outline-variant mt-2 ring-4 ring-surface"></div>
<div class="bg-surface-container border border-outline-variant/30 rounded p-sm flex-grow border-dashed">
<div class="font-label-caps text-label-caps text-on-surface">Executed</div>
<div class="text-[11px] text-on-surface-variant mt-1">Pending order book matching</div>
</div>
</div>
</div>
</div>
<!-- AI Governance & Risk -->
<div class="glass-panel rounded-xl p-md flex-grow flex flex-col">
<h2 class="font-title-md text-title-md text-on-surface mb-sm flex items-center gap-xs">
<span class="material-symbols-outlined tech-blue-text text-[20px]">memory</span>
                        AI Governance
                    </h2>
<div class="flex justify-between items-center mb-md border-b border-outline-variant/20 pb-sm">
<span class="font-body-sm text-body-sm text-on-surface-variant">Consensus Panel (16+)</span>
<span class="inline-flex items-center gap-1 text-[12px] tech-blue-text">
<span class="w-1.5 h-1.5 rounded-full tech-blue-bg animate-pulse"></span> Active
                        </span>
</div>
<div class="space-y-sm mb-md">
<div class="flex justify-between items-center">
<span class="font-body-sm text-body-sm text-on-surface">Agent Alpha (Risk)</span>
<span class="text-[10px] px-2 py-0.5 rounded bg-surface-container border tech-blue-border/50 tech-blue-text">Online</span>
</div>
<div class="flex justify-between items-center">
<span class="font-body-sm text-body-sm text-on-surface">Agent Beta (Fraud)</span>
<span class="text-[10px] px-2 py-0.5 rounded bg-surface-container border tech-blue-border/50 tech-blue-text">Online</span>
</div>
<div class="flex justify-between items-center">
<span class="font-body-sm text-body-sm text-on-surface">Agent Gamma (Flow)</span>
<span class="text-[10px] px-2 py-0.5 rounded bg-surface-container border border-outline-variant/50 text-on-surface-variant">Standby</span>
</div>
</div>
<h3 class="font-title-md text-title-md text-on-surface mb-sm mt-auto border-t border-outline-variant/20 pt-sm flex items-center gap-xs text-[16px]">
<span class="material-symbols-outlined text-error text-[18px]">warning</span>
                        Risk Engine Limits
                    </h3>
<div class="grid grid-cols-2 gap-sm">
<div>
<div class="text-[10px] text-on-surface-variant uppercase tracking-wider mb-1">Position Limit</div>
<div class="font-mono text-body-sm text-on-surface">Tier 2 ($5M)</div>
</div>
<div>
<div class="text-[10px] text-on-surface-variant uppercase tracking-wider mb-1">Drawdown Protect</div>
<div class="font-mono text-body-sm text-on-surface">Active (15%)</div>
</div>
</div>
</div>
</div>
</div>
<!-- Bottom Section: Infrastructure & Observability -->
<div class="glass-panel rounded-xl p-md mt-sm flex flex-wrap gap-md justify-between items-center">
<div class="flex items-center gap-md flex-wrap">
<div class="flex items-center gap-xs text-on-surface-variant hover:text-on-surface transition-colors cursor-help" title="Web Content Accessibility Guidelines 2.2 Level AA Compliant">
<span class="material-symbols-outlined text-[18px]">accessibility_new</span>
<span class="font-label-caps text-label-caps">WCAG 2.2 AA</span>
</div>
<div class="h-4 w-[1px] bg-outline-variant hidden sm:block"></div>
<div class="flex items-center gap-xs text-on-surface-variant">
<span class="material-symbols-outlined text-[18px]">translate</span>
<span class="font-label-caps text-label-caps">Layout:</span>
<button class="bg-surface-container hover:bg-surface-variant px-2 py-0.5 rounded text-[10px] transition-colors text-on-surface border border-outline-variant/30">LTR</button>
<button class="hover:bg-surface-variant px-2 py-0.5 rounded text-[10px] transition-colors">RTL</button>
</div>
<div class="h-4 w-[1px] bg-outline-variant hidden sm:block"></div>
<div class="flex items-center gap-xs text-on-surface-variant" title="Server-side Truth Verification">
<span class="material-symbols-outlined text-primary text-[18px]">verified_user</span>
<span class="font-label-caps text-label-caps text-primary">SST Verified</span>
</div>
</div>
<div class="flex items-center gap-md flex-wrap">
<div class="flex items-center gap-xs">
<span class="material-symbols-outlined text-on-surface-variant text-[18px]">troubleshoot</span>
<div class="flex gap-1">
<span class="w-1.5 h-3 bg-primary-container/30 rounded-sm"></span>
<span class="w-1.5 h-4 bg-primary-container/60 rounded-sm"></span>
<span class="w-1.5 h-2 bg-primary-container rounded-sm"></span>
</div>
<span class="font-label-caps text-label-caps text-on-surface ml-1">Observability Nominal</span>
</div>
<div class="flex items-center gap-xs border border-outline-variant/30 bg-surface-container rounded px-2 py-1">
<span class="material-symbols-outlined text-on-surface-variant text-[14px]">backup</span>
<span class="font-label-caps text-label-caps text-on-surface-variant text-[10px]">DR Sync: <span class="text-on-surface">1m ago</span></span>
</div>
</div>
</div>
</main>
<!-- Footer -->
<footer class="bg-surface-container-lowest dark:bg-surface-container-lowest w-full mt-lg border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-start px-margin-desktop py-lg gap-md max-w-[1440px] mx-auto">
<div>
<div class="font-title-md text-title-md font-bold text-on-surface mb-xs">IranCoin Premium</div>
<p class="font-body-sm text-body-sm text-on-surface-variant max-w-sm">© 2024 IranCoin Premium. All rights reserved. Professional Trading Platform.</p>
</div>
<div class="flex flex-wrap gap-md md:gap-lg">
<a class="font-body-sm text-body-sm text-primary font-bold hover:text-secondary-fixed-dim transition-colors opacity-80 hover:opacity-100 transition-opacity" href="#">Security Audits</a>
<a class="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface hover:text-secondary-fixed-dim transition-colors opacity-80 hover:opacity-100 transition-opacity" href="#">Reserve Proofs</a>
<a class="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface hover:text-secondary-fixed-dim transition-colors opacity-80 hover:opacity-100 transition-opacity" href="#">Compliance</a>
<a class="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface hover:text-secondary-fixed-dim transition-colors opacity-80 hover:opacity-100 transition-opacity" href="#">Risk Disclosure</a>
<a class="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface hover:text-secondary-fixed-dim transition-colors opacity-80 hover:opacity-100 transition-opacity" href="#">Privacy Policy</a>
<a class="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface hover:text-secondary-fixed-dim transition-colors opacity-80 hover:opacity-100 transition-opacity" href="#">Terms of Service</a>
</div>
</footer>
`;
export default function Part4Page() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);
  return (
    <div className="min-h-screen bg-[#0A0A0B]">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
