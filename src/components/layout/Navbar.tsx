import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';

import { ModeToggle } from '@/components/mode-toggle';
import { buttonVariants } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

import Logo from '../Logo';

interface RouteProps {
  href: string;
  label: string;
}

const routeList: Array<RouteProps> = [
  {
    href: '/#services',
    label: 'Services',
  },
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
        'fixed top-0 z-40 w-full border border-b-[1px] border-border/20 bg-transparent backdrop-blur',
        { 'bg-background/95': isScrolled }
      )}
    >
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container flex h-20 w-screen justify-between">
          <NavigationMenuItem className="-ml-5 flex font-bold">
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
                <SheetHeader>
                  <SheetTitle className="text-xl font-bold">Fact Digi</SheetTitle>
                </SheetHeader>
                <nav className="mt-4 flex flex-col items-center justify-center gap-2">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <a
                      key={label}
                      className={buttonVariants({ variant: 'ghost' })}
                      href={href}
                      rel="noreferrer noopener"
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    >
                      {label}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* desktop */}
          <nav className="hidden gap-2 md:flex">
            {routeList.map((route: RouteProps, i) => (
              <a
                key={i}
                href={route.href}
                rel="noreferrer noopener"
                className={`text-[17px] ${buttonVariants({
                  variant: 'ghost',
                })}`}
              >
                {route.label}
              </a>
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
