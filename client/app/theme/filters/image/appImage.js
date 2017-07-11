'use strict';

/** @ngInject */
export default  function appImage(layoutPaths) {
  'ngInject';
  return function(input) {
    return layoutPaths.images.root + input;
  };
}
