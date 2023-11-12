'use client';

import { useScroll, useSpring, animated } from "@react-spring/web";
import React, { PropsWithChildren } from "react";

export const MainWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  const [textStyles, textApi] = useSpring(() => ({
    y: '100%',
  }))


  const animation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 }
  });

  const colorAnimation = useSpring({
    from: { color: 'blue' },
    to: { color: `rgb(255,0,0)` }
  });

  const multiAnimation = useSpring({
    from: { opacity: 0, color: 'red' },
    to: [
        { opacity: 1, color: '#ffaaee' },
        { opacity: 1, color: 'red' },
        { opacity: .5, color: '#008000' },
        { opacity: .8, color: 'black' }
    ]
  });



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


  // rgb 1 = 125, 179, 254
  // rgb 2 = 250, 176, 223
  // rgb 3 = 253, 230, 133
  // rgb 4 = 137, 253, 196

  const getFraction = (minFraction: number, maxFraction: number, value: number) => {
    return (value - minFraction) / (maxFraction - minFraction);
  }

  const calculateColorByFraction = (
    fraction: number,
    rgbFrom: { r: number, g: number, b: number },
    rgbTo: { r: number, g: number, b: number }
  ) => {
    const red = Math.floor(rgbFrom.r + fraction * (rgbTo.r - rgbFrom.r));
    const green = Math.floor(rgbFrom.g + fraction * (rgbTo.g - rgbFrom.g));
    const blue = Math.floor(rgbFrom.b + fraction * (rgbTo.b - rgbFrom.b));

    return `rgb(${red}, ${green}, ${blue})`
  }

  // const colors = [
  //   { r: 125, g: 179, b: 254 },
  //   { r: 250, g: 176, b: 223 },
  //   { r: 253, g: 230, b: 133 },
  //   { r: 137, g: 253, b: 196 },
  // ]

  // const colors = [
  //   { r: 216, g: 149, b: 239 },
  //   { r: 94, g: 164, b: 250 },
  //   { r: 166, g: 207, b: 247 },
  //   { r: 238, g: 206, b: 115 },
  //   { r: 250, g: 161, b: 40 },
  // ]

  // const colors = [
  //   { r: 210, g: 240, b: 72 },
  //   { r: 249, g: 255, b: 54 },
  //   { r: 194, g: 165, b: 249 },
  //   { r: 237, g: 78, b: 56 },
  // ]

  //  const colors = [
  //   { r: 41, g: 183, b: 173 },
  //   { r: 54, g: 118, b: 91 },
  //   { r: 218, g: 214, b: 130 },
  //   { r: 252, g: 172, b: 210 },
  // ]

  // const colors = [
  //   { r: 14, g: 90, b: 210 },
  //   { r: 232, g: 22, b: 143 },
  //   { r: 108, g: 137, b: 186 },
  //   { r: 29, g: 176, b: 227 },
  // ]

  // const colors = [
  //   { r: 73, g: 133, b: 223 },
  //   { r: 250, g: 97, b: 175 },
  //   { r: 230, g: 252, b: 137 },
  //   { r: 240, g: 95, b: 44 },
  // ]

  // const colors = [
  //   { r: 55, g: 107, b: 251 },
  //   { r: 199, g: 246, b: 52 },
  //   { r: 199, g: 246, b: 52 },
  //   { r: 199, g: 246, b: 52 },
  // ]

  const colors = [
    { r: 188, g: 122, b: 249 },
    { r: 240, g: 234, b: 210 },
    { r: 222, g: 255, b: 242 },
    { r: 222, g: 255, b: 242 },
  ]

  const toCssRgb = (rgb: { r: number, g: number, b: number }) => (
    `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`
  );
  
  return (
    <>
    <animated.div
    style={{
      background: scrollYProgress.to(val => {
        console.log(val);
        if (val < 0.5) {
          console.log('11111', val);
          return toCssRgb(colors[0])
        } else if (val < 0.67) {
          console.log('22222', val);
          const fraction = getFraction(0.5, 0.67, val);
          const color = calculateColorByFraction(fraction, colors[0], colors[1])
          return color;
        } else if (val < 0.75) {
          console.log('33333', val);
          const fraction = getFraction(0.67, 0.75, val);
          const color = calculateColorByFraction(fraction, colors[1], colors[2])
          return color;
        } else if (val < 0.9) {
          console.log('44444', val);
          const fraction = getFraction(0.75, 0.9, val);
          const color = calculateColorByFraction(fraction, colors[2], colors[3])
          return color;
        } else {
          return toCssRgb(colors[3])
        }
        // else if (val < 0.9) {
        //   console.log('33333', val);
        //   const fraction = getFraction(0.5, 0.7, val);
        //   const color = calculateColorByFraction(fraction, colors[1], colors[2])
        //   return color;
        // } else if (val < 1) {
        //   console.log('44444', val);
        //   const fraction = getFraction(.7, 1, val);
        //   const color = calculateColorByFraction(fraction, colors[2], colors[3])
        //   return color;
        // }


        // from 0.5 to 0.7 transition from blue to green
        // from 0.7 to 1 transition from green to white 

        //return `rgb(${val * 255}, ${val * 255}, ${val * 255})`
      }),
    }}
    >
      {children}
    </animated.div>
    </>
  );
}