"use client"

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Add scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`sticky top-0 transition-all duration-300 ${
            isScrolled ? "bg-white/95 dark:bg-[#232323]/95 shadow-md backdrop-blur-sm" : "bg-white dark:bg-[#232323]"
        } text-base font-medium relative z-30`}>
            <div className="container mx-auto py-2 flex justify-between items-center min-h-20 max-w-7xl px-5 lg:px-0">
                <div className="flex items-center">
                    <Link href="/" legacyBehavior>
                        <a>
                            <Image src="/logo.png" alt="My Logo" width={130} height={50} className="block" />
                        </a>
                    </Link>
                </div>
                
                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-6">
                    <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-300 font-medium transition-colors">Home</Link>
                    <Link href="/projects" className="hover:text-blue-600 dark:hover:text-blue-300 font-medium transition-colors">Projects</Link>
                    <Link href="/skills" className="hover:text-blue-600 dark:hover:text-blue-300 font-medium transition-colors">Skills</Link>
                    <Link href="/contact" className="hover:text-blue-600 dark:hover:text-blue-300 font-medium transition-colors">Contact</Link>
                </div>
                
                {/* Mobile menu button */}
                <button 
                    className="md:hidden p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>
            </div>
            
            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white dark:bg-[#232323] py-4 px-5 shadow-lg">
                    <div className="flex flex-col space-y-4">
                        <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-300 font-medium">Home</Link>
                        <Link href="/projects" className="hover:text-blue-600 dark:hover:text-blue-300 font-medium">Projects</Link>
                        <Link href="/skills" className="hover:text-blue-600 dark:hover:text-blue-300 font-medium">Skills</Link>
                        <Link href="/contact" className="hover:text-blue-600 dark:hover:text-blue-300 font-medium">Contact</Link>
                    </div>
                </div>
            )}
        </nav>
    );
}