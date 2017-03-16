var React = require('react');

import Header from './Header';

var App = React.createClass({

  render: function () {
    return (
      <div className="">
        <Header />
        <section>
          {this.props.children}
        </section>
      </div>
    )
  }
});

module.exports = App;
