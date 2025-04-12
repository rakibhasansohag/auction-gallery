import { useEffect, useState } from 'react';

const CookieConsent = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [isClosing, setIsClosing] = useState(false);

	useEffect(() => {
		const splashCompleted = localStorage.getItem('splashCompleted') === 'true';
		const consent = localStorage.getItem('cookieConsent');

		if (consent === 'declined') {
			const timer = setTimeout(() => {
				localStorage.removeItem('cookieConsent');
				setIsVisible(true);
			}, 1500);
			return () => clearTimeout(timer);
		}

		if (splashCompleted && !consent) {
			const timer = setTimeout(() => {
				setIsVisible(true);
			}, 1000);
			return () => clearTimeout(timer);
		}
	}, []);

	const handleConsent = (accepted) => {
		localStorage.setItem('cookieConsent', accepted ? 'accepted' : 'declined');
		setIsClosing(true);

		setTimeout(() => {
			setIsVisible(false);
			setIsClosing(false);
		}, 500);
	};

	if (!isVisible) return null;

	return (
		<div
			className={`fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 md:p-6 max-w-4xl mx-auto rounded-t-lg border-t-4 border-primary
				${isClosing ? 'animate-slide-down' : 'animate-slide-up'} z-[1000]
			`}
		>
			<div className='flex flex-col md:flex-row items-center justify-between gap-4'>
				<div className='flex-1 text-gray-700'>
					<p className='text-sm md:text-base'>
						We use localStorage to enhance your experience. By continuing to
						visit this site, you agree to our use of cookies.
					</p>
				</div>
				<div className='flex items-center gap-3'>
					<button
						onClick={() => handleConsent(false)}
						className='px-4 py-2 text-sm font-medium text-gray-700 cursor-pointer hover:bg-gray-100 rounded-lg transition-colors'
					>
						Decline
					</button>
					<button
						onClick={() => handleConsent(true)}
						className='px-4 py-2 text-sm font-medium text-white bg-primary cursor-pointer hover:bg-blue-700 rounded-lg transition-colors '
					>
						Accept
					</button>
				</div>
			</div>
		</div>
	);
};

export default CookieConsent;
