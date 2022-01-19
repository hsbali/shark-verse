import { Fragment, useLayoutEffect, useRef, useState } from 'react'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import StepContent from '@mui/material/StepContent'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import SidePattern from './SidePattern'

import styles from '../../styles/LandingPage.module.scss'

const RoadmapSection = ({ width, height }) => {
	const [bgCount, setBgCount] = useState(1)
	const contentRef = useRef()
	const [contentHeight, setContentHeight] = useState(1080)

	const roadmap1 = [
		{
			title: 'Project Launch',
			iconPath: '/icons/shark-fin-fill.svg',
			body: (
				<p className="mt-4 font-light text-primary-200">
					The launch takes place in 2 rounds. <br />
					Round 1 (presale) - Whitelist early access for first 100 OG
					Shark holders. <br />
					Round 2 - the main sales launch for everyone.
				</p>
			),
		},
		{
			title: 'Mega Giveaway',
			iconPath: '/icons/shark-fin.svg',
			body: (
				<p className="mt-4 font-light text-primary-200">
					We will giveaway 10 new Sharks
				</p>
			),
		},
		{
			title: 'Mega Giveaway',
			iconPath: '/icons/shark-fin.svg',
			body: (
				<p className="mt-4 font-light text-primary-200">
					We will giveaway 10 new Sharks
				</p>
			),
		},
	]

	useLayoutEffect(() => {
		setContentHeight(contentRef.current.offsetHeight)
		setBgCount(Math.ceil(contentHeight / height))
	}, [width, height])

	return (
		<section
			id="roadmap"
			className={`w-full flex relative`}
			style={{ height: `${100 * bgCount}vh` }}
		>
			<div className="absolute top-0 w-full">
				<div className="relative">
					{Array(bgCount)
						.fill(0)
						.map((el, i) => {
							return (
								<Fragment key={i}>
									{i + 1 !== bgCount ? (
										<>
											<div
												className={`${styles['roadmap-bg-img1']} h-screen w-full`}
											>
												<SidePattern
													imgPathLeft={
														'/images/side-patterns/loop/1.png'
													}
													imgPathRight={
														'/images/side-patterns/loop/2.png'
													}
													width={width}
													height={'100vh'}
												/>
											</div>
											<div className="relative">
												<div className="absolute top-1/2 -translate-y-1/2 w-full z-10">
													<img
														src="/images/connectors/blue-blue.png"
														className="w-full"
													/>
												</div>
											</div>
										</>
									) : (
										<>
											<div
												className={`${styles['roadmap-bg-img2']} h-screen w-full`}
											>
												<SidePattern
													imgPathLeft={
														'/images/side-patterns/loop/1.png'
													}
													imgPathRight={
														'/images/side-patterns/loop/2.png'
													}
													width={width}
													height={'100vh'}
												/>
											</div>
										</>
									)}
								</Fragment>
							)
						})}
				</div>
			</div>
			<div
				className="text-white text-center md:w-2/3 mx-auto px-4 py-24 pt-40 md:pt-32 z-30"
				ref={contentRef}
			>
				<h2 className="text-4xl md:text-6xl font-semibold mb-14">
					Roadmap
				</h2>

				<div className="w-4/5 mx-auto">
					<div className="last-of-type:pb-0">
						{roadmap1.map((el, i) => (
							<Fragment key={i}>
								<div className="text-left pl-10 border-l-2 pb-10 last-of-type:pb-0 border-primary-200 relative">
									<div
										className="absolute left-0 h-full -translate-x-1/2 bg-primary-dark blur-xs rounded-full"
										style={{
											width: '25px',
											height: '25px',
										}}
									></div>
									<div className="absolute left-0 -translate-x-1/2 -translate-y-3 overflow-hidden">
										<img
											src={el.iconPath}
											alt="milestone"
											className="w-9/12 mx-auto"
										/>
									</div>
									<h4 className="text-xl font-medium">
										{el.title}
									</h4>
									{el.body}
								</div>
							</Fragment>
						))}
						<h3 className="text-2xl md:text-3xl text-left my-6 -translate-x-3 font-bold">
							Q1 2022 Milestone
						</h3>
						{roadmap1.map((el, i) => (
							<Fragment key={i}>
								<div className="text-left pl-10 border-l-2 pb-10 last-of-type:pb-0 border-primary-200 relative">
									<div
										className="absolute left-0 h-full -translate-x-1/2 bg-primary-dark blur-xs rounded-full"
										style={{
											width: '25px',
											height: '25px',
										}}
									></div>
									<div className="absolute left-0 -translate-x-1/2 -translate-y-3 overflow-hidden">
										<img
											src={el.iconPath}
											alt="milestone"
											className="w-9/12 mx-auto"
										/>
									</div>
									<h4 className="text-xl font-medium">
										{el.title}
									</h4>
									{el.body}
								</div>
							</Fragment>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default RoadmapSection
