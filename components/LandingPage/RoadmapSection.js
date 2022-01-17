import SidePattern from './SidePattern';

import styles from '../../styles/LandingPage.module.scss';

const RoadmapSection = ({ width }) => {
  return (
    <section
      id={`${styles['about']}`}
      className={`${styles['bg-img']} min-h-screen w-full flex items-center relative`}
    >
      <SidePattern
        imgPathLeft={'/images/side-patterns/loop/1.png'}
        imgPathRight={'/images/side-patterns/loop/2.png'}
        width={width}
      />
      <div className="text-white text-center md:w-2/3 mx-auto px-4 py-24 z-30">
      <h2 className="text-6xl font-semibold mb-14">Roadmap</h2>
      </div>
    </section>
  );
};

export default RoadmapSection;
