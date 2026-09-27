# AgreeAI — From Conversation to Completion ⚡

> Turn messy meetings into clear decisions, accountable tasks, and measurable progress.

AgreeAI is an AI-powered meeting intelligence and project execution platform. Unlike passive meeting summarizers, AgreeAI transforms conversation transcripts and audio into structured, accountable execution pipelines.

---

## ✨ Features

- 🎯 **Confidence Scores**: AI flags confidence thresholds for extracted decisions (e.g. 96% confidence).
- 🚨 **Priority & Urgency Matrix**: Automatically classifies action items (P0, P1, Urgent, High).
- 🤝 **Multi-Owner Detection**: Handles shared responsibilities and cross-functional handoffs.
- 🔗 **Dependency & Blocker Engine**: Visualizes task relationships to detect sprint bottlenecks.
- 🧠 **Project Memory & Cross-Meeting Diff**: Automatically compares consecutive meetings (#04 vs #05) to track shifted deadlines, new risks, and completed milestones.
- ⚡ **Automated Execution**: 1-click sync to Google Calendar slots, draft email follow-ups, and real-time team progress charts.

---

## 🛠 Tech Stack

- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS + Custom Dark AI SaaS Design System
- **Icons**: Lucide React
- **Routing**: React Router v7
- **Analytics & Charts**: Recharts

---

## 🚀 Getting Started

### 1. Clone & Install Dependencies

```bash
git clone https://github.com/Kunnnaaalll/Agree-Ai.git
cd Agree-Ai/frontend
npm install
```

### 2. Run Local Development Server

```bash
npm run dev
```

Open [http://localhost:5173/](http://localhost:5173/) in your browser.

---

## 📂 Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── dashboard/   # TaskTable, MetricCard, DependencyGraph, MeetingCard
│   │   ├── landing/     # Hero, HowItWorks, IntelligenceGrid, AudioPipeline, ExecutionSection, ProjectMemory, TeamDashboardPreview, FinalCTA
│   │   ├── layout/      # Navbar, Sidebar, Footer
│   │   ├── meeting/     # DecisionCard, ActionItem, ThemeBadge
│   │   └── ui/          # Badge, Button, Card, ProgressBar
│   ├── data/            # Mock dataset for meetings, tasks, team progress & diffs
│   ├── pages/           # Landing, Analyze, Dashboard, MeetingDetail, Progress, Diff
│   ├── App.jsx
│   └── main.jsx
```

---

## 📜 License

MIT License © 2026 AgreeAI
