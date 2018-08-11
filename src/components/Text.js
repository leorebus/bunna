var React = require('react');

var Text = React.createClass({

  propTypes: {
    text: React.PropTypes.string
  },

  renderText: function () {
    if (!this.props.text) return <p className="loading-dots">Caricamento</p>;
    var paragraphs = this.props.text.split('\n').filter(String);
    return paragraphs.map(function(p, key){
      return <p key={key} className="text__p">{p}</p>;
    });
  },

  render: function () {
    return (
      <article className="text">
        {this.renderText()}
      </article>
    )
  }
});

module.exports = Text;
