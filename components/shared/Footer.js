import { useState } from 'react'
import Link from 'next/link'

import useTheme from '@mui/material'

import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import SidePattern from './../LandingPage/SidePattern'

import styles from '../../styles/LandingPage.module.scss'

const FooterNav = () => {
	return (
		<>
			<div
				id="footer-nav"
				className="flex justify-between text-white z-30 pt-12 md:pt-0 pb-4 px-4"
			>
				<div className="text-left">
					<h4 className="text-xl font-bold text-white">
						Shark
						<span className="text-sky-200 font-normal">Verse</span>
					</h4>
					<small className="text-gray-400">
						&copy; {new Date().getFullYear()} SHARKVERSE
					</small>
					<ul className="md:hidden flex gap-6 pt-4">
						<div className="">
							<Link href="/#" passHref>
								<img
									src="/icons/instagram-white.png"
									width={18}
								/>
							</Link>
						</div>
						<div>
							<Link href="/#" passHref>
								<img
									src="/icons/twitter-white.png"
									width={18}
								/>
							</Link>
						</div>
						<div>
							<Link href="/#" passHref>
								<img
									src="/icons/opensea-white.png"
									width={18}
								/>
							</Link>
						</div>
						<div>
							<Link href="/#" passHref>
								<img
									src="/icons/discord-white.png"
									width={18}
								/>
							</Link>
						</div>
					</ul>
				</div>
				<div>
					<div className="md:hidden flex gap-8 uppercase py-2">
						<ul className="text-right">
							<li>
								<a href="/#about">About</a>
							</li>
							<li>
								<a href="/#sharks">Sharks</a>
							</li>
							<li>
								<a href="/#roadmap">Roadmap</a>
							</li>
						</ul>
						<ul className="text-right">
							<li>
								<a href="/#faq">FAQ</a>
							</li>
							<li>
								<a href="/#team">Team</a>
							</li>
							<li>
								<a href="/#mint">Mint</a>
							</li>
						</ul>
					</div>
					<ul className="hidden md:flex gap-8 uppercase">
						<li>
							<a href="/#about">About</a>
						</li>
						<li>
							<a href="/#sharks">Sharks</a>
						</li>
						<li>
							<a href="/#roadmap">Roadmap</a>
						</li>
						<li>
							<a href="/#team">Team</a>
						</li>
						<li>
							<a href="/#how-to-mint">How to mint</a>
						</li>
						<li>
							<a href="/#mint">Mint</a>
						</li>
					</ul>
				</div>
				<ul className="hidden md:flex gap-3">
					<div>
						<Link href="/#" passHref>
							<img src="/icons/telegram-white.png" width={24} />
						</Link>
					</div>
					<div className="">
						<Link href="/#" passHref>
							<img src="/icons/instagram-white.png" width={25} />
						</Link>
					</div>
					<div>
						<Link href="/#" passHref>
							<img src="/icons/twitter-white.png" width={25} />
						</Link>
					</div>
					<div>
						<Link href="/#" passHref>
							<img src="/icons/opensea-white.png" width={25} />
						</Link>
					</div>
					<div>
						<Link href="/#" passHref>
							<img src="/icons/discord-white.png" width={25} />
						</Link>
					</div>
				</ul>
			</div>
		</>
	)
}

const Footer = ({ width }) => {
	const [expanded, setExpanded] = useState(false)

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false)
	}

	return (
		<footer
			id={`${styles['footer']}`}
			className={`${styles['bg-img']} min-h-screen w-full flex flex-col justify-between relative`}
		>
			<SidePattern
				imgPathLeft={'/images/side-patterns/end/1.png'}
				imgPathRight={'/images/side-patterns/end/2.png'}
				width={width}
			/>
			<div className="text-white text-center md:w-2/3 mx-auto px-4 pt-24 pb-12 z-30">
				<h2 className="text-6xl font-semibold mb-14">FAQ</h2>
				<div>
					<Accordion
						expanded={expanded === 'panel1'}
						onChange={handleChange('panel1')}
					>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1bh-content"
							id="panel1bh-header"
						>
							<Typography>I am an accordion</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography align="left">
								Nulla facilisi. Phasellus sollicitudin nulla et
								quam mattis feugiat. Aliquam eget maximus est,
								id dignissim quam.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion
						expanded={expanded === 'panel2'}
						onChange={handleChange('panel2')}
					>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1bh-content"
							id="panel1bh-header"
						>
							<Typography>I am an accordion</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography align="left">
								Nulla facilisi. Phasellus sollicitudin nulla et
								quam mattis feugiat. Aliquam eget maximus est,
								id dignissim quam.
							</Typography>
						</AccordionDetails>
					</Accordion>
				</div>
			</div>
			<FooterNav />
		</footer>
	)
}

export default Footer
