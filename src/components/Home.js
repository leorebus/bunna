var React = require('react');

import {Link} from 'react-router';
import ArticlesList from './ArticlesList';

var Home = React.createClass({

  render: function () {
    return (
      <div className="">
        <div className="doormat hidden-mb"></div>
        <div className="l-row">
        <div className="column l-row__col">
          <h2 className="column__title">Ultime notizie</h2>
          <ArticlesList />
          <Link to="/news">Leggi tutti i report</Link>
        </div>
          <div className="column l-row__col">
            <h2 className="column__title">Chi siamo</h2>
            <div>
              Il progetto ‘No early marriage – no al matrimonio precoce’ nasce con lo scopo di sostenere all’istruzione secondaria le ragazze di Maymekden ed evitare loro la barbarie del matrimonio precoce...&nbsp;
              <Link to="/project.html">Continua a leggere</Link>
            </div>
          </div>

        </div>
      </div>
    )
  }
});

module.exports = Home;
