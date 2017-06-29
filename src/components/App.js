var React = require('react');

import Header from './Header';
import Footer from './Footer';

var App = React.createClass({

  render: function () {
    return (
      <div className="l-main">
        <header className="l-main__head">
          <Header />
        </header>

        <section className="l-main__body">
          {this.props.children}
        </section>

        <footer className="l-main__foot">
          <Footer />
        </footer>
      </div>
    )
  }
});

module.exports = App;
