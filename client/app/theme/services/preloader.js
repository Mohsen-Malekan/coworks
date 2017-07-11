'use strict';

/** @ngInject */
export default function preloader($q) {
  'ngInject';
  return {
    loadImg: function(src) {
      var d = $q.defer();
      var img = new Image();
      img.src = src;
      img.onload = function() {
        d.resolve();
      };
      return d.promise;
    }
  }
}
