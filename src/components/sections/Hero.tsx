"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const techStack = [
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "Supabase",
  "PostgreSQL",
];

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const source = titleRef.current;

    if (!source) {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const root = document.documentElement;

    let frameId = 0;

    const update = () => {
      const target = document.querySelector<HTMLElement>(
        "[data-navbar-brand-target]",
      );

      if (!target) {
        return;
      }

      const rawProgress = Math.min(
        window.scrollY / Math.max(window.innerHeight * 0.42, 1),
        1,
      );
      const easedProgress = 1 - Math.pow(1 - rawProgress, 3);

      root.style.setProperty("--brand-progress", easedProgress.toFixed(3));

      if (mediaQuery.matches) {
        source.style.opacity = "1";
        return;
      }
    };

    const handleScroll = () => {
      cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      cancelAnimationFrame(frameId);
      root.style.setProperty("--brand-progress", "0");
      source.style.opacity = "1";
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section id="home" className="page-wrap page-section pt-32 md:pt-36">
      <div className="relative overflow-hidden rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--background-elevated)] px-5 py-6 shadow-[var(--shadow)] md:px-8 md:py-8">
        <div className="grain-grid absolute inset-0 opacity-40" />

        <div className="relative grid gap-7 md:grid-cols-[minmax(0,1.45fr),minmax(280px,0.9fr)] md:items-end">
          <div className="space-y-6">
            <div className="space-y-5">
              <div className="space-y-3">
                <h1 ref={titleRef} className="section-title max-w-3xl">
                  Nayan B Anand
                </h1>
              </div>

              <div className="space-y-3">
                <h2 className="text-2xl py-2">Hello there 👋🏽</h2>
                <p className="max-w-2xl text-[1.02rem] leading-8 text-[color:var(--muted)] md:text-[1.12rem]">
                  My name is Nayan, and I am a software developer focused on
                  frontend engineering, product-focused web applications, and
                  AI-powered tools. I have worked on projects ranging from
                  modern UI systems and eCommerce platforms to automation tools
                  and developer-focused applications. You can find my
                  open-source work on{" "}
                  <Link
                    href="https://github.com/nayananandofficial"
                    className="underline font-bold text-blue-500"
                  >
                    GitHub
                  </Link>{" "}
                  and some of my projects{" "}
                  <Link
                    href="/#projects"
                    className="underline font-bold text-blue-500"
                  >
                    here
                  </Link>
                </p>

                <p className="max-w-2xl text-[1.02rem] leading-8 text-[color:var(--muted)] md:text-[1.12rem]">
                  You can find my resume{" "} <Link
                    href="/#projects"
                    className="underline font-bold text-blue-500"
                  >
                    here
                  </Link>
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/#projects" className="button-primary">
                Explore My Work
                <ArrowRight size={16} />
              </Link>
              <Link href="/about" className="button-secondary">
                About Me
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <div className="surface-card rounded-[1.8rem] p-4">
              <div className="relative mx-auto aspect-[4/4.8] w-full max-w-[18rem] overflow-hidden rounded-[1.6rem] border border-[color:var(--line)] bg-[color:var(--background-strong)]">
                <Image
                  src="/profile(2).png"
                  alt="Nayan Anand portrait"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>

            <div className="surface-card rounded-[1.8rem] p-5">
              <div className="space-y-3">
                <p className="section-label">Technical Stack</p>
                <div className="flex flex-wrap gap-2.5">
                  {techStack.map((item) => (
                    <span key={item} className="hero-chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
