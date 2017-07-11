'use strict';

import angular from 'angular';
import baPanelDirective from './baPanel.directive';
import baPanelService from './baPanel.service';
import baPanelBlur from './baPanelBlur.directive';
import baPanelBlurHelper from './baPanelBlurHelper.service';
import baPanelSelf from './baPanelSelf.directive';

export default angular.module('BlurAdmin.theme.components.baPanel', [])
  .directive('baPanel', baPanelDirective)
  .factory('baPanel', baPanelService)
  .directive('baPanelBlur', baPanelBlur)
  .service('baPanelBlurHelper', baPanelBlurHelper)
  .directive('baPanelSelf', baPanelSelf)
  .name;
