import { useEffect, useState } from 'react';

const Splash = ({ onFinish }) => {
	const [animateOut, setAnimateOut] = useState(false);
	const [imageLoaded, setImageLoaded] = useState(false);


useEffect(() => {
	const img = new Image();
	img.src = '/free_palestine1.jpg';
	img.onload = () => setImageLoaded(true);
}, []);

useEffect(() => {
	if (imageLoaded) {
		const timer = setTimeout(() => {
			setAnimateOut(true);
			setTimeout(() => {
				onFinish();
			}, 600);
		}, 2000);

		return () => clearTimeout(timer);
	}
}, [imageLoaded, onFinish]);

return (
	<div
		className={`fixed inset-0 bg-center bg-cover z-50 flex items-center justify-center transition-all duration-500 w-full h-full ${
			animateOut ? 'animate-fadeOutScale' : 'animate-fadeInScale'
		} ${!imageLoaded ? 'opacity-0' : 'opacity-100'}`}
		style={{
			backgroundImage: "url('/free_palestine1.jpg')",
		}}
	>
		<div className='max-w-7xl w-full px-4 sm:px-6 lg:px-8 text-center'>
			<div className=' p-8 rounded-lg '>
				<h1 className='text-[#fff] text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-snug md:leading-tight'>
					<span className='block mb-4'>আমার জমিন নেবোই ফেরত,</span>
					<span className='block mb-4 text-yellow-400'>কায়েম করব দ্বীন।</span>
					<span className='block mb-4'>চোখে আমার ঝরছে</span>
					<span className='block text-yellow-400'>আগুন, বুকে ফিলিস্তিন।</span>
				</h1>

				<p className='mt-8 text-xl md:text-2xl text-white'>
					মুক্তির সংগ্রাম চলবে ...
				</p>
			</div>
		</div>
	</div>
);
};

export default Splash;
