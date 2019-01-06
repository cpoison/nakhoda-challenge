import React, { Component } from "react";
import "./reset.css";
import "./App.css";

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="">
					<div className="top-bar">
						<nav className="menu">
							<ul>
								<li>
									<a href="#">Inste Natus</a>
								</li>
								<li>
									<a href="#">Explicabo</a>
								</li>
								<li>
									<a href="#">Omnis</a>
								</li>
								<li>
									<a href="#">Ipsa quae</a>
								</li>
								<li>
									<a href="#" className="selected">
										Percitiatis Unde
									</a>
								</li>
							</ul>
						</nav>
						<div className="user-options">
							<button type="button" className="user-dropdown">
								<span>Veris Veritatis</span>
								<i class="fas fa-chevron-down" />
							</button>
							<button type="button" className="user-login">
								Z
							</button>
						</div>
					</div>
					<div className="bottom-header">
						<span className="bar-tittle">Sunt</span>
						<div className="button-container">
							<button type="button" className="button-icon">
								<i class="fas fa-chevron-circle-down" />
								<label>Text</label>
							</button>
						</div>
					</div>
				</header>
			</div>
		);
	}
}

export default App;
