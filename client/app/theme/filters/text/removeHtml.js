'use strict';

/** @ngInject */
export default function plainText() {
  'ngInject';
  return function(text) {
    return text ? String(text).replace(/<[^>]+>/gm, '') : '';
  };
}
