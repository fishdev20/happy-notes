import Note from "shared/model/Note";

const mockNotes: Note[] = [
  {
    id: "1",
    title: "Meeting Notes",
    createdAt: new Date("2025-03-16T08:30:00Z"),
    updatedAt: new Date("2025-03-16T09:00:00Z"),
    content: "Discussed project timeline and milestones for Q2.",
    tag: ["work", "meeting"],
  },
  {
    id: "2",
    title: "Shopping List",
    createdAt: new Date("2025-03-15T12:45:00Z"),
    updatedAt: new Date("2025-03-15T13:00:00Z"),
    content: "Milk, eggs, bread, and coffee.",
    tag: ["personal", "shopping"],
  },
  {
    id: "3",
    title: "Ideas for New App",
    createdAt: new Date("2025-03-14T10:00:00Z"),
    updatedAt: new Date("2025-03-16T11:15:00Z"),
    content: "Brainstorming ideas for a note-taking app with AI suggestions.",
    tag: ["work", "brainstorming"],
  },
  {
    id: "4",
    title: "Travel Itinerary",
    createdAt: new Date("2025-03-10T14:20:00Z"),
    updatedAt: new Date("2025-03-11T09:30:00Z"),
    content: "Plan trip to Berlin, Paris, and Nice. Book train tickets.",
    tag: ["personal", "travel"],
  },
  {
    id: "5",
    title: "Learning Goals",
    createdAt: new Date("2025-03-12T16:00:00Z"),
    updatedAt: new Date("2025-03-15T17:00:00Z"),
    content: "Improve Golang skills, explore Kubernetes, and deploy on GCP.",
    tag: ["work", "learning"],
  },
];

export default mockNotes;
