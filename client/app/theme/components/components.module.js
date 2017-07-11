'use strict';

import angular from 'angular';
import toastr from 'angular-toastr';
import toastrLibConfig from './toastrLibConfig';
import backTop from './backTop/backTop.directive';
import baPanel from './baPanel/baPanel.module';
import baSidebar from './baSidebar/baSidebar.module';
import baWizard from './baWizard/baWizard.module';
import contentTop from './contentTop/contentTop.directive';
import msgCenter from './msgCenter/msgCenter.module';
import pageTop from './pageTop/pageTop.directive';
import progressBarRound from './progressBarRound/progressBarRound.directive';
import widgets from './widgets/widgets.directive';

export default angular.module('BlurAdmin.theme.components', [
  toastr,
  backTop,
  baPanel,
  baSidebar,
  baWizard,
  contentTop,
  msgCenter,
  pageTop,
  progressBarRound,
  widgets
])
  .config(toastrLibConfig)
  .name;
