import { Link } from 'react-router-dom';
import React from 'react';
import BackImage from '../assets/vermi.png';
import '../styles/Home.css';

function Home() {
	return (
		<div className='home' style={{ backgroundImage: `url(${BackImage})` }}>
		  <div className='headerContainer'>
			<h1> Xenx Pasta</h1>
			<p> PASTA TO FIT ANY TASTE</p>
			<Link to='/menu'>
			  <button> ORDER NOW</button>
			</Link>
		  </div>
		</div>
	)
}

export default Home
