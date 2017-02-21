var React = require('react');

import Header from './Header';

var App = React.createClass({

  render: function () {
    return (
      <div>
        <Header />
        <section className="content">
          {this.props.children}
        </section>
      </div>
    )
  }
});

module.exports = App;