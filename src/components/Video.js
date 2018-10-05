var React = require('react');

var Video = React.createClass({

  render: function () {
    return (
      <div>
        <div className="text text__fullscreen">
          <h2 className="title title--standalone">Video</h2>
          <p className="text__p">
            Il video girato nell'estate del 2017 al villaggio di Maymekden, in cui sono riportate anche le storie di qualcuna delle nostre ragazze.
          </p>
          <div className="video">
            <iframe className="video__iframe" src="https://www.youtube.com/embed/ntcaV9KtZUQ?rel=0&amp;showinfo=0" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          </div>
        </div>
      </div>
      )
    }
  });

  module.exports = Video;
