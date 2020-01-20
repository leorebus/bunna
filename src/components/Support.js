var React = require('react');

import EmailLink from './EmailLink';

var Support = React.createClass({

  render: function () {
    return (
      <div>
        <div className="text">
          <h2 className="title title--standalone">Contatta</h2>
          <p className="text__p">
            Dettagli, chiarimenti, documenti, foto ed ogni altro approfondimento sull’iniziativa e sull’associazione
            possono essere richiesti <EmailLink text="al nostro contatto email" />.
          </p>
          <h2 className="title title--standalone">Sostieni</h2>
          <p className="text__p">
            L'associazione si regge sulle quote associative e soprattutto sui contributi volontari.
            È possibile contribuire tramite bonifico o tramite 5 per mille.
          </p>
          <h3 className="title title--subtitle">Bonifico</h3>
          <p className="text__p">I contributi possono essere versati sul conto corrente intestato all’associazione, le cui coordinate bancarie sono:</p>
          <p className="text__p text__p--emph">Intestatario: 'No early marriage-No al matrimonio precoce onlus'</p>
          <p className="text__p text__p--emph">IBAN: IT16F0616038130100000000316 (codice BIC: CRFIIT3F)</p>
          <p className="text__p">
            I contributi tramite bonifico bancario possono essere portati in deduzione, allegando alla dichiarazione dei redditi la copia del bonifico e la ricevuta dell'associazione.
          </p>
          <h3 className="title title--subtitle">5 per mille</h3>
          <p className="text__p">
            È possibile indicare la nostra Onlus come destinataria della quota del 5 per mille. Per farlo, nell'apposito spazio sui modelli di dichiarazione dei redditi (Unico o 730; oppure CUD per chi non ha obbligo di presentare la dichiarazione), occorre firmare nel riquadro 'Sostegno del volontariato e delle altre organizzazioni, ecc.' e sotto a quella firma indicare nell'apposito spazio il
          </p>
          <p className="text__p text__p--emph">Codice Fiscale dell'associazione: 90028910488</p>
        </div>
      </div>
      )
    }
  });

  module.exports = Support;
