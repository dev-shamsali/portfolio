"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/about" },
    { name: "Contact Me", path: "/contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 w-full backdrop-blur-lg bg-black bg-opacity-90 border-b border-[#001f5b]/30 shadow-lg shadow-[#001f5b]/10 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          className="text-[#4d80e4] text-2xl font-bold cursor-pointer"
          whileHover={{ scale: 1.1 }}
        >
          <Link href="/">Shams Ali</Link>
        </motion.div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 font-semibold text-lg text-[#e8eaf6]">
          {navLinks.map((link, index) => (
            <motion.li
              key={index}
              className={`relative cursor-pointer transition ${
                pathname === link.path
                  ? "text-[#4d80e4]"
                  : "text-[#e8eaf6] hover:text-[#4d80e4]"
              }`}
              whileHover={{ scale: 1.1 }}
            >
              <Link href={link.path}>{link.name}</Link>
              {pathname === link.path && (
                <motion.div
                  className="absolute left-0 bottom-0 w-full h-1 bg-blue-800"
                  layoutId="underline"
                />
              )}
            </motion.li>
          ))}
        </ul>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <X className="text-[#4d80e4]" /> : <Menu className="text-[#4d80e4]" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="md:hidden bg-black bg-opacity-95 backdrop-blur-lg border-t border-[#001f5b]/30"
          >
            <ul className="flex flex-col space-y-4 py-4 px-6 text-[#e8eaf6]">
              {navLinks.map((link, index) => (
                <motion.li
                  key={index}
                  className={`cursor-pointer transition ${
                    pathname === link.path
                      ? "text-[#4d80e4]"
                      : "text-[#e8eaf6] hover:text-[#4d80e4]"
                  }`}
                  whileHover={{ scale: 1.1 }}
                  onClick={toggleMenu}
                >
                  <Link href={link.path}>{link.name}</Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
