"use client";

import { FaGlobe, FaMobile, FaShoppingCart, FaReact, FaChevronLeft, FaChevronRight, FaBrain, FaRobot } from 'react-icons/fa';
import { SiReact, SiNextdotjs, SiTypescript, SiFlutter, SiGooglecolab, SiKotlin, SiShopify, SiStripe, SiPaypal, SiWebpack, SiPython, SiTensorflow, SiPytorch, SiFlask, SiOpencv, SiHuggingface, SiRoboflow } from 'react-icons/si';
import { useRef, useState, useEffect, useCallback } from 'react';

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
    {
      icon: FaBrain,
      title: 'NLP Chatbot Development',
      tagline: 'Intelligent conversational AI',
      description:
        'Build sophisticated chatbots powered by natural language processing to automate customer support, answer queries, and engage users with human-like conversations.',
      idealFor: 'Customer service | Virtual assistants',
      deliverables: ['Intent recognition', 'Training & fine-tuning', 'Integration setup', 'Performance monitoring'],
      technologies: [
        { name: 'Python', icon: SiPython },
        { name: 'Flask', icon: SiFlask },
        { name: 'mBert', icon: SiHuggingface },
        { name: 'Retrieval Augmented Generation (RAG)', icon: SiPytorch },
        { name: 'Google Colab', icon: SiGooglecolab }
      ]
    },
    {
      icon: FaRobot,
      title: 'Object Detection',
      tagline: 'Computer vision solutions',
      description:
        'Develop AI models that identify and locate objects in images and video streams with high accuracy for surveillance, automation, and analytics applications.',
      idealFor: 'Security systems | Smart automation',
      deliverables: ['Model training', 'Real-time detection', 'Custom dataset preparation', 'API integration'],
      technologies: [
        { name: 'Python', icon: SiPython },
        { name: 'TensorFlow', icon: SiTensorflow },
        { name: 'Roboflow', icon: SiRoboflow },
        { name: 'YOLOv8', icon: SiPython },
        { name: 'Flutter', icon: SiFlutter }
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
      case 'python':
        return 'text-[#3776ab]';
      case 'tensorflow':
        return 'text-[#ff6f00]';
      case 'pytorch':
        return 'text-[#ee4c2c]';
      case 'scikit-learn':
        return 'text-[#f7931e]';
      case 'opencv':
        return 'text-[#5c3ee8]';
      default:
        return 'text-blue-600 dark:text-blue-300';
    }
  };

  // Carousel ref and helpers for small screens
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const cardCount = services.length;
  const activeIndexRef = useRef<number>(0);
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<number | null>(null);

  // Infinite scroll: duplicate items for seamless looping
  // Add clones at the end (last items) and beginning (first items)
  const duplicatedServices = [
    ...services.slice(-Math.min(3, cardCount)), // Clone last 3 (or all if less than 3)
    ...services,
    ...services.slice(0, Math.min(3, cardCount)) // Clone first 3 (or all if less than 3)
  ];
  const offset = Math.min(3, cardCount); // Offset to account for cloned items at start
  const totalItems = duplicatedServices.length;

  // Autoplay settings
  const AUTOPLAY = true; // toggle autoplay on/off
  const AUTOPLAY_INTERVAL = 4500; // ms
  const autoplayTimerRef = useRef<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Scroll to a specific card index (accounting for cloned items offset)
  const scrollToIndex = useCallback((index: number, smooth: boolean = true) => {
    const el = containerRef.current;
    if (!el) return;
    const children = Array.from(el.children) as HTMLElement[];
    // Map logical index to actual DOM index (add offset)
    const domIndex = index + offset;
    const child = children[domIndex];
    if (!child) return;
    // center the child in the container
    const left = Math.max(0, child.offsetLeft - (el.clientWidth - child.offsetWidth) / 2);
    el.scrollTo({ left, behavior: smooth ? 'smooth' : 'auto' });
  }, [offset]);

  const scrollByCard = (direction: 'next' | 'prev') => {
    if (isScrollingRef.current) return;
    isScrollingRef.current = true;
    // Calculate next index (wraps automatically due to modulo)
    const next = direction === 'next' ? (activeIndex + 1) % cardCount : (activeIndex - 1 + cardCount) % cardCount;
    scrollToIndex(next);
    // Reset scrolling flag after animation
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = window.setTimeout(() => {
      isScrollingRef.current = false;
    }, 500);
  };

  // Handle scroll to detect when we're at cloned items and jump to real ones
  const handleScroll = useCallback(() => {
    const el = containerRef.current;
    if (!el || isScrollingRef.current) return;

    const scrollLeft = el.scrollLeft;
    const children = Array.from(el.children) as HTMLElement[];
    
    // Find which item is currently in view
    let currentIndex = -1;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      const childLeft = child.offsetLeft;
      const childWidth = child.offsetWidth;
      const containerWidth = el.clientWidth;
      const center = childLeft + childWidth / 2;
      const containerCenter = scrollLeft + containerWidth / 2;
      
      if (Math.abs(center - containerCenter) < childWidth / 2) {
        currentIndex = i;
        break;
      }
    }

    // If we're at a clone, jump to the real item instantly
    if (currentIndex >= 0) {
      let logicalIndex = currentIndex - offset;
      
      // If we're in the cloned section at the end
      if (currentIndex >= offset + cardCount) {
        logicalIndex = currentIndex - offset - cardCount;
        isScrollingRef.current = true;
        scrollToIndex(logicalIndex, false); // Instant jump, no smooth scroll
        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = window.setTimeout(() => {
          isScrollingRef.current = false;
        }, 50);
      }
      // If we're in the cloned section at the beginning
      else if (currentIndex < offset) {
        logicalIndex = currentIndex - offset + cardCount;
        isScrollingRef.current = true;
        scrollToIndex(logicalIndex, false); // Instant jump, no smooth scroll
        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = window.setTimeout(() => {
          isScrollingRef.current = false;
        }, 50);
      }
      else {
        setActiveIndex(logicalIndex);
      }
    }
  }, [offset, cardCount, scrollToIndex]);

  // Initialize carousel at first real item (after cloned items)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    // Wait for items to render, then scroll to first real item
    const timer = setTimeout(() => {
      scrollToIndex(0, false); // Instant scroll to first real item
    }, 100);
    return () => clearTimeout(timer);
  }, [scrollToIndex]);

  // Track which slide is active using IntersectionObserver
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const children = Array.from(el.children) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isScrollingRef.current) {
            const idx = children.indexOf(entry.target as HTMLElement);
            if (idx >= 0) {
              // Map DOM index to logical index (accounting for cloned items)
              let logicalIndex = idx - offset;
              // If we're in cloned section at end, map to beginning
              if (idx >= offset + cardCount) {
                logicalIndex = idx - offset - cardCount;
              }
              // If we're in cloned section at beginning, map to end
              else if (idx < offset) {
                logicalIndex = idx - offset + cardCount;
              }
              if (logicalIndex >= 0 && logicalIndex < cardCount) {
                setActiveIndex(logicalIndex);
              }
            }
          }
        });
      },
      { root: el, threshold: [0.5, 0.75, 0.9] }
    );

    children.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, [containerRef, cardCount, offset]);

  // Add scroll event listener for infinite scroll handling
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    
    let scrollTimeout: number | null = null;
    const onScroll = () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = window.setTimeout(() => {
        handleScroll();
      }, 50);
    };

    el.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      el.removeEventListener('scroll', onScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [handleScroll]);

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
    <section id="skills" className="py-20 bg-gray-50 dark:bg-[#0a192f] grid-background">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-12">
          <span className="button-3d">
            <span>Skills & Expertise</span>
          </span>
        </h2>

        {/* Desktop / tablet grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <article
              key={i}
              className="relative rounded-2xl bg-white dark:bg-gray-800 shadow-[rgba(60,64,67,0.3)_0_1px_2px_0,rgba(60,64,67,0.15)_0_2px_6px_2px] dark:shadow-[rgba(0,0,0,0.4)_0_1px_2px_0,rgba(0,0,0,0.25)_0_2px_6px_2px] hover:shadow-[rgba(60,64,67,0.4)_0_2px_4px_0,rgba(60,64,67,0.25)_0_4px_10px_4px] dark:hover:shadow-[rgba(0,0,0,0.5)_0_2px_4px_0,rgba(0,0,0,0.35)_0_4px_10px_4px] transition-all duration-300 hover:-translate-y-1"
              aria-labelledby={`service-${i}`}
            >
              <div className="flex flex-col items-start pt-8 px-6 pb-6">
                {/* Icon */}
                <div className="flex items-center justify-center mb-5 -mt-12 mx-auto">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-indigo-500 p-4 rounded-2xl shadow-lg">
                    <s.icon className="text-3xl text-white" aria-hidden />
                  </div>
                </div>

                {/* Title & Tagline */}
                <h3 id={`service-${i}`} className="text-lg font-bold text-gray-800 dark:text-white mb-2 text-center w-full">
                  {s.title}
                </h3>
                <p className="text-sm text-center text-indigo-600 dark:text-indigo-400 font-medium mb-4 w-full">{s.tagline}</p>

                {/* Description */}
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-justify">{s.description}</p>

                {/* Deliverables */}
                <div className="mb-4 w-full">
                  <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Deliverables</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1.5">
                    {s.deliverables.map((d, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 shrink-0" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="pt-3 border-t border-gray-200 dark:border-gray-700 w-full">
                  <div className="flex flex-wrap gap-2 mt-2">
                    {s.technologies.map((t, j) => (
                      <button
                        key={j}
                        type="button"
                        tabIndex={0}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 dark:bg-gray-700/50 rounded-full text-xs font-semibold text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        aria-label={`${t.name} technology`}
                      >
                        <t.icon className={`${getBadgeColor(t.name)} text-base`} aria-hidden />
                        <span className="leading-none">{t.name}</span>
                      </button>
                    ))}
                  </div>
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
            {duplicatedServices.map((s, i) => {
              // Calculate logical index for styling
              let logicalIndex = i - offset;
              if (i >= offset + cardCount) {
                logicalIndex = i - offset - cardCount;
              } else if (i < offset) {
                logicalIndex = i - offset + cardCount;
              }
              
              return (
                <article
                  key={`mobile-${i}-${logicalIndex >= 0 ? logicalIndex : i}`}
                  role="listitem"
                  aria-labelledby={`service-mobile-${logicalIndex >= 0 && logicalIndex < cardCount ? logicalIndex : i}`}
                  className={`snap-start flex-shrink-0 w-[90%] sm:w-auto rounded-2xl bg-white dark:bg-gray-800 shadow-[rgba(60,64,67,0.3)_0_1px_2px_0,rgba(60,64,67,0.15)_0_2px_6px_2px] dark:shadow-[rgba(0,0,0,0.4)_0_1px_2px_0,rgba(0,0,0,0.25)_0_2px_6px_2px] transition-all duration-300 ${
                    activeIndex === logicalIndex && logicalIndex >= 0 && logicalIndex < cardCount ? 'opacity-100 scale-100' : 'opacity-80 scale-95'
                  }`}
                >
                <div className="flex flex-col items-start pt-8 px-5 pb-5">
                  {/* Icon */}
                  <div className="flex items-center justify-center mb-4 -mt-12 mx-auto">
                    <div className="bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-indigo-500 p-3 rounded-2xl shadow-lg">
                      <s.icon className="text-2xl text-white" aria-hidden />
                    </div>
                  </div>

                  <h3 id={`service-mobile-${logicalIndex >= 0 && logicalIndex < cardCount ? logicalIndex : i}`} className="text-base font-bold text-gray-800 dark:text-white mb-2 text-center w-full">
                    {s.title}
                  </h3>
                  <p className="text-sm text-center text-indigo-600 dark:text-indigo-400 font-medium mb-3 w-full">{s.tagline}</p>

                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3 text-justify">{s.description}</p>

                  <div className="pt-3 border-t border-gray-200 dark:border-gray-700 w-full">
                    <div className="flex flex-wrap gap-2 mt-2">
                      {s.technologies.map((t, j) => (
                        <button
                          key={`mtech-${i}-${j}`}
                          type="button"
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gray-50 dark:bg-gray-700/50 rounded-full text-xs font-semibold text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-600"
                          aria-label={`${t.name} technology`}
                        >
                          <t.icon className={`${getBadgeColor(t.name)} text-sm`} aria-hidden />
                          <span className="leading-none">{t.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
              );
            })}
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
