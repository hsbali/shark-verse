import SidePattern from './SidePattern'
import Carousel from "react-elastic-carousel"

import styles from '../../styles/LandingPage.module.scss'
import { FadeInScale, FadeInUp } from '../animations/Fade'
import { Fragment } from 'react'
import Link from 'next/link'

const TeamSection = ({ width }) => {
	const team = [
		{
			img: "/images/ceo.png",
			name: "Mr.Xyz Abc",
			desc: "Ceo, Mastermind",
			social: [
				{
					iconPath: "/icons/twitter-white.png",
					name: "twitter",
					href: "/#"
				}
			]
		},
		{
			img: "/images/ceo.png",
			name: "Mr.Xyz Abc",
			desc: "Ceo, Mastermind",
			social: [
				{
					iconPath: "/icons/twitter-white.png",
					name: "twitter",
					href: "/#"
				}
			]
		},
		{
			img: "/images/ceo.png",
			name: "Mr.Xyz Abc",
			desc: "Ceo, Mastermind",
			social: [
				{
					iconPath: "/icons/twitter-white.png",
					name: "twitter",
					href: "/#"
				}
			]
		},
		{
			img: "/images/ceo.png",
			name: "Mr.Xyz Abc",
			desc: "Ceo, Mastermind",
			social: [
				{
					iconPath: "/icons/twitter-white.png",
					name: "twitter",
					href: "/#"
				}
			]
		},
	]


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
				<FadeInUp>
					<h2 className="text-4xl md:text-6xl font-semibold mb-14">
						Team
					</h2>
				</FadeInUp>

				<div className="grid-cols-12 gap-4 hidden md:grid">
					{team.map((el, i) => {
						return (
							<Fragment key={i}>
								<FadeInUp transition={{ delay: 0.2 * i }} className="col-span-12 sm:col-span-6 md:col-span-3 flex flex-col items-center gap-3">
									<div className="rounded-full ring-4 ring-primary-light text-center lg:w-8/12 mx-auto ">
										<img
											src={el.img}
											alt={el.name}
											className="p-1"
										/>
									</div>
									<strong className="pt-3">{el.name}</strong>
									<p>{el.desc}</p>
									<div className='flex items-center gap-3'>
										{el.social.map((item, i) => {
											return (
												<Fragment key={i}>
													<Link href={item.href} passHref>
														<img
															src={item.iconPath}
															alt={item.name}
														/>
													</Link>
												</Fragment>
											)
										})}
									</div>
								</FadeInUp>
							</Fragment>
						)
					})}
				</div>
				<div className="md:hidden">
					<FadeInScale transition={{ delay: 0.2 }}>
						<Carousel>
							{team.map((el, i) => {
								return (
									<Fragment key={i}>
										<div className="col-span-12 sm:col-span-6 md:col-span-3 flex flex-col items-center gap-3">
											<div className="rounded-full m-4 ring-4 ring-primary-light text-center lg:w-8/12 mx-auto ">
												<img
													src={el.img}
													alt={el.name}
													className="p-1"
												/>
											</div>
											<strong className="pt-3">{el.name}</strong>
											<p>{el.desc}</p>
											<div className='flex items-center gap-3'>
												{el.social.map((item, i) => {
													return (
														<Fragment key={i}>
															<Link href={item.href} passHref>
																<img
																	src={item.iconPath}
																	alt={item.name}
																/>
															</Link>
														</Fragment>
													)
												})}
											</div>
										</div>
									</Fragment>
								)
							})}
						</Carousel>
					</FadeInScale>
				</div>
			</div>
		</section>
	)
}

export default TeamSection
