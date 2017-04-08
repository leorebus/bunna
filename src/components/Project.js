var React = require('react');

import {getClient} from '../services/contentfulClient';
import GalleryLoader from './GalleryLoader';

import Text from './Text';

var Project = React.createClass({
  getInitialState: function () {
    return {
      description: {}
    };
  },

  componentWillMount: function () {
    GalleryLoader().then(({ gallery }) => {
      this.setState({ ImageGallery: gallery, g: true });
    });

    getClient().getEntries({
      content_type: 'description'
    })
      .then(description => {
        this.setState({
          description: description.items[0].fields
        });
      });
  },

  componentDidUpdate: function (prevProps, prevState) {
  },

  render: function () {
    const images = [
     {
       original: 'http://lorempixel.com/1000/600/nature/1/',
       thumbnail: 'http://lorempixel.com/250/150/nature/1/',
     },
     {
       original: 'http://lorempixel.com/1000/600/nature/2/',
       thumbnail: 'http://lorempixel.com/250/150/nature/2/'
     },
     {
       original: 'http://lorempixel.com/1000/600/nature/3/',
       thumbnail: 'http://lorempixel.com/250/150/nature/3/'
     },
     {
       original: 'http://lorempixel.com/1000/600/nature/4/',
       thumbnail: 'http://lorempixel.com/250/150/nature/4/'
     },
     {
       original: 'http://lorempixel.com/1000/600/nature/5/',
       thumbnail: 'http://lorempixel.com/250/150/nature/5/'
     },
     {
       original: 'http://lorempixel.com/1000/600/nature/6/',
       thumbnail: 'http://lorempixel.com/250/150/nature/6/'
     },
     {
       original: 'http://lorempixel.com/1000/600/nature/7/',
       thumbnail: 'http://lorempixel.com/250/150/nature/7/'
     },
     {
       original: 'http://lorempixel.com/1000/600/nature/8/',
       thumbnail: 'http://lorempixel.com/250/150/nature/8/'
     }
   ];

    return (
      <div className="project__description">
        {!('g' in this.state) && <p>Caricamento immagini...</p>}
        {'g' in this.state &&
          <this.state.ImageGallery items={images} slideInterval={2000} lazyLoad={true} />
        }
        <Text text={this.state.description.text} />
      </div>
    )
  }
});

module.exports = Project;
