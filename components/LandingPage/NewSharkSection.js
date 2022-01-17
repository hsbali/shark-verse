import React from 'react';
import Carousel from 'react-elastic-carousel';

import styles from '../../styles/LandingPage.module.scss';

const NewSharkSection = ({ width }) => {
  const items = [
    { id: 1, imgPath: '/images/shark-2.png' },
    { id: 2, imgPath: '/images/shark-1.png' },
    { id: 3, imgPath: '/images/shark-2.png' },
    { id: 4, imgPath: '/images/shark-1.png' },
    { id: 5, imgPath: '/images/shark-2.png' },
  ];

  const carouselBreakpoints = [
    { width: 0, itemsToShow: 1, itemsToScroll: 1 },
    { width: 350, itemsToShow: 2, itemsToScroll: 1 },
    { width: 640, itemsToShow: 4, itemsToScroll: 1 },
  ];

  return (
    <section
      id={`${styles['sharks']}`}
      className={`${styles['bg-img']} min-h-screen w-full flex items-center relative`}
    >
      <div
        className="absolute left-0 bottom-0 z-20 h-full"
        style={{
          maxWidth: '500px',
          width: `${Math.max(width - 500, 350)}px`,
          minWidth: '350px',
          overflow: 'hidden',
        }}
      >
        <div className="relative h-full float-right" style={{ width: '500px' }}>
          <img
            src="/images/side-patterns/start-loop/1.png"
            className="absolute right-0 h-full"
            style={{ width: '500px' }}
          />
        </div>
      </div>
      <div
        className="absolute right-0 bottom-0 z-20 h-full"
        style={{
          maxWidth: '500px',
          width: `${Math.max(width - 500, 350)}px`,
          minWidth: '350px',
          overflow: 'hidden',
        }}
      >
        <div className="relative h-full float-left" style={{ width: '500px' }}>
          <img
            src="/images/side-patterns/start-loop/2.png"
            className="absolute h-full"
            style={{ width: '500px' }}
          />
        </div>
      </div>
      <div className="text-white text-center md:w-2/3 mx-auto p-4 z-30">
        <h2 className="text-6xl font-semibold mb-14">
          Meet the new Sharks in Sea
        </h2>
        <p className="text-xl text-sky-200 mb-14">
          Meet the new Sharks who are ready to rule the OpenSea. It’s gonna be
          Awesome !!
        </p>
        <Carousel
          itemsToShow={4}
          itemsToScroll={1}
          breakPoints={carouselBreakpoints}
        >
          {items.map((item) => {
            return (
              <div className="mx-1" key={item.id}>
                <img src={item.imgPath} />
              </div>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
};

export default NewSharkSection;
