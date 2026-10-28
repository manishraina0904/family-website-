import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Info, Users, Image, Calendar, Mail, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/', icon: Home },
    { label: 'About Us', href: '/about', icon: Info },
    { label: 'Family', href: '/family', icon: Users },
    { label: 'Gallery', href: '/gallery', icon: Image },
    { label: 'Calendar', href: '/calendar', icon: Calendar },
    { label: 'Contact', href: '/contact', icon: Mail },
  ];

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground antialiased">
      {/* Sticky Header */}
      <header className="bg-white/95 dark:bg-card/95 backdrop-blur-md border-b border-border sticky top-0 z-50 transition-all duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center space-x-2.5 sm:space-x-3 group min-w-0"
              aria-label="The Raina Family Home"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-primary rounded-xl flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 flex-shrink-0">
                <span className="text-primary-foreground font-black text-base sm:text-lg">R</span>
              </div>
              <div className="truncate">
                <span className="font-bold text-base sm:text-xl text-foreground transition-colors group-hover:text-primary block truncate">
                  The Raina Family
                </span>
                <span className="text-[10px] sm:text-xs text-muted-foreground block -mt-1 hidden xs:block">
                  Love • Laughter • Memories
                </span>
              </div>
            </Link>

            {/* Desktop / Tablet Landscape Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={cn(
                      'flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200',
                      isActive
                        ? 'text-primary bg-primary/10 shadow-sm'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/70'
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Right Side: Family Avatar & Mobile Menu Toggle */}
            <div className="flex items-center gap-2 sm:gap-3">
              <Link
                to="/family"
                className="flex items-center gap-2 p-1 rounded-full hover:ring-2 hover:ring-primary/40 transition-all"
                title="View Family Members"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-primary/10 border-2 border-primary/20 overflow-hidden flex items-center justify-center text-sm shadow-sm">
                  👨‍👩‍👧‍👦
                </div>
              </Link>

              {/* Hamburger Button (shown on mobile and tablet) */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/80 focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-foreground" />
                ) : (
                  <Menu className="w-6 h-6 text-foreground" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Drawer & Dropdown */}
        <div
          className={cn(
            'lg:hidden border-t border-border bg-background/98 backdrop-blur-xl transition-all duration-300 ease-in-out overflow-hidden',
            mobileMenuOpen ? 'max-h-[480px] opacity-100 shadow-xl' : 'max-h-0 opacity-0 pointer-events-none'
          )}
        >
          <div className="px-4 py-3 sm:px-6 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    'flex items-center gap-3 px-4 py-3 rounded-xl text-sm sm:text-base font-semibold transition-all duration-150',
                    isActive
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'text-foreground/80 hover:bg-muted hover:text-foreground active:scale-[0.99]'
                  )}
                >
                  <Icon className={cn('w-5 h-5 flex-shrink-0', isActive ? 'text-primary-foreground' : 'text-primary')} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 w-full">{children}</main>

      {/* Responsive Footer */}
      <footer className="bg-card border-t border-border mt-16 sm:mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
            <div>
              <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
                <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-sm">
                  R
                </div>
                <span className="font-bold text-lg text-foreground">The Raina Family</span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground max-w-sm mx-auto md:mx-0">
                A warm family space preserving our cherished memories, stories, and milestones forever.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs sm:text-sm">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors py-1"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="text-center md:text-right text-xs sm:text-sm text-muted-foreground">
              <p className="flex items-center justify-center md:justify-end gap-1 mb-1">
                Made with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> for our family
              </p>
              <p>© {new Date().getFullYear()} The Raina Family. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
