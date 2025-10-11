# AMCB – Authenticated Medical Cyber-Physical Blockchain Model

🔬 This repository contains the **extended implementation** developed as part of my **MSc Research Project (2025)** titled:

> **"AMCB: Authenticated Medical Cyber-Physical Blockchain Model"**

This work builds upon the original blockchain medical record system and enhances it by integrating **Firebase-based secure cloud storage**, **authenticated cyber-physical validation**, and an **intelligent trust layer** inspired by CPS security architectures.

📌 *Original implementation reference:* `JasonnLim/Blockchain-MedicalRecords`  
📌 *This AMCB-enhanced version introduces secure Firebase synchronization and a validated access workflow.*

---

## ✅ Enhancements Introduced in the AMCB Version

The AMCB release extends the original project with the following capabilities:

- 🔐 **Cloud-based persistent storage using Firebase** to securely store validated medical records beyond on-chain logs.
- 🧠 **Cyber-Physical trust layer** aligned with real-world CPS security requirements.
- 🌐 **Secure synchronization logic** between blockchain events and cloud storage.
- 📡 **Improved modular structure**, preparing the system for integration with IoT / CPS edge devices.

---

## 🛠 Technology Stack

| Layer                        | Tools / Technologies Used |
|----------------------------|---------------------------|
| Blockchain Layer           | Solidity, Web3.js, Ethereum (Rinkeby / Goerli Testnet) |
| DApp Frontend             | React.js, JavaScript, Metamask |
| Cloud Storage Layer      | **Firebase Cloud Storage (AMCB Extension)** |
| Smart Contract Deployment | Node.js Scripts (`compile.js` & `deploy.js`) |
| Testing Environment        | Mocha / Chai (via `npm run test`) |

---

## ▶️ Running the AMCB System

### ✅ Prerequisites
Make sure you have the following installed and configured:

- ✅ **Node.js**
- ✅ **Metamask** browser extension
- ✅ Set Metamask to **Rinkeby or Goerli Test Network**
- ✅ Get test ETH from a **Faucet**
- ✅ Firebase project configured (Firestore / Cloud Storage enabled)

---

### 📦 Install Dependencies
```bash
npm install
```

---

### 🚀 Start the AMCB DApp
```bash
npm run start
```

---

### 🧪 Run Smart Contract Tests
```bash
npm run test
```

---

### 🔁 Recompile & Deploy Smart Contracts (after editing Solidity code)
```bash
cd ethereum
node compile.js
node deploy.js
```

---

## 🎦 Demo Video (Original Base System)
To understand the base architecture before AMCB enhancements, you can refer to the original demo:
https://www.youtube.com/watch?v=JIswvyxmw3k&t=0s

---

## 📚 Academic Reference
This codebase is part of the following academic research work:

> **Al-Ghuraybi, H. A. (2025). AMCB: Authenticated Medical Cyber-Physical Blockchain Model. MSc Research Project.**

📌 *If you reference this implementation in academic work, please cite accordingly.*

---
