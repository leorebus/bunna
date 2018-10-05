var React = require('react');

import {Link} from 'react-router';
import ArticlesList from './ArticlesList';

var Home = React.createClass({

  ARTICLE_LIST_LIMIT: 5,
  DIARIES_LIST_LIMIT: 3,

  render: function () {
    return (
      <div className="home">
        <div className="home__doormat"></div>
        <div className="home__row">
          <div className="home__col">
            <Link to="/news" className="title">Ultime notizie</Link>
            <ArticlesList limit={this.ARTICLE_LIST_LIMIT} />
          </div>

          <div className="home__col">
            <Link to="/progetto" className="title">Chi siamo</Link>
            <div>
              <p>
                Il progetto ‘No early marriage – no al matrimonio precoce’ nasce nel gennaio 2011 per opera di un gruppo di amici, con lo scopo di sostenere all'istruzione secondaria le ragazze di Maymekden - un villaggio non lontano dalla città di Macallè, nel nord dell’Etiopia - ed evitare loro la barbarie del matrimonio precoce...
              </p>
            <Link to="/progetto">Continua a leggere</Link>
            <Link className="title title--calltoaction" to="/video">Guarda il video girato a Maymekden</Link>
            </div>
          </div>

          <div className="home__col">
            <Link to="/diario" className="title">Diari di viaggio</Link>
            <div>
            <ArticlesList type="diario" dateShort={true} limit={this.DIARIES_LIST_LIMIT} />
            </div>
          </div>

          <div className="home__col">
            <Link to="/contatti" className="title">Contatta e sostieni</Link>
            <div>
              <p>
                L'associazione si regge sulle quote associative e soprattutto sui contributi volontari.
              </p>
            <Link to="/contatti">Qui</Link> troverai tutte le informazioni su come contattare l'associazione e contribuire.
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Home;
