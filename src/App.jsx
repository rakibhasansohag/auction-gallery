import { useState } from 'react';
import './App.css';
import Auctions from './components/Auctions/Auctions';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Splash from './components/Splash';
import GotoTop from './components/GotoTop';
import CookieConsent from './components/CookieConsent';

function App() {
	const [showSplash, setShowSplash] = useState(true);
	const [contentVisible, setContentVisible] = useState(false);
	const [favorites, setFavorites] = useState([]);

	const handleSplashFinish = () => {
		setShowSplash(false);
		localStorage.setItem('splashCompleted', 'true');
		setTimeout(() => setContentVisible(true), 100);
	};

	console.log(favorites);

	return (
		<>
			{showSplash && <Splash onFinish={handleSplashFinish} />}

			<div
				className={`transition-all duration-500 ${
					contentVisible ? 'opacity-100' : 'opacity-0'
				}`}
			>
				<CookieConsent />
				<Navbar favoritesCount={favorites.length} />
				<Banner />
				<Auctions favorites={favorites} setFavorites={setFavorites} />
				<Footer />
				<GotoTop />
			</div>
		</>
	);
}

export default App;
