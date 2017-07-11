'use strict';

/** @ngInject */
export default   function profilePicture(layoutPaths) {
  'ngInject';
  return function(input, ext) {
    ext = ext || 'png';
    return layoutPaths.images.profile + input + '.' + ext;
  };
}
