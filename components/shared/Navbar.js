import { Fragment, useState } from 'react'
import { useTheme } from '@mui/system'
import Link from 'next/link'

import { Drawer } from '@mui/material'

import { Close } from '@mui/icons-material'

const navLinks = [
	{
		text: 'About',
		link: '/#about',
	},
	{
		text: 'Sharks',
		link: '/#sharks',
	},
	{
		text: 'Roadmap',
		link: '/#roadmap',
	},
	{
		text: 'Team',
		link: '/#team',
	},
	{
		text: 'FAQ',
		link: '/#faq',
	},
	{
		text: 'Mint',
		link: '/#mint',
	},
]

const SideDrawer = ({ open, onClose }) => {
	const theme = useTheme()

	return (
		<Drawer
			anchor={'left'}
			open={open}
			onClose={onClose}
			sx={{
				'& .MuiDrawer-paper': {
					backgroundColor: theme.palette.primary.dark,
					width: '80%',
				},
			}}
		>
			<div className="p-4">
				<button onClick={onClose}>
					<Close size="large" />
				</button>

				<ul className="gap-4 uppercase text-lg flex flex-col text-primary-200 p-4 pt-12 font-medium">
					{navLinks.map((link, i) => {
						return (
							<Fragment key={i}>
								{link.text !== 'Mint' ? (
									<li>
										<a href="/#faq">{link.text}</a>
									</li>
								) : (
									<li className="flex flex-col">
										<small className="translate-y-1 text-red-500 bottom-full right-0 font-medium text-xs">
											Soon!
										</small>
										<a
											className="text-primary-light"
											href="/#mint"
										>
											Mint
										</a>
									</li>
								)}
							</Fragment>
						)
					})}
				</ul>
			</div>
		</Drawer>
	)
}

const Navbar = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false)

	return (
		<nav
			id="main-nav"
			className="flex items-center justify-between fixed z-50 bg-primary-200/95 w-full p-4"
		>
			<div className="">
				<ul className="items-center lg:gap-12 md:gap-5 uppercase hidden md:flex text-primary-dark font-medium">
					{navLinks.map((link, i) => {
						return (
							<Fragment key={i}>
								{link.text !== 'Mint' ? (
									<li>
										<a href="/#faq">{link.text}</a>
									</li>
								) : (
									<li>
										<div className="relative">
											<small className="absolute translate-y-2 text-red-500 bottom-full right-0 font-medium text-xs">
												Soon!
											</small>
											<a
												className="text-primary-light"
												href="/#mint"
											>
												Mint
											</a>
										</div>
									</li>
								)}
							</Fragment>
						)
					})}
				</ul>
				<div>
					<button
						className="items-center text-primary-dark flex md:hidden"
						onClick={() => setIsDrawerOpen(true)}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="42"
							height="42"
							fill="currentColor"
							className="bi bi-list"
							viewBox="0 0 16 16"
						>
							<path
								fillRule="evenodd"
								d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
							/>
						</svg>
					</button>
					<SideDrawer
						open={isDrawerOpen}
						onClose={() => setIsDrawerOpen(false)}
					/>
				</div>
			</div>
			<div className="md:order-first">
				<Link href="/" passHref>
					<a className="text-3xl text-primary-dark font-bold">
						Shark<span className="font-normal">Verse</span>
					</a>
				</Link>
			</div>
			<div>
				<button className="btn-wallet p-2 md:px-4 text-white rounded-md font-medium">
					<div className="flex items-center gap-2">
						<img src="/icons/wallet.svg" width={25} />
						<div className="hidden md:block">Connect Wallet</div>
					</div>
				</button>
			</div>
		</nav>
	)
}

export default Navbar
