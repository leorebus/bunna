var React = require('react');

import {getClient} from '../services/contentfulClient';
import Text from './Text';
import FormattedDate from './FormattedDate';
import Gallery from './Gallery';


var Article = React.createClass({
  getInitialState: function () {
    return {
      text: undefined,
      date: undefined,
      title: undefined,
      pictures: undefined
    };
  },

  formatPictures: function (pictures) {
    if (!pictures) return false;
    return pictures.map(function (p) {
      return p.sys.id;
    });
  },

  componentWillMount: function () {
    getClient().getEntry(this.props.params.articleId)
    .then(entry => {
      this.setState({
        text: entry.fields.content,
        title: entry.fields.title,
        date: entry.fields.date,
        pictures: this.formatPictures(entry.fields.pictures)
      });
    });
  },

  render: function () {
    return (
      <div>
        <div className="text__header">
          <h2 className="title">{this.state.title}</h2>
          {this.state.date &&
            <div>Pubblicato il: <FormattedDate date={this.state.date} /></div>
          }
        </div>
        {this.state.pictures &&
          <Gallery filter={this.state.pictures} />
        }
        <Text text={this.state.text} />
      </div>
    )
  }
});

module.exports = Article;
