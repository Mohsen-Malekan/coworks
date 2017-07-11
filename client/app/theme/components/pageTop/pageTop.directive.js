'use strict';

export default angular.module('BlurAdmin.theme.components.pageTop', [])
  .directive('pageTop', pageTop)
  .name;

/** @ngInject */
function pageTop() {
  return {
    restrict: 'E',
    templateUrl: 'app/theme/components/pageTop/pageTop.html'
  };
}
