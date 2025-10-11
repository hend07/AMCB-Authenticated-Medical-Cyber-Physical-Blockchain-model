# 🔐 Physical Layer — PUF-Based CPS Device Identity (Root of Trust in AMCB)

### 🎓 Role in the AMCB Architecture

In the AMCB model, the **Physical Layer** is responsible for establishing the **first stage of trust (Root of Trust)** before any blockchain or cloud interaction occurs.  
Instead of assuming a virtual or random identity, this implementation introduces a **real hardware-inspired authentication process using a manually constructed PUF logic circuit.**

---

## 🧩 Stage 1 — PUF Circuit Key Extraction

- A **PUF (Physically Unclonable Function) digital logic circuit** was designed manually.
- The circuit was used to extract **5 unique PUF hardware response keys**, each representing a **CPS device fingerprint**.
- These keys were **not randomly generated in software**, but derived from the electrical behavior of the designed logic.

📁 **Circuit Reference:**  
Place the circuit render or screenshot here as:

```
/physical-layer/PUF_Diagram.png
```

To display it in documentation:

```markdown
![PUF Circuit Diagram](physical layer/circuit-20230127-0425.png)
```

---

## 🧪 Stage 2 — MAC + PUF Verification Script (Pre-Blockchain Enrollment Gate)

Before interacting with the Blockchain Layer, **each device identity must pass a verification process** that matches a known **MAC address + PUF response pair**.  
This acts as the **Pre-Authentication Gate**, ensuring **only physically verified CPS devices are allowed to register on-chain**.

👉 **Verification script used:** 
(physical layer/MAC Adresse And PUF Verification.js)


> ✅ **Result:** Only CPS devices with a verified MAC + PUF combination were granted permission to proceed to the Blockchain Layer for registration.

---

## 📌 Layer Output Summary

| Device | MAC Address (Example) | Extracted PUF Key | Status |
|--------|----------------------|------------------|--------|
| Device 1 | `1E F0 12 34 F7 80` | ✅ Extracted | ✅ Accepted |
| Device 2 | `56 78 9A BC AC F1` | ✅ Extracted | ✅ Accepted |
| Device 3 | `DE F0 12 3D EF 01` | ✅ Extracted | ✅ Accepted |
| Device 4 | `10 10 10 E0 80 80` | ✅ Extracted | ✅ Accepted |
| Device 5 | `10 10 11 00 80 80` | ✅ Extracted | ✅ Accepted |

---

> 🎯 **Conclusion:** This layer completes the **Physical Trust Initialization Phase** of the AMCB model.  
Validated keys from this stage are forwarded to the **Blockchain Layer** for secure identity enrollment.
