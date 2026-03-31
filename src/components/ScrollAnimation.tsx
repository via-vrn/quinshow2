"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  animation?: "fade-up" | "fade-left" | "fade-right" | "scale";
  delay?: number;
  className?: string;
}

export default function ScrollAnimation({
  children,
  animation = "fade-up",
  delay = 0,
  className = "",
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const animationClasses = {
    "fade-up": isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10",
    "fade-left": isVisible ? "animate-fade-in-left" : "opacity-0 -translate-x-10",
    "fade-right": isVisible ? "animate-fade-in-right" : "opacity-0 translate-x-10",
    scale: isVisible ? "animate-scale-in" : "opacity-0 scale-90",
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${animationClasses[animation]} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
