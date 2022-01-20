import { useState, useLayoutEffect } from 'react'

const SidePattern = ({ imgPathLeft, imgPathRight, width, height }) => {
	const [patternWidth, setPatternWidth] = useState(500)

	useLayoutEffect(() => {
		setPatternWidth(width - 500)
	}, [width])

	return (
		<>
			<div
				className="absolute left-0 z-20"
				style={{
					maxWidth: '500px',
					width: `${patternWidth}px`,
					height: height ? height : '100%',
					minWidth: '300px',
					overflow: 'hidden',
				}}
			>
				<div
					className="relative h-full float-right"
					style={{ height: height ? height : '100%', width: '500px' }}
				>
					<img
						src={imgPathLeft}
						alt="left-side-pattern"
						className="absolute right-0 h-full"
						style={{
							height: height ? height : '100%',
							width: '500px',
						}}
					/>
				</div>
			</div>
			<div
				className="absolute right-0 z-20"
				style={{
					maxWidth: '500px',
					width: `${patternWidth}px`,
					height: height ? height : '100%',
					minWidth: '300px',
					overflow: 'hidden',
				}}
			>
				<div
					className="relative h-full float-left"
					style={{ height: height ? height : '100%', width: '500px' }}
				>
					<img
						src={imgPathRight}
						alt="right-side-pattern"
						className="absolute h-full"
						style={{
							height: height ? height : '100%',
							width: '500px',
						}}
					/>
				</div>
			</div>
		</>
	)
}

export default SidePattern
