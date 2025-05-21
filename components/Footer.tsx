import React from "react";
import { Link } from "@/i18n/navigation";

export default function Footer() {
  return (
    <footer className="bg-rebel-black text-rebel-text border-t border-rebel-border py-8 mt-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-pixel text-rebel-neon-green mb-2">RebelSoft</h3>
          <p className="text-sm">© 2025 RebelSoft. All rights reserved.</p>
        </div>
        <div>
          <h4 className="font-pixel text-rebel-electric-blue mb-2">Links</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <Link href="/" className="hover:text-rebel-neon-green hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-rebel-neon-green hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/team" className="hover:text-rebel-neon-green hover:underline">
                Team
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-rebel-neon-green hover:underline">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-rebel-neon-green hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-pixel text-rebel-electric-blue mb-2">Contact</h4>
          <p className="text-sm">Email: info@rebelsoft.com</p>
          <p className="text-sm">Phone: +1 234 567 890</p>
        </div>
      </div>
    </footer>
  );
}
