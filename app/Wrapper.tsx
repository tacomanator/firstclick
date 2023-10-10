"use client";

import Link from "next/link";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-10">
      <nav>
        <ul className="mb-10 flex space-x-5" role="list">
          <li>
            <Link className="text-blue-500" href="/approuter">
              App
            </Link>
          </li>
          <li>
            <Link className="text-blue-500" href="/pagesrouter">
              Pages
            </Link>
          </li>
          <li>
            <Link className="text-blue-500" href="/pagesrouter2">
              Pages2
            </Link>
          </li>
          <li>
            <Link className="text-blue-500" href="/child">
              Child
            </Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
}
