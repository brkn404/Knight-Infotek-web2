# 📦 ZK30 AI DropBox: Hardware Options & Functional Sizing Guide

This document outlines the ZK30 AI DropBox deployment models — from lightweight self-hosted options to high-end clusterable edge appliances. Each option supports specific tiers of functionality, clustering capabilities, and endpoint capacity.

---

## 🔁 Functional Tiers

| Tier | Name                          | Description                                               |
|------|-------------------------------|-----------------------------------------------------------|
| T0   | **Partial Function (Local CPU)** | Self-hosted STRATUS, behavioral hash, no LLM inference    |
| T1   | **AI Module (Raspberry Pi + Hailo)** | LLM prompt relay + local deception + pattern matching only |
| T2   | **Jetson Xavier NX**          | Local LLM inference, behavioral RAG, moderate throughput  |
| T3   | **Jetson Orin AGX**           | Full LLM + predictive diff + advanced deception & RAG     |
| T4   | **GMKtec EVO-X2**             | High-speed x86 AI edge unit with cluster support          |
| T5   | **NVIDIA Spark / DIGITS**     | Full-scale GPU orchestration node with multi-host HA      |
| T6   | **Enterprise LLM Cluster**    | Multi-node, 1000+ client, GPU + inference scale-out       |

---

## 📊 Hardware Deployment Options

### 🧩 T0: Partial Local CPU Node
**Use Case**: Single-device STRATUS-only with no LLM inference

| Component       | Value                          |
|----------------|---------------------------------|
| Platform       | Any Linux x86/macOS system      |
| RAM            | 8GB+                            |
| LLM Inference  | ❌ (Only external relay or rules)|
| Clusterable    | ❌                              |
| Clients Served | 1–2                             |
| Notes          | Minimal agent logic, no AI infer|

---

### 🧠 T1: Raspberry Pi + Hailo AI Module
**Use Case**: Portable or air-gapped DropBox with Hailo-8 accelerated pattern matching

| Component       | Value                            |
|----------------|----------------------------------|
| Platform       | Raspberry Pi 4/5 + Hailo-8 or 8L  |
| RAM            | 4–8GB                            |
| LLM Inference  | Limited (via relay)              |
| Clusterable    | ❌                                |
| Clients Served | 5–15                             |
| Notes          | Best portable deception & pattern engine |

---

### 🔹 T2: Jetson Xavier NX
**Use Case**: Local GPU-powered LLM inference for moderate clients

| Component       | Value                         |
|----------------|-------------------------------|
| GPU            | 384-core Volta + 48 Tensor Cores|
| RAM            | 8–16GB                         |
| LLM Inference  | ✅ 7B quantized models          |
| Clusterable    | Limited (manual HA setup)     |
| Clients Served | 25–50                          |
| Notes          | Edge deployment, AI light mode|

---

### 🔸 T3: Jetson Orin AGX
**Use Case**: High-capacity local inference for remote/industrial nodes

| Component       | Value                                |
|----------------|--------------------------------------|
| GPU            | 2048-core Ampere + 64 Tensor Cores   |
| RAM            | 32–64GB LPDDR5                        |
| LLM Inference  | ✅ 7B–13B Q w/ TensorRT                |
| Clusterable    | Semi (K3s/GlusterFS or failover HA)  |
| Clients Served | 75–100                               |
| Notes          | Supports deception, behavioral diff  |

---

### ⚡ T4: GMKtec EVO-X2
**Use Case**: High-throughput edge appliance, multi-client inference node

| Component       | Value                          |
|----------------|---------------------------------|
| CPU            | Ryzen AI Max 395 (8c/16t)       |
| RAM            | 32–64GB                         |
| AI Accel       | Ryzen XDNA NPU + iGPU           |
| LLM Inference  | ✅ 7B–13B Q via Ollama/vLLM      |
| Clusterable    | ✅ via Docker + ZFS + Keepalived |
| Clients Served | 100–250                         |
| Notes          | Excellent x86 drop-in unit      |

---

### 🚀 T5: NVIDIA Spark / DIGITS
**Use Case**: Full ZK30 orchestration, LLM + MCP + deception at scale

| Component       | Value                                  |
|----------------|-----------------------------------------|
| CPU            | Grace ARM (72-core) or x86 DGX-class    |
| GPU            | 2x Blackwell or A100                    |
| RAM            | 512GB–1TB Unified Memory                |
| LLM Inference  | ✅ Full 13B+ models with context agents |
| Clusterable    | ✅ Active-active HA supported            |
| Clients Served | 500–1000                               |
| Notes          | Supports 100s of clients + auto failover|

---

### 🏢 T6: Enterprise LLM Cluster
**Use Case**: Critical infrastructure, global ZK30 coverage

| Component       | Value                                      |
|----------------|---------------------------------------------|
| CPU            | Multi-node Grace Hopper / DGX SuperPOD      |
| GPU            | 4–16x Blackwell / H100                      |
| RAM            | 1TB–4TB Unified + Distributed              |
| LLM Inference  | ✅ Multiple concurrent high-context agents  |
| Clusterable    | ✅ Federated & ZK30 aware                   |
| Clients Served | 2500+                                     |
| Notes          | Multi-site HA, telemetry, federated sharing|

---

## 🧠 Capability Scale

| Functionality       | T0 | T1 | T2 | T3 | T4 | T5 | T6 |
|---------------------|----|----|----|----|----|----|----|
| STRATUS Routing     | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅  |
| LLM Threat Analysis | ❌ | 🚫 | ✅ | ✅ | ✅ | ✅ | ✅  |
| RAG Local Engine    | ❌ | 🚫 | 🚫 | ✅ | ✅ | ✅ | ✅  |
| Behavioral Diffing  | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅  |
| Deception Ops       | 🚫 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅  |
| Active HA Cluster   | ❌ | ❌ | ⚠️  | ⚠️  | ✅ | ✅ | ✅  |

---

## ✅ Recommendation Summary

| Deployment Type        | Recommended Tier      |
|------------------------|------------------------|
| Personal Dev / Lab     | T0 or T1               |
| Portable DropBox       | T1 or T2               |
| Secure Remote Facility | T3 or T4               |
| Enterprise Backbone    | T4 or T5               |
| Global Multi-Site Ops  | T6                     |
| Full HA HQ Node        | T5 or T6               |

---

For cluster orchestration, use the **ZK30 Spark Cluster Guide** and **STRATUS install bundle** from internal Git.

**Contact**: [support@knightinfotek.com](mailto:support@knightinfotek.com) for appliance images or HA templates.

