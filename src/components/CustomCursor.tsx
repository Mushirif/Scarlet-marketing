"use client";

import React, { useEffect, useRef, useState } from 'react';

export function CustomCursor() {
    const [isHovering, setIsHovering] = useState(false);
    const pathRef = useRef<SVGPathElement>(null);
    const pointsRef = useRef<{x: number, y: number}[]>([]);
    const mouseRef = useRef({ x: 0, y: 0 });
    const rafId = useRef<number | null>(null);

    // Config
    const TRAIL_LENGTH = 20;

    useEffect(() => {
        // Init points
        pointsRef.current = new Array(TRAIL_LENGTH).fill({ x: 0, y: 0 });

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        const handleMouseOver = (e: MouseEvent) => {
             const target = e.target as HTMLElement;
             if (
                 target.tagName.toLowerCase() === "a" ||
                 target.tagName.toLowerCase() === "button" ||
                 target.closest("a") ||
                 target.closest("button") ||
                 target.classList.contains("cursor-hover")
             ) {
                 setIsHovering(true);
             } else {
                 setIsHovering(false);
             }
         };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener("mouseover", handleMouseOver);

        const animate = () => {
             // Add new point at head
             const currentPoints = pointsRef.current;
             const mouse = mouseRef.current;

             let leader = { x: mouse.x, y: mouse.y };
             
             // If array is empty (init)
             if (currentPoints.length === 0) {
                 pointsRef.current = new Array(TRAIL_LENGTH).fill(leader);
             }

             // Update points
             const newPoints = currentPoints.map((point, index) => {
                 if (index === 0) {
                     return leader;
                 }
                 const prev = currentPoints[index - 1];
                 const dx = prev.x - point.x;
                 const dy = prev.y - point.y;
                 
                 // Speed factor - adjust for "drag" weight
                 const speed = 0.35; 
                 
                 return {
                     x: point.x + dx * speed,
                     y: point.y + dy * speed
                 };
             });

             pointsRef.current = newPoints;

             // Draw Path
             if (pathRef.current) {
                 const pathString = getPathString(newPoints);
                 pathRef.current.setAttribute('d', pathString);
             }

             rafId.current = requestAnimationFrame(animate);
        };

        rafId.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
            if (rafId.current) cancelAnimationFrame(rafId.current);
        };
    }, []);

    // Helper for smooth path (Quadratic Bezier)
    const getPathString = (points: {x: number, y: number}[]) => {
        if (points.length < 2) return "";
        let d = `M ${points[0].x} ${points[0].y}`;
        
        for (let i = 1; i < points.length; i++) {
             d += ` L ${points[i].x} ${points[i].y}`;
        }
        return d;
    };


    return (
        <div className="fixed inset-0 pointer-events-none z-[99999] hidden md:block">
            <svg className="w-full h-full text-brand-red overflow-visible">
                <defs>
                    <linearGradient id="stripGradient" gradientTransform="rotate(5)">
                        <stop offset="0%" stopColor="#ffe100ff" />
                        <stop offset="50%" stopColor="#001effff" />
                        <stop offset="100%" stopColor="#f00823ff" />
                    </linearGradient>
                </defs>
                <path
                    ref={pathRef}
                    fill="none"
                    stroke="url(#stripGradient)"
                    strokeWidth={isHovering ? 15 : 5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-[stroke-width] duration-100 ease-out opacity-90 drop-shadow-md"
                />
            </svg>
        </div>
    );
}
