const React = require('react');
const { Component } = require('react');

const { connect } = require('react-redux');
const { bindActionCreators } = require('redux');
const { search } = require('../actions');

const SearchBox = require('../components/SearchBox');
const Results = require('../components/Results');
const BackgroundVideo = require('../components/BackgroundVideo');

class App extends Component {
  render() {
    const { results, searchFor } = this.props;
    return (
      <div>
        <BackgroundVideo
          videoSource="assets/timelapse.mp4"
          videoType="video/mp4"
          posterSource="assets/poster.png"
        />
        <SearchBox
          onSearch={searchFor}
          results={results}
        />
        <Results results={results} />

      </div>
    );
  }
}

App.propTypes = {
  results: React.PropTypes.array,
  searchFor: React.PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    searchFor: bindActionCreators(search, dispatch),
  };
}

function mapStateToProps(state) {
  return {
    results: state.results,
  };
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(App);
