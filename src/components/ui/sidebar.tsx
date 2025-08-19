"use client";

import Link from "next/link";

export function Sidebar() {
  return (
    <aside className="w-64 bg-gray-100 dark:bg-gray-800 min-h-screen p-4">
      <nav className="space-y-4">
        <Link
          href="#"
          className="block px-3 py-2 rounded-md text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          Dashboard
        </Link>
        <Link
          href="#"
          className="block px-3 py-2 rounded-md text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          My Courses
        </Link>
        <Link
          href="#"
          className="block px-3 py-2 rounded-md text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          Assignments
        </Link>
        <Link
          href="#"
          className="block px-3 py-2 rounded-md text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          Profile
        </Link>
        <Link
          href="#"
          className="block px-3 py-2 rounded-md text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          Settings
        </Link>
      </nav>
    </aside>
  );
}
