import SidePattern from './SidePattern'

import styles from '../../styles/LandingPage.module.scss'

const AboutSection = ({ width }) => {
	return (
		<section
			id={`${styles['about']}`}
			className={`${styles['bg-img']} min-h-screen w-full flex items-center relative`}
		>
			<SidePattern
				imgPathLeft={'/images/side-patterns/start/1.png'}
				imgPathRight={'/images/side-patterns/start/2.png'}
				width={width}
			/>
			<div className="text-white text-center md:w-2/3 mx-auto px-6 py-24 z-30">
				<h2 className="text-4xl md:text-6xl font-semibold mb-14">
					About SharkVerse
				</h2>
				<p className="md:text-xl md:mb-14">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Consequat id porta nibh venenatis. Donec massa
					sapien faucibus et molestie ac feugiat sed lectus. In hac
					habitasse platea dictumst vestibulum rhoncus. Facilisi etiam
					dignissim diam quis enim lobortis. Pellentesque elit
					ullamcorper dignissim cras tincidunt. Mi proin sed libero
					enim. Vel quam elementum pulvinar etiam non quam. Malesuada
					pellentesque elit eget gravida cum sociis. Tortor posuere ac
					ut consequat semper. Lorem ipsum dolor sit amet consectetur
					adipiscing. In pellentesque massa placerat duis. Venenatis
					lectus magna fringilla urna.
				</p>
				<div className="hidden md:flex flex-wrap justify-center gap-12">
					<button className="bg-primary-main px-8 py-4 text-white rounded-md font-medium uppercase hover:bg-primary-dark transition-all duration-100">
						<div className="flex items-center gap-1">
							<img src="/icons/opensea-white.png" width={25} />
							<div className="hidden md:block">opensea</div>
						</div>
					</button>
					<button className="bg-primary-main px-8 py-4 text-white rounded-md font-medium uppercase hover:bg-primary-dark transition-all duration-100">
						<div className="flex items-center gap-1">
							<img src="/icons/discord-white.png" width={25} />
							<div className="hidden md:block">discord</div>
						</div>
					</button>
					<button className="bg-primary-main px-8 py-4 text-white rounded-md font-medium uppercase hover:bg-primary-dark transition-all duration-100">
						<div className="flex items-center gap-1">
							<img src="/icons/twitter-white.png" width={25} />
							<div className="hidden md:block">twitter</div>
						</div>
					</button>
				</div>
			</div>
		</section>
	)
}

export default AboutSection
