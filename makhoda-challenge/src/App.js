import React, { Component } from "react";
import ButtonIconsList from "./components/ButtonIconsList";
import Dropdown from "./components/Dropdown";
import "./reset.css";
import "./App.css";

/* <i class="fas fa-trash"></i> */
/* <i class="fas fa-toggle-on"></i> */
/* <i class="fas fa-envelope"></i> */

const buttonsList1 = [{ label: "Beatae Vita", icon: "-chevron-circle-down" }];
const buttonsList2 = [
	{ label: "Archieto", icon: "-trash" },
	{ label: "Aperiam", icon: "-toggle-on" },
	{ label: "Totam", icon: "-toggle-off" },
	{ label: "Rem", icon: "-envelope" }
];

const dropdownList = [
	{
		id: 1,
		text: "Accusantium doloremque laudant",
		selected: true
	},
	{
		id: 2,
		text: "Architecto beatae vitae",
		selected: false
	},
	{
		id: 3,
		text: "Architecto beatae vitae",
		selected: false
	},
	{
		id: 4,
		text: "Architecto beatae vitae",
		selected: false
	},
	{
		id: 5,
		text: "Architecto beatae vitae",
		selected: false
	},
	{
		id: 6,
		text: "Architecto beatae vitae",
		selected: false
	},
	{
		id: 7,
		text: "Architecto beatae vitae",
		selected: false
	},
	{
		id: 8,
		text: "Architecto beatae vitae",
		selected: false
	}
];

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
								<i className="fas fa-chevron-down" />
							</button>
							<button type="button" className="user-login">
								Z
							</button>
						</div>
					</div>
					<div className="bottom-header shadow">
						<span className="bottom-header__title">Sunt</span>
						<ButtonIconsList list={buttonsList1} align="left" />
						<p className="bottom-header__paragraph">
							Doloremque laudantium otam Doloremque laudantium otam
						</p>
						<ButtonIconsList list={buttonsList2} align="right" />
					</div>
				</header>
				<main className="main-container">
					<h1 className="main-container__title">
						<i className="fas fa-check" />
						CSed ut perspiciatis unde
					</h1>
					<p className="main-container__intro">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
						ducimus explicabo quod ullam quam autem nam rem obcaecati nihil
						omnis maiores, totam numquam aut veritatis soluta fugiat harum neque
						dolores.
					</p>

					<Dropdown list={dropdownList} />
				</main>
			</div>
		);
	}
}

export default App;
