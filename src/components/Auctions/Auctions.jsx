import { useState, useEffect } from 'react';
import { CiHeart } from 'react-icons/ci';
import { FaHeart } from 'react-icons/fa';
import { MdCancel } from 'react-icons/md';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Auctions = ({ favorites, setFavorites }) => {
	const [auctionsData, setAuctionsData] = useState({ auctions: [] });

	const [disabledBids, setDisabledBids] = useState([]);

	// For drawer animation
	const [removingId, setRemovingId] = useState(null);
	const [animateCart, setAnimateCart] = useState(false);

	// For Total bid price animation
	const [displayTotal, setDisplayTotal] = useState(0);
	const [animateTotal, setAnimateTotal] = useState(false);

	useEffect(() => {
		const fetchAuctionsData = async () => {
			try {
				const response = await fetch('/auctions.json');
				const data = await response.json();
				setAuctionsData(data);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchAuctionsData();

		// Load favorites from localStorage
		const storedFavs = localStorage.getItem('favorites');
		if (storedFavs) {
			const parsed = JSON.parse(storedFavs);
			setFavorites(parsed);
			setDisabledBids(parsed.map((item) => item.id));
		}
	}, [setFavorites]);

	const addToFavorites = (item) => {
		const exists = favorites.find((f) => f.id === item.id);
		if (!exists) {
			const updated = [...favorites, item];
			setFavorites(updated);
			setAnimateCart(true);
			setTimeout(() => setAnimateCart(false), 500);
			setDisabledBids([...disabledBids, item.id]);
			localStorage.setItem('favorites', JSON.stringify(updated));
			toast.success(`${item.title} added to favorites!`);
		}
	};

	const removeFromFavorites = (itemId) => {
		setRemovingId(itemId);
		setTimeout(() => {
			const updated = favorites.filter((f) => f.id !== itemId);
			setFavorites(updated);
			setDisabledBids(disabledBids.filter((id) => id !== itemId));
			localStorage.setItem('favorites', JSON.stringify(updated));
			toast.info(`Removed from favorites Successfully!`);
			setRemovingId(null);
		}, 400);
	};

	const getTotalPrice = () => {
		let total = 0;
		for (let i = 0; i < favorites.length; i++) {
			total += favorites[i].currentBidPrice;
		}
		return total;
	};

	useEffect(() => {
		const actualTotal = getTotalPrice();
		const duration = 500;
		const startTime = performance.now();
		const initialValue = displayTotal;

		const animate = (currentTime) => {
			const elapsed = currentTime - startTime;
			const progress = Math.min(elapsed / duration, 1);
			const easedProgress = 0.5 - Math.cos(progress * Math.PI) / 2;

			const newValue =
				initialValue + (actualTotal - initialValue) * easedProgress;

			setDisplayTotal(newValue.toFixed(2));

			if (progress < 1) {
				requestAnimationFrame(animate);
			} else {
				setDisplayTotal(actualTotal);
			}
		};

		setAnimateTotal(true);
		const animationFrame = requestAnimationFrame(animate);

		return () => cancelAnimationFrame(animationFrame);
	}, [favorites]);

	return (
		<section className='py-16 bg-[#EBF0F5]' id='auctions'>
			<div className='container mx-auto px-4'>
				<div className='my-8'>
					<h2 className='text-3xl font-bold mb-2'>Active Auctions</h2>
					<p className='text-gray-600 text-lg'>
						Discover and bid on extraordinary items
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
					{/* Left - Table */}
					<div className='md:col-span-2 bg-white rounded-xl p-2 sm:p-6 shadow-lg'>
						<div className='overflow-x-auto'>
							<table className='table'>
								<thead>
									<tr>
										<th className='text-lg'>Items</th>
										<th className='text-lg text-center'>Current Bid</th>
										<th className='text-lg text-center'>Time Left</th>
										<th className='text-lg text-center'>Bid Now</th>
									</tr>
								</thead>
								<tbody>
									{auctionsData.auctions.map((item) => {
										const isFav =
											favorites.findIndex((f) => f.id === item.id) !== -1;
										const isDisabled = disabledBids.includes(item.id);

										return (
											<tr
												key={item?.id}
												className='hover:bg-base-200 transition'
											>
												<td className='text-start w-[250px]'>
													<div className='flex items-center gap-4'>
														<div className='avatar'>
															<div className='w-16 h-16 rounded-lg'>
																<img src={item?.image} alt={item?.title} />
															</div>
														</div>
														<div className='font-medium'>{item?.title}</div>
													</div>
												</td>
												<td className='text-center w-[150px]'>
													${item?.currentBidPrice?.toLocaleString()}
												</td>
												<td className='text-center w-[150px]'>
													{item.timeLeft}
												</td>
												<td className='text-center w-[100px]'>
													<button
														onClick={() => addToFavorites(item)}
														disabled={isDisabled}
														className={`transition-transform duration-200 ${
															isFav ? 'animate-pingOnce' : ''
														}`}
													>
														{isFav ? (
															<FaHeart
																size={28}
																className='text-red-500 cursor-not-allowed'
															/>
														) : (
															<CiHeart
																size={32}
																className='cursor-pointer hover:text-red-500'
															/>
														)}
													</button>
												</td>
											</tr>
										);
									})}
								</tbody>
							</table>
						</div>
					</div>

					{/* Right - Cart */}
					<div className='md:col-span-1 bg-white rounded-xl py-6 shadow-lg h-fit'>
						<h3 className='text-2xl font-semibold mb-6 text-center border-b border-gray-200 pb-3 flex items-center justify-center gap-2'>
							{favorites.length > 0 ? (
								<FaHeart
									size={25}
									className={`text-red-500 mr-1 ${
										animateCart ? 'animate-pingOnce' : ''
									}`}
								/>
							) : (
								<CiHeart
									size={32}
									className={`${
										favorites.length === 0 ? 'animate-fadeIn' : ''
									}`}
								/>
							)}
							<span
								className={`${favorites.length === 0 ? 'animate-fadeIn' : ''}`}
							>
								Favorite Items
							</span>
						</h3>

						{favorites.length === 0 ? (
							<div className=' rounded-lg py-8 text-center max-w-72 mx-auto animate-fadeIn'>
								<p className='text-gray-500 text-2xl font-semibold mb-3'>
									No favorites yet
								</p>
								<p className='text-lg text-gray-400 mt-2'>
									Click the heart icon on any item to add it to your favorites
								</p>
							</div>
						) : (
							<div
								className={`space-y-4 px-6 ${
									animateCart ? 'animate-slideFade' : ''
								}`}
							>
								{favorites.map((fav, index) => (
									<div
										key={fav.id}
										className={`flex items-center justify-between gap-4 ${
											index !== favorites.length - 1
												? 'border-b border-gray-200'
												: ''
										} pb-4 transition-all duration-300 ${
											removingId === fav.id ? 'animate-slideOutFade' : ''
										}`}
									>
										<img
											src={fav.image}
											alt={fav.title}
											className='w-16 h-16 rounded-lg object-cover'
										/>
										<div className='flex-1'>
											<h4 className='font-semibold'>{fav.title}</h4>
											<div className='flex items-center gap-4'>
												<p className='text-sm text-gray-600'>
													${fav.currentBidPrice.toLocaleString()}
												</p>
												<p className='text-sm text-gray-600'>
													{' '}
													Bids: {fav.bidsCount}
												</p>
											</div>
										</div>
										<button
											onClick={() => removeFromFavorites(fav.id)}
											className='text-xl font-bold text-gray-400 hover:text-red-600 cursor-pointer'
										>
											<MdCancel size={30} />
										</button>
									</div>
								))}
							</div>
						)}

						{/* Total */}
						<div className='pt-6 px-6 mt-2 border-t border-gray-200 flex justify-between items-center'>
							<h3 className='text-xl font-semibold'>Total Bids Amount</h3>
							<div className='text-3xl font-bold'>
								<span
									className={`total-animate ${
										animateTotal ? 'total-pulse' : ''
									}`}
								>
									${displayTotal.toLocaleString()}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<ToastContainer position='top-left' autoClose={2500} />
		</section>
	);
};

export default Auctions;
