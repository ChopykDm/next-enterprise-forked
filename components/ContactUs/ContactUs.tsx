'use client';

import Image from 'next/image'

import { Container } from '@/components/Container'
import { useScroll, animated, useSpring } from '@react-spring/web'
import React from 'react';
import { SectionTitle } from '@/UIComponents/SectionTitle';
import { SectionSubTitle } from '@/UIComponents/SectionSubTitle';
import { useTranslation } from '@/i18n/client';
import { useAppStore } from '@/store/appStore';
import { TextField } from '@/components/Fields'


export function ContactUs() {
  const lang = useAppStore.getState().lang;
  const { t } = useTranslation(lang, 'contact-us');

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
      id="contact-us"
      style={{ border: '1px solid black' }}
      aria-labelledby="contact-us-title"
      className="relative overflow-hidden py-20 sm:py-32"
      ref={containerRef}
    >
      <Container className="relative">
        <div className="max-w-2xl lg:mx-0">
          <SectionTitle>
            <div>
              {t('title1')}
            </div>
            <div className="pl-28 font-sourcecodepro">
              {t('title2')}
            </div>
          </SectionTitle>
          <SectionSubTitle className='font-notosans'>
            {t('subtitle')}
          </SectionSubTitle>
        </div>
        <TextField label="dd" id="cxxc"/>

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
