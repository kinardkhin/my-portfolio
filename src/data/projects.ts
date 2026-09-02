export interface CaseStudy {
  problem: string;
  whatIBuilt: string;
  keyDecisions: string[];
  challenges: string;
  outcome: string[];
}

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  status: 'Production' | 'AI Assisted';
  stack: string[];
  year: string;
  images: string[];
  caseStudy: CaseStudy;
}

function projectImages(slug: string, count: number): string[] {
  return Array.from({ length: count }, (_, i) => `/images/projects/${slug}/${i + 1}.png`);
}

export const projects: Project[] = [
  {
    slug: 'dict-portal',
    title: 'DICT Portal',
    shortDescription:
      'A single authenticated portal consolidating four standalone terminal display tools into one app with Microsoft SSO and centralized access control.',
    status: 'Production',
    stack: ['Laravel 13', 'Inertia.js', 'React', 'TypeScript', 'MySQL', 'SQL Server', 'Microsoft Entra ID', 'Docker'],
    year: '2026',
    images: projectImages('dict-portal', 3),
    caseStudy: {
      problem:
        'The terminal was running four separate operational display tools as standalone apps — a vessel dashboard, a road queue display, a road queue ECD display, and a container yard viewer — each with its own login, deployment, and maintenance overhead. There was no single place for staff to access all of them, no unified access control, and authentication was tied to legacy infrastructure that did not fit the terminal\'s move to Microsoft 365.',
      whatIBuilt:
        'DICT Portal consolidates all four tools into one authenticated Laravel + Inertia/React application. Every user who signs in through Microsoft SSO gets access to all four modules: a live vessel dashboard with planning overrides, a container yard viewer with live search, and two road queue display boards including historical tracking. A superadmin role sits on top with a dedicated User Access Management screen for pre-provisioning accounts and assigning roles before a person\'s first login. The dashboards are built to run unattended on wall-mounted displays, with automatic refresh and fullscreen handling.',
      keyDecisions: [
        'Migrated authentication from legacy directory-based login to Microsoft Entra ID SSO, matching users by email against pre-provisioned accounts rather than auto-creating them on login, with a safe rollback path kept in place in case SSO ever needed to be reverted.',
        'Built as a read-mostly layer over data the app does not own, keeping the connections to the terminal\'s live operational databases strictly read-only rather than treating them as the app\'s own data.',
        'Used a route-generation tool to keep the frontend and backend from drifting apart as routes changed, instead of hand-maintaining a route list.',
        'Kept a scheduled sync job to mirror frequently-queried data locally for fast page loads, while less time-sensitive data is queried live on every request.',
        'Split the Docker setup between a development configuration (live-reloading source) and a production configuration (immutable image, one process per service) to match the deployment convention used elsewhere on the same server.',
      ],
      challenges:
        'The hardest part was consolidating four previously independent tools, each with its own assumptions about data freshness, access, and display behavior, into one coherent app without breaking terminal-specific business logic that had accumulated in each one. Getting the SSO migration right was also non-trivial: it had to preserve a strict no-self-signup security model while keeping a safe rollback path, since the terminal could not risk being locked out of live operational displays during the cutover.',
      outcome: [
        'Used daily by terminal operations staff across four previously separate tools, now unified under one login and one access control model',
        'Removed the operational overhead of maintaining four standalone deployments',
        'Gave superadmins centralized, auditable control over who has access, including pre-provisioning accounts ahead of a person\'s first login',
        'Runs unattended on wall-mounted operational displays with automatic refresh and fullscreen handling',
      ],
    },
  },
  {
    slug: 'dict-operations-suite',
    title: 'DICT Operations Suite',
    shortDescription:
      'A multi-module operations reporting suite replacing ad-hoc queries and disconnected display boards with one governed, permissioned platform.',
    status: 'Production',
    stack: ['Laravel 13', 'React', 'TypeScript', 'Inertia.js', 'Tailwind CSS', 'MySQL', 'SQL Server', 'LDAP', 'Docker'],
    year: '2026',
    images: projectImages('dict-operations-suite', 5),
    caseStudy: {
      problem:
        'Operational reporting was a patchwork: reefer plug-in duration was checked with ad-hoc queries against the terminal\'s live operating system, and the road queue truck-delivery boards that staff watch on floor TVs were separate, standalone apps with no historical record — once a board refreshed, the prior shift\'s numbers were gone. There was no single place to see vessel schedules, container yard status, or driver assignment activity, and no consistent way to control who could see which data.',
      whatIBuilt:
        'A multi-module operations reporting suite that reads live from the terminal\'s operating system and consolidates several disconnected tools and manual queries into one app. Modules include a Reefer Plug-in Hours report, Road Queue and Road Queue (ECD) auto-refreshing TV boards each paired with a permission-gated historical dashboard, a Vessel Dashboard that syncs schedules automatically instead of manual entry, and modules for driver assignment, billing data, and container yard status. Every user logs in with their existing company credentials, but a superadmin has to explicitly allow each person into the app and grant access module by module.',
      keyDecisions: [
        'Built as a genuine multi-module platform from day one rather than a single-purpose report, so adding a new module never means touching a shared catch-all controller.',
        'Kept the read-only connection to the terminal\'s live operating system strictly separate from the app\'s own database of users, roles, and captured history — the suite never writes back to the terminal\'s live system.',
        'Layered authorization two ways: company directory login handles identity only, while a separate app-owned permission layer handles who can actually get in and what they can see.',
        'Made the Road Queue TV boards the one deliberate exception to "everything requires login," since they are meant to run unattended on a wall-mounted display, while the historical dashboards behind them stay permission-gated.',
        'Ran the app in Docker to support a database driver unavailable on the native host, with an automatic rebuild loop so there is no manual build step during development.',
      ],
      challenges:
        'The hardest part was getting the reefer plug-in report logically correct against real, messy terminal data — a container can be plugged in and unplugged more than once during a single stay, so the same container can legitimately appear multiple times in one report and had to be surfaced deliberately rather than silently deduplicated. Porting the two standalone road-queue TV-board apps into the suite while preserving their unattended, no-login display behavior, but still letting a logged-in user reach the same board through normal navigation, took care to get right without duplicating the underlying logic.',
      outcome: [
        'In active daily use by operations staff for reefer plug-in auditing, road-queue and empty-container-depot monitoring, and vessel scheduling',
        'Replaced ad-hoc, manually-run queries against the live terminal system with a governed, permissioned reporting surface',
        'Gave the road-queue TV boards a historical record for the first time, where shift data previously vanished on every board refresh',
        'Automated vessel schedule entry, removing a manual data-entry step',
      ],
    },
  },
  {
    slug: 'fuel-dispensing-management-system',
    title: 'Fuel Dispensing Management System',
    shortDescription:
      'A full-stack fuel tracking system handling trucks, port equipment, and service vehicles with shift-based dashboards and Excel reconciliation.',
    status: 'Production',
    stack: ['Laravel', 'MySQL', 'JWT', 'LDAP', 'Vue.js', 'Tailwind CSS', 'Chart.js'],
    year: '2024 - 2026',
    images: projectImages('fuel-dispensing-management-system', 6),
    caseStudy: {
      problem:
        'Fuel dispensing at the terminal\'s stations, covering trucks, port equipment, and service vehicles, was tracked through a legacy setup that did not fit how fuel is actually consumed and measured across different equipment types. Trucks and service vehicles are metered by odometer readings, while port equipment is measured by lift counter cycles, and each needed different validation. The old system could not cleanly handle that variance, made reconciling tank levels against dispensed fuel per shift difficult, and gave management no live view of consumption trends.',
      whatIBuilt:
        'A full-stack fuel dispensing management system with a Laravel API backend and a Vue single-page frontend. It lets station operators log fuel transactions per unit, operator, and shift, tracks tank capacity readings per shift, and gives supervisors a dashboard with consumption charts broken down by unit, station, and equipment category. Staff log in with their existing company credentials or a local account, and data can be bulk-imported and exported via Excel for reconciliation with other terminal records.',
      keyDecisions: [
        'Supported dual-mode authentication so office staff use their existing company credentials while still allowing accounts outside the directory, gated through an allow-list.',
        'Centralized the business-rule validation for how each equipment category is measured, so trucks and service equipment require meter readings while port equipment requires lift counter values with its own valid range, rather than scattering conditional checks across the codebase.',
        'Split file exports (Excel reports) from regular API calls on the frontend so binary downloads do not have to be shoehorned through the same request handling as JSON calls.',
        'Used a dedicated spreadsheet library for import and export with an upload history tracked in the app, so bulk data entry and audits both go through one accountable pipeline instead of ad hoc file handling.',
      ],
      challenges:
        'The hardest part was modeling one validation ruleset that correctly adapts to very different equipment: a truck transaction and a port-equipment transaction share the same form but need entirely different required fields and numeric ranges. Getting the lift-counter rollover rule right, since the counter resets after a fixed maximum, took a few iterations to encode without breaking validation for equipment types that do not roll over.',
      outcome: [
        'Replaced a legacy fuel-tracking setup that could not handle the terminal\'s mixed equipment types in one consistent workflow',
        'Used by station operators and terminal management to log and review fuel transactions and tank readings per shift',
        'Gives supervisors a live consumption dashboard instead of manually compiling data from spreadsheets',
        'Centralizes Excel-based bulk uploads with an auditable history, replacing untracked manual file handling',
      ],
    },
  },
  {
    slug: 'netdevmon',
    title: 'NetDevMon',
    shortDescription:
      'A network device monitoring and alerting system that automatically opens support tickets when a device shows sustained packet loss.',
    status: 'Production',
    stack: ['Laravel', 'Inertia.js', 'React', 'MySQL', 'Tailwind CSS'],
    year: '2026',
    images: projectImages('netdevmon', 6),
    caseStudy: {
      problem:
        'Network admins responsible for routers, switches, and other infrastructure had no automated way to know when a device was silently degrading. Without continuous monitoring, a flaky or failing device would only get noticed once it caused a visible outage, and there was no consistent process for turning "this device has been unreliable" into an actual support ticket someone was accountable for.',
      whatIBuilt:
        'NetDevMon is a network device monitoring and alerting system. It registers devices by IP, type, and location, then pings each active device on a schedule, evaluates the results into a health status, and tracks a per-device stability counter that decrements every monitoring cycle. When a device\'s counter runs out and its recent ping history shows sustained packet loss, the system automatically opens a support ticket instead of relying on someone noticing the problem manually. A role-based dashboard shows device status, active alerts, and open tickets, and every state change is written to an audit log.',
      keyDecisions: [
        'Used real ICMP pings rather than simulated checks, so health status reflects actual network conditions.',
        'Split the monitoring pipeline into separate chained jobs (ping, health evaluation, ticket check) rather than one large job, so each stage can retry independently and each writes its own execution record for observability.',
        'Decremented the stability counter unconditionally on every cycle rather than only on failed pings, which avoids a single bad ping immediately triggering a ticket while still catching devices that are persistently unreliable.',
        'Adapted the scheduler and background worker to the host\'s deployment environment rather than assuming a typical Linux server setup.',
      ],
      challenges:
        'Getting the counter and ticket logic right was the hardest part: pings, health evaluation, and ticket creation run as separate jobs that can overlap across monitoring cycles, so the ticket job has to re-check the counter before acting in case a concurrent cycle already reset it. Making that pipeline debuggable, via an execution and audit trail on every job, mattered as much as making it correct, since a wrong device status is otherwise very hard to trace back to which cycle caused it.',
      outcome: [
        'Deployed and running in production, pinging registered devices on a regular schedule',
        'Replaces manual, reactive device checking with automatic health evaluation and ticket creation once a device shows sustained packet loss',
        'Every device status change and ticket creation is captured in an audit trail, giving admins a record of what happened and when without checking each device by hand',
      ],
    },
  },
  {
    slug: 'container-monitoring-system',
    title: 'Container Monitoring System',
    shortDescription:
      'An API bridge that automates reporting container movement events from the terminal to a government customs system.',
    status: 'Production',
    stack: ['Laravel', 'React', 'TypeScript', 'Inertia.js', 'MySQL', 'SQL Server', 'JWT', 'Docker'],
    year: '2026',
    images: projectImages('container-monitoring-system', 5),
    caseStudy: {
      problem:
        'The port terminal\'s operating system had no automated way to report container movement events (discharge, load, release, and receive) to the relevant government customs authority. Reporting these events was a manual, error-prone process with no structured record of what was sent, when, or whether it was actually accepted.',
      whatIBuilt:
        'An API bridge that pulls container movement records from the terminal\'s database, transforms them into the schema the customs API expects, and transmits them in batches. Terminal staff use a web dashboard to trigger sends for a chosen date range and data type, preview how many records will go out before sending, and review full transmission history down to the status of each individual record. A scheduler can also fire off sends automatically at a set time each day, with an email report going out after every transmission so there is a record even when no one is watching the dashboard.',
      keyDecisions: [
        'Used a single cohesive app framework for the dashboard rather than standing up a separate frontend and API as two projects.',
        'Connected to the terminal\'s database as a strictly read-only source, keeping the bridge from ever risking the production terminal system.',
        'Batched outbound records to the customs API so large date ranges do not fail as one oversized request.',
        'Encrypted sensitive integration settings at rest rather than relying on plain configuration values that staff might view.',
        'Ran the scheduled daily sends in an isolated background process, separate from the main web process.',
      ],
      challenges:
        'Getting the data-fetch queries right was the most iterative part of the build, since real terminal records occasionally needed light cleanup before being treated as reliable identifiers, and the underlying queries needed several passes to match what the terminal system actually produced. Making the "preview count" feature trustworthy, showing staff an accurate number before committing to a send, also took real work, since it had to mirror the exact filtering logic used by the actual send.',
      outcome: [
        'Used by terminal staff to automate a compliance-critical customs reporting process that was previously manual',
        'Every transmission is auditable down to the individual record\'s status',
        'The daily scheduler removes the need for staff to remember to trigger reports themselves',
        'Email reports after each send give accountability without requiring anyone to check the dashboard',
      ],
    },
  },
  {
    slug: 'ms-borrower-system',
    title: 'M&S Borrower System',
    shortDescription:
      'A role-based system for issuing, tracking, and returning borrowed tools and equipment with full audit history and report exports.',
    status: 'Production',
    stack: ['Laravel', 'Inertia.js', 'React', 'Tailwind CSS', 'MySQL', 'JWT'],
    year: '2026',
    images: projectImages('ms-borrower-system', 5),
    caseStudy: {
      problem:
        'Tracking tools and equipment borrowed by employees was previously handled manually through paper forms or spreadsheets with no enforced accountability. There was no reliable way to see what equipment was currently out, who had it, when it was due back, or to attach proof of the transaction. Audits required manually cross-referencing paper trails, and there was no record of who made changes to the data or when.',
      whatIBuilt:
        'A role-based internal web app for issuing, tracking, and returning borrowed tools and equipment. Clerks record a borrow against an employee, including item details and reference numbers, and attach supporting documents as proof. Each borrow is flagged active until marked returned, so staff can see at a glance what equipment is still outstanding for any employee or department. Administrators get overall and per-employee reports with filtering, exportable as PDF or CSV. The system also maintains an employee directory and a full audit log of every action taken, with role-based access controlling who can manage users versus who can only manage borrow transactions.',
      keyDecisions: [
        'Built as a single application combining backend and frontend rather than a separate API and single-page app, while still getting a component-based frontend.',
        'Tied employee records to their existing HR badge ID rather than introducing a second identifier, so borrow records line up with IDs already in use outside the app.',
        'Logged every mutating action, including create, update, delete, and login events, to a dedicated activity table capturing the actor and a before/after diff, giving a built-in audit trail.',
        'Used soft deletes on users, employees, and departments so historical borrow records stay intact and attributable even after an employee or account is removed.',
        'Enforced role permissions on the server for every user-management action rather than trusting client-side role checks.',
      ],
      challenges:
        'Designing the permission boundaries so an admin can manage day-to-day clerk accounts without being able to touch higher-privileged accounts or escalate their own role required careful server-side checks on every user management action, not just route-level restrictions. Building the filterable report views that stay consistent across the on-screen table, the PDF export, and the CSV export meant centralizing the same filter logic rather than letting the three outputs drift out of sync.',
      outcome: [
        'Used by operations and clerk staff to issue and reconcile borrowed tools and equipment on an ongoing basis',
        'Gives supervisors instant visibility into which items are still outstanding per employee or department, replacing manual paper tracking',
        'Every borrow transaction now has an attached digital proof file and a timestamped audit entry, closing the accountability gap of the old paper process',
        'Report exports eliminate manual spreadsheet reconciliation for periodic audits',
      ],
    },
  },
  {
    slug: 'driver-accomplishment-monitoring-system',
    title: 'Driver Accomplishment Monitoring System',
    shortDescription:
      'A production web app tracking driver activity, truck assignments, and container moves in real time across the full terminal workforce.',
    status: 'AI Assisted',
    stack: ['React', 'TypeScript', 'Supabase', 'Netlify', 'GitHub', 'Tailwind CSS'],
    year: '2025',
    images: projectImages('driver-accomplishment-monitoring-system', 4),
    caseStudy: {
      problem:
        'Port terminal operations had no centralized way to track what drivers were actually doing during a shift, and no audit trail of who changed what. Staff relied on radio calls and manual checks to confirm truck assignments, container moves, and attendance, which was slow, inconsistent, and unverifiable after the fact. One of the trucking companies operating on the terminal also needed a different day-to-day workflow than everyone else, which the original design had no way to accommodate.',
      whatIBuilt:
        'A role-based web application covering the full terminal workforce across nine-plus roles, including drivers, checkers, dispatch, supervisors, and administrators, plus special variants for one partner company. Drivers and checkers log accomplishments per shift and hour; dispatch and admin roles get management views over trucks, attendance, container transfers, and users; every driver\'s active truck assignment and login status is tracked live via a session heartbeat so supervisors can see who is actually online without radioing anyone. Every write to the database is captured in an audit log with a diff of what changed.',
      keyDecisions: [
        'Made database-level row security the actual access-control boundary, with the app\'s role checks layered on top as a UX convenience rather than the security mechanism itself.',
        'Used two-tier authentication: single sign-on is primary and requires users to be pre-registered with no self-signup, with a local login kept available behind the same security boundary for accounts outside the SSO directory.',
        'Branched one shared dashboard by user role internally rather than building out fully separate routes per role, a deliberate early-velocity tradeoff at the cost of that file growing very large over time.',
        'Special-cased the one partner company with a different workflow rather than building out general multi-tenancy, since it was the only company that needed it.',
        'Routed every data mutation through one shared logging utility so the audit trail stays consistent and queryable across all roles instead of each area logging its own way.',
      ],
      challenges:
        'Keeping the local-login fallback safe was the trickiest part, since it has no separate server-side auth layer in front of it, so the database-level security on user records had to be airtight before that path could ship. Retrofitting the one partner company\'s divergent workflow into a codebase originally built around one shared behavior per role meant threading the same check through several components rather than one central place. The schema also evolved under active use while keeping historical records queryable throughout.',
      outcome: [
        'Used daily by port terminal operations staff across admin, dispatch, checker, and driver roles',
        'Replaced manual radio-based status checks with live visibility into which drivers are logged in and what truck they are assigned to',
        'Every data mutation now has a searchable, attributable audit trail that did not exist before',
        'Container moves are tracked end-to-end instead of tracked ad hoc or not at all',
      ],
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
