import { useLayoutEffect, useRef, useState } from 'react'
import Link from 'next/link';

import styles from '../../styles/LandingPage.module.scss';

const HeroSection = ({width}) => {
  const contentRef = useRef()
  const [contentHeight, setContentHeight] = useState(1080)

  useLayoutEffect(() => {
    console.log(contentRef.current.offsetHeight)
    setContentHeight(contentRef.current.offsetHeight);
  }, [width])

  return (
    <section
      id={styles['hero-section']}
      className={`${styles['bg-img']} min-h-screen w-100 relative`}
    >
      <div style={{ height: `${contentHeight}px`}}>
      <video
        muted
        autoPlay
        loop
        id={styles['bg-video']}
        className="absolute top-0 z-0"
      >
        <source src="/videos/shark-boat-bg.mp4" type="video/mp4" />
      </video>
      </div>
      <div className="container absolute left-1/2 -translate-x-1/2 z-10 min-h-screen top-0" ref={contentRef}>
        <div className="grid grid-cols-12 gap-6 md:gap-2 min-h-screen pt-24 pb-14 md:p-0">
        <div className="col-span-12 md:col-span-5 my-auto md:order-last">
            <div
              className={`${styles['bg-glass']} flex flex-col p-4 rounded-lg w-5/6 mx-auto hidden md:block`}
            >
              <img src="/images/shark-gif.gif" className="rounded-lg" />
            </div>
            <div className="md:hidden w-5/6 mx-auto">
              <img src="/images/shark-gif.gif" className="rounded-lg" />
            </div>
          </div>
          <div className="col-span-12 md:col-span-7 my-auto">
            <div
              className={`${styles['bg-glass']} flex flex-col px-4 py-6 rounded-lg w-5/6 mx-auto block md:hidden text-center md:text-left items-center md:items-start`}
            >
              <h1 className="text-4xl text-primary-dark font-extrabold">
                Shark<span className="font-normal">Verse</span>
              </h1>
              <p className="text-xl md:w-5/6 my-8 text-primary-dark">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem
                ipsum dolor sit amet, consectetur adipiscing elit.{' '}
              </p>
              <div className="flex gap-6">
                <div className="">
                  <Link href="/#" passHref>
                    <img src="/icons/instagram.svg" />
                  </Link>
                </div>
                <div>
                  <Link href="/#" passHref>
                    <img src="/icons/twitter.svg" />
                  </Link>
                </div>
                <div>
                  <Link href="/#" passHref>
                    <img src="/icons/opensea.svg" />
                  </Link>
                </div>
                <div>
                  <Link href="/#" passHref>
                    <img src="/icons/discord.svg" />
                  </Link>
                </div>
                <div>
                  <Link href="/#" passHref>
                    <img src="/icons/telegram.svg" />
                  </Link>
                </div>
                <div>
                  <Link href="/#" passHref>
                    <img src="/icons/reddit.svg" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <h1 className="text-7xl font-extrabold text-primary-dark">
                Shark<span className="font-normal">Verse</span>
              </h1>
              <p className="text-xl md:w-5/6 my-6 text-primary-dark">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem
                ipsum dolor sit amet, consectetur adipiscing elit.{' '}
              </p>
              <div className="flex gap-6">
                <div className="">
                  <Link href="/#" passHref>
                    <img src="/icons/instagram.svg" />
                  </Link>
                </div>
                <div>
                  <Link href="/#" passHref>
                    <img src="/icons/twitter.svg" />
                  </Link>
                </div>
                <div>
                  <Link href="/#" passHref>
                    <img src="/icons/opensea.svg" />
                  </Link>
                </div>
                <div>
                  <Link href="/#" passHref>
                    <img src="/icons/discord.svg" />
                  </Link>
                </div>
                <div>
                  <Link href="/#" passHref>
                    <img src="/icons/telegram.svg" />
                  </Link>
                </div>
                <div>
                  <Link href="/#" passHref>
                    <img src="/icons/reddit.svg" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
