var React = require('react');

import {getClient} from '../services/contentfulClient';
import GalleryLoader from './GalleryLoader';

import Text from './Text';

var Project = React.createClass({
  getInitialState: function () {
    return {
      description: {},
      is_gallery_loaded: false,
      is_assets_loaded: false
    };
  },

  isGalleryReady: function () {
    return this.state.is_gallery_loaded && this.state.is_assets_loaded;
  },

  componentWillMount: function () {
    GalleryLoader().then(({ gallery }) => {
      this.ImageGallery = gallery;
      this.setState({ is_gallery_loaded: true });
    });

    getClient().getEntries({
      content_type: 'description'
    })
      .then(description => {
        this.setState({
          description: description.items[0].fields
        });
      });

      getClient().getAssets()
        .then(assets => {
          var a = assets.items.map(function(o) {
            return {
              original: o.fields.file.url + '?h=500',
              thumbnail: o.fields.file.url + '?w=100&h=75&fit=fill'
            };
          });
          debugger;
          this.setState({
            assets: a,
            is_assets_loaded: true
          });
        });
  },

  componentDidUpdate: function (prevProps, prevState) {
  },

  render: function () {
    return (
      <div className="project__description">
        {!this.isGalleryReady() &&
          <p>Caricamento immagini...</p>}
        {this.isGalleryReady() &&
          <this.ImageGallery items={this.state.assets} slideInterval={2000} lazyLoad={true} />
        }
        <Text text={this.state.description.text} />
      </div>
    )
  }
});

module.exports = Project;
