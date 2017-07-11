'use strict';
import angular from 'angular';

export default angular.module('BlurAdmin.theme.components.contentTop', [])
  .directive('contentTop', contentTop)
  .name;

/** @ngInject */
function contentTop($location, $state) {
  'ngInject';
  return {
    restrict: 'E',
    templateUrl: 'app/theme/components/contentTop/contentTop.html',
    link: function($scope) {
      $scope.$watch(function() {
        $scope.activePageTitle = $state.current.title;
      });
    }
  };
}
