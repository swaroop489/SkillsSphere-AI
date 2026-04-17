<a name="top"></a>
![----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

![NSOC'26](https://img.shields.io/badge/NSOC-2026-orange?style=for-the-badge)

**This project is officially registered under nexus spring of code 2026.**

![----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

# SkillSphere AI

SkillSphere AI is an AI-powered full-stack platform that connects **learning**, **skill evaluation**, and **career readiness** in one ecosystem.

It helps:

- **Students** learn, practice, and become job-ready
- **Tutors** run live, interactive classes
- **Recruiters** discover skilled and better-matched candidates

The platform combines live classroom experiences with AI/ML-driven career tools such as resume analysis, job matching, interview practice, and performance tracking.

---

## Project Vision

SkillSphere AI aims to simplify the path from learning to hiring by giving users practical, actionable insights at every stage:

- Learn skills in real-time
- Measure progress through dashboards
- Improve career assets (resume and interview performance)
- Connect capabilities to hiring needs

---

## Core Features

1. **AI-Powered Career Hub**  
   A centralized dashboard for students and recruiters, featuring a modern, dark-themed interactive UI.

2. **AI Resume Analyzer**  
   Professional resume scoring with improvement suggestions. (Route: `/resume-analyzer`)
   - **Intelligent Upload:** Drag & Drop or paste resumes via clipboard.
   - **Global Insight Analysis:** Detailed scoring against industry standards.
   - **Keyword Intelligence:** Identification of missing industry-standard tags for better ATS visibility.
   - **Live Preview:** Document viewer with instant feedback for PDF files.

3. **Live Interactive Classrooms**  
   Real-time learning sessions with video, chat, and collaboration tools.

4. **Resume vs Job Description Matcher**  
   ML-assisted comparison between candidate profile and role requirements.

5. **AI Mock Interview System**  
   Interview practice with structured feedback for improvement.

---

## Target Users

- **Students**: build skills, improve resumes, and prepare for jobs
- **Tutors**: teach and manage live learning experiences
- **Recruiters**: identify skilled candidates more efficiently

---

## Project Goals

- Simplify the journey from learning to getting hired
- Provide AI-powered guidance for career growth
- Enable meaningful collaboration between learners and educators
- Keep the platform modular, scalable, and open-source friendly

---

## Tech Stack

- **Frontend:** React.js, Tailwind CSS, Lucide Icons
- **Backend:** Node.js + Express.js
- **Database:** MongoDB
- **Intelligence Layer:** AI/ML for resume analysis, matching, and recommendations

---

## Scalable Folder Structure

The following structure keeps the project modular and easy to scale for new contributors:


```text
SkillSphere-AI/
├── client/                          # React frontend application
│   ├── public/                      # Static public assets
│   └── src/
│       ├── app/                     # App-level entry points and routing
│       │   ├── main.jsx             # Entry point (ReactDOM.render)
│       │   ├── App.jsx              # Centralized routing configuration
│       │   └── index.css            # Global theme variables and base styles
│       ├── modules/                 # Feature-based modules
│       │   ├── landing/             # Integrated Landing Page module
│       │   ├── resume-analyzer/     # AI Upload, scoring, and insight views
│       │   ├── auth/                # Identity and session management
│       │   ├── classrooms/          # Live collaboration and management
│       │   ├── dashboard/           # User performance analytics
│       │   └── job-matcher/         # Career matching logic and UI
│       ├── shared/                  # Reusable UI primitives and components
│       │   ├── landing_components/  # Theme-consistent components (Navbar, Button, etc.)
│       │   └── components/          # Standard form and UI elements
│       ├── services/                # API communication layers
│       ├── utils/                   # Frontend helper utilities
│       └── assets/                  # Shared static resources
│
├── server/                          # Node.js + Express backend
│   ├── index.js                     # Main server entry point
│   ├── example.env                  # Example environment variables
│   ├── package.json                 # Backend dependencies and scripts
│   └── src/
│       ├── config/                  # Environment and app configuration
│       ├── modules/                 # Domain-based backend modules
│       │   ├── auth/                # Authentication and authorization
│       │   ├── users/               # Student, tutor, recruiter profiles
│       │   ├── classrooms/          # Live class/session management
│       │   ├── resumes/             # Resume parsing and storage handling
│       │   │   ├── controller.js    # Resume upload, analyze, result endpoints
│       │   │   └── routes.js        # Resume-related API routes
│       │   ├── matching/            # Resume vs JD matching logic
│       │   ├── interviews/          # Mock interview orchestration
│       │   └── analytics/           # Skill tracking and reporting
│       ├── middleware/              # Request validation, auth guards, etc.
│       │   └── uploadResume.js      # Multer middleware for resume uploads
│       ├── integrations/            # Third-party services (AI providers, etc.)
│       ├── database/                # Database models/schemas and repositories
│       │   └── db.js                # MongoDB connection setup
│       ├── uploads/                 # Uploaded resume files
│       ├── utils/                   # Backend helper utilities
│       │   └── parseResume.js       # PDF parsing and candidate data extraction
│       └── app/                     # App bootstrap, routes, and server entry
│
├── ai-ml/    
│   ├── evaluators/                  # AI/ML evaluation logic for resumes, matching, interviews
│   ├       └── skillEvaluator.js    # Resume vs job skill comparison logic                    
│   ├── resume-analysis/             # Resume scoring and feedback pipelines
│   ├── jd-matching/                 # Similarity/matching workflows
│   ├── interview-feedback/          # Interview evaluation logic
│   └── shared/                      # Common data processing utilities
│
├── docs/                            # Product and contributor documentation
│   ├── architecture/                # System architecture explanations
│   ├── api/                         # API behavior and endpoint documentation
│   └── features/                    # Feature-level functional documentation
│
└── README.md                        # Project overview for contributors
```

### Why this structure works

- **Feature-first design:** Easier to assign and scale work across teams
- **Clear boundaries:** Frontend, backend, and AI/ML concerns are separated
- **Contributor-friendly:** New developers can quickly find where to work
- **Future-ready:** Supports adding new learning/career modules without major rewrites

---

```md
### Resume Analyzer Backend Progress

Implemented:
- Resume upload support using multer
- Resume parsing using pdf-parse
- Candidate information extraction from uploaded resumes
- Skill comparison between resume skills and job description skills
- Weighted skill score generation
- Detection of matched skills, missing skills, and extra skills
- Explainable feedback for resume vs JD matching
```


## For Open-Source Contributors

If you want to contribute, start by understanding:

1. Which user group your change helps (student, tutor, recruiter)
2. Which module it belongs to (classrooms, resumes, matching, interviews, dashboard)
3. Whether the change impacts frontend, backend, AI/ML, or multiple layers

This approach keeps contributions focused, reviewable, and scalable.

---

## Contributor Resources

- Contribution Guide: `CONTRIBUTING.md`
- Code of Conduct: `CODE_OF_CONDUCT.md`
- Security Policy: `SECURITY.md`
- PR Template: `.github/PULL_REQUEST_TEMPLATE.md`
- Issue Templates: `.github/ISSUE_TEMPLATE/`
- Detailed Structure Notes: `docs/PROJECT_STRUCTURE.md`
- PR Quality Gates: `docs/QUALITY_GATES.md`

## PR Checks and Code Review Safety

Automated checks run on pull requests to `main` through:

- `.github/workflows/pr-quality-checks.yml`

These checks validate docs/workflows and, once app code is added, automatically run lint/test/build for `client`, `server`, and `ai-ml` when their dependency manifests exist.

## 🚀 Running the Project

### Client

```bash
cd client
npm install
npm run dev
```

### Server

```bash
cd server
npm install
npm run dev
```

Server environment variables (create `server/.env` from `server/example.env`):

- `MONGO_URI` or `MONGODB_URI`
- `PORT` (backend default: `5000`)
- `JWT_SECRET` (required for JWT registration)
- `JWT_EXPIRES_IN` (optional, default is `7d`)

Example local development values:

- `JWT_SECRET=skillsphere_dev_jwt_secret_1234567890abcdef`
- `JWT_EXPIRES_IN=7d`


```






