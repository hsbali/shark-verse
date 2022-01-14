import styles from '../../styles/LandingPage.module.scss';

const AboutSection = () => {
  return (
    <section
      id={`${styles['about']}`}
      className={`${styles['bg-img']} min-h-screen w-full flex items-center`}
    >
      <div className="text-white text-center md:w-2/3 mx-auto p-4 z-50">
        <h2 className="text-6xl font-bold mb-14">About SharkVerse</h2>
        <p className="mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat
          id porta nibh venenatis. Donec massa sapien faucibus et molestie ac
          feugiat sed lectus. In hac habitasse platea dictumst vestibulum
          rhoncus. Facilisi etiam dignissim diam quis enim lobortis.
          Pellentesque elit ullamcorper dignissim cras tincidunt. Mi proin sed
          libero enim. Vel quam elementum pulvinar etiam non quam. Malesuada
          pellentesque elit eget gravida cum sociis. Tortor posuere ac ut
          consequat semper. Lorem ipsum dolor sit amet consectetur adipiscing.
          In pellentesque massa placerat duis. Venenatis lectus magna fringilla
          urna.
        </p>
        <p className='mb-14'>
          Sagittis purus sit amet volutpat consequat mauris nunc congue nisi.
          Scelerisque eu ultrices vitae auctor. Nunc consequat interdum varius
          sit amet mattis vulputate. Ullamcorper dignissim cras tincidunt
          lobortis. Vitae turpis massa sed elementum tempus egestas sed sed.
          Tincidunt augue interdum velit euismod. Aliquet porttitor lacus luctus
          accumsan tortor posuere ac ut. Ante metus dictum at tempor commodo
          ullamcorper a lacus.
        </p>
        <div className="flex justify-center gap-12">
          <button className="bg-blue-900 px-8 py-4 text-white rounded-md font-medium uppercase">
            <div className="flex items-center gap-1">
              <img src="/icons/opensea-white.png" width={25} />
              <div className="hidden md:block">opensea</div>
            </div>
          </button>
          <button className="bg-blue-900 px-8 py-4 text-white rounded-md font-medium uppercase">
            <div className="flex items-center gap-1">
              <img src="/icons/discord-white.png" width={25} />
              <div className="hidden md:block">discord</div>
            </div>
          </button>
          <button className="bg-blue-900 px-8 py-4 text-white rounded-md font-medium uppercase">
            <div className="flex items-center gap-1">
              <img src="/icons/twitter-white.png" width={25} />
              <div className="hidden md:block">twitter</div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
