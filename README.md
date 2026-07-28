# FinEdge Bank — Enterprise Full-Stack Ecosystem

FinEdge Bank is a secure, high-performance web banking application built using a decoupled full-stack architecture. The platform delivers modern financial utilities, featuring a precise Fixed-Rate Mortgage Assessment Engine engineered on a robust Java Spring Boot backend and an optimized, interactive user experience built with Next.js.

---

## 🚀 Key Features & Enterprise Capabilities

- **Mortgage Amortization Engine:** Back-end calculation architecture evaluating fixed-rate principal, compounding schedules, and total interest overhead safely.
- **Modern Distributed Architecture:** Separated Frontend (Next.js client layer) and Backend (Spring Boot service layer) communicating seamlessly via RESTful APIs.
- **Automated Render Optimization:** Powered by Next.js 19 and the **React Compiler** for zero-boilerplate UI optimization.
- **Robust Data Persistence:** Integrated with Hibernate ORM and Spring Data JPA, prepared for secure multi-account tracking and relational database storage (MySQL).

---

## 📁 Repository Structure

```text
finedge-bank/
├── AGENTS.md                            # Context layer for AI coding tools
├── README.md                            # Main project documentation
├── .gitignore                           # Root-level ignore rules
│
├── frontend/                            # Next.js Application (Port 3000)
│   ├── next.config.js                   # Experimental React Compiler flags
│   ├── public/images/                   # Corporate visual assets (FinEdge Logo)
│   └── src/app/                         # App Router architecture (Home & Mortgage views)
│
└── backend/                             # Java Spring Boot Core (Port 8080)
    ├── pom.xml                          # Maven dependency engine
    ├── src/main/resources/              # Global application.properties configurations
    └── src/main/java/com/finedge/bank/  # Multi-tier production directory (Controller, Service, Model)
```
