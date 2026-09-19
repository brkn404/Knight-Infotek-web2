const BLOCKS = [
  { letter: "A", label: "Identity", color: "#3b82f6" },
  { letter: "B", label: "Provenance", color: "#8b5cf6" },
  { letter: "C", label: "Behavior", color: "#ec4899" },
  { letter: "D", label: "Risk", color: "#ef4444" },
  { letter: "E", label: "Drift", color: "#f97316" },
  { letter: "F", label: "Confidence", color: "#eab308" },
  { letter: "G", label: "Evidence", color: "#14b8a6" },
  { letter: "H", label: "Attestation", color: "#22c55e" },
];

const DOMAINS = [
  {
    id: "gra",
    code: "GX-GRA",
    name: "Governance Recovery Assurance",
    label: "Recovery gate",
    blocks: ["C", "D", "E", "G", "H"],
    lane: "#12dcff",
    question: "Can this recovery chain be trusted before restore?",
    artifact: "Restore Authority",
    detail: "Recovery Environment Genome + Recovery Asset Genome before any actuator runs.",
    policy: "PoS-B · dual genome",
    receipt: "Exit pack · offline verify",
    focus: "Backup proves copy. GRA proves use.",
    focusDetail: "Environment drift and asset behavior fused before restore.",
  },
  {
    id: "gka",
    code: "GX-GKA",
    name: "Governance Knowledge Assurance",
    label: "Knowledge gate",
    blocks: ["A", "B", "C", "E", "G"],
    lane: "#3d9bff",
    question: "Can this knowledge be trusted before it is indexed?",
    artifact: "Pre-index gate",
    detail: "Provenance, hidden instructions, and ingestion drift before embed.",
    policy: "KAR · corpus gate",
    receipt: "Assurance receipt · KAR",
    focus: "RAG without a blind index.",
    focusDetail: "Corpus behavior measured before vectors are written.",
  },
  {
    id: "gma",
    code: "GX-GMA",
    name: "Governance Machine Learning Assurance",
    label: "ML training gate",
    blocks: ["B", "C", "D", "F", "G"],
    lane: "#6b5cff",
    question: "Can this dataset or ML asset be trusted before training?",
    artifact: "Training gate",
    detail: "Dataset hash, schema hash, and training-gate decision on materialized content.",
    policy: "ML-BOM · dataset gate",
    receipt: "Training gate receipt",
    focus: "Train on measured data, not assumed clean.",
    focusDetail: "Schema and behavioral drift before model weights move.",
  },
  {
    id: "gaa",
    code: "GX-GAA",
    name: "Governance Agent Assurance",
    label: "Agent action gate",
    blocks: ["A", "C", "D", "E", "F"],
    lane: "#b06cff",
    question: "Can this agent be trusted before it acts?",
    artifact: "Action gate",
    detail: "Tool calls, delegations, and runtime behavior vs family baseline.",
    policy: "AAR · action gate",
    receipt: "Action assurance receipt",
    focus: "Govern agents before tool execution.",
    focusDetail: "Behavioral genome on agent families, not prompt luck.",
  },
  {
    id: "gsa",
    code: "GX-GSA",
    name: "Governance Software Assurance",
    label: "Software release gate",
    blocks: ["B", "C", "D", "G", "H"],
    lane: "#20e0a0",
    question: "Can this release be trusted before deploy?",
    artifact: "Release gate",
    detail: "Provenance, lineage, and dependency posture, CVE is input, not the decision.",
    policy: "SBOM / CBOM · release gate",
    receipt: "Release gate receipt",
    focus: "Deploy trust, not vulnerability counts alone.",
    focusDetail: "Fused provenance and behavioral posture before production.",
  },
];

const stage = document.getElementById("gxap-stage");
const lanesEl = document.getElementById("gxap-lanes");
const gateEl = document.getElementById("gxap-gate");
const genomeGrid = document.getElementById("gxap-genome-grid");
const ingestEl = document.getElementById("gxap-genome-ingest");
const focusTitle = document.getElementById("focus-bar-title");
const focusDetail = document.getElementById("focus-bar-detail");
const engineSteps = stage?.querySelectorAll(".gxap-core-flow li") ?? [];

const slots = [];
let active = 0;
let timer;
let ingestTimer;
let fingerprintTimer;
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const FLOW_VIEW = { w: 1000, h: 580 };
let flowSyncFrame = 0;

function toSvg(stageRect, x, y) {
  return {
    x: ((x - stageRect.left) / stageRect.width) * FLOW_VIEW.w,
    y: ((y - stageRect.top) / stageRect.height) * FLOW_VIEW.h,
  };
}

function fanInPath(x1, y1, x2, y2) {
  const dx = Math.max(x2 - x1, 40);
  const stub = Math.min(22, dx * 0.06);
  const fan = dx * 0.42;
  const xStub = x1 + stub;
  return `M ${x1} ${y1} L ${xStub} ${y1} C ${xStub + fan} ${y1}, ${x2 - fan * 0.28} ${y2}, ${x2} ${y2}`;
}

function curvePath(x1, y1, x2, y2, dip = 0) {
  const dx = x2 - x1;
  const cx1 = x1 + dx * 0.18;
  const cy1 = y1 + dip;
  const cx2 = x2 - dx * 0.32;
  return `M ${x1} ${y1} C ${cx1} ${cy1}, ${cx2} ${y2}, ${x2} ${y2}`;
}

function setFlowGroup(group, d) {
  if (!group || !d) return;
  group.querySelectorAll("path").forEach((path) => path.setAttribute("d", d));
  const motion = group.querySelector("animateMotion");
  if (motion) motion.setAttribute("path", d);
}

function syncFlowPaths() {
  if (!stage) return;
  const stageRect = stage.getBoundingClientRect();
  if (stageRect.width < 1 || stageRect.height < 1) return;

  const genome = stage.querySelector(".gxap-genome-wrap");
  const gate = stage.querySelector(".gxap-gate");
  const lanes = stage.querySelectorAll(".gxap-lane");
  if (!genome || !lanes.length) return;

  const genomeRect = genome.getBoundingClientRect();
  const endIn = toSvg(stageRect, genomeRect.left + 3, genomeRect.top + genomeRect.height / 2);

  lanes.forEach((lane, i) => {
    const tag = lane.querySelector(".gxap-lane-gate") ?? lane.querySelector("em");
    const tagRect = (tag ?? lane).getBoundingClientRect();
    const start = toSvg(
      stageRect,
      tagRect.left + tagRect.width / 2,
      tagRect.bottom + 3,
    );
    const d = fanInPath(start.x, start.y, endIn.x, endIn.y);
    setFlowGroup(stage.querySelector(`.gxap-flow-in[data-lane="${i}"]`), d);
  });

  if (gate) {
    const gateRect = gate.getBoundingClientRect();
    const startOut = toSvg(stageRect, genomeRect.right - 3, genomeRect.top + genomeRect.height / 2);
    [0.24, 0.5, 0.76].forEach((frac, i) => {
      const end = toSvg(stageRect, gateRect.left + 3, gateRect.top + gateRect.height * frac);
      const d = curvePath(startOut.x, startOut.y, end.x, end.y);
      setFlowGroup(stage.querySelector(`.gxap-flow-out[data-out="${i}"]`), d);
    });
  }
}

function laneStackCenterY() {
  const lanes = lanesEl?.querySelectorAll(".gxap-lane");
  if (!lanes?.length) return null;
  const first = lanes[0].getBoundingClientRect();
  const last = lanes[lanes.length - 1].getBoundingClientRect();
  return (first.top + last.bottom) / 2;
}

function syncGateHeight() {
  if (!lanesEl || !gateEl) return;
  const lanes = lanesEl.querySelectorAll(".gxap-lane");
  if (!lanes.length) return;
  const top = lanes[0].getBoundingClientRect().top;
  const bottom = lanes[lanes.length - 1].getBoundingClientRect().bottom;
  const h = Math.round(bottom - top);
  if (h > 0) {
    gateEl.style.height = `${h}px`;
    gateEl.style.minHeight = `${h}px`;
    gateEl.style.maxHeight = `${h}px`;
  }
}

function syncGenomeAlign() {
  const core = stage?.querySelector(".gxap-core");
  const visual = stage?.querySelector(".gxap-core-visual");
  const genomeWrap = stage?.querySelector(".gxap-genome-wrap");
  const targetCenterY = laneStackCenterY();
  if (!core || !visual || !genomeWrap || targetCenterY == null) return;

  const coreRect = core.getBoundingClientRect();
  const genomeH = genomeWrap.offsetHeight;
  visual.style.top = `${Math.round(targetCenterY - coreRect.top - genomeH / 2)}px`;
}

function scheduleFlowSync() {
  cancelAnimationFrame(flowSyncFrame);
  flowSyncFrame = requestAnimationFrame(() => {
    syncGateHeight();
    syncGenomeAlign();
    syncFlowPaths();
  });
}

function pseudoValue(blockIdx, slotIdx) {
  const seed = blockIdx * 17 + slotIdx * 31 + active * 13;
  return 0.22 + ((seed * 9301 + 49297) % 233280) / 233280 * 0.78;
}

function buildGenomeGrid() {
  if (!genomeGrid) return;
  genomeGrid.replaceChildren(
    ...BLOCKS.map((block, blockIdx) => {
      const col = document.createElement("div");
      col.className = "gxap-genome-block";
      col.dataset.block = block.letter;
      col.style.setProperty("--block-color", block.color);
      col.innerHTML = `<span class="gxap-genome-block-label">${block.letter}</span>`;
      for (let slotIdx = 0; slotIdx < 16; slotIdx += 1) {
        const slot = document.createElement("i");
        slot.className = "gxap-genome-slot";
        slot.dataset.block = block.letter;
        slot.dataset.slotIdx = String(slotIdx);
        slot.style.setProperty("--block-color", block.color);
        slot.style.setProperty("--slot-fill", pseudoValue(blockIdx, slotIdx).toFixed(3));
        col.appendChild(slot);
        slots.push(slot);
      }
      return col;
    }),
  );
}

function highlightBlocks(letters) {
  genomeGrid?.querySelectorAll(".gxap-genome-block").forEach((col) => {
    col.classList.toggle("is-active", letters.includes(col.dataset.block));
  });
}

function fillSlot(slot) {
  slot.classList.remove("is-ingest");
  void slot.offsetWidth;
  slot.classList.add("is-lit", "is-ingest");
}

function fingerprintPulse() {
  const d = DOMAINS[active];
  if (!d) return;
  const activeSet = new Set(d.blocks);
  const candidates = slots.filter((slot) => activeSet.has(slot.dataset.block) && !slot.classList.contains("is-lit"));
  const batch = candidates.length
    ? candidates.sort(() => Math.random() - 0.5).slice(0, reducedMotion ? 2 : 6)
    : slots.sort(() => Math.random() - 0.5).slice(0, reducedMotion ? 3 : 8);
  batch.forEach((slot, i) => {
    window.setTimeout(() => fillSlot(slot), i * (reducedMotion ? 0 : 90));
  });
}

function spawnIngestParticle() {
  if (!ingestEl || reducedMotion) return;
  const p = document.createElement("span");
  p.className = "gxap-ingest-particle";
  const edge = Math.floor(Math.random() * 4);
  if (edge === 0) {
    p.style.left = `${8 + Math.random() * 84}%`;
    p.style.top = "-6%";
  } else if (edge === 1) {
    p.style.left = `${8 + Math.random() * 84}%`;
    p.style.top = "106%";
  } else if (edge === 2) {
    p.style.left = "-4%";
    p.style.top = `${8 + Math.random() * 84}%`;
  } else {
    p.style.left = "104%";
    p.style.top = `${8 + Math.random() * 84}%`;
  }
  ingestEl.appendChild(p);
  p.addEventListener("animationend", () => p.remove(), { once: true });
}

function resetGenome() {
  slots.forEach((slot) => slot.classList.remove("is-lit", "is-ingest"));
}

function setDomain(index) {
  active = index;
  const d = DOMAINS[index];
  if (!d || !stage) return;

  stage.style.setProperty("--lane", d.lane);
  lanesEl?.querySelectorAll(".gxap-lane").forEach((btn, i) => {
    btn.setAttribute("aria-selected", i === index ? "true" : "false");
  });
  stage.querySelectorAll(".gxap-flow-in").forEach((g, i) => {
    g.classList.toggle("is-live", i === index);
  });

  document.getElementById("gate-question").textContent = d.question;
  document.getElementById("gate-artifact").textContent = d.artifact;
  document.getElementById("gate-detail").textContent = d.detail;
  document.getElementById("gate-policy").textContent = d.policy;
  document.getElementById("gate-receipt").textContent = d.receipt;
  focusTitle.textContent = d.focus;
  focusDetail.textContent = d.focusDetail;

  highlightBlocks(d.blocks);
  resetGenome();
  slots.forEach((slot) => {
    const blockIdx = BLOCKS.findIndex((b) => b.letter === slot.dataset.block);
    const slotIdx = Number(slot.dataset.slotIdx ?? 0);
    slot.style.setProperty("--slot-fill", pseudoValue(blockIdx, slotIdx).toFixed(3));
  });
  window.setTimeout(fingerprintPulse, 120);
  window.setTimeout(fingerprintPulse, 900);

  engineSteps.forEach((li, i) => li.classList.toggle("active", i === index % 5));
  gateEl?.classList.remove("is-fresh");
  void gateEl?.offsetWidth;
  gateEl?.classList.add("is-fresh");
  stage.classList.remove("is-ping");
  void stage.offsetWidth;
  stage.classList.add("is-ping");
  scheduleFlowSync();
}

function buildLanes() {
  if (!lanesEl) return;
  lanesEl.replaceChildren(
    ...DOMAINS.map((d, i) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "gxap-lane";
      btn.setAttribute("role", "tab");
      btn.setAttribute("aria-selected", i === 0 ? "true" : "false");
      btn.innerHTML = `
        <i>${i + 1}</i>
        <span>
          <strong>${d.name}</strong>
          <small>${d.code} · ${d.label}</small>
        </span>
        <em class="gxap-lane-gate">Gate</em>
        <span class="lane-stream" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i></span>
      `;
      btn.addEventListener("click", () => {
        clearInterval(timer);
        setDomain(i);
        timer = setInterval(tick, 5200);
      });
      return btn;
    }),
  );
}

function tick() {
  setDomain((active + 1) % DOMAINS.length);
}

function init() {
  if (!stage || !lanesEl) return;
  buildGenomeGrid();
  buildLanes();
  setDomain(0);
  scheduleFlowSync();
  window.addEventListener("resize", scheduleFlowSync);
  if ("ResizeObserver" in window) {
    const ro = new ResizeObserver(scheduleFlowSync);
    ro.observe(stage);
    if (gateEl) ro.observe(gateEl);
  }
  if (!reducedMotion) {
    timer = setInterval(tick, 5200);
    ingestTimer = setInterval(spawnIngestParticle, 420);
    fingerprintTimer = setInterval(fingerprintPulse, 2800);
    for (let i = 0; i < 6; i += 1) window.setTimeout(spawnIngestParticle, i * 180);
  } else {
    slots.forEach((slot) => slot.classList.add("is-lit"));
  }
}

init();
