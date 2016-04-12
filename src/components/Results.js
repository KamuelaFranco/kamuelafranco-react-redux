const React = require('react');
const { Component } = require('react');

const styles = {
  margin: '0 auto',
  textAlign: 'center',
  border: '3px',
  backgroundColor: 'rgba(255,255,255,0.4)',
  width: '200px',
  padding: '10px',
  borderRadius: '3px',
  boxShadow: '0px 0px 3px 0px rgba(0,0,0,0.25)',
  marginTop: '5px',
  display: 'block',
};

class Results extends Component {
  render() {
    const titles = this.props.results.map(result => result.title);
    if (titles.length === 0) {
      styles.display = 'none';
    } else {
      styles.display = 'block';
    }
    return (
      <div style={ styles }>
      { titles.map(title => title) }
      </div>
		);
  }
}

Results.propTypes = {
  results: React.PropTypes.array,
};

module.exports = Results;
