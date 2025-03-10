import { useEffect, useState } from 'react';
import { Link } from 'react-router';

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
  {
    href: '/#benefits',
    label: 'Benefits',
  },
  {
    href: '/#how-it-works',
    label: 'How It Works',
  },
  {
    href: '/#team',
    label: 'Team',
  },
  {
    href: '/#faq',
    label: 'FAQ',
  },
  {
    href: '/blog',
    label: 'Blogs',
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY > 100) {
        setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up');
      } else {
        setScrollDirection('up');
      }

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
      // animate={{ y: scrollDirection === "up" ? 0 : -100 }}
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
                  {routeList.map(({ href, label }: RouteProps) => (
                    <Link
                      key={label}
                      className={buttonVariants({ variant: 'ghost' })}
                      to={href}
                      onClick={(e) => {
                        if (href.startsWith('/#')) {
                          e.preventDefault(); // Prevent default navigation
                          const targetId = href.replace('/#', ''); // Extract the section ID
                          const targetElement = document.getElementById(targetId);

                          if (targetElement) {
                            targetElement.scrollIntoView({ behavior: 'smooth' });
                          }
                        }
                        setIsOpen(false);
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
            {routeList.map((route: RouteProps, i) => (
              <Link
                key={i}
                // rel="noreferrer noopener"
                to={route.href}
                className={`text-[17px] ${buttonVariants({
                  variant: 'ghost',
                })}`}
                onClick={(e) => {
                  if (route.href.startsWith('/#')) {
                    e.preventDefault(); // Prevent default navigation
                    const targetId = route.href.replace('/#', ''); // Extract the section ID
                    const targetElement = document.getElementById(targetId);

                    if (targetElement) {
                      targetElement.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }}
              >
                {route.label}
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
