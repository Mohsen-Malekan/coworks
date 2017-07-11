'use strict';
import angular from 'angular';

/** @ngInject */
export default function msgCenter() {
  return {
    restrict: 'E',
    templateUrl: 'app/theme/components/msgCenter/msgCenter.html',
    controller: 'MsgCenterCtrl'
  };
}
