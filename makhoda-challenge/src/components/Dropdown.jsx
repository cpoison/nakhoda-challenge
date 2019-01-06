import React, { Component } from "react";
import "./Dropdown.css";

class Dropdown extends Component {
	state = {
		list: this.props.list || [],
		showItems: false,
		selectedItem: this.props.list && this.props.list[0]
	};

	handleShow = () => {
		this.setState({ showItems: true });
		document.addEventListener("click", this.handleHide);
	};

	handleHide = () => {
		this.setState({ showItems: false });
		document.removeEventListener("click", this.handleHide);
	};

	handleSelectItem = item => {
		this.setState({
			selectedItem: item,
			showItems: false
		});
	};

	render() {
		let nonSelected = this.state.list.filter(
			item => item !== this.state.selectedItem
		);

		return (
			<div
				className={
					"dropdown-container" +
					(this.state.showItems ? " dropdown-container--opened" : "")
				}
			>
				<div className={"dropdown-display"} onClick={this.handleShow}>
					<span>{this.state.selectedItem.text}</span>
					<i
						className={
							"fa" + (this.state.showItems ? " fa-angle-up" : " fa-angle-down")
						}
					/>
				</div>
				<div
					className="dropdown-list"
					style={{ display: this.state.showItems ? "block" : "none" }}
				>
					{nonSelected.map(item => (
						<span
							className="dropdown-list__item"
							key={item.id}
							onClick={() => this.handleSelectItem(item)}
						>
							{item.text}
						</span>
					))}
				</div>
			</div>
		);
	}
}

export default Dropdown;
