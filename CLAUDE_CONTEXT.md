# Claude Session Context — Kinard Khin Masayon Orbita

This file captures everything discussed in our Claude conversation so it can be
referenced in future sessions, Claude Code, or any other tool. Paste this file
into any new Claude session and it will have full context of where we left off.

---

## 1. Who I Am

**Full name:** Kinard Khin Masayon Orbita
**Official title:** Senior System Administrator Staff
**Self-driven role:** Web Application Developer (not formally assigned)
**Employer:** Davao International Container Terminal, Inc. (DICT) — part of Anflocor
**Location:** Panabo City, Davao del Norte, Philippines
**Experience:** 7+ years (since 2018)
**Education:** BS Information Technology, Davao del Norte State College (2014–2018)
**Email:** kinardkhin@gmail.com
**Phone:** 09267259851
**LinkedIn:** linkedin.com/in/kinardkhinorbita
**GitHub:** github.com/kinardkhin
**Portfolio:** kinardforge.org

---

## 2. Correct Title Convention

We decided on this title throughout all materials:

> **Senior System Administrator Staff | Web Application Developer**

- "Full Stack Web Developer" was removed — it overclaims a formally unassigned role
- "Web Application Developer" is more accurate and honest
- "Senior System Admin Staff" was corrected to "Senior System Administrator Staff"
- The web development work is self-driven and should be framed as taken on independently

---

## 3. Resume — What Was Updated

File: `Kinard_Khin_Masayon_Orbita_-_Resume_Updated.docx`

### Changes made:
- Title line updated to: "Senior System Administrator Staff | Web Application Developer"
- Job title in experience section updated to: "Senior System Administrator Staff"
- Professional summary updated to reflect correct title
- All "(In Development)" project labels changed to "(AI Assisted)"
- Three projects temporarily removed (to be added back when ready):
  - Gate Inspection System
  - Report Manager App
  - Reefer Export Notification System

### Current projects on resume:

| Project | Status | Stack |
|---|---|---|
| Driver Monitoring System | Production | React, Node.js, Supabase, Netlify, GitHub |
| Vessel Operations Dashboard | Production | Laravel 13, React, Supabase, Netlify |
| Operations Suite | AI Assisted | Laravel 13, React, InertiaJs, MySQL |
| BiometricHub | AI Assisted | Laravel, InertiaJs, React, MySQL |
| NetDevMon | AI Assisted | Laravel, InertiaJs, React, MySQL |
| Fuel Monitoring System | (none) | Laravel, Vue.js, MySQL |
| M&S Borrower | AI Assisted | Laravel, JavaScript, MySQL |

### Projects to add back later:
- Gate Inspection System (AI Assisted) — React, Supabase, Netlify, Mobile PWA
- Report Manager App (AI Assisted) — Laravel, React, MySQL
- Reefer Export Notification System (AI Assisted) — Laravel, MySQL, Email Integration

---

## 4. Tech Stack

### Frontend
React.js, Vue.js, InertiaJs, JavaScript, HTML, CSS, Tailwind CSS

### Backend
Laravel, Node.js, PHP

### Database
MySQL, PostgreSQL, Supabase, SQL

### Infrastructure & Tools
GitHub, Netlify, Docker, Windows Server, Active Directory (LDAP), Navis N4 (EDI), Jotform

### AI Development Tools
Claude (Anthropic), GitHub Copilot, ChatGPT, Bolt.new

### Certifications (current)
- CompTIA Security+
- Microsoft Azure Fundamentals (AZ-900)
- Microsoft Security, Compliance, and Identity Fundamentals (SC-900)

---

## 5. Career Direction

### What Kinard wants to move toward:
- Away from heavy web app and mobile app building
- Toward IT Automation, DevOps, or Cloud Operations
- Coding is still acceptable but as scripting/automation — not full app development

### Recommended role target:
**IT Automation Engineer / DevOps Engineer (Junior to Mid)**
- Write automation scripts, not full applications
- Work with deployment pipelines, infrastructure tools, cron jobs
- Cloud operations and monitoring
- AI-assisted workflows remain a strong differentiator

### Why NOT Network/NOC Engineer:
- Kinard's network monitoring is a simple ping tool (NetDevMon)
- No deep Windows Server or networking configuration experience
- Would be a lateral or backward move given dev capabilities

---

## 6. Certification Roadmap (AWS-only, agreed)

We chose AWS over Azure because:
- More job postings locally and globally
- Does not require deep Windows Server knowledge (unlike Azure admin path)
- AZ-900 and SC-900 remain on resume as cloud awareness proof

### Roadmap:

| Step | Certification | Est. Study Time | Exam Fee | Unlocks |
|---|---|---|---|---|
| 1 | AWS Cloud Practitioner (CLF-C02) | 4–6 weeks | ~$100 | Entry cloud roles |
| 2 | HashiCorp Terraform Associate | 6–8 weeks | ~$70 | DevOps / Cloud Ops roles |
| 3 | AWS SysOps Administrator Associate (SOA-C02) | 8–10 weeks | ~$150 | Cloud Ops / SysAdmin ₱80K–₱150K/mo |
| 4 | AWS DevOps Engineer Professional (DOP-C02) | 3–4 months | ~$300 | Senior DevOps ₱150K–₱250K+/mo |

### Free quick win (start now):
Set up **GitHub Actions** on one of your existing repos for automated deploy.
No exam, no cost — just real hands-on experience for your resume and GitHub profile.

---

## 7. Job Market Fit (Philippines 2026)

| Role | Fit | Salary Range |
|---|---|---|
| Systems Administrator | 95% — Strong | ₱30K–₱70K/mo |
| Web Application Developer | 88% — Strong | ₱40K–₱80K/mo |
| IT Operations / DevOps (Junior-Mid) | 72% — Good | ₱60K–₱120K/mo |
| AI-Assisted Software Developer | 75% — Good | ₱50K–₱100K/mo |
| IT Project Lead / Tech Lead | 60% — Emerging | ₱60K–₱120K/mo |

### Unique edge over other candidates:
- Navis N4 EDI expertise (very rare in PH)
- Port terminal domain knowledge
- 7 shipped production apps as solo developer
- AI-assisted development in actual production
- Sysadmin + developer combined in one person
- Security+ certified

---

## 8. Portfolio — kinardforge.org

**Stack:** React + TypeScript + Vite + Tailwind CSS
**Hosted:** Netlify
**Repo:** github.com/kinardkhin/my-portfolio

### Structure:
```
src/
  components/
    AnimatedSection.tsx   — scroll animation wrapper (IntersectionObserver)
    Navbar.tsx
    Footer.tsx
  pages/
    Home.tsx
    About.tsx
    Projects.tsx
    Skills.tsx
    Experience.tsx
    Testimonials.tsx
    Contact.tsx
  data/
    projects.json
```

### What is working well:
- Clean TypeScript + Vite setup
- AnimatedSection scroll animations implemented correctly
- Netlify Forms contact integration works properly
- projects.json as a data source (easy to update)
- Responsive mobile design with hamburger menu

### Fixes needed (priority order):

#### Critical
- [ ] All title references still say "Full Stack Web Developer | Senior System Admin Staff"
  - Files: `Home.tsx`, `About.tsx`, `Footer.tsx`, `Experience.tsx`
  - Update to: "Senior System Administrator Staff | Web Application Developer"
- [ ] GitHub link is broken in `Footer.tsx` and `Contact.tsx`
  - Current: `href="https://github.com/"`
  - Fix to: `href="https://github.com/kinardkhin"`
- [ ] Vessel Operations Dashboard missing from `projects.json`
  - Add as second card, marked `isProduction: true`
- [ ] Experience.tsx still shows "Senior System Admin Staff" (line 56)

#### Important
- [ ] Fake testimonials are publicly visible with made-up names
  - Risk: damages credibility if anyone recognizes they are fabricated
  - Options: get real testimonials, or remove the Testimonials page for now
- [ ] Download CV button is disabled (`onClick={(e) => e.preventDefault()}`)
  - Fix: add actual PDF to `/public/` folder and link it
- [ ] Live Demo buttons are all disabled on every project card
  - These are corporate internal apps — do NOT create public demos
  - Replace with "Internal Use Only" badge instead

#### Nice to have
- [ ] `package.json` name is still `"vite-react-typescript-starter"` — change to `"kinard-portfolio"`
- [ ] `@supabase/supabase-js` is installed but never used — remove or implement
- [ ] Skill `level` numbers exist in data but are never rendered — show bars or remove
- [ ] README.md is nearly empty — add description, stack, and run instructions
- [ ] Footer copyright hardcoded as `© 2025` — change to `{new Date().getFullYear()}`
- [ ] `index.html` meta title and description still use old title

### Project cards — demo button decision:
Corporate internal apps cannot be demoed publicly.
Agreed replacement: **"Internal Use Only" badge** instead of the disabled Live Demo button.

---

## 9. AI Feed App — Planned Personal Project

A private, auth-gated social feed web app for AI news and job market intelligence.

### Stack:
- Frontend: React (Vite), hosted on Netlify
- Database + Auth: Supabase (PostgreSQL + RLS)
- AI layer: Claude API (`claude-sonnet-4-20250514`)
- Automation: Netlify scheduled functions (hourly cron)
- Retention: Supabase pg_cron (30-day auto-delete)

### Three tabs:
1. **News** — AI headlines scraped hourly, Claude-summarized
2. **Jobs** — LinkedIn, Indeed, JobStreet — AI/ML + AI-assisted dev roles
3. **Insights** — Skills trending, salary snapshot, Claude career tip

### Job categories to scrape:
- AI/ML Core: ML Engineer, LLM Engineer, AI Researcher, Data Scientist, Prompt Engineer, AI PM, MLOps, NLP Engineer, Computer Vision Engineer, AI Ethicist
- AI-Assisted Dev: Full Stack Developer (AI tools), Frontend/Backend/Mobile (AI-assisted), DevOps (AI tooling)
- AI Integration: AI Integration Engineer, Solutions Architect, Automation Engineer, API Engineer (LLM APIs), Conversational AI Dev, Chatbot Developer, RAG Pipeline Engineer, AI Infrastructure Engineer
- General IT (PH in-demand): Systems Administrator, Cloud/DevOps Engineer, Cybersecurity Engineer, QA/Test Automation, Network Engineer, DBA, UI/UX Designer

### Key features:
- Single user, auth-gated (no public signup)
- Twitter/X style compact card feed
- Hourly auto-refresh pipeline
- 30-day data retention via pg_cron
- Personalization preferences (role, location, platform)
- Click analytics + hidden /stats dashboard
- AI-generated career tips and salary insights

### Prompt file:
`ai-feed-app-prompt.md` — full buildable spec, ready to paste into Claude or Cursor

---

## 10. Continuing This Work

### To continue in a new Claude session:
Paste this entire file at the start of your message. Claude will have full context.

### To continue in Claude Code:
```bash
# Inside your portfolio repo
claude "I have context in CLAUDE_CONTEXT.md — please read it before we start"
```

### Next actions agreed on:
1. Fix all portfolio issues listed in Section 8
2. Set up GitHub Actions on one existing repo (free, no exam)
3. Start studying AWS Cloud Practitioner (CLF-C02)
4. Build the AI Feed App using the prompt in `ai-feed-app-prompt.md`
5. Add real testimonials to portfolio (or remove the page)
6. Link actual CV PDF to the Download CV button on About page
