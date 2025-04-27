import React from "react";
import { Link } from "@/i18n/navigation";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-600 text-white py-8 mt-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-2">RebelSoft</h3>
          <p className="text-sm">© 2025 RebelSoft. All rights reserved.</p>
        </div>
        <div>
          <h4 className="font-medium mb-2">Links</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/team" className="hover:underline">
                Team
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:underline">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-2">Contact</h4>
          <p className="text-sm">Email: info@rebelsoft.com</p>
          <p className="text-sm">Phone: +1 234 567 890</p>
        </div>
      </div>
    </footer>
  );
}
