import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';

import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';

import { ModeToggle } from '@/components/mode-toggle';
import { buttonVariants } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

import Logo from '../Logo';

interface RouteProps {
  href: string;
  label: string;
}

const routeList: Array<RouteProps> = [
  { href: '/#benefits', label: 'Benefits' },
  { href: '/#how-it-works', label: 'How It Works' },
  { href: '/#team', label: 'Team' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/blog', label: 'Blogs' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');

  const navigate = useNavigate();
  const location = useLocation();

  /** Smooth scroll helper */
  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  /** Handles clicks for section links */
  const handleNavClick = (e: React.MouseEvent, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const targetId = href.replace('/#', '');

      if (location.pathname !== '/') {
        // go to home first
        navigate('/');
        // delay to wait for DOM render
        setTimeout(() => {
          scrollToId(targetId);
        }, 100);
      } else {
        scrollToId(targetId);
      }
      setIsOpen(false);
    }
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 150);
      setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up');

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header
      animate={{ y: scrollDirection === 'up' ? 0 : 0 }}
      initial={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        'fixed top-0 z-40 w-full border border-b-[1px] border-border/20 bg-transparent backdrop-blur-md',
        { 'bg-background/30': isScrolled }
      )}
    >
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="max-container flex h-20 w-screen justify-between">
          <NavigationMenuItem className="-ml-2 flex font-bold sm:-ml-5">
            <Logo />
          </NavigationMenuItem>

          {/* mobile */}
          <div className="flex md:hidden">
            <ModeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu
                  className="flex h-5 w-5 md:hidden"
                  onClick={() => {
                    setIsOpen(true);
                  }}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={'left'}>
                <SheetHeader className="items-start">
                  <Logo imgClassName="size-14" />
                </SheetHeader>

                <nav className="mt-4 flex flex-col items-start gap-2">
                  {routeList.map(({ href, label }) => (
                    <Link
                      key={label}
                      className={buttonVariants({ variant: 'ghost' })}
                      to={href}
                      onClick={(e) => {
                        handleNavClick(e, href);
                      }}
                    >
                      {label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* desktop */}
          <nav className="hidden gap-2 md:flex">
            {routeList.map(({ href, label }) => (
              <Link
                key={label}
                className={`text-[17px] ${buttonVariants({ variant: 'ghost' })}`}
                to={href}
                onClick={(e) => {
                  handleNavClick(e, href);
                }}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="hidden gap-2 md:flex">
            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </motion.header>
  );
};
