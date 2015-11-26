const React = require('react');
const { Component } = require('react');
const SearchBox = require('../components/SearchBox');
const BackgroundVideo = require('../components/BackgroundVideo');

const { connect } = require('react-redux');
const { bindActionCreators } = require('redux');
const { nextPage, prevPage, search, setAutoplaySupport } = require('../actions');

class App extends Component {
    render() {
        const { prevPage, nextPage, search, setAutoplaySupport } = this.props;
        return (
            <div>
                <BackgroundVideo 
                    videoSource="assets/timelapse.mp4"
                    videoType="video/mp4"
                    posterSource="assets/poster.png"
                />
                <SearchBox
                    searchQuery={this.props.searchQuery}
                    secondSubReducer={this.props.secondSubReducer}
                    autoplaySupport={this.props.autoplaySupport}
                    onPrevClick={() => prevPage(1)}
                    onNextClick={() => nextPage(1)} 
                    onSearch={(query) => search(query)}
                    onAutoplayClick={() => {
                        if (this.props.autoplaySupport) {
                            setAutoplaySupport(false)
                        } else {
                            setAutoplaySupport(true)
                        }
                    }}
                />
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        nextPage: bindActionCreators(nextPage, dispatch),
        prevPage: bindActionCreators(prevPage, dispatch),
        search: bindActionCreators(search, dispatch),
        setAutoplaySupport: bindActionCreators(setAutoplaySupport, dispatch)
    };
}

module.exports = connect(state => state, mapDispatchToProps)(App);
