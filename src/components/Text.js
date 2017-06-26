var React = require('react');

var Text = React.createClass({

  propTypes: {
    text: React.PropTypes.string
  },

  renderText: function () {
    if (!this.props.text) return <p>Caricamento...</p>;
    var paragraphs = this.props.text.split('\n').filter(String);
    return paragraphs.map(function(p, key){
      return <p className="article__p">{p}</p>;
    });
  },

  render: function () {
    return (
      <article className="article">
        {this.renderText()}
      </article>
    )
  }
});

module.exports = Text;
