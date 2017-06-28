var React = require('react');

import {getClient} from '../services/contentfulClient';
import GalleryLoader from '../services/GalleryLoader';

var Gallery = React.createClass({

  getInitialState: function () {
    return {
      is_gallery_loaded: false,
      is_assets_loaded: false
    };
  },

  isGalleryReady: function () {
    return this.state.is_gallery_loaded && this.state.is_assets_loaded;
  },

  mapAssets: function (assets) {
    var assetsItems = assets.items;

    if (this.props.filter) {
      assetsItems = assetsItems.filter(function(item) {
        return this.props.filter.indexOf(item.sys.id) > -1;
      }.bind(this));
    }

    return assetsItems.map(function(o) {
      return {
        original:  o.fields.file.url + '?h=500',
        thumbnail: o.fields.file.url + '?w=100&h=75&fit=fill',
        description: o.fields.description
      };
    }.bind(this));
  },

  componentWillMount: function () {
    GalleryLoader().then(({ gallery }) => {
      this.ImageGallery = gallery;
      this.setState({ is_gallery_loaded: true });
    });
    getClient().getAssets()
      .then(assets => {
        this.setState({
          assets: this.mapAssets(assets),
          is_assets_loaded: true
        });
      });
  },

  render: function () {
    return (
      <div className='gallery'>
        {!this.isGalleryReady() &&
          <p>Caricamento immagini...</p>}
        {this.isGalleryReady() &&
          <this.ImageGallery
            items={this.state.assets}
            slideInterval={2000}
            lazyLoad={true}
            showFullscreenButton={false}
            showPlayButton={false}
            showThumbnails={this.state.assets.length > 1}
          />
        }
      </div>
    )
  }
});

module.exports = Gallery;
