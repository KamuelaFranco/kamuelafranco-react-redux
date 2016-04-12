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
    const { results, search } = this.props;
    return (
      <div>
        <BackgroundVideo
          videoSource="assets/timelapse.mp4"
          videoType="video/mp4"
          posterSource="assets/poster.png"
        />
        <SearchBox
          onSearch={search}
          results={results}
        />
        <Results results={results} />

      </div>
    );
  }
}

App.propTypes = {
  results: React.PropTypes.array.isRequired,
  searchFor: React.PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    results: state.results,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    search: bindActionCreators(search, dispatch),
  };
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(App);
