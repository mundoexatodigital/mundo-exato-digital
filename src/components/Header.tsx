import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import logo from "@/assets/lololo.png";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const SunIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width="16" height="16" {...props}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
);

const MoonIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width="16" height="16" {...props}>
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
  </svg>
);

const Header = () => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      const stored = localStorage.getItem("theme");
      if (stored === "dark") return true;
      if (stored === "light") return false;
    } catch (e) {
      // ignore
    }
    // fallback to current document or system preference
    if (typeof window !== "undefined") {
      if (document.documentElement.classList.contains("dark")) return true;
      return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return true;
  });

  useEffect(() => {
    try {
      if (isDark) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    } catch (e) {
      // ignore storage access errors
    }
  }, [isDark]);

  const toggle = () => setIsDark((v) => !v);

  // hide on scroll down, show on scroll up
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let lastY = window.scrollY;
    let ticking = false;

    const onScroll = () => {
      const currentY = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const delta = currentY - window.scrollY;
          // only act when meaningful scroll happened
          if (Math.abs(delta) > 10) {
            if (delta > 0 && currentY > 80) {
              // scrolling down
              setHidden(true);
            } else if (delta < 0) {
              // scrolling up
              setHidden(false);
            }
            lastY = currentY;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transform transition-transform duration-500 ease-in-out shadow-sm will-change-transform",
      hidden ? "-translate-y-full" : "translate-y-0",
    )}>
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Mundo Exato Digital" className="h-10 w-10 rounded-md shadow-md animate-float" />
          <span className="text-xl font-bold flex items-baseline gap-1">
            <span className="font-extrabold text-foreground dark:text-white">Mundo Exato</span>
            <span className="text-primary transition-colors duration-300">Digital</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Início
          </Link>
          <div className="relative group">
            <button className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors flex items-center gap-1">
              Teoria
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <Link to="/calor-sensivel" className="block px-4 py-2 text-sm hover:bg-accent transition-colors">
                Calor Sensível
              </Link>
              <Link to="/calor-latente" className="block px-4 py-2 text-sm hover:bg-accent transition-colors">
                Calor Latente
              </Link>
              <Link to="/gases-perfeitos" className="block px-4 py-2 text-sm hover:bg-accent transition-colors">
                Gases Perfeitos
              </Link>
              <Link to="/primeira-lei" className="block px-4 py-2 text-sm hover:bg-accent transition-colors">
                Primeira Lei
              </Link>
              <Link to="/ciclos" className="block px-4 py-2 text-sm hover:bg-accent transition-colors">
                Ciclos Termodinâmicos
              </Link>
            </div>
          </div>
          <div className="relative group">
            <button className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors flex items-center gap-1">
              Simuladores
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <Link to="/simulador-calor-sensivel" className="block px-4 py-2 text-sm hover:bg-accent transition-colors">
                Calor Sensível
              </Link>
              <Link to="/simulador-calor-latente" className="block px-4 py-2 text-sm hover:bg-accent transition-colors">
                Calor Latente
              </Link>
              <Link to="/simulador-gases-perfeitos" className="block px-4 py-2 text-sm hover:bg-accent transition-colors">
                Gases Perfeitos
              </Link>
              <Link to="/simulador-primeira-lei" className="block px-4 py-2 text-sm hover:bg-accent transition-colors">
                Primeira Lei
              </Link>
              <Link to="/simulador-ciclos" className="block px-4 py-2 text-sm hover:bg-accent transition-colors">
                Ciclos Termodinâmicos
              </Link>
            </div>
          </div>
          <div className="relative group">
            <button className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors flex items-center gap-1">
              Exercícios
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <Link to="/exercicios-calor-sensivel" className="block px-4 py-2 text-sm hover:bg-accent transition-colors">
                Calor Sensível
              </Link>
              <Link to="/exercicios-calor-latente" className="block px-4 py-2 text-sm hover:bg-accent transition-colors">
                Calor Latente
              </Link>
              <Link to="/exercicios-gases-perfeitos" className="block px-4 py-2 text-sm hover:bg-accent transition-colors">
                Gases Perfeitos
              </Link>
              <Link to="/exercicios-primeira-lei" className="block px-4 py-2 text-sm hover:bg-accent transition-colors">
                Primeira Lei
              </Link>
              <Link to="/exercicios-ciclos" className="block px-4 py-2 text-sm hover:bg-accent transition-colors">
                Ciclos Termodinâmicos
              </Link>
            </div>
          </div>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={toggle} aria-label="Alternar tema">
            {isDark ? <SunIcon /> : <MoonIcon />}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
