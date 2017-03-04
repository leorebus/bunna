var React = require('react');

import {Link} from 'react-router';
import ArticlesList from './ArticlesList';

var Home = React.createClass({

  render: function () {
    return (
      <div className="l-vl">
        <div className="doormat l-vl__flexel"></div>
        <div className="l-row l-vl__fixel">

          <ArticlesList />

          <div className="column l-row__col">
            <h2 className="column__title">Chi siamo</h2>
            <div>
              Il progetto ‘No early marriage – no al matrimonio precoce’ nasce con lo scopo di sostenere all’istruzione secondaria le ragazze di Maymekden ed evitare loro la barbarie del matrimonio precoce...&nbsp;
              <Link to="/progetto">Continua a leggere</Link>
            </div>
          </div>

        </div>
      </div>
    )
  }
});

module.exports = Home;