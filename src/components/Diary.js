var React = require('react');

import {getClient} from '../services/contentfulClient';
import Loader from '../services/ExternalLoader';

var Diary = React.createClass({
  getInitialState: function () {
    return {
      text: undefined,
      title: undefined,
      isMDLoaded: false
    };
  },

  componentWillMount: function () {
    Loader().then((obj) => {
      this.MDReactComponent = obj.md;
      this.setState({ isMDLoaded: true });
    });

    getClient().getEntry(this.props.params.articleId)
    .then(entry => {
      this.setState({
        text: entry.fields.content,
        title: entry.fields.title
      });
    });
  },

  render: function () {
    return (
      <div>
        <div className="text__header">
          <h2 className="title">{this.state.title}</h2>
        </div>
        <div className="diary">
          <div className="text">
            {(this.state.text && this.state.isMDLoaded) ? (
              <this.MDReactComponent text={this.state.text} />
            ) : (
              <span>Caricamento...</span>
            )}
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Diary;
