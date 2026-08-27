// Auto-generated from Stitch Part 1 - IranCoin Premium
// Source: IranCoin-premium/prompts Part 1
"use client";
import { useEffect } from "react";
const html = `
<!-- TopNavBar -->
<nav class="bg-surface/60 dark:bg-surface/60 backdrop-blur-md docked full-width top-0 sticky z-50 border-b border-outline-variant/30 shadow-sm flex justify-between items-center px-margin-desktop py-base max-w-[1440px] mx-auto w-full transition-all">
<div class="flex items-center gap-sm">
<img alt="IranCoin Premium Logo" class="h-10 w-10 object-contain rounded-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhkExX5Epuz-_D8mtfGN2bJF_MnnETmUlir61OO-aE1i331IJOiwYuTITSJP3KyjNyj1AypAckSEplGmtWXcFXWmML7LxO2knLHL8yugFAeg-ZaiUwYbZhk5eafdl56T3c9G4MVKW21OXK_3Lz0oStWsvkfTNFY1q113GIB5alhJDVINFXpAi6YVAwaVOxBxPZJB8e_Fg_v7VEU7SoKK4ZWqpp-Q4rRToFX2jR57A6CCeTqtgMvD36OGjsuVlrYiY3aN4WwMbcaW80"/>
<span class="font-display-lg text-[24px] font-bold text-primary dark:text-primary tracking-tight">IranCoin Premium</span>
</div>
<div class="hidden md:flex items-center gap-lg font-body-lg text-body-lg">
<a class="text-primary border-b-2 border-primary pb-1 scale-95 duration-200 ease-in-out" href="#">Home</a>
<a class="text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-variant/50 px-3 py-1 rounded-sm scale-95 duration-200 ease-in-out" href="#">Markets</a>
<a class="text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-variant/50 px-3 py-1 rounded-sm scale-95 duration-200 ease-in-out" href="#">Research</a>
<a class="text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-variant/50 px-3 py-1 rounded-sm scale-95 duration-200 ease-in-out" href="#">Security</a>
<a class="text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-variant/50 px-3 py-1 rounded-sm scale-95 duration-200 ease-in-out" href="#">Support</a>
</div>
<div class="flex items-center gap-sm">
<button class="text-on-surface-variant hover:text-primary transition-colors p-2 rounded-sm hover:bg-surface-variant/50 scale-95 duration-200 ease-in-out">
<span class="material-symbols-outlined text-[20px]">language</span>
</button>
<button class="text-on-surface-variant hover:text-primary transition-colors p-2 rounded-sm hover:bg-surface-variant/50 scale-95 duration-200 ease-in-out hidden sm:block">
                EN/FA
            </button>
<button class="text-on-surface-variant hover:text-primary transition-colors p-2 rounded-sm hover:bg-surface-variant/50 scale-95 duration-200 ease-in-out">
<span class="material-symbols-outlined text-[20px]">account_circle</span>
</button>
<button class="bg-primary-container text-on-primary font-title-md text-[14px] px-4 py-2 rounded-sm hover:opacity-90 transition-opacity ml-2">
                Sign In
            </button>
</div>
</nav>
<main class="w-full">
<!-- Hero Section -->
<section class="relative min-h-[90vh] flex items-center justify-center hero-gradient pt-20 overflow-hidden">
<div class="absolute inset-0 z-0 opacity-40">
<!-- STITCH_THREEJS_START:ANIMATION_4 class="absolute inset-0 w-full h-full" -->
<div class="absolute inset-0 w-full h-full" style="display:block;">
<script src="https://ajax.googleapis.com/ajax/libs/threejs/r125/three.min.js"></script>
<div id="threejs-container-ANIMATION_4" style="width:100%;height:100%"></div>
<script>
(function() {
  const container = document.getElementById('threejs-container-ANIMATION_4');
  const devicePixelRatio = window.devicePixelRatio || 1;
  const width = container.clientWidth || window.innerWidth;
const height = container.clientHeight || window.innerHeight;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(width, height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
container.appendChild(renderer.domElement);

// Geometry: A high-tech "intelligence" core
// Using a central sphere surrounded by orbiting geometric rings
const group = new THREE.Group();
scene.add(group);

const coreMaterial = new THREE.MeshPhongMaterial({
    color: 0xD4AF37,
    emissive: 0x000000,
    shininess: 100,
    transparent: true,
    opacity: 0.9
});

const coreGeometry = new THREE.IcosahedronGeometry(1.2, 0);
const core = new THREE.Mesh(coreGeometry, coreMaterial);
group.add(core);

// Wireframe shell for core
const shellGeometry = new THREE.IcosahedronGeometry(1.25, 1);
const shellMaterial = new THREE.MeshBasicMaterial({
    color: 0xD4AF37,
    wireframe: true,
    transparent: true,
    opacity: 0.3
});
const shell = new THREE.Mesh(shellGeometry, shellMaterial);
group.add(shell);

// Orbiting rings
const ringColors = [0xD4AF37, 0x0EA5E9, 0xD4AF37];
const rings = [];

for (let i = 0; i < 3; i++) {
    const ringGeometry = new THREE.TorusGeometry(2 + i * 0.5, 0.02, 16, 100);
    const ringMaterial = new THREE.MeshBasicMaterial({
        color: ringColors[i],
        transparent: true,
        opacity: 0.4
    });
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.rotation.x = Math.random() * Math.PI;
    ring.rotation.y = Math.random() * Math.PI;
    group.add(ring);
    rings.push({
        mesh: ring,
        speed: (Math.random() - 0.5) * 0.01
    });
}

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xD4AF37, 2);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

const blueLight = new THREE.PointLight(0x0EA5E9, 1.5);
blueLight.position.set(-5, -5, 5);
scene.add(blueLight);

camera.position.z = 6;

// Mouse tracking
let mouseX = 0;
let mouseY = 0;
window.addEventListener('mousemove', (event) => {
    mouseX = (event.clientX / window.innerWidth - 0.5) * 0.5;
    mouseY = (event.clientY / window.innerHeight - 0.5) * 0.5;
});

function animate() {
    requestAnimationFrame(animate);

    group.rotation.y += 0.005;
    group.rotation.x += 0.002;
    
    // Smooth mouse follow
    group.rotation.y += (mouseX - group.rotation.y) * 0.05;
    group.rotation.x += (mouseY - group.rotation.x) * 0.05;

    rings.forEach(r => {
        r.mesh.rotation.z += r.speed;
        r.mesh.rotation.x += r.speed * 0.5;
    });

    core.rotation.y -= 0.01;

    renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
    const w = container.clientWidth || window.innerWidth;
    const h = container.clientHeight || window.innerHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
});

animate();
})();
</script>
</div>
<!-- STITCH_THREEJS_END:ANIMATION_4 -->
</div>
<div class="relative z-10 max-w-[1440px] mx-auto px-margin-desktop flex flex-col items-center text-center gap-lg w-full">
<div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-secondary/30 bg-secondary/5 text-secondary font-label-caps backdrop-blur-sm mb-4">
<span class="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                    INSTITUTIONAL GRADE ENGINE ACTIVE
                </div>
<h1 class="font-display-lg text-[64px] md:text-[80px] leading-[1.1] font-bold text-on-surface max-w-4xl tracking-tighter">
                    Disciplined Financial <br/>
<span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#FFF0B3]">Intelligence.</span>
</h1>
<p class="font-body-lg text-[20px] text-on-surface-variant max-w-2xl mt-4 font-light">
                    Elite digital asset trading environment engineered for absolute precision. Execute complex strategies with our advanced liquidity aggregation and AI-driven insights.
                </p>
<div class="flex flex-col sm:flex-row items-center gap-md mt-8">
<button class="bg-primary-container text-on-primary font-title-md px-8 py-4 rounded-sm hover:opacity-90 transition-all transform hover:scale-105 min-w-[200px]">
                        Get Started
                    </button>
<button class="bg-transparent border border-primary-container text-primary font-title-md px-8 py-4 rounded-sm hover:bg-primary-container/10 transition-all min-w-[200px]">
                        View Intelligence
                    </button>
</div>
<div class="mt-12 text-on-surface-variant/50 font-label-caps text-[10px] max-w-lg text-center uppercase tracking-widest border-t border-outline-variant/20 pt-4">
                    Trading digital assets involves significant risk. Designed for professional and institutional entities.
                </div>
</div>
</section>
<!-- Market Coverage -->
<section class="py-24 bg-[#0A0A0B] relative z-10">
<div class="max-w-[1440px] mx-auto px-margin-desktop">
<div class="flex justify-between items-end mb-12">
<div>
<h2 class="font-headline-lg text-on-surface">Market Coverage</h2>
<p class="font-body-sm text-on-surface-variant mt-2">Comprehensive instrument access via aggregated deep liquidity.</p>
</div>
<button class="text-secondary hover:text-secondary-fixed-dim transition-colors font-body-sm flex items-center gap-1">
                        View All Markets <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-sm">
<!-- Market Card 1 -->
<div class="glass-surface p-sm rounded-lg hover:border-primary/50 transition-colors group cursor-pointer relative overflow-hidden">
<div class="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors"></div>
<div class="flex justify-between items-start mb-6">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-primary text-[24px]" style="font-variation-settings: 'FILL' 1;">currency_bitcoin</span>
<span class="font-title-md text-on-surface font-semibold">Spot</span>
</div>
<span class="text-secondary font-label-caps">LIVE</span>
</div>
<div class="font-mono text-xl text-on-surface mb-1" dir="ltr">BTC/USDT</div>
<div class="flex items-center gap-2 font-mono text-sm">
<span class="text-emerald-400">+2.45%</span>
<span class="text-on-surface-variant">Vol 1.2B</span>
</div>
<div class="mt-4 h-12 w-full border-b border-dashed border-secondary/20 relative">
<!-- Simulated sparkline -->
<svg class="absolute bottom-0 w-full h-full" preserveaspectratio="none" viewbox="0 0 100 30">
<path d="M0 25 Q 10 15, 20 20 T 40 10 T 60 15 T 80 5 T 100 15" fill="none" stroke="#0EA5E9" stroke-width="1.5" vector-effect="non-scaling-stroke"></path>
</svg>
</div>
</div>
<!-- Market Card 2 -->
<div class="glass-surface p-sm rounded-lg hover:border-primary/50 transition-colors group cursor-pointer relative overflow-hidden">
<div class="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors"></div>
<div class="flex justify-between items-start mb-6">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-primary text-[24px]">moving</span>
<span class="font-title-md text-on-surface font-semibold">Perpetual</span>
</div>
<span class="text-secondary font-label-caps">100x</span>
</div>
<div class="font-mono text-xl text-on-surface mb-1" dir="ltr">ETH-PERP</div>
<div class="flex items-center gap-2 font-mono text-sm">
<span class="text-error">-0.85%</span>
<span class="text-on-surface-variant">Vol 850M</span>
</div>
<div class="mt-4 h-12 w-full border-b border-dashed border-secondary/20 relative">
<svg class="absolute bottom-0 w-full h-full" preserveaspectratio="none" viewbox="0 0 100 30">
<path d="M0 10 Q 10 15, 20 5 T 40 20 T 60 10 T 80 25 T 100 15" fill="none" opacity="0.7" stroke="#0EA5E9" stroke-width="1.5" vector-effect="non-scaling-stroke"></path>
</svg>
</div>
</div>
<!-- Market Card 3 -->
<div class="glass-surface p-sm rounded-lg hover:border-primary/50 transition-colors group cursor-pointer relative overflow-hidden">
<div class="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors"></div>
<div class="flex justify-between items-start mb-6">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-primary text-[24px]">layers</span>
<span class="font-title-md text-on-surface font-semibold">Hybrid</span>
</div>
</div>
<div class="font-mono text-xl text-on-surface mb-1" dir="ltr">Options (Deribit)</div>
<div class="flex items-center gap-2 font-mono text-sm">
<span class="text-on-surface-variant">IV 45.2%</span>
</div>
<div class="mt-4 h-12 w-full border-b border-dashed border-secondary/20 flex items-end">
<div class="w-full text-xs text-on-surface-variant font-mono">Advanced Routing Active</div>
</div>
</div>
<!-- Market Card 4 -->
<div class="glass-surface p-sm rounded-lg border-dashed hover:border-primary/50 transition-colors group cursor-pointer flex flex-col justify-center items-center text-center">
<div class="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center mb-4 group-hover:bg-primary/5 transition-colors">
<span class="material-symbols-outlined text-primary">add</span>
</div>
<span class="font-title-md text-on-surface">Custom Portfolio</span>
<span class="text-on-surface-variant text-sm mt-2">Build synthetic pairs</span>
</div>
</div>
</div>
</section>
<!-- AI Intelligence Agents (Bento Grid) -->
<section class="py-24 border-t border-outline-variant/10 relative overflow-hidden">
<!-- Background glow -->
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>
<div class="max-w-[1440px] mx-auto px-margin-desktop relative z-10">
<div class="text-center mb-16">
<h2 class="font-display-lg text-[40px] text-on-surface">Aureus <span class="text-secondary">Intelligence</span></h2>
<p class="font-body-lg text-on-surface-variant max-w-2xl mx-auto mt-4">Autonomous agents monitoring market microstructure, fundamental shifts, and capital efficiency 24/7.</p>
</div>
<div class="grid grid-cols-1 lg:grid-cols-3 gap-sm">
<!-- Agent 1 -->
<div class="glass-surface-blue pulse-border p-md rounded-xl lg:col-span-2 relative overflow-hidden group">
<div class="absolute top-4 right-4 flex items-center gap-2">
<span class="relative flex h-3 w-3">
<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
<span class="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
</span>
<span class="font-mono text-xs text-secondary">PROCESSING</span>
</div>
<div class="w-12 h-12 rounded-sm bg-secondary/10 flex items-center justify-center mb-6">
<span class="material-symbols-outlined text-secondary text-[28px]" style="font-variation-settings: 'FILL' 1;">psychology</span>
</div>
<h3 class="font-headline-lg text-on-surface mb-2">Strategy Intelligence</h3>
<p class="text-on-surface-variant font-body-sm max-w-md mb-8">Real-time orderbook imbalance detection and execution optimization routing across top-tier CEX/DEX venues.</p>
<div class="bg-[#000000] border border-secondary/20 rounded-sm p-4 font-mono text-xs text-on-surface-variant h-32 overflow-hidden relative">
<div class="absolute top-0 left-0 w-1 h-full bg-secondary"></div>
<div class="pl-2 space-y-2 opacity-80">
<div>&gt; [SYS] Analyzing Binance Spot liquidity depth...</div>
<div>&gt; [ACT] Detecting spoofing patterns at 64,500 resistance.</div>
<div class="text-secondary">&gt; [REC] Adjust TWAP execution curve to back-loaded profile.</div>
<div>&gt; [SYS] Confidence: 94.2%</div>
</div>
</div>
</div>
<!-- Agent 2 -->
<div class="glass-surface p-md rounded-xl relative overflow-hidden group hover:border-primary/30 transition-colors">
<div class="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center mb-6">
<span class="material-symbols-outlined text-primary text-[28px]" style="font-variation-settings: 'FILL' 1;">shield</span>
</div>
<h3 class="font-title-md text-on-surface mb-2 font-bold">Risk &amp; Capital Intelligence</h3>
<p class="text-on-surface-variant font-body-sm mb-6">Dynamic margin allocation and catastrophic tail-risk hedging alerts.</p>
<div class="space-y-4">
<div class="flex justify-between items-center text-sm border-b border-outline-variant/20 pb-2">
<span class="text-on-surface-variant">Portfolio Delta</span>
<span class="font-mono text-on-surface">+0.45</span>
</div>
<div class="flex justify-between items-center text-sm border-b border-outline-variant/20 pb-2">
<span class="text-on-surface-variant">VaR (99%)</span>
<span class="font-mono text-primary">$12,450</span>
</div>
<div class="flex justify-between items-center text-sm">
<span class="text-on-surface-variant">Margin Health</span>
<span class="font-mono text-emerald-400">Excellent</span>
</div>
</div>
</div>
<!-- Agent 3 -->
<div class="glass-surface p-md rounded-xl lg:col-span-3 flex flex-col md:flex-row items-center gap-md group hover:border-primary/30 transition-colors">
<div class="flex-shrink-0 w-16 h-16 rounded-sm bg-surface-variant flex items-center justify-center border border-outline-variant/50">
<span class="material-symbols-outlined text-on-surface text-[32px]">article</span>
</div>
<div class="flex-grow">
<h3 class="font-title-md text-on-surface mb-1 font-bold">Fundamental &amp; Journal Intelligence</h3>
<p class="text-on-surface-variant font-body-sm">On-chain forensics combined with macroeconomic sentiment scoring. Automatically journals your trades against prevailing macro conditions.</p>
</div>
<div class="flex-shrink-0">
<button class="bg-transparent border border-primary-container text-primary font-title-md px-6 py-2 rounded-sm hover:bg-primary-container/10 transition-all text-sm">
                                Configure Agent
                            </button>
</div>
</div>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="bg-surface-container-lowest dark:bg-surface-container-lowest w-full mt-lg border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-start px-margin-desktop py-lg gap-md max-w-[1440px] mx-auto transition-all">
<div class="flex flex-col gap-4 max-w-sm">
<span class="font-title-md text-title-md font-bold text-on-surface">IranCoin Premium</span>
<p class="font-body-sm text-body-sm text-on-surface-variant">
                © 2024 IranCoin Premium. All rights reserved. Professional Trading Platform.
            </p>
</div>
<div class="flex flex-wrap gap-x-8 gap-y-4 font-body-sm text-body-sm">
<a class="text-on-surface-variant hover:text-on-surface hover:text-secondary-fixed-dim transition-colors opacity-80 hover:opacity-100" href="#">Security Audits</a>
<a class="text-on-surface-variant hover:text-on-surface hover:text-secondary-fixed-dim transition-colors opacity-80 hover:opacity-100" href="#">Reserve Proofs</a>
<a class="text-on-surface-variant hover:text-on-surface hover:text-secondary-fixed-dim transition-colors opacity-80 hover:opacity-100" href="#">Compliance</a>
<a class="text-on-surface-variant hover:text-on-surface hover:text-secondary-fixed-dim transition-colors opacity-80 hover:opacity-100" href="#">Risk Disclosure</a>
<a class="text-on-surface-variant hover:text-on-surface hover:text-secondary-fixed-dim transition-colors opacity-80 hover:opacity-100" href="#">Privacy Policy</a>
<a class="text-on-surface-variant hover:text-on-surface hover:text-secondary-fixed-dim transition-colors opacity-80 hover:opacity-100" href="#">Terms of Service</a>
</div>
</footer>
`;
export default function Part1Page() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);
  return (
    <div className="min-h-screen bg-[#0A0A0B]">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
