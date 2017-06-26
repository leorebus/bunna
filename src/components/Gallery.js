var React = require('react');

import {getClient} from '../services/contentfulClient';
import GalleryLoader from '../services/GalleryLoader';

var Gallery = React.createClass({
  propTypes: {
    // the function that needs to be called for retrieving images
    fn: React.PropTypes.string
  },

  defaultProps: {
    fn: 'getAssets'
  },

  getInitialState: function () {
    return {
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
    var client = getClient();
    client[f]()
      .then(assets => {
        var a = assets.items.map(function(o) {
          return {
            original:  o.fields.file.url + '?h=500',
            thumbnail: o.fields.file.url + '?w=100&h=75&fit=fill'
          };
        });
        this.setState({
          assets: a,
          is_assets_loaded: true
        });
      });
  },

  render: function () {
    return (
      <div>
        {!this.isGalleryReady() &&
          <p>Caricamento immagini...</p>}
        {this.isGalleryReady() &&
          <this.ImageGallery items={this.state.assets} slideInterval={2000} lazyLoad={true} />
        }
      </div>
    )
  }
});

module.exports = Gallery;
