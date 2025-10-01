'use client';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';

const Logo = (props: React.SVGAttributes<SVGElement>) => {
  return (
    <svg width='1em' height='1em' viewBox='0 0 324 323' fill='currentColor' xmlns='http://www.w3.org/2000/svg' {...props}>
      <rect
        x='88.1023'
        y='144.792'
        width='151.802'
        height='36.5788'
        rx='18.2894'
        transform='rotate(-38.5799 88.1023 144.792)'
        fill='currentColor'
      />
      <rect
        x='85.3459'
        y='244.537'
        width='151.802'
        height='36.5788'
        rx='18.2894'
        transform='rotate(-38.5799 85.3459 244.537)'
        fill='currentColor'
      />
    </svg>
  );
};

const HamburgerIcon = ({ className, ...props }: React.SVGAttributes<SVGElement>) => (
  <svg
    className={cn('pointer-events-none', className)}
    width={16}
    height={16}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 12L20 12"
      className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
    />
    <path
      d="M4 12H20"
      className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
    />
    <path
      d="M4 12H20"
      className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
    />
  </svg>
);

export interface NavLink {
  href: string;
  label: string;
  active?: boolean;
}

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode;
  logoHref?: string;
  navigationLinks?: NavLink[];
  signInText?: string;
  signInHref?: string;
  ctaText?: string;
  ctaHref?: string;
  onSignInClick?: () => void;
  onCtaClick?: () => void;
}

const defaultNavigationLinks: NavLink[] = [
  { href: '#', label: 'Home', active: true },
  { href: '#features', label: 'Features' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#about', label: 'About' },
];

export const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  (
    {
      className,
      logo = <Logo />,
      logoHref = '#',
      navigationLinks = defaultNavigationLinks,
      signInText = 'Sign In',
      signInHref = '#signin',
      ctaText = 'Get Started',
      ctaHref = '#get-started',
      onSignInClick,
      onCtaClick,
      ...props
    },
    ref
  ) => {
    const [isMobile, setIsMobile] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isLogoHovered, setIsLogoHovered] = useState(false);
    const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
      const checkWidth = () => {
        if (containerRef.current) {
          const width = containerRef.current.offsetWidth;
          setIsMobile(width < 768);
        }
      };

      checkWidth();
      const resizeObserver = new ResizeObserver(checkWidth);
      if (containerRef.current) {
        resizeObserver.observe(containerRef.current);
      }

      return () => {
        resizeObserver.disconnect();
      };
    }, []);

    useEffect(() => {
      const handleScroll = () => {
        // Navbar wordt zichtbaar na 200px scrollen
        setIsVisible(window.scrollY > 200);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const combinedRef = React.useCallback((node: HTMLElement | null) => {
      containerRef.current = node;
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    }, [ref]);

    return (
      <header
        ref={combinedRef}
        className={cn(
          'sticky z-[100] w-full px-4 md:px-6 transition-all duration-300',
          isVisible ? 'top-0 bg-black/95 backdrop-blur border-b border-white/80' : 'top-16',
          className
        )}
        {...props}
      >
        <div className="container mx-auto flex h-16 max-w-screen-2xl items-center gap-4">
          {/* Logo helemaal links */}
          <button
            onClick={(e) => e.preventDefault()}
            onMouseEnter={() => setIsLogoHovered(true)}
            onMouseLeave={() => setIsLogoHovered(false)}
            className={cn(
              "flex items-center transition-all duration-300 cursor-pointer",
              isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
            )}
          >
            <Image
              src={isLogoHovered ? "/Rauw_logo_witzwart.png" : "/Rauw_logo.jpg"}
              alt="Rauw Collectief"
              width={180}
              height={90}
              className="h-16 w-auto"
            />
          </button>

          <div className="flex-[0.85]"></div>
          <div className="flex items-center gap-2">
            {isMobile && (
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    className="group h-9 w-9 hover:bg-white/10"
                    variant="ghost"
                    size="icon"
                  >
                    <HamburgerIcon />
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="start" className="w-48 p-2">
                  <NavigationMenu className="max-w-none">
                    <NavigationMenuList className="flex-col items-start gap-1">
                      {navigationLinks.map((link, index) => (
                        <NavigationMenuItem key={index} className="w-full">
                          <button
                            onClick={(e) => e.preventDefault()}
                            className={cn(
                              "flex w-full items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-white/10 cursor-pointer",
                              link.active
                                ? "bg-white/10 text-white"
                                : "text-white/80"
                            )}
                          >
                            {link.label}
                          </button>
                        </NavigationMenuItem>
                      ))}
                    </NavigationMenuList>
                  </NavigationMenu>
                </PopoverContent>
              </Popover>
            )}
            <div className="flex items-center gap-6">
              {!isMobile && (
                <div className="flex gap-0">
                  {navigationLinks.map((link, index) => (
                    <div key={index} className="relative">
                      <button
                        onClick={() => setOpenMenuIndex(openMenuIndex === index ? null : index)}
                        className={cn(
                          "inline-flex h-9 w-max items-center justify-center rounded-md px-2 py-2 text-sm font-medium transition-colors hover:bg-white hover:text-black cursor-pointer bg-transparent",
                          link.active
                            ? "text-white"
                            : "text-white/80 hover:text-black"
                        )}
                      >
                        {link.label}
                        <svg
                          className={cn(
                            "ml-1 h-3 w-3 transition-transform duration-300",
                            openMenuIndex === index ? "rotate-180" : ""
                          )}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {openMenuIndex === index && (
                        <>
                          {/* Overlay */}
                          <div
                            className="fixed inset-0 z-40"
                            onClick={() => setOpenMenuIndex(null)}
                          />
                          {/* Mega Menu */}
                          <div className="absolute top-full right-0 mt-2 bg-white text-black shadow-xl p-8 min-w-[800px] rounded-md border z-50">
                            <div className="grid grid-cols-4 gap-8">
                              <div>
                                <h3 className="font-semibold mb-4 text-base">Audio & Vinyl</h3>
                                <ul className="space-y-2 text-sm">
                                  <li><a href="#" className="hover:underline text-black/70 hover:text-black">Turntables</a></li>
                                  <li><a href="#" className="hover:underline text-black/70 hover:text-black">Speakers</a></li>
                                  <li><a href="#" className="hover:underline text-black/70 hover:text-black">Amplifiers</a></li>
                                </ul>
                              </div>
                              <div>
                                <h3 className="font-semibold mb-4 text-base">Living Room</h3>
                                <ul className="space-y-2 text-sm">
                                  <li><a href="#" className="hover:underline text-black/70 hover:text-black">Sofas</a></li>
                                  <li><a href="#" className="hover:underline text-black/70 hover:text-black">Tables</a></li>
                                  <li><a href="#" className="hover:underline text-black/70 hover:text-black">Chairs</a></li>
                                </ul>
                              </div>
                              <div>
                                <h3 className="font-semibold mb-4 text-base">Workspace</h3>
                                <ul className="space-y-2 text-sm">
                                  <li><a href="#" className="hover:underline text-black/70 hover:text-black">Desks</a></li>
                                  <li><a href="#" className="hover:underline text-black/70 hover:text-black">Office Chairs</a></li>
                                  <li><a href="#" className="hover:underline text-black/70 hover:text-black">Storage</a></li>
                                </ul>
                              </div>
                              <div>
                                <h3 className="font-semibold mb-4 text-base">USM</h3>
                                <ul className="space-y-2 text-sm">
                                  <li><a href="#" className="hover:underline text-black/70 hover:text-black">Haller System</a></li>
                                  <li><a href="#" className="hover:underline text-black/70 hover:text-black">Modular Furniture</a></li>
                                  <li><a href="#" className="hover:underline text-black/70 hover:text-black">Custom Solutions</a></li>
                                </ul>
                              </div>
                            </div>
                            <div className="mt-8 pt-6 border-t border-black/10 flex gap-8">
                              <div>
                                <h4 className="text-sm font-semibold mb-2">Need help?</h4>
                                <a href="#" className="text-sm text-black/70 hover:text-black underline">Reach Out!</a>
                              </div>
                              <div>
                                <h4 className="text-sm font-semibold mb-2">Clearance & Ready-to-Ship</h4>
                                <a href="#" className="text-sm text-black/70 hover:text-black">Custom Inquiries</a>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className={cn(
            "flex items-center gap-3 transition-all duration-300",
            isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
          )}>
            <Button
              variant="ghost"
              size="sm"
              className="text-sm font-medium hover:bg-white/10 text-white"
              onClick={(e) => {
                e.preventDefault();
                if (onSignInClick) onSignInClick();
              }}
            >
              {signInText}
            </Button>
            <Button
              size="sm"
              className="text-sm font-medium px-4 h-9 rounded-md shadow-sm"
              onClick={(e) => {
                e.preventDefault();
                if (onCtaClick) onCtaClick();
              }}
            >
              {ctaText}
            </Button>
          </div>
        </div>
      </header>
    );
  }
);
Navbar.displayName = 'Navbar';

export { Logo, HamburgerIcon };
