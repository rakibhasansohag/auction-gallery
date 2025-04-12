import { useEffect, useState } from 'react';
import bannerImg from '/banner.png';

const rotatingWords = ['Unique', 'Antique', 'Rare', 'Exclusive', 'Legendary'];

const Banner = () => {
	const [wordIndex, setWordIndex] = useState(0);
	const [fade, setFade] = useState(true);

	useEffect(() => {
		const interval = setInterval(() => {
			setFade(false);

			setTimeout(() => {
				setWordIndex((prev) => (prev + 1) % rotatingWords.length);
				setFade(true);
			}, 500);
		}, 2500);

		return () => clearInterval(interval);
	}, []);

	return (
		<section
			className='sm:py-[200px] py-[100px] w-full'
			style={{
				background: `url(${bannerImg}) no-repeat center top / cover`,
			}}
		>
			<div className='container mx-auto'>
				<div className='text-white text-left max-w-2xl md:w-1/2 px-2 sm:px-0'>
					<div>
						<h1 className='text-3xl md:text-5xl lg:text-7xl font-bold mb-4'>
							Bid on{' '}
							<span
								className={`fade-text inline-block text-yellow-400 ${
									fade ? 'fade-in' : 'fade-out'
								}`}
							>
								{rotatingWords[wordIndex]}
							</span>{' '}
							Items from Around the World
						</h1>
						<p className='mb-6 text-lg md:text-2xl lg:text-3xl text-gray-400'>
							Discover rare collectibles, luxury goods, and vintage treasures in
							our curated auctions
						</p>

						{/* Desktop Button */}
						<div className='relative group overflow-hidden rounded-full'>
							<button
								className='btn btn-primary border-0 bg-white text-base rounded-full px-6 
                transition-all duration-500 hover:text-white
                hover:shadow-lg hover:scale-105
                relative z-10 overflow-hidden
                before:absolute before:left-0 before:top-0 before:h-full before:w-0 
                before:bg-primary before:transition-all before:duration-500
                hover:before:w-full'
							>
								<span className='relative mix-blend-difference '>
									Explore Auctions
								</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Banner;
