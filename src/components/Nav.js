import React from 'react';

class Nav extends React.Component{
  render() {
		return(
			<div>
				<ul> 
					<li>
						<a className = "nav-link" href = "#home">
							Home</a></li>
					<li>
						<a className = "nav-link" href = "#about">
							About</a></li>
					<li>
						<a className = "nav-link" href = "#projects"> 				Projects</a></li>
					<li>
						<a className = "nav-link" href ="#contact">
						Contact</a></li>
				</ul>

			</div>
					)
	}
}

export default Nav;