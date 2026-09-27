export const mockDiff = {
  previousMeeting: {
    id: "m-104",
    title: "Meeting #04 — Sprint Sync",
    date: "Sep 20, 2026"
  },
  currentMeeting: {
    id: "m-105",
    title: "Meeting #05 — Architecture & Launch",
    date: "Sep 26, 2026"
  },
  summary: "Comparing Meeting #04 to Meeting #05 reveals a critical timeline extension due to database schema migration, along with 2 new high-priority tasks assigned to Kunal and Vansh.",
  diffs: {
    added: [
      {
        id: "diff-a1",
        title: "Supabase database schema migration",
        category: "Decision",
        confidence: 96,
        details: "Agreed to decouple legacy PostgreSQL cluster and migrate all meeting payload tables to Supabase managed instance.",
        owner: "Kunal Shah"
      },
      {
        id: "diff-a2",
        title: "Provision AWS ECS Cluster & sync pipelines",
        category: "Task",
        priority: "P0",
        urgency: "Urgent",
        owner: "Kunal Shah"
      },
      {
        id: "diff-a3",
        title: "Hybrid seat + usage billing tier proposal",
        category: "Idea / Proposal",
        confidence: 82,
        owner: "Sarah Chen"
      }
    ],
    changed: [
      {
        id: "diff-c1",
        field: "Launch Target Date",
        from: "Sep 30, 2026",
        to: "Oct 7, 2026",
        reason: "Required for zero-downtime Supabase migration cutover",
        status: "Updated"
      },
      {
        id: "diff-c2",
        field: "WebSocket Latency SLA",
        from: "1200ms threshold",
        to: "<300ms real-time limit",
        reason: "New model streaming architecture optimized by Vansh",
        status: "Improved"
      }
    ],
    completed: [
      {
        id: "diff-comp1",
        title: "Landing page mockup & theme system design",
        owner: "Priya Patel",
        completedOn: "Sep 24, 2026"
      },
      {
        id: "diff-comp2",
        title: "Launch announcement email copy",
        owner: "Sarah Chen",
        completedOn: "Sep 25, 2026"
      }
    ],
    removed: [
      {
        id: "diff-r1",
        title: "Legacy REST polling endpoint for transcript sync",
        reason: "Replaced entirely by WebSocket event stream",
        category: "Deprecated Feature"
      }
    ],
    atRisk: [
      {
        id: "diff-risk1",
        title: "Backend Integration & Stress Benchmark",
        severity: "High",
        blocker: "Depends on ECS Cluster setup finish (Oct 2)",
        actionRequired: "Kunal to prioritize AWS task setup before Friday sync"
      }
    ],
    stillOpen: [
      {
        id: "diff-so1",
        question: "Will Supabase free/pro tier sustain peak enterprise socket connections?",
        assignedTo: "Kunal Shah",
        status: "Pending stress testing"
      }
    ]
  }
};
