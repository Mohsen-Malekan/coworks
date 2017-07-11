'use strict';

import angular from 'angular';
import './lib/jquery.backTop.min';

export default angular.module('BlurAdmin.theme.components.backTop', [])
  .directive('backTop', backTop)
  .name;

/** @ngInject */
function backTop() {
  return {
    restrict: 'E',
    templateUrl: 'app/theme/components/backTop/backTop.html',
    controller: function() {
      $('#backTop').backTop({
        'position': 200,
        'speed': 100
      });
    }
  };
}
