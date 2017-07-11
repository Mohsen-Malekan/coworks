'use strict';

import angular from 'angular';
import baWizard from './baWizard.directive';
import baWizardCtrl from './baWizardCtrl';
import baWizardStep from './baWizardStep.directive';

export default angular.module('BlurAdmin.theme.components.baWizard', [])
  .directive('baWizard', baWizard)
  .directive('baWizardStep', baWizardStep)
  .controller('baWizardCtrl', baWizardCtrl)
  .name;

