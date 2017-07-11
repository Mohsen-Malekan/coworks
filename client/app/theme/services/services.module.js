'use strict';

import angular from 'angular';
import baProgressModal from './baProgressModal';
import baUtil from './baUtil';
import fileReader from './fileReader';
import preloader from './preloader';
import stopableInterval from './stopableInterval';

export default angular.module('BlurAdmin.theme.services', [])
  .factory('baProgressModal', baProgressModal)
  .service('baUtil', baUtil)
  .service('fileReader', fileReader)
  .service('preloader', preloader)
  .service('stopableInterval', stopableInterval)
  .name;
