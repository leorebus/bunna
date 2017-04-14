'use strict';

export default () => {
  return new Promise(resolve => {
    require.ensure([], () => {
      require('../../node_modules/react-image-gallery/styles/css/image-gallery.css');
      resolve({
          gallery: require('react-image-gallery').default
      });
    });
  });
};
