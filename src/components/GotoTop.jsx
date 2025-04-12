import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const GotoTop = () => {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.scrollY > 300) setVisible(true);
			else setVisible(false);
		};

		window.addEventListener('scroll', toggleVisibility);
		return () => window.removeEventListener('scroll', toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<button
			onClick={scrollToTop}
			className={`fixed bottom-6 right-6 p-3 rounded-full text-white bg-blue-600 shadow-lg transition-all duration-300 z-40 cursor-pointer ${
				visible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
			} hover:animate-pulse hover:bg-blue-700 hover:scale-110 hover:shadow-xl`}
		>
			<FaArrowUp size={20} />
		</button>
	);
};

export default GotoTop;
