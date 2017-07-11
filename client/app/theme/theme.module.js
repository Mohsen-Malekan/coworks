'use strict';
import angular from 'angular';
import components from './components/components.module';
import inputs from './inputs/inputs.module';
import configProvider from './theme.configProvider';
import config from './theme.config';
import constants from './theme.constants';
import themeLayoutSettings from './theme.service';
import themeRun from './theme.run';
import services from './services/services.module';
import filters from './filters/index.module';

export default angular.module('BlurAdmin.theme', [
  components,
  inputs,
  constants,
  services,
  filters
  // 'BlurAdmin.theme.components',
  // 'BlurAdmin.theme.inputs'
])
  .provider('baConfig', configProvider)
  .config(config)
  .service('themeLayoutSettings', themeLayoutSettings)
  .run(themeRun)
  .name;
