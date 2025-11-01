'use client';
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { BackgroundBeams } from './ui/background-beams'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

const heroImages = [
  { src: '/hero/seiko1.jpg', height: 'h-75' },
  { src: '/hero/clock1.jpg', height: 'h-65' },
  { src: '/hero/tissot1.jpg', height: 'h-83' },
  { src: '/hero/tower1.jpg', height: 'h-90' },
  { src: '/hero/clock2.jpg', height: 'h-65' },
  { src: '/hero/tower2.jpg', height: 'h-90' },
  { src: '/hero/citizen1.jpg', height: 'h-75' },
];

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Pre-calculate all transforms for desktop (7 images)
  const desktopTransforms = heroImages.map((_, index) => {
    const middle = (heroImages.length - 1) / 2;
    const direction = index < middle ? -1 : index > middle ? 1 : 0;
    const distance = Math.abs(index - middle) * 150;
    
    return {
      x: useTransform(scrollYProgress, [0, 1], [0, direction * distance]),
      y: useTransform(scrollYProgress, [0, 1], [0, 100]),
      opacity: useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.3]),
      scale: useTransform(scrollYProgress, [0, 1], [1, 0.8]),
      rotate: useTransform(scrollYProgress, [0, 1], [0, direction * 15])
    };
  });

  // Pre-calculate all transforms for mobile (3 images)
  const mobileTransforms = [0, 1, 2].map((index) => {
    const middle = 1; // middle of 3 images (0, 1, 2)
    const direction = index < middle ? -1 : index > middle ? 1 : 0;
    const distance = Math.abs(index - middle) * 80;
    
    return {
      x: useTransform(scrollYProgress, [0, 1], [0, direction * distance]),
      y: useTransform(scrollYProgress, [0, 1], [0, 50]),
      opacity: useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.3]),
      scale: useTransform(scrollYProgress, [0, 1], [1, 0.9]),
      rotate: useTransform(scrollYProgress, [0, 1], [0, direction * 8])
    };
  });

  return (
    <section ref={sectionRef} className='flex min-h-[calc(100dvh-4rem)] flex-1 flex-col justify-between gap-12 overflow-x-hidden pt-8 sm:gap-16 sm:pt-16 lg:gap-24 lg:pt-24'>
      {/* Hero Content */}
      <div className='mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 text-center sm:px-6 lg:px-8'>
        <motion.div 
          className='bg-muted flex items-center gap-2.5 rounded-full border px-3 py-2'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Badge className='rounded-full'>anglo swiss watch co.</Badge>
          <span className='text-muted-foreground'>Excellence Since 1908</span>
        </motion.div>

        <motion.h1 
          className='text-3xl leading-[1.29167] font-bold text-balance sm:text-4xl lg:text-5xl'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Timeless Premium Watches
          <br />
          <span className='relative'>
            Precision
            <motion.svg
              width='223'
              height='12'
              viewBox='0 0 223 12'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='absolute inset-x-0 bottom-0 w-full translate-y-1/2 max-sm:hidden'
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.2, ease: "easeInOut" }}
            >
              <motion.path
                d='M1.11716 10.428C39.7835 4.97282 75.9074 2.70494 114.894 1.98894C143.706 1.45983 175.684 0.313587 204.212 3.31596C209.925 3.60546 215.144 4.59884 221.535 5.74551'
                stroke='url(#paint0_linear_10365_68643)'
                strokeWidth='2'
                strokeLinecap='round'
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 1.2, ease: "easeInOut" }}
              />
              <defs>
                <linearGradient
                  id='paint0_linear_10365_68643'
                  x1='18.8541'
                  y1='3.72033'
                  x2='42.6487'
                  y2='66.6308'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='var(--primary)' />
                  <stop offset='1' stopColor='var(--primary-foreground)' />
                </linearGradient>
              </defs>
            </motion.svg>
          </span>{' '}
          Crafted for Excellence!
        </motion.h1>

        <motion.p 
          className='text-muted-foreground'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Discover our exquisite collection of luxury timepieces from world-renowned Swiss and German brands.
          <br />
          From classic elegance to modern innovation, find your perfect timepiece today.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button size='lg' asChild>
            <a href='#'>Explore Collection</a>
          </Button>
        </motion.div>
      </div>

      {/* Image Gallery - Desktop (7 images) */}
      <div className='hidden md:block w-full px-4 sm:px-6 lg:px-8 overflow-hidden'>
        <div className='mx-auto'>
          <div className='grid grid-cols-7 gap-3 md:gap-4 items-end'>
            {heroImages.map((image, index) => {
              const transforms = desktopTransforms[index];
              
              return (
                <motion.div
                  key={index}
                  className={`relative ${image.height} w-full overflow-hidden rounded-lg shadow-lg group`}
                  initial={{ opacity: 0, y: 100, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  style={{
                    x: transforms.x,
                    y: transforms.y,
                    opacity: transforms.opacity,
                    scale: transforms.scale,
                    rotate: transforms.rotate
                  }}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Image
                    src={image.src}
                    alt={`Hero collection ${index + 1}`}
                    fill
                    className='object-cover transition-transform duration-500 group-hover:scale-110'
                    sizes='14vw'
                  />
                  <div className='absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Image Gallery - Mobile (3 images) */}
      <div className='block md:hidden w-full px-4 overflow-hidden'>
        <div className='mx-auto'>
          <div className='grid grid-cols-3 gap-3 items-end'>
            {heroImages.slice(0, 3).map((image, index) => {
              const transforms = mobileTransforms[index];
              
              return (
                <motion.div
                  key={index}
                  className={`relative h-48 w-full overflow-hidden rounded-lg shadow-md group`}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.08,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  style={{
                    x: transforms.x,
                    y: transforms.y,
                    opacity: transforms.opacity,
                    scale: transforms.scale,
                    rotate: transforms.rotate
                  }}
                >
                  <Image
                    src={image.src}
                    alt={`Hero collection ${index + 1}`}
                    fill
                    className='object-cover'
                    sizes='33vw'
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      <BackgroundBeams />
    </section>
  )
}

export default HeroSection
