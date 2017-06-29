var React = require('react');

import Header from './Header';

var App = React.createClass({

  render: function () {
    return (
      <div>
        <Header />
        <section className="l-main">
          {this.props.children}
        </section>
      </div>
    )
  }
});

module.exports = App;
