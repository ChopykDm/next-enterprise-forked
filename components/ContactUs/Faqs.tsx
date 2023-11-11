'use client';

import Image from 'next/image'

import { Container } from '@/components/Container'
import { useScroll, animated, useSpring } from '@react-spring/web'
import React from 'react';


export function ContactUs() {
  const containerRef = React.useRef<HTMLDivElement>(null!)
  
  const [textStyles, textApi] = useSpring(() => ({
    y: '100%',
  }))

  const { scrollYProgress } = useScroll({
   // container: containerRef,
    onChange: ({ value: { scrollYProgress } }) => {
      debugger;
      if (scrollYProgress > 0.7) {
        textApi.start({ y: '0' })
      } else {
        textApi.start({ y: '100%' })
      }
    },
    default: {
      immediate: true,
    },
  });

  return (
    <section
      id="faq"
      style={{ border: '1px solid black' }}
      aria-labelledby="faq-title"
      className="relative overflow-hidden py-20 sm:py-32"
      ref={containerRef}
    >
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team
            and if you’re lucky someone will get back to you.
          </p>
        </div>
        <animated.div
          style={{
            clipPath: scrollYProgress.to(val => `circle(${val * 100}%)`),
          }}>
          <h1 >
            <span>
              <animated.span style={textStyles}>Aha!</animated.span>
            </span>
            <span>
              <animated.span style={textStyles}>You found me!</animated.span>
            </span>
          </h1>
        </animated.div>
      </Container>
    </section>
  )
}
