"use client";

import { siteConfig } from "@/lib/config";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useRef, useState, useEffect } from "react";

interface NavItem {
  id: number;
  name: string;
  href: string;
}

const navs: NavItem[] = siteConfig.nav.links;

export function NavMenu() {
  const ref = useRef<HTMLUListElement>(null);
  const pathname = usePathname();
  const [left, setLeft] = useState(0);
  const [width, setWidth] = useState(0);
  const [isReady, setIsReady] = useState(false);

  // Update indicator position when pathname changes
  useEffect(() => {
    const updateIndicator = () => {
      const activeNavItem = ref.current?.querySelector(
        `[data-href="${pathname}"]`
      )?.parentElement;
      
      if (activeNavItem) {
        const rect = activeNavItem.getBoundingClientRect();
        setLeft(activeNavItem.offsetLeft);
        setWidth(rect.width);
        setIsReady(true);
      }
    };

    // Use setTimeout to ensure DOM is ready
    const timer = setTimeout(updateIndicator, 0);
    
    return () => clearTimeout(timer);
  }, [pathname]);

  // Initialize indicator position on mount
  useEffect(() => {
    const initializeIndicator = () => {
      const activeNavItem = ref.current?.querySelector(
        `[data-href="${pathname}"]`
      )?.parentElement;
      
      if (activeNavItem) {
        const rect = activeNavItem.getBoundingClientRect();
        setLeft(activeNavItem.offsetLeft);
        setWidth(rect.width);
        setIsReady(true);
      }
    };

    // Delay initialization to ensure proper measurement
    const timer = setTimeout(initializeIndicator, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const isLinkActive = (href: string) => {
    return pathname === href;
  };

  return (
    <div className="w-full hidden md:block">
      <ul
        className="relative mx-auto flex w-fit rounded-full h-11 px-2 items-center justify-center"
        ref={ref}
      >
        {navs.map((item) => {
          const isActive = isLinkActive(item.href);
          
          return (
            <li
              key={item.id}
              className={`z-10 cursor-pointer h-full flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                isActive
                  ? "text-primary"
                  : "text-primary/60 hover:text-primary"
              } tracking-tight`}
            >
              <Link 
                href={item.href} 
                data-href={item.href}
                className="w-full h-full flex items-center justify-center"
              >
                {item.name}
              </Link>
            </li>
          );
        })}
        {isReady && (
          <motion.li
            animate={{ left, width }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="absolute inset-0 my-1.5 rounded-full bg-accent/60 border border-[#34D399]"
          />
        )}
      </ul>
    </div>
  );
}