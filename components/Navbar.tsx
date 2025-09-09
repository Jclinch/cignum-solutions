// components/Navbar.tsx
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const navItems = [
  { label: "Home", path: "/" },
  {
    label: "Solutions",
    children: [
      { label: "Embedded Finance (BaaS)", path: "/solutions/embedded-finance" },
      { label: "Treasury & Liquidity Management", path: "/solutions/treasury" },
      {
        label: "Bulk Disbursements (B2B/B2C)",
        path: "/solutions/disbursements",
      },
      { label: "Compliance, KYC/KYB & Risk", path: "/solutions/compliance" },
    ],
  },
  {
    label: "Platform",
    children: [
      { label: "APIs & Documentation", path: "/platform/apis" },
      {
        label: "Integrations & Bank Connectivity",
        path: "/platform/integrations",
      },
      {
        label: "Security, Reliability & Compliance",
        path: "/platform/security",
      },
    ],
  },
  { label: "Industries", path: "/industries" },
  { label: "Pricing", path: "/pricing" },
  { label: "Resources", path: "/resources" },

  {
    label: "Company",
    children: [
      { label: "About", path: "/company/about" },
      { label: "Partners", path: "/company/partners" },
      { label: "Careers", path: "/company/careers" },
    ],
  },
  { label: "Contact", path: "/contact" },
  {
    label: "Legal",
    children: [
      { label: "Privacy", path: "/legal/privacy" },
      { label: "Terms", path: "/legal/terms-of-service" },
      { label: "Compliance", path: "/legal/compliance" },
    ],
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  // 🔹 Shrink navbar on scroll & close dropdown
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      setActiveDropdown(null); // close dropdown on scroll
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔹 Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 🔹 Toggle dropdown click-to-open
  const toggleDropdown = (label: string) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <header
      ref={navRef}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--color-secondary)]/80 backdrop-blur-lg shadow-md py-2"
          : "bg-[var(--color-secondary)] py-4"
      }`}
    >
      <nav className="container mx-auto md:px-2 flex justify-between items-center relative">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo3.png"
            alt="Cignum Solutions"
            width={339}
            height={104}
            priority
            // sizes="(max-width: 440px) 120px, (max-width: 568px) 150px, (max-width: 524px) 100px, 140px"
            className="md:-ml-6 w-36 md:w-44 lg:w-48 h-auto"
          />
        </Link>

        {/* Hamburger (Mobile) */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 mr-4 "
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span
            className={`block h-1 w-6 bg-[var(--color-primary)] rounded transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-1 w-6 bg-[var(--color-primary)] rounded my-1 transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-1 w-6 bg-[var(--color-primary)] rounded transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) =>
            item.children ? (
              <li key={item.label} className="relative">
                <button
                  className="flex items-center text-sm hover:text-[var(--color-primary)] transition-colors"
                  onClick={() => toggleDropdown(item.label)}
                >
                  {item.label}
                  <ChevronDown
                    className={`ml-1 w-4 h-4 transition-transform ${
                      activeDropdown === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {/* Dropdown stays open until clicked outside or toggled */}
                {activeDropdown === item.label && (
                  <ul className="absolute left-0 mt-2 w-60 bg-[var(--color-secondary)] border border-white/10 shadow-lg rounded-md py-2 z-50">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          href={child.path}
                          className="block px-4 py-2 text-sm hover:bg-[var(--color-primary)] hover:text-white transition"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={item.label}>
                <Link
                  href={item.path}
                  className="text-sm hover:text-[var(--color-primary)] transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            )
          )}
          {/* Member Login */}
          <li>
            <Link
              href="https://cignumsolutions.tech/login"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-block md:w-[140px] text-sm px-4 py-2 bg-[var(--color-primary)] text-[var(--color-secondary)] rounded font-semibold hover:bg-[var(--color-primary-dark)] transition "
            >
              Member Login
            </Link>
          </li>
        </ul>

        {/* Mobile nav */}
        {menuOpen && (
          <ul className="absolute top-full left-0 w-full bg-[var(--color-secondary)] shadow-md flex flex-col items-center space-y-2 py-4 md:hidden z-50">
            {navItems.map((item) =>
              item.children ? (
                <li key={item.label} className="w-full text-center">
                  <details className="group">
                    <summary className="cursor-pointer px-4 py-2 text-sm text-white hover:text-[var(--color-primary)] flex justify-center items-center">
                      {item.label}
                      <ChevronDown className="ml-1 w-4 h-4" />
                    </summary>
                    <ul className="flex flex-col mt-2 space-y-1">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <Link
                            href={child.path}
                            className="block px-4 py-2 text-sm hover:bg-[var(--color-primary)] hover:text-white"
                            onClick={() => setMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              ) : (
                <li key={item.label}>
                  <Link
                    href={item.path}
                    className="block px-4 py-2 text-sm hover:text-[var(--color-primary)]"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
            <li>
              <Link
                href="https://cignumsolutions.tech/login"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-sm bg-[var(--color-primary)] text-[var(--color-secondary)] rounded font-semibold hover:bg-[var(--color-primary-dark)] transition"
                onClick={() => setMenuOpen(false)}
              >
                Member Login
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
