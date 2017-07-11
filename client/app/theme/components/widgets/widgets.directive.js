'use strict';

export default  angular.module('BlurAdmin.theme.components.widgets', [])
  .directive('widgets', widgets)
  .name;

/** @ngInject */
function widgets() {
  return {
    restrict: 'EA',
    scope: {
      ngModel: '='
    },
    templateUrl: 'app/theme/components/widgets/widgets.html',
    replace: true
  };
}
