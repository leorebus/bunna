var React = require('react');

import {Link} from 'react-router';
import ArticlesList from './ArticlesList';

var Home = React.createClass({

  ARTICLE_LIST_LIMIT: 3,

  render: function () {
    return (
      <div className="home">
        <div className="home__doormat"></div>
        <div className="l-row">
        <div className="column l-row__col">
          <Link to="/news" className="title">Ultime notizie</Link>
          <ArticlesList limit={this.ARTICLE_LIST_LIMIT} />
        </div>
          <div className="column l-row__col">
            <Link to="/progetto" className="title">Chi siamo</Link>
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
