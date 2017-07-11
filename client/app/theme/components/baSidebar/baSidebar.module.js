'use strict';

import angular from 'angular';
import baSidebar from './baSidebar.directive';
import baSidebarServiceProvider from './baSidebar.service';
import BaSidebarCtrl from './BaSidebarCtrl';
import * as baSidebarHelpers from './baSidebarHelpers.directive';

export default angular.module('BlurAdmin.theme.components.baSidebar', [])
  .directive('baSidebar', baSidebar)
  .provider('baSidebarService', baSidebarServiceProvider)
  .controller('BaSidebarCtrl', BaSidebarCtrl)
  .directive('baSidebarToggleMenu', baSidebarHelpers.baSidebarToggleMenu)
  .directive('baSidebarCollapseMenu', baSidebarHelpers.baSidebarCollapseMenu)
  .directive('baSidebarTogglingItem', baSidebarHelpers.baSidebarTogglingItem)
  .controller('BaSidebarTogglingItemCtrl', baSidebarHelpers.BaSidebarTogglingItemCtrl)
  .directive('baUiSrefTogglingSubmenu', baSidebarHelpers.baUiSrefTogglingSubmenu)
  .directive('baUiSrefToggler', baSidebarHelpers.baUiSrefToggler)
  .name;
