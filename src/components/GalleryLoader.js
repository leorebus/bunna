'use strict';

export default () => {
    return new Promise(resolve => {
        require.ensure([], () => {
            resolve({
                gallery: require('react-image-gallery').default
            });
        });
    });
};
