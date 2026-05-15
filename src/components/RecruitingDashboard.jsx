import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Circle, Mail, School, Target, Trophy, CalendarDays, Search, Trash2 } from "lucide-react";

const initialSchools = [
  {
    id: 1,
    school: "Example University",
    division: "D1",
    fit: "Reach",
    academicFit: "High",
    athleticFit: "Medium",
    location: "Northeast",
    coach: "Coach Smith",
    email: "coach@example.edu",
    status: "Researching",
    priority: "High",
    lastContact: "",
    nextStep: "Send intro email + highlight reel",
    notes: "Strong academics, competitive roster."
  },
  {
    id: 2,
    school: "Sample College",
    division: "D3",
    fit: "Target",
    academicFit: "High",
    athleticFit: "High",
    location: "Mid-Atlantic",
    coach: "Coach Lee",
    email: "coachlee@example.edu",
    status: "Emailed",
    priority: "High",
    lastContact: "2026-05-01",
    nextStep: "Follow up after tournament",
    notes: "Great campus fit and likely playing opportunity."
  },
  {
    id: 3,
    school: "State Tech",
    division: "Club/MCLA",
    fit: "Likely",
    academicFit: "Medium",
    athleticFit: "High",
    location: "West",
    coach: "Coach Rivera",
    email: "rivera@example.edu",
    status: "Interested",
    priority: "Medium",
    lastContact: "2026-04-20",
    nextStep: "Schedule call",
    notes: "Good backup option with strong major."
  }
];

const checklist = [
  "Build athletic profile",
  "Create highlight reel",
  "Finalize academic profile",
  "Identify 20–40 target schools",
  "Send first coach emails",
  "Track responses",
  "Plan tournament/showcase outreach",
  "Schedule coach calls",
  "Visit top-fit campuses",
  "Update coaches after each event"
];

const statuses = ["Researching", "Emailed", "Followed Up", "Interested", "Call Scheduled", "Visited", "Offer/Spot", "Not a Fit"];
const priorities = ["High", "Medium", "Low"];
const fits = ["Reach", "Target", "Likely"];

export default function RecruitingDashboard() {
  const [schools, setSchools] = useState(initialSchools);
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [completed, setCompleted] = useState(["Build athletic profile", "Create highlight reel"]);
  const [newSchool, setNewSchool] = useState({ school: "", division: "", fit: "Target", priority: "Medium", status: "Researching" });

  const filteredSchools = useMemo(() => {
    return schools.filter((s) => {
      const matchesQuery = [s.school, s.division, s.location, s.coach, s.notes].join(" ").toLowerCase().includes(query.toLowerCase());
      const matchesStatus = statusFilter === "All" || s.status === statusFilter;
      return matchesQuery && matchesStatus;
    });
  }, [schools, query, statusFilter]);

  const progress = Math.round((completed.length / checklist.length) * 100);

  const updateSchool = (id, field, value) => {
    setSchools((prev) => prev.map((s) => (s.id === id ? { ...s, [field]: value } : s)));
  };

  const addSchool = () => {
    if (!newSchool.school.trim()) return;
    setSchools((prev) => [
      ...prev,
      {
        id: Date.now(),
        school: newSchool.school,
        division: newSchool.division || "TBD",
        fit: newSchool.fit,
        academicFit: "TBD",
        athleticFit: "TBD",
        location: "TBD",
        coach: "",
        email: "",
        status: newSchool.status,
        priority: newSchool.priority,
        lastContact: "",
        nextStep: "Research program and coach contact",
        notes: ""
      }
    ]);
    setNewSchool({ school: "", division: "", fit: "Target", priority: "Medium", status: "Researching" });
  };

  const removeSchool = (id) => setSchools((prev) => prev.filter((s) => s.id !== id));

  return (
    <div className="min-h-screen bg-slate-50 p-6 text-slate-900">
      <div className="mx-auto max-w-7xl space-y-6">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-slate-500">Personalized lacrosse recruiting tracker</p>
            <h1 className="text-3xl font-bold tracking-tight md:text-5xl">Recruiting Progress & College Target List</h1>
            <p className="mt-2 max-w-2xl text-slate-600">Track school fit, coach outreach, academic/athletic match, communication status, and next actions in one place.</p>
          </div>
          <div className="rounded-full bg-slate-900 text-white px-4 py-2 text-base font-semibold w-fit">{progress}% Complete</div>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-4">
          <div className="rounded-2xl bg-white shadow-sm p-5"><Target className="mb-3 h-6 w-6" /><p className="text-sm text-slate-500">Target Schools</p><p className="text-3xl font-bold">{schools.length}</p></div>
          <div className="rounded-2xl bg-white shadow-sm p-5"><Mail className="mb-3 h-6 w-6" /><p className="text-sm text-slate-500">Coaches Contacted</p><p className="text-3xl font-bold">{schools.filter(s => s.status !== "Researching").length}</p></div>
          <div className="rounded-2xl bg-white shadow-sm p-5"><Trophy className="mb-3 h-6 w-6" /><p className="text-sm text-slate-500">Interested Programs</p><p className="text-3xl font-bold">{schools.filter(s => ["Interested", "Call Scheduled", "Visited", "Offer/Spot"].includes(s.status)).length}</p></div>
          <div className="rounded-2xl bg-white shadow-sm p-5"><CalendarDays className="mb-3 h-6 w-6" /><p className="text-sm text-slate-500">High Priority</p><p className="text-3xl font-bold">{schools.filter(s => s.priority === "High").length}</p></div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl bg-white shadow-sm lg:col-span-1 p-5">
            <h2 className="mb-4 text-xl font-semibold">Recruiting Checklist</h2>
            <div className="mb-4 h-3 rounded-full bg-slate-200">
              <div className="h-3 rounded-full bg-slate-900" style={{ width: `${progress}%` }} />
            </div>
            <div className="space-y-3">
              {checklist.map((item) => {
                const isDone = completed.includes(item);
                return (
                  <button key={item} onClick={() => setCompleted((prev) => isDone ? prev.filter(x => x !== item) : [...prev, item])} className="flex w-full items-center gap-3 rounded-xl border bg-white p-3 text-left hover:bg-slate-50">
                    {isDone ? <CheckCircle2 className="h-5 w-5" /> : <Circle className="h-5 w-5" />}
                    <span className={isDone ? "text-slate-500 line-through" : ""}>{item}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="rounded-2xl bg-white shadow-sm lg:col-span-2 p-5">
            <h2 className="mb-4 text-xl font-semibold">Add a School</h2>
            <div className="grid gap-3 md:grid-cols-5">
              <input placeholder="School name" value={newSchool.school} onChange={(e) => setNewSchool({ ...newSchool, school: e.target.value })} className="md:col-span-2 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900" />
              <input placeholder="Division" value={newSchool.division} onChange={(e) => setNewSchool({ ...newSchool, division: e.target.value })} className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900" />
              <select value={newSchool.fit} onChange={(e) => setNewSchool({ ...newSchool, fit: e.target.value })} className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900">
                {fits.map(f => <option key={f} value={f}>{f}</option>)}
              </select>
              <button onClick={addSchool} className="rounded-lg bg-slate-900 text-white font-semibold hover:bg-slate-800">Add</button>
            </div>

            <div className="mt-6 flex flex-col gap-3 md:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <input className="pl-9 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900" placeholder="Search schools, coaches, notes..." value={query} onChange={(e) => setQuery(e.target.value)} />
              </div>
              <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="md:w-52 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900">
                <option value="All">All statuses</option>
                {statuses.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white shadow-sm p-5">
          <div className="mb-4 flex items-center gap-2">
            <School className="h-5 w-5" />
            <h2 className="text-xl font-semibold">College Target List</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1100px] border-separate border-spacing-y-2 text-sm">
              <thead>
                <tr className="text-left text-slate-500">
                  <th className="px-3">School</th>
                  <th>Division</th>
                  <th>Fit</th>
                  <th>Priority</th>
                  <th>Status</th>
                  <th>Coach</th>
                  <th>Email</th>
                  <th>Last Contact</th>
                  <th>Next Step</th>
                  <th>Notes</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {filteredSchools.map((s) => (
                  <tr key={s.id} className="rounded-xl bg-white shadow-sm">
                    <td className="rounded-l-xl p-3 font-semibold"><input value={s.school} onChange={(e) => updateSchool(s.id, "school", e.target.value)} className="w-full px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-slate-900" /></td>
                    <td><input value={s.division} onChange={(e) => updateSchool(s.id, "division", e.target.value)} className="w-full px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-slate-900" /></td>
                    <td>
                      <select value={s.fit} onChange={(e) => updateSchool(s.id, "fit", e.target.value)} className="w-full px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-slate-900">
                        {fits.map(f => <option key={f} value={f}>{f}</option>)}
                      </select>
                    </td>
                    <td>
                      <select value={s.priority} onChange={(e) => updateSchool(s.id, "priority", e.target.value)} className="w-full px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-slate-900">
                        {priorities.map(p => <option key={p} value={p}>{p}</option>)}
                      </select>
                    </td>
                    <td>
                      <select value={s.status} onChange={(e) => updateSchool(s.id, "status", e.target.value)} className="w-full px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-slate-900">
                        {statuses.map(st => <option key={st} value={st}>{st}</option>)}
                      </select>
                    </td>
                    <td><input value={s.coach} onChange={(e) => updateSchool(s.id, "coach", e.target.value)} className="w-full px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-slate-900" /></td>
                    <td><input value={s.email} onChange={(e) => updateSchool(s.id, "email", e.target.value)} className="w-full px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-slate-900" /></td>
                    <td><input type="date" value={s.lastContact} onChange={(e) => updateSchool(s.id, "lastContact", e.target.value)} className="w-full px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-slate-900" /></td>
                    <td><input value={s.nextStep} onChange={(e) => updateSchool(s.id, "nextStep", e.target.value)} className="w-full px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-slate-900" /></td>
                    <td><input value={s.notes} onChange={(e) => updateSchool(s.id, "notes", e.target.value)} className="w-full px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-slate-900" /></td>
                    <td className="rounded-r-xl pr-3"><button onClick={() => removeSchool(s.id)} className="rounded-lg bg-red-50 hover:bg-red-100 p-2"><Trash2 className="h-4 w-4 text-red-600" /></button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
