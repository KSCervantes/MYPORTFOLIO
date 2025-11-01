"use client";

import { FaGlobe, FaMobile, FaShoppingCart, FaReact, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { SiReact, SiNextdotjs, SiTypescript, SiFlutter, SiSwift, SiKotlin, SiShopify, SiStripe, SiPaypal, SiWebpack } from 'react-icons/si';
import { useRef, useState, useEffect } from 'react';

const Skills = () => {
  const services = [
    {
      icon: FaGlobe,
      title: 'Web Development',
      tagline: 'Modern, maintainable web apps',
      description:
        'Build responsive, accessible web applications and SPAs using a modern stack — optimized for performance, SEO, and maintainability.',
      idealFor: 'Startups | Marketing sites | Web apps',
      deliverables: ['Requirements & scope', 'Responsive UI', 'API integration', 'Deployment & docs'],
      technologies: [
        { name: 'React', icon: SiReact },
        { name: 'Next.js', icon: SiNextdotjs },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'Tailwind / CSS', icon: SiWebpack }
      ]
    },
    {
      icon: FaMobile,
      title: 'Mobile Development',
      tagline: 'Cross-platform native apps',
      description:
        'Ship performant mobile apps for iOS and Android using cross-platform frameworks or native tooling when needed.',
      idealFor: 'Mobile-first products | MVPs',
      deliverables: ['App architecture', 'Cross-platform UI', 'Store submission support', 'Maintenance plan'],
      technologies: [
        { name: 'Flutter', icon: SiFlutter },
        { name: 'React Native', icon: FaReact },
        { name: 'Swift', icon: SiSwift },
        { name: 'Kotlin', icon: SiKotlin }
      ]
    },
    {
      icon: FaShoppingCart,
      title: 'E‑commerce Solutions',
      tagline: 'Stores that convert',
      description:
        'From headless storefronts to Shopify builds, I deliver fast checkout, inventory workflows, and integrations with payment gateways.',
      idealFor: 'Retailers | Marketplaces',
      deliverables: ['Store setup', 'Payment & shipping', 'Custom theme', 'Analytics & reporting'],
      technologies: [
        { name: 'Shopify', icon: SiShopify },
        { name: 'Stripe', icon: SiStripe },
        { name: 'PayPal', icon: SiPaypal }
      ]
    },
  ];

  // Return a color class for known technologies to give icons subtle brand tint
  const getBadgeColor = (name: string) => {
    switch (name.toLowerCase()) {
      case 'react':
      case 'react native':
        return 'text-[#61dafb]';
      case 'next.js':
      case 'nextjs':
        return 'text-[#000000] dark:text-[#ffffff]';
      case 'typescript':
        return 'text-[#3178c6]';
      case 'tailwind / css':
        return 'text-[#06b6d4]';
      case 'flutter':
        return 'text-[#02569b]';
      case 'swift':
        return 'text-[#ff6e52]';
      case 'kotlin':
        return 'text-[#7f52ff]';
      case 'shopify':
        return 'text-[#96bf48]';
      case 'woocommerce':
        return 'text-[#96588a]';
      case 'stripe':
        return 'text-[#008cd6]';
      case 'paypal':
        return 'text-[#003087]';
      default:
        return 'text-blue-600 dark:text-blue-300';
    }
  };

  // Carousel ref and helpers for small screens
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardCount] = useState(services.length);
  const activeIndexRef = useRef<number>(0);

  // Autoplay settings
  const AUTOPLAY = true; // toggle autoplay on/off
  const AUTOPLAY_INTERVAL = 4500; // ms
  const autoplayTimerRef = useRef<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Scroll to a specific card index, centering it in the container
  const scrollToIndex = (index: number) => {
    const el = containerRef.current;
    if (!el) return;
    const children = Array.from(el.children) as HTMLElement[];
    const child = children[index];
    if (!child) return;
    // center the child in the container
    const left = Math.max(0, child.offsetLeft - (el.clientWidth - child.offsetWidth) / 2);
    el.scrollTo({ left, behavior: 'smooth' });
  };

  const scrollByCard = (direction: 'next' | 'prev') => {
    // wrap around when reaching ends
    const next = direction === 'next' ? (activeIndex + 1) % cardCount : (activeIndex - 1 + cardCount) % cardCount;
    scrollToIndex(next);
  };

  // Track which slide is active using IntersectionObserver
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const children = Array.from(el.children) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = children.indexOf(entry.target as HTMLElement);
            if (idx >= 0) setActiveIndex(idx);
          }
        });
      },
      { root: el, threshold: [0.5, 0.75, 0.9] }
    );

    children.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, [containerRef, cardCount]);

  // keep a ref for the current active index (used by autoplay interval)
  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  // pause/resume helpers: pause on pointer/hover/focus, resume on leave/blur
  useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;

    const onPointerDown = () => setIsPaused(true);
    const onMouseEnter = () => setIsPaused(true);
    const onMouseLeave = () => setIsPaused(false);
    const onFocusIn = () => setIsPaused(true);
    const onFocusOut = () => setIsPaused(false);
    const onVisibility = () => {
      if (document.visibilityState === 'hidden') setIsPaused(true);
      else setIsPaused(false);
    };

    el.addEventListener('pointerdown', onPointerDown);
    el.addEventListener('mouseenter', onMouseEnter);
    el.addEventListener('mouseleave', onMouseLeave);
    el.addEventListener('focusin', onFocusIn);
    el.addEventListener('focusout', onFocusOut);
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      el.removeEventListener('pointerdown', onPointerDown);
      el.removeEventListener('mouseenter', onMouseEnter);
      el.removeEventListener('mouseleave', onMouseLeave);
      el.removeEventListener('focusin', onFocusIn);
      el.removeEventListener('focusout', onFocusOut);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [containerRef]);

  // Autoplay effect
  useEffect(() => {
    if (!AUTOPLAY || isPaused) return;
    // clear any existing timer
    if (autoplayTimerRef.current) {
      window.clearInterval(autoplayTimerRef.current);
      autoplayTimerRef.current = null;
    }

    autoplayTimerRef.current = window.setInterval(() => {
      // compute next index using ref to avoid stale closure
      const next = (activeIndexRef.current + 1) % cardCount;
      scrollToIndex(next);
    }, AUTOPLAY_INTERVAL);

    return () => {
      if (autoplayTimerRef.current) {
        window.clearInterval(autoplayTimerRef.current);
        autoplayTimerRef.current = null;
      }
    };
  }, [isPaused, cardCount, AUTOPLAY]);

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-[#0a192f]">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-12">
          <span className="inline-block border-2 border-black px-4 py-2 sm:px-6 sm:py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black">
            Skills & Expertise
          </span>
        </h2>

        {/* Desktop / tablet grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <article
              key={i}
              className="relative p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-lg transition-transform hover:scale-[1.02]"
              aria-labelledby={`service-${i}`}
            >
              <div className="flex items-center justify-center mb-4">
                <s.icon className="text-4xl text-blue-600 dark:text-blue-400" aria-hidden />
              </div>

              <h3 id={`service-${i}`} className="text-xl font-semibold text-center text-gray-800 dark:text-white mb-1">
                {s.title}
              </h3>
              <p className="text-sm text-center text-indigo-600 dark:text-indigo-400 font-medium mb-3">{s.tagline}</p>

              <p className="text-sm text-gray-700 dark:text-gray-900 leading-relaxed mb-4">{s.description}</p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-900 mb-2">Deliverables</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-900 space-y-1">
                  {s.deliverables.map((d, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 mt-2 rounded-full bg-gray-700 dark:bg-gray-900 shrink-0" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 border-t border-gray-100 dark:border-gray-700">
                <div className="flex flex-wrap gap-2 mt-3">
                  {s.technologies.map((t, j) => (
                    <button
                      key={j}
                      type="button"
                      tabIndex={0}
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white dark:bg-white/80 sm:dark:bg-white rounded-full text-sm font-medium text-gray-800 dark:text-gray-800 ring-1 ring-gray-200 dark:ring-white/10 border border-gray-200 dark:border-white/10 shadow-sm hover:-translate-y-0.5 transition-transform focus:outline-none focus:ring-2 focus:ring-indigo-300"
                      aria-label={`${t.name} technology`}
                    >
                      <t.icon className={`${getBadgeColor(t.name)} text-base`} aria-hidden />
                      <span className="ml-1 leading-none">{t.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile carousel (small screens) */}
        <div className="sm:hidden relative group">
          <button
            onClick={() => scrollByCard('prev')}
            aria-label="Previous"
            className={`absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/90 dark:bg-gray-800/80 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-300 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity`}
          >
            <FaChevronLeft className="text-lg text-gray-800 dark:text-white" />
          </button>

          <div
            ref={containerRef}
            className="flex gap-4 px-4 py-2 overflow-x-auto snap-x snap-mandatory touch-pan-x scroll-smooth scrollbar-hide"
            role="list"
          >
            {services.map((s, i) => (
                      <article
                key={`mobile-${i}`}
                role="listitem"
                aria-labelledby={`service-mobile-${i}`}
                className={`snap-start flex-shrink-0 w-[90%] sm:w-auto p-5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm transition-all duration-300 ${
                  activeIndex === i ? 'opacity-100 scale-100' : 'opacity-80 scale-95'
                }`}
              >
                <div className="flex items-center justify-center mb-3">
                  <s.icon className="text-3xl text-blue-600 dark:text-blue-400" aria-hidden />
                </div>
                <h3 id={`service-mobile-${i}`} className="text-lg font-semibold text-center text-gray-800 dark:text-white mb-1">
                  {s.title}
                </h3>
                <p className="text-sm text-center text-indigo-600 dark:text-indigo-400 font-medium mb-2">{s.tagline}</p>

                <p className="text-sm text-gray-700 dark:text-gray-900 leading-relaxed mb-3">{s.description}</p>

                <div className="pt-2 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex flex-wrap gap-2 mt-3">
                    {s.technologies.map((t, j) => (
                      <button
                        key={`mtech-${j}`}
                        type="button"
                        className="inline-flex items-center gap-2 px-3 py-1 bg-white dark:bg-white/80 rounded-full text-sm font-medium text-gray-800 dark:text-gray-800 ring-1 ring-gray-200 dark:ring-white/10 border border-gray-200 dark:border-white/10 shadow-sm"
                        aria-label={`${t.name} technology`}
                      >
                        <t.icon className={`${getBadgeColor(t.name)} text-sm`} aria-hidden />
                        <span className="ml-1 leading-none">{t.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <button
            onClick={() => scrollByCard('next')}
            aria-label="Next"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/90 dark:bg-gray-800/80 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-300 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity"
          >
            <FaChevronRight className="text-lg text-gray-800 dark:text-white" />
          </button>

          {/* Pagination dots */}
          <div className="flex flex-col items-center gap-2 mt-3">
            <div className="flex items-center justify-center gap-2">
              {Array.from({ length: cardCount }).map((_, idx) => (
                <button
                  key={`dot-${idx}`}
                  onClick={() => scrollToIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`w-2.5 h-2.5 rounded-full ${
                    activeIndex === idx
                      ? 'bg-indigo-500 dark:bg-indigo-400'
                      : 'bg-gray-300 dark:bg-gray-600'
                  } focus:outline-none`}
                />
              ))}
            </div>

            {/* Slide counter */}
            <div className="text-sm text-gray-600 dark:text-gray-300">{activeIndex + 1} / {cardCount}</div>
          </div>

          {/* Screen-reader announcement for slide changes */}
          <span className="sr-only" aria-live="polite">Slide {activeIndex + 1} of {cardCount}</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
