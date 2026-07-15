'use client'
import { useState } from 'react'
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import overlogo from "../public/overa.png";

type SubItem = { label: string; href?: string; children?: SubItem[] }
type MenuItem = { label: string; href?: string; children?: SubItem[] }

const PRODUCT_MENU: MenuItem[] = [
    {
        label: 'Insurance',
        href: '/products/insurance',
        children: [
            { label: 'General Insurance', href: '/products/insurance?category=General Insurance' },
            { label: 'Health Insurance', href: '/products/insurance?category=Health Insurance' },
            { label: 'Corporate Insurance', href: '/products/insurance?category=Corporate Insurance' },
            { label: 'Life Insurance', href: '/products/insurance?category=Life Insurance' },
        ],
    },
    {
        label: 'Mutual Funds',
        href: '/products/mutual-funds',

    },
    {
        label: 'Loans',
        href: '/products/loans',

    },
    {
        label: 'Stock Broking',
        href: '/products/stock-broking',

    },
    {
        label: 'Bonds',
        href: '/products/bonds',
    },
    {
        label: 'Fixed Deposits',
        href: '/products/fixed-deposits',

    },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [active, setActive] = useState<string | null>(null)
    const [activeSub, setActiveSub] = useState<string | null>(null)
    const [hoveredNav, setHoveredNav] = useState<string | null>(null)

    const navItems = [
        { label: "About Us", href: "/about" },
        { label: "Products", href: "#", hasDropdown: true },
        { label: "Calculator", href: "/calculator/emi" },
    ]
    return (
        <nav className="sticky top-0 z-100 w-full">
            {/* Glass navbar backdrop */}
            <div className="absolute inset-0 bg-neutral-950/80 backdrop-blur-xl">
                {/* Glowing bottom border */}
                <div className="absolute bottom-0 left-0 w-full h-[1px] 
                  bg-gradient-to-r from-neutral-600/20 via-zinc-300 to-neutral-600/20" />
            </div>

            <div className="relative mx-auto max-w-7xl h-24 px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image 
                        src={overlogo} 
                        alt="Overa Logo" 
                        priority 
                        className="h-16 w-auto object-contain"
                    />
                </Link>
                {/* Center nav */}
                <div
                    className="flex items-center gap-1"
                    onMouseLeave={() => setHoveredNav(null)}
                >
                    {navItems.map((item) => (
                        <div
                            key={item.label}
                            className="relative"
                            onMouseEnter={() => {

                                setHoveredNav(item.label)
                                if (item.hasDropdown) setIsOpen(true)


                            }}
                            onMouseLeave={() => {
                                if (item.hasDropdown) {
                                    setIsOpen(false)
                                    setActive(null)
                                    setActiveSub(null)
                                }
                            }}
                        >
                            <Link
                                href={item.href || "#"}
                                className="relative px-4 py-2 text-base font-bold text-neutral-300 hover:text-white transition z-10 block"
                            >
                                {hoveredNav === item.label && (
                                    <motion.span
                                        layoutId="nav-pill"
                                        className="absolute inset-0 bg-neutral-800 rounded-full"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10">{item.label}</span>
                            </Link>

                            {/* Product Offering Dropdown */}
                            {item.hasDropdown && (
                                <div
                                    className={`absolute left-0 top-full mt-3 w-64 transition-all duration-300 ease-out ${isOpen
                                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                                        : 'opacity-0 -translate-y-2 pointer-events-none'
                                        }`}
                                >
                                    {/* Hover buffer */}
                                    <div className="absolute -inset-6" />

                                    <div className="relative bg-neutral-900/95 backdrop-blur-xl border border-neutral-700/50 rounded-xl shadow-2xl p-2">
                                        {PRODUCT_MENU.map((menuItem) => {
                                            const hasChildren = !!menuItem.children
                                            const isActive = active === menuItem.label

                                            return (
                                                <div
                                                    key={menuItem.label}
                                                    className="relative"
                                                    onMouseEnter={() => setActive(hasChildren ? menuItem.label : null)}
                                                    onMouseLeave={() => setActiveSub(null)}
                                                >
                                                    {/* Menu item */}
                                                    <Link
                                                        href={menuItem.href || "#"}
                                                        className="block relative px-4 py-2.5 rounded-md text-sm text-neutral-300 hover:text-white hover:bg-neutral-800/60 transition-all"
                                                    >
                                                        {/* Text wrapper with padding animation */}
                                                        <span
                                                            className={`flex items-center transition-all duration-300 ease-out ${isActive ? 'pl-4' : 'pl-0'
                                                                }`}
                                                        >
                                                            {menuItem.label}
                                                        </span>

                                                        {/* Horizontal indicator */}
                                                        <span
                                                            className={`absolute top-1/2 left-2 h-0.5 bg-neutral-300 rounded transition-all duration-300 ease-out ${isActive ? 'w-4' : 'w-0'
                                                                }`}
                                                            style={{ transform: 'translateY(-50%)' }}
                                                        />
                                                    </Link>

                                                    {/* Submenu if children */}
                                                    {hasChildren && (
                                                        <div
                                                            className={`absolute left-full top-0 ml-3 w-52 transition-all duration-300 ease-out ${isActive
                                                                ? 'opacity-100 translate-x-0 pointer-events-auto'
                                                                : 'opacity-0 -translate-x-3 pointer-events-none'
                                                                }`}
                                                            onMouseEnter={() => setActiveSub(menuItem.label)}
                                                            onMouseLeave={() => setActiveSub(null)}
                                                        >
                                                            <div className="absolute -inset-6" /> {/* Hover buffer */}
                                                            <div className="relative bg-neutral-900/95 backdrop-blur-xl border border-neutral-700/50 rounded-xl shadow-2xl p-2">
                                                                {menuItem.children!.map((child) => (
                                                                    <Link
                                                                        href={child.href || "#"}
                                                                        key={child.label}
                                                                        className="block px-4 py-2.5 text-sm text-neutral-300 rounded-md hover:text-white hover:bg-neutral-800/60 transition-all"
                                                                    >
                                                                        {child.label}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Contact Us button */}
                <Link href="/contact" className="relative rounded-3xl py-2 border border-neutral-700 flex justify-center items-center gap-3 w-36 overflow-hidden cursor-pointer group">
                    {/* Top gradient line */}
                    <div className="absolute inset-x-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Bottom gradient line */}
                    <div className="absolute inset-x-0 bottom-0 h-px w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Button text */}
                    <div className="w-full text-neutral-300 flex items-center justify-center text-sm group-hover:text-white transition-colors">Contact Us</div>
                </Link>
            </div>
        </nav>
    )
}
