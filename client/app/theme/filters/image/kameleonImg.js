'use strict';

/** @ngInject */
export default  function kameleonImg(layoutPaths) {
  'ngInject';
  return function(input) {
    return layoutPaths.images.root + 'theme/icon/kameleon/' + input + '.svg';
  };
}
