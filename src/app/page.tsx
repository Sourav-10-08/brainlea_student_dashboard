"use client";

import React from "react";
import {
  LayoutDashboard,
  BookOpen,
  MessageCircle,
  GraduationCap,
  Calendar as CalendarIcon,
  Settings,
  Bell,
  Search,
  BadgeCheck,
  Star,
  Crown,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

// ✅ Correct Recharts imports (do NOT use recharts/es6/…)
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

// ------- Mock data ---------
const activeHours = [
  { day: "S", hours: 2 },
  { day: "M", hours: 7 },
  { day: "T", hours: 6.5 },
  { day: "W", hours: 7.5 },
  { day: "T", hours: 6.8 },
  { day: "F", hours: 3.5 },
  { day: "S", hours: 5 },
];

const performance = [
  { month: "Jan", you: 38, class: 40 },
  { month: "Feb", you: 44, class: 41 },
  { month: "Mar", you: 35, class: 39 },
  { month: "Apr", you: 47, class: 45 },
  { month: "May", you: 43, class: 42 },
  { month: "Jun", you: 46, class: 44 },
];

const assignments = [
  {
    icon: <BadgeCheck className="h-4 w-4" />,
    task: "Typography test",
    when: "Today, 10:30 AM",
    grade: "190/200",
    status: "Completed" as const,
  },
  {
    icon: <BadgeCheck className="h-4 w-4" />,
    task: "Inclusive design test",
    when: "Tomorrow, 10:30 AM",
    grade: "160/200",
    status: "Completed" as const,
  },
  {
    icon: <BadgeCheck className="h-4 w-4" />,
    task: "Drawing test",
    when: "23 Feb, 12:30 PM",
    grade: "--/200",
    status: "Upcoming" as const,
  },
];

const events = [
  { day: "Mon", items: [{ t: "Team Meetup", time: "10:30" }] },
  { day: "Tue", items: [{ t: "Illustration", time: "11:30" }] },
  { day: "Wed", items: [{ t: "Research", time: "09:30-12:30" }] },
  { day: "Thu", items: [{ t: "Presentation", time: "13:00" }] },
  { day: "Sat", items: [{ t: "Report", time: "09:30" }] },
];

// ------- Small UI helpers ---------
function OverviewItem({
  title,
  value,
  icon,
  progress,
}: {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  progress?: number;
}) {
  return (
    <Card className="border-none shadow-sm">
      <CardContent className="p-5">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-muted-foreground">{title}</p>
            <div className="mt-2 text-2xl font-semibold">{value}</div>
          </div>
          <div className="rounded-xl bg-muted p-2">{icon}</div>
        </div>
        {typeof progress === "number" && (
          <div className="mt-4">
            <Progress value={progress} />
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function EventRow({
  label,
  items,
}: {
  label: string;
  items: { t: string; time: string }[];
}) {
  return (
    <div className="grid grid-cols-6 items-center gap-2 py-2">
      <div className="col-span-1 text-sm text-muted-foreground">{label}</div>
      <div className="col-span-5 flex flex-wrap gap-2">
        {items.map((ev, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-xs"
          >
            <span className="h-2 w-2 rounded-full bg-foreground" />
            {ev.t}
            <span className="text-muted-foreground">· {ev.time}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#0F0E25] p-3">
      <div className="mx-auto grid max-w-[1320px] grid-cols-12 gap-4 rounded-3xl bg-white p-4">
        {/* Sidebar */}
        <aside className="col-span-2 rounded-2xl bg-white">
          <div className="sticky top-4 flex h-[92vh] flex-col justify-between rounded-2xl bg-[#F6F6FB] p-4">
            <div>
              <div className="mb-6 flex items-center gap-2 px-2 text-lg font-semibold">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white">
                  B
                </span>
                BrainLea
              </div>
              <nav className="space-y-1">
                {[
                  { label: "Dashboard", icon: <LayoutDashboard className="h-5 w-5" /> },
                  { label: "Courses", icon: <BookOpen className="h-5 w-5" /> },
                  { label: "Chat", icon: <MessageCircle className="h-5 w-5" /> },
                  { label: "Grades", icon: <GraduationCap className="h-5 w-5" /> },
                  { label: "Schedule", icon: <CalendarIcon className="h-5 w-5" /> },
                  { label: "Settings", icon: <Settings className="h-5 w-5" /> },
                ].map((item, idx) => (
                  <Button
                    key={idx}
                    variant={idx === 0 ? "default" : "ghost"}
                    className={`w-full justify-start gap-3 ${
                      idx === 0 ? "bg-indigo-600 text-white hover:bg-indigo-600/90" : ""
                    }`}
                  >
                    {item.icon}
                    {item.label}
                  </Button>
                ))}
              </nav>
            </div>

            <Card className="border-none">
              <CardContent className="p-4 text-center">
                <div className="mx-auto mb-3 h-20 w-20 rounded-2xl bg-muted" />
                <div className="text-sm font-medium">Get Premium</div>
                <p className="mt-1 text-xs text-muted-foreground">
                  Buy premium and get access to new courses
                </p>
                <Button className="mt-3 w-full">Subscribe</Button>
              </CardContent>
            </Card>
          </div>
        </aside>

        {/* Main content */}
        <main className="col-span-7 space-y-4">
          {/* Top bar */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold">Hello Alysia 👋</h2>
              <p className="text-sm text-muted-foreground">
                Let's learn something new today!
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search" className="w-64 pl-8" />
              </div>
              <Button variant="outline" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Overview */}
          <div>
            <h3 className="mb-3 text-lg font-semibold">Overview</h3>
            <div className="grid grid-cols-4 gap-3">
              <OverviewItem
                title="Course in Progress"
                value={18}
                icon={<BookOpen className="h-5 w-5" />}
                progress={40}
              />
              <OverviewItem
                title="Course Completed"
                value={23}
                icon={<GraduationCap className="h-5 w-5" />}
                progress={85}
              />
              <OverviewItem
                title="Certificates Earned"
                value={15}
                icon={<Star className="h-5 w-5" />}
                progress={60}
              />
              <OverviewItem
                title="Community Support"
                value={87}
                icon={<Crown className="h-5 w-5" />}
                progress={75}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Actively Hours */}
            <Card className="border-none">
              <CardHeader className="pb-0">
                <CardTitle>Actively Hours</CardTitle>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="h-48 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={activeHours}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="day" tickLine={false} axisLine={false} />
                      <YAxis hide domain={[0, 8]} />
                      <RechartsTooltip cursor={false} />
                      <Bar dataKey="hours" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3 text-sm">
                  <div className="rounded-xl bg-muted p-3">
                    <div className="text-xs text-muted-foreground">Time spent</div>
                    <div className="mt-1 flex items-baseline gap-2 font-semibold">
                      28 <Badge className="bg-emerald-100 text-emerald-700">+85%</Badge>
                    </div>
                  </div>
                  <div className="rounded-xl bg-muted p-3">
                    <div className="text-xs text-muted-foreground">Lessons taken</div>
                    <div className="mt-1 flex items-baseline gap-2 font-semibold">
                      60 <Badge className="bg-emerald-100 text-emerald-700">+79%</Badge>
                    </div>
                  </div>
                  <div className="rounded-xl bg-muted p-3">
                    <div className="text-xs text-muted-foreground">Exam passed</div>
                    <div className="mt-1 flex items-baseline gap-2 font-semibold">
                      10 <Badge className="bg-emerald-100 text-emerald-700">100%</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Performance */}
            <Card className="border-none">
              <CardHeader className="pb-0">
                <CardTitle>Performance</CardTitle>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="h-48 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={performance}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="month" tickLine={false} axisLine={false} />
                      <YAxis hide />
                      <RechartsTooltip cursor={false} />
                      <Line type="monotone" dataKey="class" strokeWidth={2} dot={false} />
                      <Line type="monotone" dataKey="you" strokeWidth={2} dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">40%</span> Your productivity is 40 higher compared to last month
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Assignments */}
          <Card className="border-none">
            <CardHeader className="pb-0">
              <CardTitle>My Assignments</CardTitle>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="grid grid-cols-12 gap-2 rounded-xl bg-muted/50 p-3 text-xs font-medium text-muted-foreground">
                <div className="col-span-7">Task</div>
                <div className="col-span-2">Grade</div>
                <div className="col-span-3">Update</div>
              </div>
              <div className="divide-y">
                {assignments.map((a, i) => (
                  <div key={i} className="grid grid-cols-12 items-center gap-2 py-3">
                    <div className="col-span-7 flex items-center gap-3">
                      <div className="grid h-9 w-9 place-items-center rounded-xl bg-muted">
                        {a.icon}
                      </div>
                      <div>
                        <div className="font-medium">{a.task}</div>
                        <div className="text-xs text-muted-foreground">{a.when}</div>
                      </div>
                    </div>
                    <div className="col-span-2 font-semibold">{a.grade}</div>
                    <div className="col-span-3">
                      <Badge
                        variant="secondary"
                        className={
                          a.status === "Upcoming"
                            ? "bg-orange-100 text-orange-700"
                            : "bg-emerald-100 text-emerald-700"
                        }
                      >
                        {a.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </main>

        {/* Right bar */}
        <aside className="col-span-3 space-y-4">
          <Card className="border-none">
            <CardContent className="flex items-center gap-3 p-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src="/student-avatar.jpg" alt="Student" />
                <AvatarFallback>AI</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-semibold">Andreas Iniesta</div>
                <div className="text-sm text-muted-foreground">College Student</div>
              </div>
              <div className="ml-auto">
                <Button variant="outline" size="icon">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

            <Card className="border-none">
              <CardHeader className="pb-0">
                <CardTitle className="flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5" /> February 2023
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="grid grid-cols-7 gap-1 text-center text-xs text-muted-foreground">
                  {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
                    <div key={d} className="py-1">
                      {d}
                    </div>
                  ))}
                </div>
                <div className="mt-1 grid grid-cols-7 gap-1 text-center">
                  {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                    <div
                      key={d}
                      className={`rounded-xl py-2 text-sm ${
                        d === 20 ? "bg-indigo-600 font-semibold text-white" : "bg-muted"
                      }`}
                    >
                      {d}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

          <Card className="border-none">
            <CardHeader className="pb-0">
              <CardTitle>Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="space-y-1">
                {events.map((e, idx) => (
                  <EventRow key={idx} label={e.day} items={e.items} />
                ))}
              </div>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}
