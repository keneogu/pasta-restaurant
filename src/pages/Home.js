import { Link } from '@material-ui/core'
import React from 'react'

function Home() {
	return (
		<div className='home'>
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
