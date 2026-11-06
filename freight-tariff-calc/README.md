# CARGOMODEL V2 — Industrial Freight Quoting & LDM Dispute Engine

**The zero-backend, single-file HTML quoting weapon for dispatch desks, 3PL brokers, and industrial manufacturers.**

Built with the **Hallmark Wayfind system** (Chivo Mono typography, 2px ink borders, departure-board posture, zero frameworks, zero external dependencies). 
**Tasteskill Lint Score:** `0 FAIL, 0 WARN`.

---

## 1. What This Tool Actually Solves
Most online calculators are basic toys built for retail parcel shipping. Carriers (Value, DSV, Triton, Time Freight) already have legacy ERPs (CargoWise, Winfreight, SAP). 

**The real money-bleed is on the Shipper & Broker side:**
1. **The 2.4m Trailer Floor Trap:** On a standard 240cm trailer deck, non-stackable cargo wider than 120cm cannot sit 2-abreast. It consumes the full trailer width for its entire length. A single 1.3m crate forces a full-slot penalty.
2. **The "Rate Illusion" Surcharge:** A transporter offering R2.60/kg on 1:250 terms frequently costs R1,500+ *more* than a carrier offering R2.85/kg on standard 1:333 road terms due to harsh volumetric multipliers.
3. **Surprise Re-Weigh & LDM Adjustments:** Factory dispatchers in industrial corridors (MBSA supply chain, Wilsonia, Fort Jackson, Berlin, Coega) get hit with thousands of Rands in unbudgeted carrier invoices.

CARGOMODEL V2 gives dispatchers and spot brokers an instant dispute and quoting instrument.

---

## 2. Key Production Mechanics

| Mechanic | Implementation |
| :--- | :--- |
| **Multi-Line Consignment** | Add/remove unlimited cargo lines with live sum of CBM, physical kg, and LDM deck occupancy. |
| **Physical 2.4m Deck Math** | Automatic detection of over-width non-stackable cargo (`w > 120cm` or cannot fit 2-abreast), applying full trailer width footprint penalties. |
| **LDM Mass Conversion** | Pegged to the standard road freight ratio (`1 LDM = 1,800 kg`). Billing Mass = `MAX(Actual, Volumetric, LDM)`. |
| **The Rate Illusion Comparator** | Side-by-side audit of Road General (333kg), Road Express (250kg), and Scale Weight, flashing warnings when lower per-kg rates cost more. |
| **1-Click WhatsApp Quote** | Generates cleanly formatted, monospace WhatsApp estimate text for instant client and hauler messaging. |
| **Clean Single-Page Printout** | Dedicated `@media print` CSS formats a crisp Waybill Tax Estimate (hides buttons/nav). |
| **White-Label Bake & Download** | Shift + Click the logo to open the branding drawer: set company name, VAT, phone, default rate card, and download a pre-configured production `index.html`. |

---

## 3. Quick Run & Deployment
```bash
# Preview locally (opens in any browser instantly)
open index.html
# or with node:
npx serve .

# Deploy to Vercel in 60 seconds:
npx vercel deploy --prod
```

---

## 4. Immediate Monetization Strategy

1. **Local WhatsApp Outreach (Eastern Cape / SA Freight Hubs):**
   - Target 10 local freight brokers, clearing agents, or factory dispatch managers (Wilsonia, Fort Jackson, Coega, Durban, Joburg).
   - Offer a customized, white-labeled copy with their company name, VAT, and rate card baked into the file for a once-off **R 2,500** (1-hour turnaround).
2. **Code & Micro-SaaS Marketplaces ($149 – $299 USD):**
   - Sell the turnkey codebase on Gumroad, Acquire.com, or directly to web dev agencies building sites for transport and courier firms.

---

*Engineered by Fana Mgengo, ZAInnovate Technologies, East London, South Africa.*
