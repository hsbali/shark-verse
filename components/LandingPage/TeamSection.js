import SidePattern from './SidePattern'

import styles from '../../styles/LandingPage.module.scss'

const TeamSection = ({ width }) => {
	return (
		<section
			id="team"
			className={`${styles['team-bg-img']} min-h-screen w-full flex items-center relative`}
		>
			<SidePattern
				imgPathLeft={'/images/side-patterns/loop/1.png'}
				imgPathRight={'/images/side-patterns/loop/2.png'}
				width={width}
			/>
			<div className="text-white text-center container mx-auto px-4 py-24 z-30">
				<h2 className="text-4xl md:text-6xl font-semibold mb-14">
					Team
				</h2>

				<div className="grid grid-cols-12 gap-4">
					<div className="col-span-12 sm:col-span-6 md:col-span-3 flex flex-col items-center gap-3">
						<div className="rounded-full ring-4 ring-primary-light text-center lg:w-8/12 mx-auto ">
							<img
								src="/images/ceo.png"
								alt="team-member"
								className="p-1"
							/>
						</div>
						<strong className="pt-3">Mr. Xyz Abc</strong>
						<p>CEO, Mastermind</p>
						<img
							src="/icons/twitter-white.png"
							alt="user-twitter"
						/>
					</div>
					<div className="col-span-12 sm:col-span-6 md:col-span-3 flex flex-col items-center gap-3">
						<div className="rounded-full ring-4 ring-primary-light text-center lg:w-8/12 mx-auto ">
							<img
								src="/images/ceo.png"
								alt="team-member"
								className="p-1"
							/>
						</div>
						<strong className="pt-3">Mr. Xyz Abc</strong>
						<p>CEO, Mastermind</p>
						<img
							src="/icons/twitter-white.png"
							alt="user-twitter"
						/>
					</div>
					<div className="col-span-12 sm:col-span-6 md:col-span-3 flex flex-col items-center gap-3">
						<div className="rounded-full ring-4 ring-primary-light text-center lg:w-8/12 mx-auto ">
							<img
								src="/images/ceo.png"
								alt="team-member"
								className="p-1"
							/>
						</div>
						<strong className="pt-3">Mr. Xyz Abc</strong>
						<p>CEO, Mastermind</p>
						<img
							src="/icons/twitter-white.png"
							alt="user-twitter"
						/>
					</div>
					<div className="col-span-12 sm:col-span-6 md:col-span-3 flex flex-col items-center gap-3">
						<div className="rounded-full ring-4 ring-primary-light text-center lg:w-8/12 mx-auto ">
							<img
								src="/images/ceo.png"
								alt="team-member"
								className="p-1"
							/>
						</div>
						<strong className="pt-3">Mr. Xyz Abc</strong>
						<p>CEO, Mastermind</p>
						<img
							src="/icons/twitter-white.png"
							alt="user-twitter"
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default TeamSection
