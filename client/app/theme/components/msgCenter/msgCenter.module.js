'use strict';
import angular from 'angular';
import msgCenter from './msgCenter.directive';
import MsgCenterCtrl from './MsgCenterCtrl';

export default angular.module('BlurAdmin.theme.components.msgCenter', [])
  .directive('msgCenter', msgCenter)
  .controller('MsgCenterCtrl', MsgCenterCtrl)
  .name;
