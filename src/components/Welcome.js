import React from 'react';
import myPic from '../myPic.jpg';

class Welcome extends React.Component {
	render() {
		return(
			<div> 
				<h1>Welcome</h1>
				<img src = {myPic} alt = "my happy pic" /> 
				<h3>Ruben Corrales</h3>
				<p>Web Developer</p>
				<ul>
					<li>
						<a className = "icons" ref = "freecodecamp.com">
						</a>FreeCodeCamp</li>
					<li>
						<a className = "icons" ref = "github.com">
						</a>GitHub</li>
					<li>
						<a className = "icons" ref = "linkedin.com">
						</a>LinkedIn</li>
					
				</ul>
				
			</div>
)
	}
}

export default Welcome;