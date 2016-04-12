const React = require('react');
const radium = require('radium');

const styles = {
  fullscreenBackgroundVideo: {
    '@media (min-aspect-ratio:16/9)': {
      height: '300%',
      top: '-100%',
    },
    '@media (max-aspect-ratio:16/9)': {
      width: '300%',
      left: '-100%',
    },

    '@media (max-width:767px)': {
      display: 'none',
    },
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  fullscreenBackground: {
    '@media (max-width: 767px)': {
      background: 'url("assets/background.jpg") center center / cover no-repeat',
    },
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    overflow: 'hidden',
    zIndex: -100,
  },
};

function disableClick(event) {
  event.preventDefault();
  return false;
}

function BackgroundVideo(props) {
  return (
    <div style={styles.fullscreenBackground}>
      <video
        onContextMenu={disableClick}
        loop muted autoPlay
        poster={props.posterSource}
        style={ styles.fullscreenBackgroundVideo}
      >
        <source src={props.videoSource} type={props.videoType} />
      </video>
    </div>
  );
}

//BackgroundVideo.propTypes = {
//  posterSource: React.propTypes.String.isRequired,
//  videoSource: React.propTypes.String.isRequired,
//  videoType: React.propTypes.String.isRequired,
//};

module.exports = radium(BackgroundVideo);
