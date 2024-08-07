import Link from "next/link";
import { Button } from "./ui/button";

//components
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
    return (
        <header className="py-8 xl:py-12">
            <div className="container mx-auto flex justify-between items-center">

                {/* logo */}
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        bhakuni<span className="dark:text-accent text-accentLight dark:hover:text-accent-hover hover:text-accentLight-hover">.</span>
                    </h1>
                </Link>

                {/* desktop nav */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href="/contact">
                    <Button>
                        Hire me
                    </Button>
                    </Link>
                    <ThemeToggle/>
                </div>

                {/* mobile nav */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    )
}

export default Header;