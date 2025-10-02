'use client';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
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
import SlicedText from '@/components/SlicedText';

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
  { href: '#', label: 'Producten', active: true },
  { href: '#leren', label: 'Leren' },
  { href: '#contact', label: 'Contact' },
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
    const [isNavbarHovered, setIsNavbarHovered] = useState(false);
    const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const containerRef = useRef<HTMLElement>(null);
    const router = useRouter();

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
      // Navbar is altijd zichtbaar op FAQ pagina
      setIsVisible(true);
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
        onMouseEnter={() => setIsNavbarHovered(true)}
        onMouseLeave={() => setIsNavbarHovered(false)}
        className={cn(
          'sticky top-0 z-[100] w-full px-4 md:px-6 transition-all duration-300',
          'backdrop-blur border-b',
          isNavbarHovered ? 'bg-white border-white' : 'bg-black border-white',
          className
        )}
        {...props}
      >
        <div className="container mx-auto flex h-16 max-w-screen-2xl items-center gap-4">
          {/* Logo helemaal links */}
          <button
            onClick={(e) => {
              e.preventDefault();
              router.push('/');
            }}
            className={cn(
              "flex items-center transition-all duration-700 cursor-pointer",
              isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
            )}
          >
            <Image
              src={isNavbarHovered ? "/Rauw_logo_witzwart.png" : "/Rauw_logo.jpg"}
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
                <div className={cn(
                  "flex gap-0 transition-all duration-700",
                  isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
                )}>
                  {navigationLinks.map((link, index) => (
                    <div key={index} className="relative">
                      {link.label === 'Contact' ? (
                        // Contact is een directe link
                        <a
                          href={link.href}
                          className={cn(
                            "inline-flex h-9 w-max items-center justify-center rounded-md px-2 py-2 text-sm font-medium transition-colors cursor-pointer bg-transparent",
                            isNavbarHovered
                              ? "text-black hover:text-black/70"
                              : "text-white/80 hover:bg-white hover:text-black",
                            link.active && !isNavbarHovered && "text-white"
                          )}
                        >
                          {link.label}
                        </a>
                      ) : (
                        // Andere items hebben een dropdown menu
                        <>
                          <button
                            onClick={() => setOpenMenuIndex(openMenuIndex === index ? null : index)}
                            className={cn(
                              "inline-flex h-9 w-max items-center justify-center rounded-md px-2 py-2 text-sm font-medium transition-colors cursor-pointer bg-transparent",
                              isNavbarHovered
                                ? "text-black hover:text-black/70"
                                : "text-white/80 hover:bg-white hover:text-black",
                              link.active && !isNavbarHovered && "text-white"
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
                        </>
                      )}
                      {link.label !== 'Contact' && openMenuIndex === index && (
                        <>
                          {/* Overlay */}
                          <div
                            className="fixed inset-0 z-40"
                            onClick={() => setOpenMenuIndex(null)}
                          />
                          {/* Mega Menu - Full Width */}
                          <div
                            className={cn(
                              "fixed left-0 right-0 top-[64px] shadow-xl z-50 border-t",
                              isNavbarHovered ? "bg-white text-black border-black" : "bg-black text-white border-white/80"
                            )}
                            style={{
                              width: '100vw',
                              animation: 'slideDown 0.3s ease-out forwards'
                            }}
                          >
                            <div className="relative p-8">
                              {link.label === 'Leren' ? (
                                // Leren menu - zonder submenu
                                <>
                                  {/* Verticale lijn */}
                                  <div className={cn("absolute left-[20%] top-4 bottom-4 w-[1px]", isNavbarHovered ? "bg-black" : "bg-white")} />

                                  {/* Links van de streep */}
                                  <div className="absolute left-8 bottom-8">
                                    <h4 className="text-sm font-semibold mb-2">Over Rauw Collectief</h4>
                                    <a href="#" className={cn("text-sm", isNavbarHovered ? "text-black/70 hover:text-black" : "text-white/70 hover:text-white")}>Ons verhaal</a>
                                  </div>

                                  {/* Rechts van de streep - zonder hover submenu */}
                                  <div className="pl-[22%] flex gap-8">
                                    <div>
                                      <ul className="space-y-0 group" style={{ fontFamily: 'SupremeLL-Bold, sans-serif', fontSize: '2rem', fontWeight: 700, lineHeight: 1.2 }}>
                                        <li>
                                          <button
                                            onClick={(e) => {
                                              e.preventDefault();
                                              router.push('/over-ons');
                                            }}
                                            className={cn(
                                              "transition-opacity duration-200 hover:underline cursor-pointer",
                                              isNavbarHovered ? "text-black" : "text-white"
                                            )}
                                          >
                                            Over ons
                                          </button>
                                        </li>
                                        <li>
                                          <a
                                            href="#"
                                            className={cn(
                                              "transition-opacity duration-200 hover:underline",
                                              isNavbarHovered ? "text-black" : "text-white"
                                            )}
                                          >
                                            Tafel ontwerpen
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="#"
                                            className={cn(
                                              "transition-opacity duration-200 hover:underline",
                                              isNavbarHovered ? "text-black" : "text-white"
                                            )}
                                          >
                                            Review
                                          </a>
                                        </li>
                                        <li>
                                          <button
                                            onClick={(e) => {
                                              e.preventDefault();
                                              router.push('/faq');
                                            }}
                                            className={cn(
                                              "transition-opacity duration-200 hover:underline cursor-pointer",
                                              isNavbarHovered ? "text-black" : "text-white"
                                            )}
                                          >
                                            FAQ
                                          </button>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </>
                              ) : (
                                // Producten en Contact menu
                                <>
                                  {/* Verticale lijn */}
                                  <div className={cn("absolute left-[20%] top-4 bottom-4 w-[1px]", isNavbarHovered ? "bg-black" : "bg-white")} />

                                  {/* Links van de streep */}
                                  <div className="absolute left-8 bottom-8">
                                    <h4 className="text-sm font-semibold mb-2">Clearance & Ready-to-Ship</h4>
                                    <a href="#" className={cn("text-sm", isNavbarHovered ? "text-black/70 hover:text-black" : "text-white/70 hover:text-white")}>Custom Inquiries</a>
                                  </div>

                                  {/* Rechts van de streep */}
                                  <div
                                    className="pl-[22%] flex gap-8"
                                    onMouseLeave={() => setHoveredItem(null)}
                                  >
                                    <div>
                                      <ul className="space-y-0 group" style={{ fontFamily: 'SupremeLL-Bold, sans-serif', fontSize: '2rem', fontWeight: 700, lineHeight: 1.2 }}>
                                        <li>
                                          <a
                                            href="#"
                                            className={cn(
                                              "transition-opacity duration-200",
                                              hoveredItem === 'Bladen' && "underline",
                                              hoveredItem && hoveredItem !== 'Bladen' ? "opacity-30" : "",
                                              isNavbarHovered ? "text-black" : "text-white"
                                            )}
                                            onMouseEnter={() => setHoveredItem('Bladen')}
                                          >
                                            Bladen
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="#"
                                            className={cn(
                                              "transition-opacity duration-200",
                                              hoveredItem === 'Onderstel' && "underline",
                                              hoveredItem && hoveredItem !== 'Onderstel' ? "opacity-30" : "",
                                              isNavbarHovered ? "text-black" : "text-white"
                                            )}
                                            onMouseEnter={() => setHoveredItem('Onderstel')}
                                          >
                                            Onderstel
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="#"
                                            className={cn(
                                              "transition-opacity duration-200",
                                              hoveredItem === 'Meubels' && "underline",
                                              hoveredItem && hoveredItem !== 'Meubels' ? "opacity-30" : "",
                                              isNavbarHovered ? "text-black" : "text-white"
                                            )}
                                            onMouseEnter={() => setHoveredItem('Meubels')}
                                          >
                                            Meubels
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="#"
                                            className={cn(
                                              "transition-opacity duration-200",
                                              hoveredItem === 'Diversen' && "underline",
                                              hoveredItem && hoveredItem !== 'Diversen' ? "opacity-30" : "",
                                              isNavbarHovered ? "text-black" : "text-white"
                                            )}
                                            onMouseEnter={() => setHoveredItem('Diversen')}
                                          >
                                            Diversen
                                          </a>
                                        </li>
                                      </ul>
                                    </div>

                                    {/* Verticale streep en submenu */}
                                    {hoveredItem && (
                                      <div className="flex gap-8 pl-8">
                                        <div className={cn("w-[1px] h-full", isNavbarHovered ? "bg-black" : "bg-white")} />
                                        <div>
                                          {hoveredItem === 'Bladen' && (
                                            <>
                                              <h3 className={cn("font-bold mb-4 text-base", "text-black")}>Onze bladen</h3>
                                              <ul className="space-y-2 text-sm">
                                                <li><a href="#" className={cn("hover:underline", "text-black/70 hover:text-black")}>Eiken bladen</a></li>
                                                <li><a href="#" className={cn("hover:underline", "text-black/70 hover:text-black")}>Notenhouten bladen</a></li>
                                                <li><a href="#" className={cn("hover:underline", "text-black/70 hover:text-black")}>Betonnen bladen</a></li>
                                              </ul>
                                            </>
                                          )}
                                          {hoveredItem === 'Onderstel' && (
                                            <>
                                              <h3 className={cn("font-bold mb-4 text-base", "text-black")}>Toffe onderstellen</h3>
                                              <ul className="space-y-2 text-sm">
                                                <li><a href="#" className={cn("hover:underline", "text-black/70 hover:text-black")}>Stalen onderstel</a></li>
                                                <li><a href="#" className={cn("hover:underline", "text-black/70 hover:text-black")}>Houten onderstel</a></li>
                                                <li><a href="#" className={cn("hover:underline", "text-black/70 hover:text-black")}>Custom onderstel</a></li>
                                              </ul>
                                            </>
                                          )}
                                          {hoveredItem === 'Meubels' && (
                                            <>
                                              <h3 className={cn("font-bold mb-4 text-base", "text-black")}>Kekke meubels</h3>
                                              <ul className="space-y-2 text-sm">
                                                <li>
                                                  <button
                                                    onClick={(e) => {
                                                      e.preventDefault();
                                                      router.push('/tafels');
                                                    }}
                                                    className={cn("hover:underline cursor-pointer", "text-black/70 hover:text-black")}
                                                  >
                                                    Tafels
                                                  </button>
                                                </li>
                                                <li><a href="#" className={cn("hover:underline", "text-black/70 hover:text-black")}>Kasten</a></li>
                                                <li><a href="#" className={cn("hover:underline", "text-black/70 hover:text-black")}>Stoelen</a></li>
                                              </ul>
                                            </>
                                          )}
                                          {hoveredItem === 'Diversen' && (
                                            <>
                                              <h3 className={cn("font-bold mb-4 text-base", "text-black")}>Diverse Diversen</h3>
                                              <ul className="space-y-2 text-sm">
                                                <li><a href="#" className={cn("hover:underline", "text-black/70 hover:text-black")}>Accessoires</a></li>
                                                <li><a href="#" className={cn("hover:underline", "text-black/70 hover:text-black")}>Verlichting</a></li>
                                                <li><a href="#" className={cn("hover:underline", "text-black/70 hover:text-black")}>Decoratie</a></li>
                                              </ul>
                                            </>
                                          )}
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </>
                              )}
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
            "flex items-center gap-3 transition-all duration-700",
            isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
          )}>
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "text-sm font-medium transition-colors",
                isNavbarHovered
                  ? "text-black hover:bg-black/10"
                  : "text-white hover:bg-white/10"
              )}
              onClick={(e) => {
                e.preventDefault();
                if (onSignInClick) onSignInClick();
              }}
            >
              {signInText}
            </Button>
            <Button
              size="sm"
              className={cn(
                "text-sm font-medium px-4 h-9 rounded-md shadow-sm transition-colors",
                isNavbarHovered
                  ? "bg-black text-white hover:bg-black/90"
                  : "bg-white text-black hover:bg-white/90"
              )}
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
