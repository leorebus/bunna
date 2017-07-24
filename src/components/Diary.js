var React = require('react');

import {getClient} from '../services/contentfulClient';
import MDReactComponent from 'react-markdown-js';

var Diary = React.createClass({
  getInitialState: function () {
    return {
      text: undefined,
      title: undefined
    };
  },

  componentWillMount: function () {
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
            {this.state.text &&
              <MDReactComponent text={this.state.text} />
            }
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Diary;
