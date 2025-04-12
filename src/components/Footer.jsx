const Footer = () => {
	return (
		<footer className='bg-white py-20 text-center text-gray-800 space-y-4'>
			<h2 className='text-2xl font-bold'>
				<span className='text-primary'>Auction</span>
				<span className='text-yellow-400'>Gallery</span>
			</h2>

			<p className='font-semibold text-lg tracking-wider'>Bid. Win. Own.</p>

			<nav className='flex flex-wrap justify-center gap-6'>
				<a
					href='#'
					className='text-base font-semibold transition duration-300 hover:scale-110 hover:text-primary'
				>
					Home
				</a>
				<a
					href='#'
					className='text-base font-semibold transition duration-300 hover:scale-110 hover:text-primary'
				>
					Auctions
				</a>
				<a
					href='#'
					className='text-base font-semibold transition duration-300 hover:scale-110 hover:text-primary'
				>
					Categories
				</a>
				<a
					href='#'
					className='text-base font-semibold transition duration-300 hover:scale-110 hover:text-primary'
				>
					How it works
				</a>
			</nav>

			<p className='text-sm text-gray-600 mt-4 font-semibold'>
				© {new Date().getFullYear()} AuctionHub. All rights reserved.
			</p>

			<p className='text-lg font-semibold mt-4'>
				Made with ❤️ by{' '}
				<a
					href='https://github.com/rakibhasansohag'
					className='relative text-primary font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 after:ease-in-out hover:after:w-full'
					target='_blank'
				>
					Rakib Hasan Sohag
				</a>
			</p>
		</footer>
	);
};

export default Footer;

