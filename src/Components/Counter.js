import React from "react";

export default class Counter extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0
		};
	}

	//set the state of count to count + 1
	handleAddButton = () => {
		this.setState({
			count: this.state.count + 1
		});
	};

	handleResetButton = () => {
		this.setState({
			count: 0
		})
	}

	render() {
		return (
			<div>
				<div>
					count: {this.state.count}
				</div >
				<button onClick={this.handleAddButton}> Increment</button>
				<button onClick={this.handleResetButton}> reset counter </button>
			</div>
		);
	}
}