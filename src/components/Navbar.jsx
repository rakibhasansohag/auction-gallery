import { BiBell } from 'react-icons/bi';
import { FiMenu } from 'react-icons/fi';
import { useState } from 'react';
import { CgClose } from 'react-icons/cg';

const Navbar = ({ favoritesCount }) => {
	const [isOpen, setIsOpen] = useState(false);

	console.log('navbar ', favoritesCount);

	return (
		<div className='drawer'>
			<input
				id='nav-drawer'
				type='checkbox'
				className='drawer-toggle'
				checked={isOpen}
				onChange={(e) => setIsOpen(e.target.checked)}
			/>

			{/* Main content */}
			<div className='drawer-content'>
				<header className='container mx-auto flex items-center justify-between py-4 px-2 sm:px-0'>
					{/* Mobile menu button */}
					<label
						htmlFor='nav-drawer'
						className='btn btn-ghost btn-circle drawer-button md:hidden'
					>
						<FiMenu className='text-2xl' />
					</label>

					{/* Logo */}
					<h2 className='text-2xl font-bold'>
						Auction<span className='text-primary'>Gallery</span>
					</h2>

					{/* // Point : Desktop navigation */}
					<nav className='hidden md:flex gap-6'>
						{['Home', 'Auctions', 'Categories', 'How it works'].map((item) => (
							<a
								key={item}
								href={`#${item.toLowerCase()}`}
								className='relative text-black font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full'
							>
								{item}
							</a>
						))}
					</nav>

					{/* Right side items */}
					<div className='flex items-center gap-4'>
						<div className='indicator'>
							{/* Cart Item  */}
							<span className='indicator-item badge badge-primary badge-xs bg-slate-400 border-0 flex items-center justify-center text-black font-bold'>
								{favoritesCount}
							</span>
							<button className='btn btn-ghost btn-circle bg-slate-400 hover:bg-slate-200 pr-1'>
								<BiBell className='text-xl' />
							</button>
						</div>

						<div className='avatar'>
							<div className='w-10 rounded-full'>
								<a
									href='https://www.facebook.com/rakibhasansohag133'
									target='_blank'
									rel='noopener noreferrer'
								>
									<img src='/avatar.jpg' alt='User avatar' />
								</a>
							</div>
						</div>
					</div>
				</header>
			</div>

			{/* Mobile drawer */}
			<div className='drawer-side z-50'>
				<label
					htmlFor='nav-drawer'
					className='drawer-overlay'
					onClick={() => setIsOpen(false)}
				></label>

				<div className='menu p-4 w-80 min-h-full bg-base-100 text-base-content'>
					{/* Drawer header */}
					<div className='flex items-center justify-between mb-8'>
						<h2 className='text-xl font-bold'>
							Auction<span className='text-primary'>Gallery</span>
						</h2>
						<label htmlFor='nav-drawer' className='btn btn-ghost btn-sm '>
							<CgClose className='text-2xl' />
						</label>
					</div>

					{/* Mobile navigation links */}
					<ul className='space-y-2'>
						{['Home', 'Auctions', 'Categories', 'How it works'].map((item) => (
							<li key={item}>
								<a
									href={`#${item.toLowerCase()}`}
									className='text-lg p-2 hover:bg-base-200 rounded-lg'
									onClick={() => setIsOpen(false)}
								>
									{item}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;

