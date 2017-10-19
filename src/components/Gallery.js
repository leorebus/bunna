var React = require('react');

import {getClient} from '../services/contentfulClient';
import Loader from '../services/ExternalLoader';

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
    return assets.items.map(function(o) {
      return {
        original:  o.fields.file.url + '?h=500',
        thumbnail: o.fields.file.url + '?w=100&h=75&fit=fill',
        description: o.fields.description
      };
    }.bind(this));
  },

  componentWillMount: function () {
    var queryOptions = {};
    if (this.props.filter) {
      queryOptions = {
        'sys.id[in]' : this.props.filter.join(',')
      };
    }

    Loader().then((obj) => {
      this.ImageGallery = obj.gallery;
      this.setState({ is_gallery_loaded: true });
    });
    getClient().getAssets(queryOptions)
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
                disableSwipe={true}
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
