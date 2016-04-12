const React = require('react');
const { Component } = require('react');
const search = require('../lib/search');

const styles = {
  heading: {
    textAlign: 'center',
    color: 'white',
    textShadow: '0px 2px 5px gray',
    fontSize: '4em',
  },
  searchBox: {
    margin: '0 auto',
    textAlign: 'center',
    border: '3px',
    backgroundColor: 'rgba(255,255,255,0.4)',
    width: '280px',
    padding: '10px',
    borderRadius: '3px',
    boxShadow: '0px 0px 3px 0px rgba(0,0,0,0.25)',
  },
  input: {
    border: '5px solid white',
    padding: '-5px',
    width: '90%',
  },
};

class SearchBox extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onSearch(this.refs.searchInput.value);
    search();
    if (e.which === 13) {
      if (this.props.results.length > 0) {
        window.open(this.props.results[0].url);
      } else {
        this.blinkSearchBox(6, 'red', 100);
      }
      this.refs.searchInput.value = '';
      search();
    }
  }

  blinkSearchBox(numberOfTimes, outlineColor, timeoutMsec) {
    const style = this.refs.searchInput.style;
    const oldBorderColor = style.borderColor;

    function toggleBorderColor(color) {
      if (style.borderColor === oldBorderColor) {
        style.borderColor = color;
      } else {
        style.borderColor = oldBorderColor;
      }
    }

    let number = numberOfTimes;
    const interval = setInterval(() => {
      toggleBorderColor(outlineColor);
      number--;
      if (number === 0) {
        clearInterval(interval);
      }
    }, timeoutMsec);
  }

  render() {
    return (
      <div>
        <h1 style={styles.heading}>Kamuela Franco</h1>
        <div style={styles.searchBox}>
          <input style={styles.input}
            ref="searchInput"
            type="textbox"
            onChange={this.handleChange}
            onKeyPress={this.handleChange}
            placeholder="LinkedIn, Email, GitHub, Twitter, Blog"
          />
        </div>
      </div>
    );
  }
}

SearchBox.propTypes = {
  onSearch: React.propTypes.func,
  results: React.propTypes.array,
};

module.exports = SearchBox;

