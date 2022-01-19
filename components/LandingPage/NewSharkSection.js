import React from 'react'
import Carousel from 'react-elastic-carousel'

import styles from '../../styles/LandingPage.module.scss'
import SidePattern from './SidePattern'

const NewSharkSection = ({ width }) => {
	const items = [
		{ id: 1, imgPath: '/images/shark-2.png' },
		{ id: 2, imgPath: '/images/shark-1.png' },
		{ id: 3, imgPath: '/images/shark-2.png' },
		{ id: 4, imgPath: '/images/shark-1.png' },
		{ id: 5, imgPath: '/images/shark-2.png' },
	]

	const carouselBreakpoints = [
		{ width: 0, itemsToShow: 1, itemsToScroll: 1 },
		{ width: 350, itemsToShow: 2, itemsToScroll: 1 },
		{ width: 640, itemsToShow: 4, itemsToScroll: 1 },
	]

	return (
		<section
			id="sharks"
			className={`${styles['shark-bg-img']} min-h-screen w-full flex items-center relative`}
		>
			<SidePattern
				imgPathLeft={'/images/side-patterns/start-loop/1.png'}
				imgPathRight={'/images/side-patterns/start-loop/2.png'}
				width={width}
			/>
			<div className="text-white text-center md:w-2/3 mx-auto p-4 py-24 z-30">
				<h2 className="text-4xl md:text-6xl font-semibold mb-14">
					Meet the new Sharks in Sea
				</h2>
				<p className="md:text-xl text-primary-200 mb-14">
					Meet the new Sharks who are ready to rule the OpenSea. It’s
					gonna be Awesome !!
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
						)
					})}
				</Carousel>
			</div>
		</section>
	)
}

export default NewSharkSection
