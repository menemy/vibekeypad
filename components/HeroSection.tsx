'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function HeroSection() {
  const sectionRef = useRef(null)
  const stickyRef = useRef(null)
  const

      videoRef = useRef<HTMLVideoElement>(null)
  const [videoPlayed, setVideoPlayed] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Hero text animations
      const heroTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
          pin: stickyRef.current,
          anticipatePin: 1,
        }
      })

      heroTl
        .to('.hero-title', {
          scale: 0.7,
          opacity: 0,
          y: -100,
          duration: 1
        }, 0)
        .to('.hero-subtitle', {
          opacity: 0,
          y: -100,
          duration: 1
        }, 0)
        .to('.hero-description', {
          opacity: 0,
          y: -100,
          duration: 1
        }, 0)
        .to('.hero-cta', {
          opacity: 0,
          y: -100,
          duration: 1
        }, 0)

      // Logo & Video reveal
      const logoTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
          onUpdate: (self) => {
            // Play video once when scroll reaches 40%
            if (self.progress > 0.4 && self.progress < 0.9 && !videoPlayed && videoRef.current) {
              videoRef.current.play().catch((error) => {
                console.log('Video autoplay prevented:', error)
              })
              setVideoPlayed(true)
            }
            // Stop and hide video when scrolling past 90%
            if (self.progress > 0.9 && videoRef.current) {
              videoRef.current.pause()
            }
          }
        }
      })

      logoTl
        // Text content fades out FIRST
        .to('.hero-content', {
          opacity: 0,
          scale: 0.9,
          duration: 0.5
        }, 0)
        // Video appears and scales up AFTER text is gone
        .fromTo('.hero-logo',
          {
            opacity: 0,
            scale: 0.5,
            y: 50
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out'
          },
          0.5
        )
        // Video scales up to 1.5
        .to('.hero-logo', {
          scale: 1.5,
          duration: 1,
          ease: 'power2.inOut'
        }, 1.5)
        // Both video and text fade out together
        .to('.hero-logo', {
          opacity: 0,
          duration: 0.8
        }, 2.2)
    }, sectionRef)

    return () => ctx.revert()
  }, [videoPlayed])

  return (
    <section ref={sectionRef} className="hero-sequence relative min-h-[500vh]">
      <div ref={stickyRef} className="hero-sticky sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-[#e8e8e8]">
        <div className="hero-content text-center max-w-5xl px-12">
          <div className="mb-8 mt-16">
            <Image
              src="/keypad.png"
              alt="VibeKeypad"
              width={600}
              height={400}
              className="mx-auto w-auto max-w-md"
            />
          </div>
          <p className="hero-subtitle text-2xl md:text-3xl lg:text-4xl font-semibold text-muted mt-6">
            ✨ The missing piece for AI coding.
          </p>
          <p className="hero-description text-lg md:text-xl text-muted max-w-3xl mx-auto mt-4 mb-10">
            Six keys. Infinite flow. 🤙🏻 Yes, 🙅‍♂️ No, ❌ Stop, 👀 Full output, 🎤 Dictate —
            without leaving your keyboard. Ready for Claude Code.
          </p>
          <div className="hero-cta flex flex-wrap gap-3 justify-center">
            <a
              href="docs/quick-start.html"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-accent text-white text-base font-semibold transition-transform hover:scale-105"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                <path d="M4 4v15.5A2.5 2.5 0 0 1 6.5 22H20V4H6.5A2.5 2.5 0 0 0 4 6.5z"/>
              </svg>
              Quick Start Guide
            </a>
          </div>
        </div>

        {/* Video showcase */}
        <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center pointer-events-none">
          <div className="hero-logo opacity-0 flex items-center gap-8">
            {/* Video - 50vh height, ~33vw width */}
            <div className="hero-video-container relative pointer-events-auto">
              <video
                ref={videoRef}
                className="w-auto h-[50vh] max-w-[33vw] object-contain"
                muted
                loop
                playsInline
                preload="auto"
                controls
              >
                <source src="logo_video.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Brand Text */}
            <div className="hero-brand-text">
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight bg-gradient-to-b from-[#4ACCF5] via-[#4ACCF5] to-[#848EF2] bg-clip-text text-transparent">
                VibeKeypad
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
