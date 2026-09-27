export const mockMeetings = [
  {
    id: "m-105",
    number: "05",
    title: "Q4 Architecture & Launch Alignment",
    date: "Sep 26, 2026",
    time: "10:30 AM - 11:15 AM",
    duration: "45 mins",
    confidence: 96,
    audioLength: "45:18",
    project: "Core SaaS Platform",
    participants: [
      { name: "Kunal Shah", role: "Lead Architect", avatar: "K" },
      { name: "Vansh Sharma", role: "Frontend Lead", avatar: "V" },
      { name: "Priya Patel", role: "UI/UX Designer", avatar: "P" },
      { name: "Sarah Chen", role: "Product Manager", avatar: "S" }
    ],
    summary: "The team finalized the Q4 deployment timeline, moving the hard deadline to October 7 to accommodate the Supabase database migration. Kunal agreed to lead infrastructure provisioning while Vansh and Priya take charge of UI polish and client integration.",
    decisions: [
      {
        id: "d-1",
        text: "Launch production release on October 7, 2026 (moved from Sep 30)",
        type: "Confirmed",
        confidence: 98,
        owner: "Kunal Shah",
        impact: "High",
        rationale: "Ensures full Supabase migration compliance and zero-downtime database cutover."
      },
      {
        id: "d-2",
        text: "Adopt hybrid web sockets for real-time meeting transcription streaming",
        type: "Confirmed",
        confidence: 94,
        owner: "Vansh Sharma",
        impact: "Medium",
        rationale: "Reduces latency from 1.2s to under 300ms during live call processing."
      },
      {
        id: "d-3",
        text: "Proposal: Transition billing tier to seat-based + usage hybrid model",
        type: "Proposed",
        confidence: 82,
        owner: "Sarah Chen",
        impact: "High",
        rationale: "Needs final sign-off from finance before Q4 customer rollout."
      }
    ],
    actionItems: [
      {
        id: "t-101",
        title: "Provision AWS ECS Cluster & Supabase sync pipelines",
        owners: ["Kunal Shah"],
        priority: "P0",
        urgency: "Urgent",
        deadline: "Oct 2, 2026",
        status: "In Progress",
        confidence: 97,
        dependsOn: null,
        calendarSlot: "Friday, 4:00 PM",
        emailDraft: "Hi Kunal, as discussed in today's sync, please ensure the ECS task definitions and Supabase sync script are reviewed before Friday deployment."
      },
      {
        id: "t-102",
        title: "Finish high-fidelity UI components & theme engine integration",
        owners: ["Vansh Sharma", "Priya Patel"],
        priority: "P1",
        urgency: "High",
        deadline: "Oct 4, 2026",
        status: "In Progress",
        confidence: 95,
        dependsOn: null,
        calendarSlot: "Thursday, 2:00 PM",
        emailDraft: "Hi Vansh & Priya, sharing the transcript items regarding dark mode tokens and responsiveness for the main execution views."
      },
      {
        id: "t-103",
        title: "Execute stress test on audio streaming pipeline with 1,000 concurrent sockets",
        owners: ["Kunal Shah"],
        priority: "P0",
        urgency: "Urgent",
        deadline: "Oct 5, 2026",
        status: "Pending",
        confidence: 91,
        dependsOn: "t-101",
        calendarSlot: "Monday, 11:00 AM",
        emailDraft: "Kunal, following up on the benchmark tests blocked by ECS cluster setup."
      },
      {
        id: "t-104",
        title: "Prepare launch announcement copy & email drip sequence",
        owners: ["Sarah Chen"],
        priority: "P2",
        urgency: "Normal",
        deadline: "Oct 6, 2026",
        status: "Completed",
        confidence: 98,
        dependsOn: "t-102",
        calendarSlot: "Completed",
        emailDraft: "Draft ready for review on Notion."
      }
    ],
    ideas: [
      {
        id: "i-1",
        text: "Auto-generate executive summaries sent directly to Slack after meetings",
        proposedBy: "Priya Patel",
        feasibility: "High"
      },
      {
        id: "i-2",
        text: "Interactive audio transcript waveform seeking directly inside task cards",
        proposedBy: "Vansh Sharma",
        feasibility: "Medium"
      }
    ],
    openQuestions: [
      {
        id: "q-1",
        question: "Will the current Supabase tier support peak streaming loads during enterprise calls?",
        assignedTo: "Kunal Shah",
        status: "Investigating"
      },
      {
        id: "q-2",
        question: "Do we require SOC-2 compliance badges on the initial public landing page?",
        assignedTo: "Sarah Chen",
        status: "Pending Legal Review"
      }
    ],
    risks: [
      {
        id: "r-1",
        risk: "Backend database migration delay might impact public launch by 2-3 days",
        severity: "High",
        mitigation: "Kunal assigned dedicated 2-day sprint focus on schema migration."
      }
    ],
    dependencies: [
      { from: "UI Development (Vansh + Priya)", to: "Public Release", status: "On Track" },
      { from: "Supabase Migration (Kunal)", to: "Stress Testing", status: "Critical Path" }
    ],
    themes: [
      { name: "Development", count: 8, color: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30" },
      { name: "Design", count: 4, color: "bg-purple-500/20 text-purple-400 border-purple-500/30" },
      { name: "Operations", count: 3, color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30" },
      { name: "Risks", count: 2, color: "bg-rose-500/20 text-rose-400 border-rose-500/30" }
    ]
  },
  {
    id: "m-104",
    number: "04",
    title: "Sprint Sync & Architecture Review #04",
    date: "Sep 20, 2026",
    time: "02:00 PM - 02:45 PM",
    duration: "45 mins",
    confidence: 93,
    audioLength: "41:12",
    project: "Core SaaS Platform",
    participants: [
      { name: "Kunal Shah", role: "Lead Architect", avatar: "K" },
      { name: "Vansh Sharma", role: "Frontend Lead", avatar: "V" },
      { name: "Priya Patel", role: "UI/UX Designer", avatar: "P" }
    ],
    summary: "Reviewed initial landing page mockups and agreed on initial Sep 30 target launch. Discussed switching database provider to Supabase.",
    decisions: [
      {
        id: "d-104-1",
        text: "Target release set for Sep 30, 2026",
        type: "Superseded",
        confidence: 90,
        owner: "Kunal Shah",
        impact: "High"
      },
      {
        id: "d-104-2",
        text: "Approved Tailwind CSS & Lucide icon system for frontend rebuild",
        type: "Confirmed",
        confidence: 99,
        owner: "Vansh Sharma",
        impact: "Medium"
      }
    ],
    actionItems: [
      {
        id: "t-104-1",
        title: "Design dark SaaS landing page layout & components",
        owners: ["Priya Patel"],
        priority: "P1",
        urgency: "High",
        deadline: "Sep 24, 2026",
        status: "Completed",
        confidence: 98,
        dependsOn: null
      }
    ],
    ideas: [],
    openQuestions: [],
    risks: [],
    dependencies: [],
    themes: [
      { name: "Design", count: 6, color: "bg-purple-500/20 text-purple-400 border-purple-500/30" },
      { name: "Development", count: 5, color: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30" }
    ]
  },
  {
    id: "m-103",
    number: "03",
    title: "AI Analysis Model Benchmark & Accuracy Test",
    date: "Sep 15, 2026",
    time: "11:00 AM - 11:40 AM",
    duration: "40 mins",
    confidence: 95,
    audioLength: "38:50",
    project: "AI Engine",
    participants: [
      { name: "Kunal Shah", role: "Lead Architect", avatar: "K" },
      { name: "Sarah Chen", role: "Product Manager", avatar: "S" }
    ],
    summary: "Evaluated whisper transcript extraction against customized meeting prompts. Achieved 96% decision accuracy score.",
    decisions: [
      {
        id: "d-103-1",
        text: "Set 90% confidence threshold for automated action item extraction",
        type: "Confirmed",
        confidence: 96,
        owner: "Kunal Shah",
        impact: "High"
      }
    ],
    actionItems: [],
    ideas: [],
    openQuestions: [],
    risks: [],
    dependencies: [],
    themes: [
      { name: "AI/ML", count: 7, color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" }
    ]
  }
];
