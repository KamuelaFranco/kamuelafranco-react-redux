const React = require('react');
const { Component } = require('react');
const { bindActionCreators, connect } = require('react-redux');

const styles = {
	heading: {
		textAlign: 'center',
		color: 'white',
		textShadow: '0px 5px 10px black',
		fontSize: '5em'
	},
	searchBox: {
		margin: '0 auto',
		textAlign: 'center',
		border: '3px',
		backgroundColor: 'rgba(255,255,255,0.4)',
		width: '200px',
		padding: '10px',
		borderRadius: '3px'
	}
};

class SearchBox extends Component {
	handleChange(e) {
		this.props.onSearch(this.refs.searchInput.value);
		if (e.which === 13) {
			this.refs.searchInput.value = '';
		}
	}
	render () {
		const { onPrevClick, onNextClick, onAutoplayClick } = this.props;
		return (
			<div>
				<h1 style={styles.heading}>Kamuela Franco</h1>
				<div style={styles.searchBox}>
					<input
						ref='searchInput'
						type='textbox'
						onChange={this.handleChange.bind(this)}
						onKeyPress={this.handleChange.bind(this)}
					/>
					<p>Search Query: {this.props.searchQuery}</p>
					<p>Page #{this.props.secondSubReducer}</p>
					<p>Autoplay support:{String(this.props.autoplaySupport)}</p>
					<button onClick={onPrevClick}>Back</button>
					<button onClick={onNextClick}>Forward</button>
					<button onClick={onAutoplayClick}>Autoplay Toggle</button>
				</div>
			</div>
		);
	}
}

module.exports = SearchBox;