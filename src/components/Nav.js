import React from 'react';

class Nav extends React.Component{
  render() {
		return(
			<div>
				<ul> 
					<li>
						<a className = "nav-link" ref = "#home">
							Home</a></li>
					<li>
						<a className = "nav-link" ref = "#about">
							About</a></li>
					<li>
						<a className = "nav-link" ref = "#projects"> 				Projects</a></li>
					<li>
						<a className = "nav-link" ref ="#contact">
						Contact</a></li>
				</ul>

			</div>
					)
	}
}

export default Nav;