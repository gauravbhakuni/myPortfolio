"use client";

import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import ThemeToggle from "./ThemeToggle";

const links = [
  {
    name: 'home',
    path: '/'
  },
  {
    name: 'resume',
    path: '/resume'
  },
  {
    name: 'work',
    path: '/work'
  },
  {
    name: 'contact',
    path: '/contact'
  },
]

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] dark:text-accent text-accentLight" />
      </SheetTrigger>
      
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
          <h1 className="text-4xl fonst-semibold">
            bhakuni<span className="dark:text-accent text-accentLight dark:hover:text-accent-hover hover:text-accentLight-hover">.</span>
          </h1>
          </Link>
        </div>

        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <Link href={link.path} key={index} className={`${link.path === pathname && "dark:text-accent text-accentLight border-b-2 dark:border-accent border-accentLight"} text-xl capitalize font-medium transition-all`}>
                {link.name}
              </Link>
            );
          })}
          <ThemeToggle />
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav