"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sidebar } from "@/components/ui/sidebar";
import { ThemeToggle } from "../components/ThemeToggle";

export default function Page() {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 text-gray-900 dark:text-gray-100">
        {/* Topbar */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Student Dashboard</h1>
          <ThemeToggle />
        </div>

        {/* Overview Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-gray-800 dark:text-gray-200">
                Courses In Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                5
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-gray-800 dark:text-gray-200">
                Courses Completed
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                12
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-gray-800 dark:text-gray-200">
                Certificates Earned
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                3
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-gray-800 dark:text-gray-200">
                Community Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                20
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Assignments Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-gray-800 dark:text-gray-200">
              My Assignments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span className="text-gray-700 dark:text-gray-200">Math Quiz</span>
                <span className="text-green-600 dark:text-green-400">Completed</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-700 dark:text-gray-200">Science Project</span>
                <span className="text-yellow-600 dark:text-yellow-400">Pending</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-700 dark:text-gray-200">History Essay</span>
                <span className="text-red-600 dark:text-red-400">Upcoming</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
