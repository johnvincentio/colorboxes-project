//

import React from 'react';
import PropTypes from 'prop-types';

import Box from './Box';

class Board extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			boxes: this.generateBoxes()
		};
	}

	generateBoxes = () => {
		return  [ ...Array(this.props.boxes).keys() ]
			.map(() => this.generateColor());
	}

	generateColor = () => {
		return [this.generateRandom(), this.generateRandom(), this.generateRandom()];
	}

	generateRandom = () => {
		return Math.floor(Math.random() * 256) - 1;
	}

	changeColor = (id) => {
		console.log('changeColor; id ', id);
	}

	render() {
		console.log('Board::render(); this.state ', this.state, ' this.props ', this.props);

		return (
			<div className="board">
				<Box id={1} color="red" changeColor={this.changeColor} />
			</div>
		);
	}
}

Board.propTypes = {
	boxes: PropTypes.number
}

Board.defaultProps = {
	boxes: 16
}

export default Board;
